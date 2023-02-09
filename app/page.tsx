import Image from "next/image"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="p-5 max-w-6xl mx-auto">
      <h1 className="pt-20 pb-10 lg:pt-32 lg:pb-16 text-5xl font-extrabold max-w-[30rem]">
        Hi! My name is <strong className="text-teal-500">Chan</strong> and I am
        a software developer.
      </h1>
      <p className="text-xl max-w-lg mb-4">
        I have experiences in design and development of the websites and mobile
        applications. Now, I&apos;m a <strong>Developer Consultant</strong> at
        Thoughtworks, working on various clients and industries.
      </p>
      <p className="text-xl max-w-lg">
        My main techonologies are ReactJS, React Native, NodeJS, Flutter and Go
      </p>
    </main>
  )
}
