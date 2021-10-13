import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface ActiveLinkProps {
  children?: any
  [props: string]: any
}

const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  ...props
}: ActiveLinkProps) => {
  const { asPath, pathname } = useRouter()
  const activeClassName = 'active'

  const isNode = children.type === undefined
  // // pages/index.js will be matched via props.href
  // // pages/[slug].js will be matched via props.as
  const className =
    pathname === props.href || asPath === props.as ? activeClassName : ''
  return (
    <li className={className}>
      {!isNode && React.cloneElement(children, { ...props })}
      {isNode && (
        <a href={props.href} {...props}>
          {children}
        </a>
      )}
    </li>
  )
}
export { ActiveLink }
