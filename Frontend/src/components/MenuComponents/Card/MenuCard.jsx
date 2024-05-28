import React from 'react'
import { Card, Col } from 'react-bootstrap'
import cardimg from '../../../assets/dish1.png'

function MenuCard() {
  return (
    <>
    <Col lg={3} md={4} >    
        <Card className='text-center mx-auto'>
            <img src={cardimg} className='w-50' alt="" />
            <h3>Meal Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>
    </Col>
    </>
  )
}

export default MenuCard