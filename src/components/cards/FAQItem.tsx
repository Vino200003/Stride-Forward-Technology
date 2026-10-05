import { useId } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn'

type Props = { question: string; answer: string; open: boolean; onToggle: () => void }

/** One accessible accordion row (button + collapsible answer). */
export default function FAQItem({ question, answer, open, onToggle }: Props) {
  const id = useId()
  const buttonId = `${id}-button`
  const panelId = `${id}-panel`

  return (
    <div
      className={cn(
        'rounded-2xl border bg-surface transition-colors duration-300',
        open ? 'border-accent/60 shadow-soft' : 'border-border',
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left text-base font-semibold text-fg sm:text-lg"
        >
          {question}
          <span
            className={cn(
              'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
              open ? 'rotate-180 bg-primary text-primary-fg' : 'bg-accent-soft text-accent-strong',
            )}
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 leading-relaxed text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
