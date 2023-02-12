import { allBlogs } from "contentlayer/generated"
import MainAnimation from "../../components/MainAnimation"
import BlogCard from "./BlogCard"

export default function BlogPage() {
  return (
    <MainAnimation>
      <section>
        <h1 className="text-5xl font-bold py-10">Blog</h1>
        <p className="mb-6">
          This is where I note down topics that I found myself googling over and
          over too many times.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 gap-y-20">
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
