import { products } from '../product-data'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata = {
  title: 'Kitchen Monitoring',
  description: 'Monitor food preparation, ensure quality and safety standards, and maintain peak efficiency in your back of house.',
}

export default function KitchenMonitoringPage() {
  return <ProductPageTemplate data={products['kitchen-monitoring']} />
}
