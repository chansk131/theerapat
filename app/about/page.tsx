import MainAnimation from "../../components/MainAnimation"

type TimelineItemProps = {
  time: string
  position: string
  highlights: string[]
}

const TimelineItem = ({ time, position, highlights }: TimelineItemProps) => {
  return (
    <li className="ml-4 mb-10 last:mb-0">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
        {time}
      </time>
      <h3 className="text-lg font-semibold text-gray-900">{position}</h3>
      {highlights.map((highlight) => (
        // eslint-disable-next-line react/jsx-key
        <p className="text-base font-normal text-gray-500">{highlight}</p>
      ))}
    </li>
  )
}

export default function About() {
  return (
    <MainAnimation>
      <section>
        <h1 className="text-5xl font-bold py-10">Work Experiences</h1>
        <ol className="relative border-l border-gray-200">
          <TimelineItem
            time="July 2021 - current"
            position="Developer Consultant, Thoughtworks"
            highlights={[
              "- Develop a mobile application using React Native and NodeJS",
            ]}
          />
          <TimelineItem
            time="October 2019 - June 2021"
            position="Software Engineer, KBTG"
            highlights={[
              "- Develop a Point of Sales website and mobile application for restaurants using ReactJS, Flutter and Go",
              "- Initiated and created a back office website template to be used company wide",
            ]}
          />
        </ol>
      </section>
      <div className="border-gray-200 border-b-2 w-full h-1 py-5" />
      <section>
        <h1 className="text-5xl font-bold py-10">Education</h1>
        <ul>
          <li className="text-gray-900">
            MSc Computing Science, Imperial College London, UK 2018-2019
          </li>
        </ul>
      </section>
      <div className="border-gray-200 border-b-2 w-full h-1 py-5" />
      <section>
        <h1 className="text-5xl font-bold py-10">Publication</h1>
        <ul>
          <li className="text-gray-900">
            Augmented Reality System for Digital Rectal Examination Training and
            Assessment: System Validation; doi:{" "}
            <a
              className="underline"
              href="https://doi.org/10.2196/18637"
              target="_blank"
              rel="noreferrer"
            >
              10.2196/18637
            </a>
          </li>
        </ul>
      </section>
    </MainAnimation>
  )
}
