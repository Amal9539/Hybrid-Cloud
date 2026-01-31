import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carosalhct = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img src={"public/assets/assure.png"} style={{width:"100%",height:"700px"}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src={'public/assets/aswcloudtraining.webp'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={'public/assets/googlecloud.webp'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
         <img src={'public/assets/javafullstack.png'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
         <img src={'public/assets/teraform.webp'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
         <img src={'public/assets/kubernets.webp'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carosalhct
