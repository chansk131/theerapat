import type { Metadata } from "next"
import { allBlogs } from "contentlayer/generated"
import MainAnimation from "../../components/MainAnimation"
import BlogCard from "./BlogCard"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read techniques and tips I found interesting and useful.",
}

export default function BlogPage() {
  return (
    <MainAnimation>
      <section>
        <h1 className="py-10 text-5xl font-bold">Blog</h1>
        <p className="mb-6">
          This is where I note down topics that I found myself googling over and
          over too many times.
        </p>
        <div className="grid gap-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-6">
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.date) > new Date(b.date)) {
                return -1
              }
              return 1
            })
            .map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
        </div>
      </section>
    </MainAnimation>
  )
}
