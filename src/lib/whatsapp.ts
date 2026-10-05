import { siteConfig } from '../data/content'

/** WhatsApp "click to chat" link with a pre-filled message. */
export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
