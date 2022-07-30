import React from 'react'

import Header from './Header';
import Sidebar from './Sidebar'

import styles from './Layout.module.scss'

function Layout({ children }) {
  return (
    <div className={`${styles.wrapper}`}>
        <Sidebar />
        <div className={styles.rightPart}>
          <Header />
          <div className={styles.contentWrapper}>
            <div id='table'>
              {children}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Layout