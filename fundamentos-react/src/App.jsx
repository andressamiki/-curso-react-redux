import React from 'react'
import Parameters from './components/Parameters'
import Random from './components/Random'
//renderiza algo na tela

export default _ => {
  return (
    <>
      <Parameters 
      title="Title component" 
      subtitle="Subtitle component"
      number={9}>
    </Parameters>
    <Random min={1} max={30}>

    </Random>
    </>
  )
}

//export default _ => ()