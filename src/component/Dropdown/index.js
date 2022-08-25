import React from 'react';

function Dropdown({ className, role, children, ...props }) {

  
  return (
    <div className={`dropdown-menu ${className}`} role={role}>
        {children}
    </div>
  )
}

export default Dropdown