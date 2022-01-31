import React, { useEffect, useState } from 'react';

export default function FunctionComponent() {
    let [ test, setTest] = useState('')

    useEffect( () => {
        document.title = ('useEffect writing: ' + (test ? test : 'Type here'))
    })
  return (
  <div className='mt-4'>
      <h1>Function Component with hook</h1>
      <div className="d-flex mt-3">
      <label htmlFor="input" className='ms-3 mt-2'>Input Field:</label>
      <input type="text" className='form-control w-25 ms-3' id='input' onChange={ e => setTest(e.currentTarget.value)} />
      <h4 className='ms-4'>Input: {test}</h4>
      </div>
  </div>
  )}
