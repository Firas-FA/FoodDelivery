import React from 'react'
import {  Container } from 'react-bootstrap'
import './OffersStyle.css'
import MenuCard from '../../MenuComponents/Card/MenuCard'

function Offers() {
  return (
    <>
    <div className="offers">
        <Container className='py-5'>
        <h2 className='text-center pt-4 fs-1'>Offers</h2>
        <p style={{textAlign:'center',color:'#af9090',marginTop:'20px',fontSize:'20px'}}>Here You Will Find Special Offers For You!</p>
        <MenuCard/>
        </Container>
    </div>
    </>
  )
}

export default Offers