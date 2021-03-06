import { Nav } from 'react-bootstrap'
import {usePath} from 'hookrouter'

export default function Menu ({menu, path}) {
  return (
    <header className="text-center px-5 py-4">
      <div>
        <h3 className="float-md-left mb-0 nav-brand">
          <a className="nav-link" href="/">Karlbergs-Bro</a>
        </h3>
        <Nav
          className="nav-masthead justify-content-center float-md-right"
          activeKey={path}>
          {menu.map(({path, name}) => (
            <Nav.Item key={path}>
              <Nav.Link href={path}>
                {name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </header>
  )
}
