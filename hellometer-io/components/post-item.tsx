import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'

export default function PostItem({ ...props }) {
  return (
    <Link href={`/blog/${props.slug}`} className="h-full flex flex-col border border-silver/30 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-200" data-aos="fade-up">
      {props.metadata.image &&
        <div className="overflow-hidden">
          <Image className="w-full aspect-16/9 object-cover group-hover:scale-105 transition duration-700 ease-out" src={props.metadata.image} width={540} height={340} alt={props.metadata.title} />
        </div>
      }
      <div className="grow flex flex-col p-5">
        <h3 className="h4 font-dm-sans mb-3 text-navy group-hover:text-blue-600 transition duration-150 ease-in-out">{props.metadata.title}</h3>
        <p className="text-lg text-slate-500 grow">{props.metadata.summary}</p>
        <footer className="flex items-center mt-4">
          {props.metadata.authorImg &&
            <Image className="rounded-full shrink-0 mr-3" src={props.metadata.authorImg} width={32} height={32} alt={props.metadata.author} />
          }
          <div>
            <span className="font-medium text-navy">{props.metadata.author}</span>
            <span className="text-silver"> · </span>
            <span className="text-slate-500"><PostDate dateString={props.metadata.publishedAt} /></span>
          </div>
        </footer>
      </div>
    </Link>
  )
}
