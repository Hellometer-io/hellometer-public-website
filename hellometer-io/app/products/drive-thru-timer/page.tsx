import { products } from '../product-data'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata = {
  title: 'Drive-Thru Timer - Hellometer',
  description: 'Optimize your drive-thru operations with real-time vehicle tracking and performance analytics.',
}

export default function DriveThruTimerPage() {
  return <ProductPageTemplate data={products['drive-thru-timer']} />
}
