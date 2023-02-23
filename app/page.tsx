import { EnvelopeIcon } from "@heroicons/react/24/outline"
import MainAnimation from "../components/MainAnimation"
import GithubIcon from "../resources/icons/GithubIcon"

export default function Home() {
  return (
    <MainAnimation>
      <section className="mb-10">
        <h1 className="pt-20 pb-10 lg:pt-32 lg:pb-16 text-5xl font-extrabold max-w-[35rem]">
          Hi! My name is{" "}
          <strong className="text-teal-500">Chan Theerapat Muangpoon</strong>{" "}
          and I am a software developer.
        </h1>
        <p className="text-xl max-w-lg mb-4">
          I have experiences in design and development of the websites and
          mobile applications. Now, I&apos;m a{" "}
          <strong>Developer Consultant</strong> at Thoughtworks, working on
          various clients and industries.
        </p>
        <p className="text-xl max-w-lg">
          My main techonologies are ReactJS, React Native, NodeJS, Flutter and
          Go
        </p>
      </section>
      <section>
        <ul className="flex flex-row items-center gap-6">
          <li>
            <a
              className="text-white bg-gray-800 px-4 py-3 rounded-3xl flex w-fit gap-2"
              href="mailto:chansk131@gmail.com"
            >
              Contact Me
              <EnvelopeIcon className="h-6 w-6 inline-block" />
            </a>
          </li>
          <li>
            <a
              className="text-4xl text-gray-500 hover:text-gray-800"
              href="https://github.com/chansk131"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
        </ul>
      </section>
    </MainAnimation>
  )
}
