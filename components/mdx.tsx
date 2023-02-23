import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"

const CustomLink = (props: any) => {
  const href = props.href

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const components = {
  a: CustomLink,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose-quoteless prose prose-neutral">
      <Component components={components} />
    </article>
  )
}
