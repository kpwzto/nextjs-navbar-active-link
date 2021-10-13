# Nextjs active navbar
## Installation
Get the latest version by NPM:
```bash
$ npm install nextjs-navbar-active-link
```
Get the latest version by yarn:
```bash
$ yarn add nextjs-navbar-active-link
```

## Usage
### Components
Import `Navbar` and `ActiveLink` components:
```javascript
import { Navbar, ActiveLink } from 'nextjs-navbar-active-link';
```
And render them like this:
```javascript
<Navbar>
  <ActiveLink href="/">
    Home
  </ActiveLink>
  <ActiveLink>
    <ul>
      <li><a href="/test-page-1">Test page 1</a></li>
      <li><a href="/test-page-2">Test page 2</a></li>
    </ul>
  </ActiveLink>
</Navbar>
```
## License
Nextjs active navbar are released under the MIT license.
© kpwzto