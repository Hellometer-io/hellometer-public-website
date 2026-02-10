import type { Metadata } from 'next'
import { getBlogPosts } from '@/components/mdx/utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import { CustomMDX } from '@/components/mdx/mdx'

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata | undefined> {
  const params = await props.params
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  if (!post) return
  return {
    title: `${post.metadata.title} - Hellometer Blog`,
    description: post.metadata.summary,
  }
}

export default async function SinglePost(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <article>
      {/* Dark hero header */}
      <header className="relative">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 h-[28rem]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40 pb-16 md:pb-20">
            <div className="max-w-3xl mx-auto">
              {/* Back link */}
              <div className="mb-4">
                <Link className="inline-flex items-center font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out group" href="/blog">
                  <span className="tracking-normal group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">&larr;</span> Back to Blog
                </Link>
              </div>
              {/* Title */}
              <h1 className="h2 font-dm-sans text-slate-100 mb-6" data-aos="fade-up">{post.metadata.title}</h1>
              {/* Author meta */}
              <div className="flex items-center" data-aos="fade-up" data-aos-delay="100">
                {post.metadata.authorImg && (
                  <Image className="rounded-full shrink-0 mr-3" src={post.metadata.authorImg} width={32} height={32} alt={post.metadata.author || ''} />
                )}
                <div>
                  <span className="font-medium text-slate-200">{post.metadata.author}</span>
                  <span className="text-slate-600"> · </span>
                  <span className="text-slate-400"><PostDate dateString={post.metadata.publishedAt} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero image */}
      {post.metadata.image && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <figure className="-mt-4 mb-8">
              <Image className="w-full rounded-lg" src={post.metadata.image} width={768} height={432} priority alt={post.metadata.title} />
            </figure>
          </div>
        </div>
      )}

      {/* Article content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="py-8 md:py-12">
            <div className="prose prose-lg text-lg text-slate-500 max-w-none prose-headings:font-dm-sans prose-headings:text-navy prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-navy prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-navy prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit prose-hr:my-8">
              <CustomMDX source={post.content} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
