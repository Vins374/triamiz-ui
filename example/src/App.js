import React from 'react'

import { ButtonComponent } from 'triamiz-ui'
// import 'triamiz-ui/dist/index.css'
// import { ButtonComponent } from '../../src'

const App = () => {
  return (
    <>
      <p> This is test </p>
      <ButtonComponent
        text={'Button'}
        onClick={() => console.log('onclick working')}
      />
    </>
  )
}

export default App
