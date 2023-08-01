import React from 'react'
import {servdata} from '../data'
import { Card } from 'react-bootstrap'
import group54 from "../assets/pics/group54.jpg";

const Services = () => {
  return (
    <>
      <h1 className='header'> SERVICES</h1>

      <section>
        <div className='container'>
          <div className='cards'>
            {
              servdata.map((card, i) => {
                return (<Card style={{ maxWidth: '25vw' }}>
                  <Card.Body className="card-body-text">
                  <Card.Img variant="top" src={card.image} style={{width:'100%'}}  className='top-image'/>
                  <Card.Img variant="top" src={group54}  style={{ width: '30%', height: '30%' }} className="overlay-image"/>
                    <Card.Title className='Card-desc' > {card.description} </Card.Title>
                    <Card.Text className='Card-text'>
                      Read More...
                    </Card.Text>
                  </Card.Body>
                </Card>)
              }
              )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services