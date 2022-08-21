import React, { useState } from 'react'
import img from '../../assets/img';

function Image(src, className, alt, ...props) {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(img.noImage);
  }

  return (
    <img src={fallback || src} alt={alt} className={className} {...props} onError={handleError}/>
  )
}

export default Image