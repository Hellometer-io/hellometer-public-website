import { products } from '../product-data'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata = {
  title: 'Lobby Timer',
  description: 'Track door-to-dine service times and monitor guest wait times to ensure exceptional dining experiences.',
}

export default function LobbyTimerPage() {
  return <ProductPageTemplate data={products['lobby-timer']} />
}
