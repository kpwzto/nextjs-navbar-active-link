import { FC, Fragment } from 'react'
import { Navbar, ActiveLink } from '../app'
interface Props {}
const Home: FC<Props> = () => {
  return (
    <Fragment>
      <Navbar>
        <ActiveLink href="/">
          <a>Home</a>
        </ActiveLink>
      </Navbar>
    </Fragment>
  )
}

export default Home
