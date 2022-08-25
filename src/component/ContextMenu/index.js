import React from 'react'

function ContentMenu({ className, children, ...props }) {

  return (
    <div className={className} {...props}>
        {children}
    </div>
  )
}

export default ContentMenu