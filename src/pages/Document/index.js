import React from 'react'
import { useParams } from 'react-router-dom';
import DocumentAll from './DocumentAll';
import DocumentCreate from './DocumentCreate';
import DocumentSent from './DocumentSent';


function Document() {
  const { title } = useParams()

  return (
    <>
      {(title === 'create' && <DocumentCreate />) || (title === 'all' && <DocumentAll />) || (title === 'sent' && <DocumentSent />)}
    </>
  )
}

export default Document