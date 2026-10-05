import { privacyPolicy, seo } from '../data/content'
import LegalPage from '../components/LegalPage'

export default function PrivacyPolicy() {
  return <LegalPage seo={seo.privacy} {...privacyPolicy} />
}
