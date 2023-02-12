import { Blog } from "contentlayer/generated"
import Image from "next/image"
import Link from "next/link"
import BlogCardContainer from "./BlogCardContainer"

type Props = {
  blog: Blog
}

const BlogCard = ({ blog }: Props) => {
  return (
    <BlogCardContainer>
      <Link
        className="flex flex-col gap-y-2"
        key={blog.slug}
        href={`/blog/${blog.slug}`}
      >
        <Image
          className="rounded-t-md"
          src={blog.image ?? ""}
          alt="cover"
          width={300}
          height={200}
        />
        <p className="text-gray-500 px-4">
          {new Intl.DateTimeFormat("en-GB").format(new Date(blog.date))} -{" "}
          {blog.readingTime.text}
        </p>
        <h2 className="font-bold text-2xl px-4 hover:underline">
          {blog.title}
        </h2>
      </Link>
    </BlogCardContainer>
  )
}

export default BlogCard
