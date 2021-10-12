import { useRouter } from 'next/router'
import Link from 'next/link'
import { Children, FC } from 'react'
import * as React from 'react'

interface ActiveLinkProps {
  children?: any
  [props: string]: any
}

const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  ...props
}: ActiveLinkProps) => {
  const { asPath, pathname } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const activeClassName = 'active'
  // pages/index.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    pathname === props.href || asPath === props.as ? activeClassName : ''

  return (
    <li className={className}>
      <Link href={props.href} {...props}>
        {React.cloneElement(child, {
          className: childClassName || null,
        })}
      </Link>
    </li>
  )
}
export { ActiveLink }
