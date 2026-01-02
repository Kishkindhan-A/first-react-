import React from 'react'
import { Link } from "react-router-dom"
import State from '../State'
import Form from '../Form'
import User from '../../User'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>

   
      <State />
      <Form />
      <User name="xyz" age={33} />
    </div>
  )
}

export default Home
