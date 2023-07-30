import React from 'react'
import { cardsData } from '../data'
import { Card } from 'react-bootstrap'
import group54 from "../assets/pics/group54.jpg"

const Trades = () => {
  return (
    <>
      <h1 className='header'>Our Service</h1>

      <section>
        <div className='container'>
          <div className='cards'>
            {
              cardsData.map((card, i) => {
                return (<Card style={{ maxWidth: '28vw' }}>
                  <Card.Body className="card-body-text">
                  <Card.Img variant="top" src={card.image} width='100%'  style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}  className='top-image'/>
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

export default Trades