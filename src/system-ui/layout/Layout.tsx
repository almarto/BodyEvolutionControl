import React, { ReactNode, Fragment } from 'react'

import { Header } from 'system-ui/header'

import './layout.scss'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Fragment>
    <Header />
    <div role="main">
      {/* <aside className="main__aside">
          <Menu />
        </aside> */}
      <div className="app-wrapper">{children}</div>
    </div>
  </Fragment>
)

export { Layout }
