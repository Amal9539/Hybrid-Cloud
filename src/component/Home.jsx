

// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';

// const Home = () => {
//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif" }}>
//       {/* Carousel Section with Enhanced Styling */}
//       <div style={{ position: 'relative' }}>
//   <Carousel
//     interval={1000}
//     pause={false}
//     ride="carousel"
//     touch={true}
//   >
//     <Carousel.Item>
//       <img
//         src="src/assets/assure.png"
//         style={{
//           width: "100%",
//           height: "700px",
//           objectFit: "cover",
//         }}
//         alt=""
//       />
//     </Carousel.Item>

//     <Carousel.Item>
//       <img
//         src="src/assets/aswcloudtraining.webp"
//         style={{
//           width: "100%",
//           height: "700px",
//           objectFit: "cover",
//         }}
//         alt=""
//       />
//     </Carousel.Item>

//     <Carousel.Item>
//       <img
//         src="src/assets/googlecloud.webp"
//         style={{
//           width: "100%",
//           height: "700px",
//           objectFit: "cover",
//         }}
//         alt=""
//       />
//     </Carousel.Item>

//     <Carousel.Item>
//       <img
//         src="src/assets/javafullstack.png"
//         style={{
//           width: "100%",
//           height: "700px",
//           objectFit: "cover",
//         }}
//         alt=""
//       />
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         src="src/assets/pythoncurl.webp"
//         style={{
//           width: "100%",
//           height: "700px",
//           objectFit: "cover",
//         }}
//         alt=""
//       />
//     </Carousel.Item>

//     <Carousel.Item>
//       <img
//         src="src/assets/teraform.webp"
//         style={{
//           width: "100%",
//           height: "700px",
//           objectFit: "cover",
//         }}
//         alt=""
//       />
//     </Carousel.Item>

//     <Carousel.Item>
//       <img
//         src="src/assets/kubernets.webp"
//         style={{
//           width: "100%",
//           height: "700px",
//           objectFit: "cover",
//         }}
//         alt=""
//       />
//     </Carousel.Item>

//     <Carousel.Item>
//       <img
//         src="src/assets/devops.webp"
//         style={{
//           width: "100%",
//           height: "700px",
//           objectFit: "cover",
//         }}
//         alt=""
//       />
//     </Carousel.Item>
//   </Carousel>
// </div>

//       {/* Exam & Certification Section */}
//       <div style={{ 
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
//         padding: '80px 0',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         {/* Decorative Background Element */}
//         <div style={{
//           position: 'absolute',
//           top: '-50px',
//           right: '-50px',
//           width: '300px',
//           height: '300px',
//           background: 'rgba(255,255,255,0.1)',
//           borderRadius: '50%',
//           filter: 'blur(60px)'
//         }}></div>
        
//         <Container>
//           <Row className="align-items-center">
//             {/* LEFT SIDE */}
//             <Col md={6}>
//               <h2 style={{
//                 fontWeight: '800',
//                 marginBottom: '30px',
//                 color: '#fff',
//                 fontSize: '2.5rem',
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
//               }}>
//                 Exam & <span style={{ color: '#ffd700' }}>Certification</span>
//               </h2>

//               <Accordion defaultActiveKey="0" flush>
//                 <Accordion.Item eventKey="0" style={{
//                   marginBottom: '12px',
//                   border: 'none',
//                   borderRadius: '12px',
//                   overflow: 'hidden',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                   background: '#fff'
//                 }}>
//                   <Accordion.Header>
//                     Do I need prior tech experience to take the course or certification?
//                   </Accordion.Header>
//                   <Accordion.Body style={{
//                     background: '#f8f9fa',
//                     color: '#555',
//                     lineHeight: '1.6',
//                     padding: '20px'
//                   }}>
//                     No prior technical experience is required. Our courses are designed
//                     for beginners as well as professionals.
//                   </Accordion.Body>
//                 </Accordion.Item>

//                 <Accordion.Item eventKey="1" style={{
//                   marginBottom: '12px',
//                   border: 'none',
//                   borderRadius: '12px',
//                   overflow: 'hidden',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                   background: '#fff'
//                 }}>
//                   <Accordion.Header>
//                     Career growth with IT Certification?
//                   </Accordion.Header>
//                   <Accordion.Body style={{
//                     background: '#f8f9fa',
//                     color: '#555',
//                     lineHeight: '1.6',
//                     padding: '20px'
//                   }}>
//                     IT certifications boost credibility, skills, and job opportunities
//                     across cloud and DevOps roles.
//                   </Accordion.Body>
//                 </Accordion.Item>

//                 <Accordion.Item eventKey="2" style={{
//                   marginBottom: '12px',
//                   border: 'none',
//                   borderRadius: '12px',
//                   overflow: 'hidden',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                   background: '#fff'
//                 }}>
//                   <Accordion.Header>
//                     Does Certification guarantee jobs?
//                   </Accordion.Header>
//                   <Accordion.Body style={{
//                     background: '#f8f9fa',
//                     color: '#555',
//                     lineHeight: '1.6',
//                     padding: '20px'
//                   }}>
//                     Certifications improve chances but do not guarantee jobs. Skills
//                     and practice matter most.
//                   </Accordion.Body>
//                 </Accordion.Item>

//                 <Accordion.Item eventKey="3" style={{
//                   marginBottom: '12px',
//                   border: 'none',
//                   borderRadius: '12px',
//                   overflow: 'hidden',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                   background: '#fff'
//                 }}>
//                   <Accordion.Header>
//                     Benefits of Cloud/IT Certification?
//                   </Accordion.Header>
//                   <Accordion.Body style={{
//                     background: '#f8f9fa',
//                     color: '#555',
//                     lineHeight: '1.6',
//                     padding: '20px'
//                   }}>
//                     Higher salary potential, global recognition, and career flexibility.
//                   </Accordion.Body>
//                 </Accordion.Item>

//                 <Accordion.Item eventKey="4" style={{
//                   marginBottom: '12px',
//                   border: 'none',
//                   borderRadius: '12px',
//                   overflow: 'hidden',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                   background: '#fff'
//                 }}>
//                   <Accordion.Header>
//                     Can I learn Cloud/IT without coding?
//                   </Accordion.Header>
//                   <Accordion.Body style={{
//                     background: '#f8f9fa',
//                     color: '#555',
//                     lineHeight: '1.6',
//                     padding: '20px'
//                   }}>
//                     Yes, many cloud roles require minimal coding initially.
//                   </Accordion.Body>
//                 </Accordion.Item>

//                 <Accordion.Item eventKey="5" style={{
//                   marginBottom: '12px',
//                   border: 'none',
//                   borderRadius: '12px',
//                   overflow: 'hidden',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                   background: '#fff'
//                 }}>
//                   <Accordion.Header>
//                     Which certifications are best for beginners?
//                   </Accordion.Header>
//                   <Accordion.Body style={{
//                     background: '#f8f9fa',
//                     color: '#555',
//                     lineHeight: '1.6',
//                     padding: '20px'
//                   }}>
//                     AWS Cloud Practitioner, Azure Fundamentals, and Google Cloud Digital
//                     Leader are ideal.
//                   </Accordion.Body>
//                 </Accordion.Item>
//               </Accordion>
//             </Col>

//             {/* RIGHT SIDE */}
//             <Col md={6} className="text-center mt-4 mt-md-0">
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 padding: '20px'
//               }}>
//                 <img
//                   src={"src/assets/certification.jpg"}
//                   alt="Certificate"
//                   className="img-fluid"
//                   style={{maxHeight: '450px', maxWidth: '100%',background: '#fff',borderRadius: '20px',marginTop:"60px"}}
//                 />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Footer Section */}
//       <div style={{
//         background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
//         padding: '60px 20px',
//         color: '#fff'
//       }}>
//         <Container>
//           <Row>
//             {/* Column 1 - Company Info */}
//             <Col md={3} className="mb-4 mb-md-0">
//               <div>
//                 <img 
//                   src={"src/assets/hybrid.svg"} 
//                   alt="Cloud Institution" 
//                   style={{
//                     height: '50px',
//                     width: 'auto',
//                     marginBottom: '20px',
//                     display: 'block',
                    
//                   }}
//                 />
//                 <p style={{
//                   fontSize: '0.95rem',
//                   lineHeight: '1.7',
//                   color: '#ddd',
//                   margin: 0
//                 }}>
//                   At Hybrid Cloud , your trusted tech education hub in Mahe. we provide personalized, hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, and more—blending real-world projects, expert mentorship, and certifications to launch your cloud career.
//                 </p>
//               </div>
//             </Col>

//             {/* Column 2 - Top Courses */}
//             <Col md={3} className="mb-4 mb-md-0">
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '700',
//                 marginBottom: '20px',
//                 color: '#ffd700',
//                 borderBottom: '3px solid #ffd700',
//                 paddingBottom: '10px',
//                 display: 'inline-block'
//               }}>Top Courses</h2>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: 0,
//                 margin: 0
//               }}>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   AWS Certification Training
//                 </li>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   Azure Certification Training 
//                 </li>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   Kubernetes Training
//                 </li>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   Python Full Stack Training 
//                 </li>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   Java Full Stack Training 
//                 </li>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   Terraform Training
//                 </li>
//               </ul>
//             </Col>

//             {/* Column 3 - About/Quick Links */}
//             <Col md={3} className="mb-4 mb-md-0">
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '700',
//                 marginBottom: '20px',
//                 color: '#ffd700',
//                 borderBottom: '3px solid #ffd700',
//                 paddingBottom: '10px',
//                 display: 'inline-block'
//               }}>About</h2>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: 0,
//                 margin: 0
//               }}>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   Home
//                 </li>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   About Us
//                 </li>
//                 <li style={{
//                   padding: '10px 0',
//                   borderBottom: '1px solid rgba(255,255,255,0.1)',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   paddingLeft: '20px',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.paddingLeft = '30px';
//                   e.target.style.color = '#ffd700';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.paddingLeft = '20px';
//                   e.target.style.color = '#fff';
//                 }}>
//                   <span style={{
//                     position: 'absolute',
//                     left: '0',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#ffd700'
//                   }}>▸</span>
//                   Contact Us
//                 </li>
//               </ul>
//             </Col>

//             {/* Column 4 - Help/Contact Info */}
//             <Col md={3}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '700',
//                 marginBottom: '20px',
//                 color: '#ffd700',
//                 borderBottom: '3px solid #ffd700',
//                 paddingBottom: '10px',
//                 display: 'inline-block'
//               }}>Help</h2>
//               <div>
//                 <h4 style={{
//                   fontSize: '1.1rem',
//                   fontWeight: '600',
//                   marginTop:"15px",
//                   marginBottom: '8px',
//                   color: '#fff'
//                 }}>Mahe</h4>
                
//                 <ul style={{
//                   listStyle: 'none',
//                   padding: 0,
//                   margin: 0
//                 }}>
//                   <li style={{
//                     padding: '10px 0',
//                     borderBottom: '1px solid rgba(255,255,255,0.1)',
//                     fontSize: '0.9rem',
//                     display: 'flex',
//                     alignItems: 'center',
                   
//                   }}>
//                     <img 
//                       src="src/assets/icons8-location-96.png" 
//                       style={{height: '22px', width: '24px', flexShrink: 0}} 
//                       alt="Location" 
//                     />
//                     <span style={{
//                       marginLeft: '15px',
//                       color: '#ddd',
//                       lineHeight: '1.5'
//                     }}>
//                       Anandam realty, palloor, Mahe - 673310
//                     </span>
//                   </li>

//                   <li style={{
//                     padding: '10px 0',
//                     borderBottom: '1px solid rgba(255,255,255,0.1)',
//                     fontSize: '0.9rem',
//                     display: 'flex',
//                     alignItems: 'center'
//                   }}>
//                     <img 
//                       src="src/assets/icons8-email-24.png" 
//                       style={{height: '24px', width: '24px', flexShrink: 0}} 
//                       alt="Email" 
//                     />
//                     <span style={{
//                       marginLeft: '15px',
//                       color: '#ddd',
//                       lineHeight: '1.5'
//                     }}>
//                       hybridcloudinfo@gmail.com
//                     </span>
//                   </li>

//                   <li style={{
//                     padding: '10px 0',
//                     borderBottom: '1px solid rgba(255,255,255,0.1)',
//                     fontSize: '0.9rem',
//                     display: 'flex',
//                     alignItems: 'center'
//                   }}>
//                     <img 
//                       src="src/assets/icons8-phone-50.png" 
//                       style={{height: '24px', width: '24px', flexShrink: 0}} 
//                       alt="Phone" 
//                     />
//                     <span style={{
//                       marginLeft: '15px',
//                       color: '#ddd',
//                       lineHeight: '1.5'
//                     }}>
//                       +91 9344613129
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   )
// }

// export default Home
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const courseLinks = [
    { name: 'AWS Certification Training', href: '/amazone' },
    { name: 'Azure Certification Training', href: '/azure' },
    { name: 'Kubernetes Training', href: '/kuber' },
    { name: 'Python Full Stack Training', href: '/python' },
    { name: 'Java Full Stack Training', href: '/java' },
    { name: 'Terraform Training', href: '/teraform' },
    { name: 'Google Cloud Platform Training', href: '/gcp' },
    { name: 'DevOps Training', href: '/devops' },
  ];

  const aboutLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contactus' }
  ];

  const certificationBenefits = [
    {
      icon: '🎯',
      title: 'Career Advancement',
      description: 'Boost your career with industry-recognized certifications that employers value.',
    },
    {
      icon: '💰',
      title: 'Higher Salary',
      description: 'Certified professionals earn 15-20% more than their non-certified peers.',
    },
    {
      icon: '🌐',
      title: 'Global Recognition',
      description: 'Our certifications are recognized worldwide across leading tech companies.',
    },
    {
      icon: '🚀',
      title: 'Hands-on Experience',
      description: 'Learn through practical projects and real-world scenarios, not just theory.',
    },
    {
      icon: '👥',
      title: 'Expert Mentorship',
      description: 'Get guidance from industry experts with years of practical experience.',
    },
    {
      icon: '📈',
      title: 'Job Opportunities',
      description: 'Access to exclusive job opportunities and career support services.',
    }
  ];

  const faqs = [
    {
      question: 'Do I need prior tech experience?',
      answer: 'No prior technical experience is required. Our courses are designed for beginners as well as professionals.'
    },
    {
      question: 'How long does certification take?',
      answer: 'Most certifications can be completed in 4-8 weeks with dedicated study and practice.'
    },
    {
      question: 'Is placement assistance provided?',
      answer: 'Yes, we provide comprehensive placement assistance including resume building and interview prep.'
    },
    {
      question: 'Are classes online or offline?',
      answer: 'We offer both online and offline classes to suit your learning preferences.'
    }
  ];

  const styles = {
    // Main Container
    pageWrapper: {
      fontFamily: "'Poppins', sans-serif",
      background: '#ffffff',
      minHeight: '100vh',
    },

    // Hero Carousel - Background removed
    heroSection: {
      overflow: 'hidden',
      background: 'transparent',
      padding: '0',
    },
    carouselImage: {
      width: '100%',
      height: '600px',
      objectFit: 'cover',
      filter: 'brightness(0.9)',
      borderRadius: '0',
    },
    heroTextSection: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      padding: '100px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContent: {
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '20px',
      color: 'white',
      lineHeight: '1.2',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    },
    heroSubtitle: {
      fontSize: '1.4rem',
      fontWeight: '300',
      marginBottom: '30px',
      color: 'white',
      opacity: '0.95',
    },
    heroButton: {
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      color: 'white',
      border: 'none',
      padding: '15px 40px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)',
      transition: 'all 0.3s ease',
    },

    // Benefits Section
    benefitsSection: {
      padding: '100px 0',
      background: 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)',
      position: 'relative',
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#1e3a8a',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    },
    sectionSubtitle: {
      fontSize: '1.2rem',
      textAlign: 'center',
      color: '#475569',
      marginBottom: '60px',
      maxWidth: '700px',
      margin: '0 auto 60px',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      padding: '0 20px',
    },
    benefitCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    benefitCardHovered: {
      transform: 'translateY(-15px) scale(1.02)',
      boxShadow: '0 25px 60px rgba(59, 130, 246, 0.3)',
      borderColor: '#3b82f6',
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
    benefitIcon: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      display: 'block',
    },
    benefitTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      color: '#1e3a8a',
      marginBottom: '15px',
    },
    benefitDescription: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: '1.7',
    },

    // FAQ Section
    faqSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      position: 'relative',
    },
    faqContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px',
    },
    faqTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '60px',
      color: '#78350f',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: '25px',
    },
    faqCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
    },
    faqCardHovered: {
      transform: 'scale(1.03)',
      boxShadow: '0 20px 50px rgba(245, 158, 11, 0.3)',
      borderColor: '#f59e0b',
    },
    faqQuestion: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#1e3a8a',
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    faqAnswer: {
      fontSize: '1rem',
      color: '#475569',
      lineHeight: '1.8',
    },

    // CTA Section
    ctaSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    },
    ctaText: {
      fontSize: '1.2rem',
      color: 'white',
      opacity: '0.95',
      marginBottom: '30px',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      color: 'white',
      border: 'none',
      padding: '15px 50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)',
      transition: 'all 0.3s ease',
    },

    // Footer
    footerSection: {
      background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
      color: 'white',
      padding: '60px 20px 0',
    },
    footerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      paddingBottom: '40px',
    },
    footerColumn: {
      padding: '0 20px',
    },
    footerLogo: {
      maxWidth: '180px',
      marginBottom: '20px',
    },
    footerDescription: {
      fontSize: '0.95rem',
      lineHeight: '1.8',
      color: '#d1d5db',
    },
    footerHeading: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '25px',
      color: 'white',
      borderBottom: '3px solid #f59e0b',
      paddingBottom: '10px',
      display: 'inline-block',
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    footerListItem: {
      marginBottom: '12px',
    },
    footerLink: {
      color: '#d1d5db',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      display: 'inline-block',
    },
    footerLinkHovered: {
      color: '#f59e0b',
      paddingLeft: '10px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '15px',
    },
    contactIcon: {
      width: '20px',
      height: '20px',
      filter: 'brightness(0) invert(1)',
      opacity: '0.8',
    },
    contactText: {
      margin: 0,
      color: '#d1d5db',
      fontSize: '0.9rem',
      lineHeight: '1.6',
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '25px 0',
      textAlign: 'center',
      background: 'rgba(0,0,0,0.2)',
    },
    footerBottomText: {
      margin: 0,
      color: '#9ca3af',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Carousel */}
      <div style={styles.heroSection}>
        <Carousel interval={3000} pause={false} controls={false} indicators={true}>
          <Carousel.Item>
            <img src="src/assets/assure.png" style={styles.carouselImage} alt="Training" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src/assets/aswcloudtraining.webp" style={styles.carouselImage} alt="AWS" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src/assets/googlecloud.webp" style={styles.carouselImage} alt="Google Cloud" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src/assets/javafullstack.png" style={styles.carouselImage} alt="Java" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src/assets/pythoncurl.webp" style={styles.carouselImage} alt="Python" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src/assets/teraform.webp" style={styles.carouselImage} alt="Terraform" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src/assets/kubernets.webp" style={styles.carouselImage} alt="Kubernetes" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="src/assets/devops.webp" style={styles.carouselImage} alt="DevOps" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Hero Text Section */}
      <div style={styles.heroTextSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Transform Your Career with Cloud & IT Certifications</h1>
          <p style={styles.heroSubtitle}>Industry-leading training programs designed for your success</p>
        </div>
      </div>

      {/* Benefits Section */}
      <section style={styles.benefitsSection}>
        <Container>
          <h2 style={styles.sectionTitle}>Why Choose Hybrid Cloud?</h2>
          <p style={styles.sectionSubtitle}>
            Join thousands of professionals who have transformed their careers with our comprehensive training programs
          </p>
          <div style={styles.benefitsGrid}>
            {certificationBenefits.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.benefitCard,
                  ...(hoveredCard === idx ? styles.benefitCardHovered : {}),
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span style={styles.benefitIcon}>{benefit.icon}</span>
                <h3 style={{
                  ...styles.benefitTitle,
                  color: hoveredCard === idx ? 'white' : '#1e3a8a'
                }}>{benefit.title}</h3>
                <p style={{
                  ...styles.benefitDescription,
                  color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : '#64748b'
                }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <div style={styles.faqContainer}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={hoveredCard === `faq-${idx}` ? { ...styles.faqCard, ...styles.faqCardHovered } : styles.faqCard}
                onMouseEnter={() => setHoveredCard(`faq-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 style={styles.faqQuestion}>
                  <span style={{ color: '#f59e0b' }}>Q:</span> {faq.question}
                </h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footerSection}>
        <div style={styles.footerContainer}>
          {/* About */}
          <div style={styles.footerColumn}>
            <img src="src/assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
            <p style={styles.footerDescription}>
              Hybrid Cloud offers hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, and more.
            </p>
          </div>

          {/* Top Courses */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Top Courses</h3>
            <ul style={styles.footerList}>
              {courseLinks.map((link, idx) => (
                <li key={idx} style={styles.footerListItem}>
                  <a
                    href={link.href}
                    style={hoveredCourse === idx ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
                    onMouseEnter={() => setHoveredCourse(idx)}
                    onMouseLeave={() => setHoveredCourse(null)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Quick Links</h3>
            <ul style={styles.footerList}>
              {aboutLinks.map((link, idx) => (
                <li key={idx} style={styles.footerListItem}>
                  <a
                    href={link.href}
                    style={hoveredLink === idx ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
                    onMouseEnter={() => setHoveredLink(idx)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Contact Us</h3>
            <div>
              <h4 style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '15px' }}>Mahe</h4>
              <div style={styles.contactItem}>
                <img src="src/assets/icons8-location-96.png" style={styles.contactIcon} alt="" />
                <p style={styles.contactText}>Anandam realty, palloor, Mahe - 673310</p>
              </div>
              <div style={styles.contactItem}>
                <img src="src/assets/icons8-email-24.png" style={styles.contactIcon} alt="" />
                <p style={styles.contactText}>info@hybridcloud.com</p>
              </div>
              <div style={styles.contactItem}>
                <img src="src/assets/icons8-phone-50.png" style={styles.contactIcon} alt="" />
                <p style={styles.contactText}>+91 9344613129</p>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>&copy; 2025 Hybrid Cloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;