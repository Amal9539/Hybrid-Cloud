import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carosalhct = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img src={"src/assets/assure.png"} style={{width:"100%",height:"700px"}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src={'src/assets/aswcloudtraining.webp'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={'src/assets/googlecloud.webp'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
         <img src={'src/assets/javafullstack.png'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
         <img src={'src/assets/teraform.webp'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
         <img src={'src/assets/kubernets.webp'} style={{width:"100%",height:"700px"}} alt=""/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carosalhct
