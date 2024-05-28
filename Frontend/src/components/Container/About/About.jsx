import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutimg from '../../../assets/about.jpg'
import './AboutStyle.css'

function About() {
  return (
    <>
    <div className='about' style={{backgroundColor:'black',color:'#af9090'}}>
        <Container className='py-5'>
            <h2 className='text-center pt-4 fs-1'>About Us</h2>
            <Row className='mx-0'>
                <Col lg='6' className=' d-flex align-items-center justify-content-center'>
                    <img src={aboutimg} className='w-75 h-75' style={{borderRadius:'50%'}} alt="" />
                </Col>
                <Col lg='6' className=' d-flex align-items-center justify-content-center fs-5'>
                    <div className='w-75 '>
                        <p>Our food delivery service aims to enrich diners' experiences by bridging them with locally sourced, fresh meals. We believe in making every meal a special occasion by delivering new and favorite flavors directly to customers' doors. Committed to sustainability and quality, we support local restaurants and maintain high standards for freshness and taste. Together, we celebrate the variety of culinary options in our city through convenient deliveries.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default About