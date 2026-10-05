import { seo, termsOfService } from '../data/content'
import LegalPage from '../components/LegalPage'

export default function Terms() {
  return <LegalPage seo={seo.terms} {...termsOfService} />
}
