import React, { createContext } from 'react'
import { Link } from "react-router-dom"
import State from '../State'
import Form from '../Form'
import User from '../../User'
import Effect from './Effect'
export const userContext=createContext()
const Home = () => {
  return (
    <div>
      <userContext.Provider value="asdfg">
      <h2>Home Page</h2>
      <Effect/>
      <State />
      <Form />
      <User name="xyz" age={33} />
      </userContext.Provider>
    </div>
  )
}

export default Home
