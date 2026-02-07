import { products } from '../product-data'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata = {
  title: 'Loss Prevention - Hellometer',
  description: 'HD video monitoring with advanced analytics to identify issues quickly and reduce losses across all locations.',
}

export default function LossPreventionPage() {
  return <ProductPageTemplate data={products['loss-prevention']} />
}
