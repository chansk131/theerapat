import { allBlogs } from "contentlayer/generated"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="p-5 max-w-6xl mx-auto">
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
              <Link
                key={blog.slug}
                className="group max-w-[300px] w-full mx-auto lg:mx-0 lg:col-span-2 flex flex-col rounded-lg gap-y-2 pb-4 shadow-xl"
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
                  {new Intl.DateTimeFormat("en-GB").format(new Date(blog.date))}{" "}
                  - {blog.readingTime.text}
                </p>
                <h2 className="font-bold text-2xl px-4 hover:underline">
                  {blog.title}
                </h2>
              </Link>
            ))}
        </div>
      </section>
    </main>
  )
}
