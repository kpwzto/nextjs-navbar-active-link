import { FC } from 'react'

interface Props {
  children?: any
  [props: string]: any
}
const Navbar: FC<Props> = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>
}
export { Navbar }
