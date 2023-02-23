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
      <section className="max-w-[65ch] m-auto">
        <Image
          src={blog.image ?? ""}
          alt="cover"
          width={650}
          height={130}
          className="mb-4 object-cover"
        />
        <h1 className="font-bold text-3xl">
          <p>{blog.title}</p>
        </h1>
        <div className="flex-row flex gap-x-2 mt-4 mb-8 text-sm">
          <div className="bg-neutral-100 rounded-md px-2 py-1 tracking-tighter">
            {new Intl.DateTimeFormat("en-GB").format(new Date(blog.date))}
          </div>
          <div className="bg-neutral-100 rounded-md px-2 py-1 tracking-tighter w-fit">
            {blog.readingTime.text}
          </div>
          <div className="h-[0.2em] bg-neutral-50 mx-2" />
        </div>
        <Mdx code={blog.body.code} />
      </section>
    </MainAnimation>
  )
}
