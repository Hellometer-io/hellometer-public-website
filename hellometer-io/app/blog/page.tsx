export const metadata = {
  title: 'Blog - Hellometer',
  description: 'Insights on drive-thru optimization, QSR operations, and AI-powered restaurant technology.',
}

import { getBlogPosts } from '@/components/mdx/utils'
import PostItem from '@/components/post-item'

export default function Blog() {
  const allBlogs = getBlogPosts()
  allBlogs.sort((a, b) => (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) ? -1 : 1)

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 h-[28rem]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40 pb-12 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 font-dm-sans text-slate-100 mb-4" data-aos="fade-up">Blog</h1>
              <p className="text-xl text-slate-400" data-aos="fade-up" data-aos-delay="100">
                Insights on drive-thru optimization, QSR operations, and AI-powered restaurant technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {allBlogs.length > 0 ? (
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {allBlogs.map((post) => (
                  <PostItem key={post.slug} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-500 py-12">
                <p className="text-lg">No posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
