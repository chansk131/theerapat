import { allBlogs } from "contentlayer/generated"
import Image from "next/image"
import { notFound } from "next/navigation"
import MainAnimation from "../../../components/MainAnimation"
import { Mdx } from "../../../components/mdx"

type Params = {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

type Props = {
  params: Params
}

export default async function Blog({ params }: Props) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <MainAnimation>
      <section className="m-auto max-w-[65ch]">
        <h1 className="text-3xl font-bold">
          <p>{blog.title}</p>
        </h1>
        <div className="mt-4 mb-8 flex flex-row gap-x-2 text-sm">
          <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter">
            {new Intl.DateTimeFormat("en-GB").format(new Date(blog.date))}
          </div>
          <div className="w-fit rounded-md bg-neutral-100 px-2 py-1 tracking-tighter">
            {blog.readingTime.text}
          </div>
          <div className="mx-2 h-[0.2em] bg-neutral-50" />
        </div>
        <Mdx code={blog.body.code} />
      </section>
    </MainAnimation>
  )
}
