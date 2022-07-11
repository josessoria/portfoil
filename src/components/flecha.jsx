import React from 'react'
import "./flecha.scss"
import { AiOutlineArrowLeft } from "react-icons/ai"
import {Link} from "react-router-dom"

function flecha() {
  return (
    <div className='flecha'><Link to="/#aboutme"><AiOutlineArrowLeft/></Link></div>
  )
}

export default flecha