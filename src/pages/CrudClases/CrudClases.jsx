import React from 'react'
import Grilla from '../../components/Grilla/Grilla'

const CrudClases = ({setUser, nombre}) => {
  return (
    <Grilla setUser={setUser} nombre={nombre}/>
  )
}

export default CrudClases