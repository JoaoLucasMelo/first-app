import React, { useEffect, useState } from 'react';

export default function FunctionComponent() {
    let [ test, setTest] = useState('')

    useEffect( () => {
        document.title = ('useEffect writing: ' + (test ? test : 'Type here'))
    })
  return (
  <div className='mt-4'>
      <h1>Function Component with hook (useState and useEffect)</h1>
      <div className="d-flex mt-4">
      <h5 className='ms-3'>Input:</h5>
      <input type="text" className='form-control w-25 ms-3' id='input' onChange={ e => setTest(e.currentTarget.value)} />
      <h5 className='ms-4'>Output: {test}</h5>
      </div>
  </div>
  )}
