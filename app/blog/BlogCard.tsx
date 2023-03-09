import { Blog } from "contentlayer/generated"
import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer"
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
          className="h-[168.5px] rounded-t-md object-cover"
          src={blog.image ?? ""}
          alt="cover"
          width={300}
          height={168.5}
        />
        <p className="px-4 text-gray-500">
          {new Intl.DateTimeFormat("en-GB").format(new Date(blog.date))} -{" "}
          {blog.readingTime.text}
        </p>
        <h2 className="overflow-hidden text-ellipsis px-4 text-2xl font-bold line-clamp-2 hover:underline">
          <Balancer>{blog.title}</Balancer>
        </h2>
      </Link>
    </BlogCardContainer>
  )
}

export default BlogCard
