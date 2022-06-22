import React,{useContext} from 'react'
import CompoC from './CompoC'
import { FirstName,LastName } from '../App' 
const CompoB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

  return (
    <div>
       <h1>My name is {fname} {lname}</h1>
    </div>
  )
}

export default CompoB