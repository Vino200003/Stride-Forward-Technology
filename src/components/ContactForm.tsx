import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { contactPage, services } from '../data/content'
import { cn } from '../lib/cn'
import { Button } from './ui/Button'

type FormValues = { name: string; email: string; phone: string; service: string; message: string }
type FormErrors = Partial<Record<keyof FormValues, string>>

const OTHER = 'other'
const empty: FormValues = { name: '', email: '', phone: '', service: '', message: '' }
const text = contactPage.form

/** Returns an error message for every invalid field (empty object = valid). */
function validate(v: FormValues): FormErrors {
  const e: FormErrors = {}
  if (!v.name.trim()) e.name = text.errors.nameRequired
  if (!v.email.trim()) e.email = text.errors.emailRequired
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = text.errors.emailInvalid
  if (v.phone.trim() && !/^\+?[\d\s().-]{7,20}$/.test(v.phone.trim())) e.phone = text.errors.phoneInvalid
  if (!v.service) e.service = text.errors.serviceRequired
  if (!v.message.trim()) e.message = text.errors.messageRequired
  else if (v.message.trim().length < 20) e.message = text.errors.messageShort
  return e
}

/**
 * TODO (backend): this currently only simulates sending.
 * Replace the body of this function with a real request, for example:
 *   - Formspree:  fetch('https://formspree.io/f/<your-id>', { method: 'POST', body: JSON.stringify(values), headers: { 'Content-Type': 'application/json', Accept: 'application/json' } })
 *   - EmailJS:    emailjs.send('<service>', '<template>', values, '<public-key>')
 *   - Your API:   fetch('/api/contact', { method: 'POST', ... })
 * Throw an error if the request fails so the form can show an error message.
 */
async function submitContactForm(values: FormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900))
  if (import.meta.env.DEV) console.info('[ContactForm] Simulated submission (no backend yet):', values)
}

const fieldBase =
  'w-full rounded-xl border bg-surface px-4 py-3 text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus-visible:outline-offset-1'

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const [values, setValues] = useState<FormValues>(() => {
    // Pre-select a service when arriving from a "Get a quote for this" link (?service=web-development)
    const preset = searchParams.get('service')
    return { ...empty, service: services.some((s) => s.id === preset) ? (preset as string) : '' }
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  // Move keyboard / screen-reader focus to the success message
  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const next = { ...values, [name]: value }
    setValues(next)
    // Re-validate live once a field has been visited, so errors clear as soon as they're fixed
    if (touched[name as keyof FormValues]) setErrors(validate(next))
  }

  const onBlur = (e: { target: { name: string } }) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(values))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, phone: true, service: true, message: true })

    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    setStatus('sending')
    try {
      await submitContactForm(values)
      setStatus('success')
      setValues(empty)
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const show = (field: keyof FormValues) => (touched[field] ? errors[field] : undefined)

  /** Shared props for each input: id, value, handlers, and ARIA error wiring. */
  const fieldProps = (field: keyof FormValues) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    onChange,
    onBlur,
    'aria-invalid': show(field) ? true : undefined,
    'aria-describedby': show(field) ? `contact-${field}-error` : undefined,
    className: cn(fieldBase, show(field) ? 'border-red-500 dark:border-red-400' : 'border-border'),
  })

  const errorText = (field: keyof FormValues) =>
    show(field) ? (
      <p id={`contact-${field}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
        <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        {show(field)}
      </p>
    ) : null

  const label = (field: keyof FormValues, children: ReactNode) => (
    <label htmlFor={`contact-${field}`} className="mb-1.5 block text-sm font-medium text-fg">
      {children}
    </label>
  )

  const required = (
    <span className="text-red-600 dark:text-red-400" aria-hidden="true">
      {' '}
      *
    </span>
  )

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'success' ? (
        <motion.div
          key="success"
          ref={successRef}
          tabIndex={-1}
          role="status"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center rounded-2xl py-12 text-center outline-none"
        >
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </span>
          <h3 className="mt-6 text-2xl font-bold text-fg">{text.success.title}</h3>
          <p className="mt-2 max-w-sm text-muted">{text.success.body}</p>
          <Button variant="secondary" className="mt-8" onClick={() => setStatus('idle')}>
            {text.success.again}
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          ref={formRef}
          noValidate
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
          aria-describedby="contact-required-note"
        >
          <p id="contact-required-note" className="text-sm text-muted">
            Fields marked with <span className="text-red-600 dark:text-red-400">*</span> are required.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              {label('name', <>{text.name.label}{required}</>)}
              <input type="text" autoComplete="name" placeholder={text.name.placeholder} required {...fieldProps('name')} />
              {errorText('name')}
            </div>
            <div>
              {label('email', <>{text.email.label}{required}</>)}
              <input type="email" autoComplete="email" placeholder={text.email.placeholder} required {...fieldProps('email')} />
              {errorText('email')}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              {label('phone', <>{text.phone.label} <span className="font-normal text-muted">{text.phone.optional}</span></>)}
              <input type="tel" autoComplete="tel" placeholder={text.phone.placeholder} {...fieldProps('phone')} />
              {errorText('phone')}
            </div>
            <div>
              {label('service', <>{text.service.label}{required}</>)}
              <select required {...fieldProps('service')}>
                <option value="" disabled>
                  {text.service.placeholder}
                </option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
                <option value={OTHER}>{text.otherService}</option>
              </select>
              {errorText('service')}
            </div>
          </div>

          <div>
            {label('message', <>{text.message.label}{required}</>)}
            <textarea rows={5} placeholder={text.message.placeholder} required {...fieldProps('message')} />
            {errorText('message')}
          </div>

          {status === 'error' && (
            <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
              Something went wrong while sending your message. Please try again, or email us directly.
            </p>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">{text.privacyNote}</p>
            <Button type="submit" size="lg" disabled={status === 'sending'} className="w-full sm:w-auto">
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  {text.sending}
                </>
              ) : (
                <>
                  {text.submit}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
