import React from 'react'

function Dropdown({ className, children }) {
  return (
    <div className={`dropdown-menu ${className}`}>
        {children}
    </div>
  )
}

export default Dropdown