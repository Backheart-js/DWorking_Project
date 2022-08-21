import React from 'react'
import { useParams } from 'react-router-dom';
import StorageAll from './StorageAll';

function Storage() {
  const { title } = useParams()

  return (
    <>
      {title === 'all' && <StorageAll />}
    </>
  )
}

export default Storage