import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/components/mdx/utils'

export default function LatestBlog() {
  const posts = getBlogPosts().sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  )

  const latest = posts[0]
  if (!latest) return null

  const date = new Date(latest.metadata.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section className="bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">From the Blog</h2>
          </div>
          <Link
            href={`/blog/${latest.slug}`}
            className="block max-w-2xl mx-auto bg-slate-900 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors"
          >
            {latest.metadata.image && (
              <div className="relative w-full h-56">
                <Image
                  src={latest.metadata.image}
                  alt={latest.metadata.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-8">
            <p className="text-sm text-slate-400 mb-3">{date}</p>
            <h3 className="text-xl font-semibold text-white mb-3">{latest.metadata.title}</h3>
            {latest.metadata.summary && (
              <p className="text-slate-300 leading-relaxed">{latest.metadata.summary}</p>
            )}
            <span className="inline-block mt-4 text-blue-400 font-medium">Read more →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
