

// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Container, Row, Col } from 'react-bootstrap';

// const About = () => {
//   const [hoveredLink, setHoveredLink] = useState(null);
//     const [hoveredContact, setHoveredContact] = useState(null);
  
//     const courseLinks = [
//       { name: 'AWS Certification Training', href: '/amazone' },
//       { name: 'Azure Certification Training', href: '/azure' },
//       { name: 'Kubernetes Training', href: '/kuber' },
//       { name: 'Python Full Stack Training', href: '/python' },
//       { name: 'Java Full Stack Training', href: '/java' },
//       { name: 'Terraform Training', href: '/teraform' },
//       { name: 'Google Cloud Platform Training', href: '/gcp' },
//       { name: 'DevOps Training', href: '/devops' },
//     ];
  
//     const aboutLinks = [
//       { name: 'Home', href: '/' },
//       { name: 'About Us', href: '/about' },
//       { name: 'Contact Us', href: '/contactus' }
//     ];
//   const styles = {
//     // ---------- Footer ----------
//     footerSection: {
//       background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
//       color: 'white',
//       padding: '60px 20px 0',
//       marginTop: '80px',
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     footerContainer: {
//       maxWidth: '1400px',
//       margin: '0 auto',
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '40px',
//       paddingBottom: '40px',
//     },
//     footerColumn: { padding: '0 20px' },
//     aboutColumn: { gridColumn: 'span 1' },
//     footerLogo: { maxWidth: '180px', marginBottom: '20px' },
//     footerDescription: { fontSize: '0.95rem', lineHeight: '1.8', color: '#cbd5e0', marginBottom: '20px' },
//     footerHeading: { fontSize: '1.4rem', fontWeight: '600', marginBottom: '25px', color: 'white', position: 'relative', paddingBottom: '12px' },
//     headingUnderline: { position: 'absolute', bottom: '0', left: '0', width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF9900, #FF6F00)', borderRadius: '2px' },
//     footerList: { listStyle: 'none', padding: 0, margin: 0 },
//     footerListItem: { marginBottom: '12px' },
//     footerLink: { color: '#cbd5e0', textDecoration: 'none', fontSize: '0.95rem', display: 'inline-block', position: 'relative', transition: 'all 0.3s ease' },
//     linkArrow: { opacity: 0, transition: 'opacity 0.3s ease', marginRight: '5px' },
//     linkArrowVisible: { opacity: 1 },
//     footerLinkHovered: { color: 'white', paddingLeft: '20px' },
//     locationName: { fontSize: '1.1rem', fontWeight: '600', marginBottom: '15px', color: '#FF9900' },
//     contactInfo: { display: 'flex', flexDirection: 'column', gap: '15px' },
//     contactItem: { display: 'flex', alignItems: 'flex-start', gap: '15px', transition: 'transform 0.3s ease' },
//     contactItemHovered: { transform: 'translateX(5px)' },
//     contactIcon: { width: '24px', height: '24px', filter: 'brightness(0) invert(1)', opacity: '0.8', flexShrink: 0, marginTop: '2px' },
//     contactText: { margin: 0, color: '#cbd5e0', fontSize: '0.95rem', lineHeight: '1.6' },
//     footerBottom: { borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '25px 0', textAlign: 'center' },
//     footerBottomText: { margin: 0, color: '#a0aec0', fontSize: '0.9rem' },
//   };

//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif" }}>
//       {/* Hero Section */}
//       <div style={{
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         padding: '80px 20px',
//         color: '#fff',
//         textAlign: 'center'
//       }}>
//         <Container>
//           <h3 style={{
//             fontSize: '1.2rem',
//             fontWeight: '600',
//             color: '#ffd700',
//             marginBottom: '15px',
//             letterSpacing: '2px',
//             textTransform: 'uppercase'
//           }}>HYBRID CLOUD</h3>
//           <h2 style={{
//             fontSize: '2.8rem',
//             fontWeight: '800',
//             marginBottom: '25px',
//             lineHeight: '1.3',
//             textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
//           }}>
//             Your Partner in World-Class <br/>Training and Development
//           </h2>
//           <p style={{
//             fontSize: '1.1rem',
//             lineHeight: '1.8',
//             maxWidth: '800px',
//             margin: '0 auto 30px',
//             color: '#f0f0f0'
//           }}>
//             Welcome to Hybrid Cloud, your trusted tech education hub in Mahe. We offer personalized, hands-on training in AWS, Azure, Google Cloud, Java, Terraform, Kubernetes, Python. Our curriculum blends real-world projects with expert guidance to build job-ready skills. Join a collaborative community, earn industry-recognized certifications, and advance your career in today's competitive, cloud-driven world—all in
//           </p>
          
//         </Container>
//       </div>

//       {/* Mission & Vision Section */}
//       <div style={{
//         padding: '80px 20px',
//         background: '#f8f9fa'
//       }}>
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={5} className="mb-4">
//               <Card style={{
//                 border: 'none',
//                 borderRadius: '15px',
//                 overflow: 'hidden',
//                 boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//                 height: '100%',
//                 transition: 'transform 0.3s ease'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
//               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
//                 <Card.Img 
//                   variant="top" 
//                   src="assets/mission.jpg"
//                   style={{
//                     height: '300px',
//                     objectFit: 'cover'
//                   }}/>
//                 <Card.Body  style={{ padding: '30px' }} >
                  
//                   <Card.Title  style={{
//                     fontSize: '1.8rem',
//                     fontWeight: '700',
//                     color: '#667eea',
//                     marginBottom: '20px'
//                   }}>Our Mission</Card.Title>
//                   <Card.Text style={{
//                     fontSize: '1rem',
//                     lineHeight: '1.7',
//                     color: '#555'
//                   }}>
                    
//                     Driven by the belief that education unlocks limitless potential,Hybrid Cloud  envisions becoming a leading provider of cloud training in Bangalore. We aim to foster a culture of continuous learning and innovation, where individuals are empowered to push boundaries, embrace challenges, and achieve their goals with confidence and purpose.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={5} className="mb-4">
//               <Card style={{
//                 border: 'none',
//                 borderRadius: '15px',
//                 overflow: 'hidden',
//                 boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//                 height: '100%',
//                 transition: 'transform 0.3s ease'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
//               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
//                 <Card.Img 
//                   variant="top" 
//                   src="assets/vision.jpg"
//                   style={{
//                     height: '300px',
//                     objectFit: 'cover'
//                   }}
//                 />
//                 <Card.Body style={{ padding: '30px' }}>
//                   <Card.Title style={{
//                     fontSize: '1.8rem',
//                     fontWeight: '700',
//                     color: '#764ba2',
//                     marginBottom: '20px'
//                   }}>Our Vision</Card.Title>
//                   <Card.Text style={{
//                     fontSize: '1rem',
//                     lineHeight: '1.7',
//                     color: '#555'
//                   }}>
//                     At Hybrid Cloud , our Vision is to bridge the gap between ambition and expertise by providing comprehensive cloud training programs tailored to the diverse needs of our students. We strive to equip individuals with the practical skills and knowledge needed to thrive in the competitive tech industry, while building a strong community of confident and capable cloud professionals.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Why Choose Section */}
//       <div style={{
//         padding: '80px 20px',
//         background: '#fff'
//       }}>
//         <Container>
//           <div style={{ textAlign: 'center', marginBottom: '50px' }}>
//             <h6 style={{
//               fontSize: '1rem',
//               fontWeight: '600',
//               color: '#667eea',
//               marginBottom: '15px',
//               letterSpacing: '2px',
//               textTransform: 'uppercase'
//             }}>WHY CHOOSE CLOUD INSTITUTION</h6>
//             <h4 style={{
//               fontSize: '2.2rem',
//               fontWeight: '700',
//               color: '#333',
//               lineHeight: '1.4',
//               maxWidth: '900px',
//               margin: '0 auto'
//             }}>The Hybrid Cloud  Advantage: Empowering Your Tech Journey</h4>
//           </div>

//           <Row className="justify-content-center">
//             <Col md={4} className="mb-4">
//               <Card style={{
//                 border: 'none',
//                 borderRadius: '15px',
//                 overflow: 'hidden',
//                 boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//                 height: '100%',
//                 transition: 'transform 0.3s ease'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
//               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
//                 <Card.Img 
//                   variant="top" 
                  
//                   style={{
//                     height: '250px',
//                     objectFit: 'cover'
//                   }} 
//                   src={"assets/expert instructor.png"}
//                 />
//                 <Card.Body style={{ padding: '25px' }}>
//                   <Card.Title style={{
//                     fontSize: '1.5rem',
//                     fontWeight: '700',
//                     color: '#333',
//                     marginBottom: '15px'
//                   }}>Expert Instructors</Card.Title>
//                   <Card.Text style={{
//                     fontSize: '1rem',
//                     lineHeight: '1.7',
//                     color: '#555'
//                   }}>
//                     Our courses are led by industry experts who bring real-world experience and knowledge to the classroom, ensuring that our students receive the most up-to-date and relevant training.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={4} className="mb-4">
//               <Card style={{
//                 border: 'none',
//                 borderRadius: '15px',
//                 overflow: 'hidden',
//                 boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//                 height: '100%',
//                 transition: 'transform 0.3s ease'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
//               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
//                 <Card.Img 
//                   variant="top" 
//                   src="assets/flexible.webp"
//                   style={{
//                     height: '250px',
//                     objectFit: 'cover'
//                   }}
//                 />
//                 <Card.Body style={{ padding: '25px' }}>
//                   <Card.Title style={{
//                     fontSize: '1.5rem',
//                     fontWeight: '700',
//                     color: '#333',
//                     marginBottom: '15px'
//                   }}>Flexible Learning Options</Card.Title>
//                   <Card.Text style={{
//                     fontSize: '1rem',
//                     lineHeight: '1.7',
//                     color: '#555'
//                   }}>
//                     Whether you prefer in-person classes or online learning, we offer flexible options to accommodate your schedule and learning preferences.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={4} className="mb-4">
//               <Card style={{
//                 border: 'none',
//                 borderRadius: '15px',
//                 overflow: 'hidden',
//                 boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//                 height: '100%',
//                 transition: 'transform 0.3s ease'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
//               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
//                 <Card.Img 
//                   variant="top" 
//                   src="assets/support.webp"
//                   style={{
//                     height: '250px',
//                     objectFit: 'cover'
//                   }}
//                 />
//                 <Card.Body style={{ padding: '25px' }}>
//                   <Card.Title style={{
//                     fontSize: '1.5rem',
//                     fontWeight: '700',
//                     color: '#333',
//                     marginBottom: '15px'
//                   }}>Career Support</Card.Title>
//                   <Card.Text style={{
//                     fontSize: '1rem',
//                     lineHeight: '1.7',
//                     color: '#555'
//                   }}>
//                     Beyond training, we provide career support services to assist our students in securing job placements and advancing their careers in the tech industry.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Benefits Section */}
//       <div style={{
//         padding: '80px 20px',
//         background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//       }}>
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6} className="mb-4 mb-md-0">
//               <h2 style={{
//                 fontSize: '2.5rem',
//                 fontWeight: '800',
//                 color: '#333',
//                 marginBottom: '25px',
//                 lineHeight: '1.3'
//               }}>
//                 Benefits of Enrolling in Courses at Hybrid Cloud, Mahe
//               </h2>
//               <p style={{
//                 fontSize: '1.05rem',
//                 lineHeight: '1.8',
//                 color: '#555',
//                 marginBottom: '30px'
//               }}>
//                 At Hybrid Cloud, our Cloud Computing Training offers a truly transformative learning experience. You'll gain comprehensive knowledge of cloud technologies, develop hands-on skills, and acquire valuable industry insights. Our training is designed to prepare you for real-world challenges and includes certification opportunities that significantly boost your professional profile.
//               </p>
//             </Col>

//             <Col md={6}>
//               <div style={{
//                 background: '#fff',
//                 padding: '40px',
//                 borderRadius: '15px',
//                 boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
//               }}>
//                 <h6 style={{
//                   fontSize: '1.3rem',
//                   fontWeight: '700',
//                   color: '#667eea',
//                   marginBottom: '25px'
//                 }}>Why Choose Cloud Institution?</h6>
//                 <ul style={{
//                   listStyle: 'none',
//                   padding: 0,
//                   margin: 0
//                 }}>
//                   {[
//                     '100% Placement Support Upon Course Completion',
//                     'Preparation for Global Certification Exams',
//                     'Clear Understanding of Complex Technical Concepts',
//                     'Resume Building & Interview Preparation Assistance',
//                     'Industry-Integrated Labs and Projects',
//                     'Cloud Computing Certification Awarded After Course Completion'
//                   ].map((item, index) => (
//                     <li key={index} style={{
//                       padding: '12px 0',
//                       paddingLeft: '35px',
//                       position: 'relative',
//                       fontSize: '1rem',
//                       color: '#555',
//                       lineHeight: '1.6',
//                       borderBottom: index < 5 ? '1px solid #e0e0e0' : 'none'
//                     }}>
//                       <span style={{
//                         position: 'absolute',
//                         left: '0',
//                         top: '12px',
//                         width: '20px',
//                         height: '20px',
//                         background: '#667eea',
//                         borderRadius: '50%',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: '#fff',
//                         fontSize: '0.8rem',
//                         fontWeight: 'bold'
//                       }}>✓</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <p style={{
//                   fontSize: '1rem',
//                   lineHeight: '1.7',
//                   color: '#555',
//                   marginTop: '25px',
//                   fontStyle: 'italic'
//                 }}>
//                   Join Hybrid Cloud to stay ahead in the rapidly evolving field of cloud computing and take confident steps toward a successful career.
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Footer Section */}
//       {/* Footer */}
//       <footer style={styles.footerSection}>
//         <div style={styles.footerContainer}>
//           {/* About */}
//           <div style={{ ...styles.footerColumn, ...styles.aboutColumn }}>
//             <img src="assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
//             <p style={styles.footerDescription}>Hybrid Cloud offers hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, and more.</p>
//           </div>

//           {/* Top Courses */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Top Courses <span style={styles.headingUnderline}></span></h3>
//             <ul style={styles.footerList}>
//               {courseLinks.map((link, idx) => (
//                 <li key={idx} style={styles.footerListItem}>
//                   <a
//                     href={link.href}
//                     style={hoveredLink === idx ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
//                     onMouseLeave={() => setHoveredLink(null)}
//                   >
//                     <span style={hoveredLink === idx ? { ...styles.linkArrow, ...styles.linkArrowVisible } : styles.linkArrow}>→</span>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Quick Links <span style={styles.headingUnderline}></span></h3>
//             <ul style={styles.footerList}>
//               {aboutLinks.map((link, idx) => (
//                 <li key={idx} style={styles.footerListItem}>
//                   <a
//                     href={link.href}
//                     style={hoveredLink === idx + 10 ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
//                     onMouseLeave={() => setHoveredLink(null)}
//                   >
//                     <span style={hoveredLink === idx + 10 ? { ...styles.linkArrow, ...styles.linkArrowVisible } : styles.linkArrow}>→</span>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Contact Us <span style={styles.headingUnderline}></span></h3>
//             <div style={styles.contactInfo}>
//               <h4 style={styles.locationName}>Mahe</h4>
//               {[
//                 { icon: 'assets/icons8-location-96.png', text: 'Anandam realty, palloor, Mahe - 673310' },
//                 { icon: 'assets/icons8-email-24.png', text: 'info@hybridcloud.com' },
//                 { icon: 'assets/icons8-phone-50.png', text: '+91 9344613129' },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   style={hoveredContact === idx ? { ...styles.contactItem, ...styles.contactItemHovered } : styles.contactItem}
//                   onMouseEnter={() => setHoveredContact(idx)}
//                   onMouseLeave={() => setHoveredContact(null)}
//                 >
//                   <img src={item.icon} style={styles.contactIcon} alt="" />
//                   <p style={styles.contactText}>{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div style={styles.footerBottom}>
//           <p style={styles.footerBottomText}>&copy; 2025 Hybrid Cloud. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default About


import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);
  
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

  const styles = {
    // ---------- Footer ----------
    footerSection: {
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      padding: 'clamp(40px, 6vw, 60px) clamp(15px, 3vw, 20px) 0',
      marginTop: 'clamp(60px, 8vw, 80px)',
      display: 'flex',
      flexDirection: 'column',
    },
    footerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
      gap: 'clamp(25px, 4vw, 40px)',
      paddingBottom: 'clamp(30px, 4vw, 40px)',
      width: '100%',
    },
    footerColumn: { 
      padding: '0 clamp(5px, 1.5vw, 10px)',
    },
    aboutColumn: { 
      gridColumn: 'span 1',
    },
    footerLogo: { 
      maxWidth: 'clamp(140px, 30vw, 180px)', 
      marginBottom: 'clamp(15px, 2.5vw, 20px)',
      width: '100%',
      height: 'auto',
    },
    footerDescription: { 
      fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', 
      lineHeight: '1.7', 
      color: '#cbd5e0', 
      marginBottom: 'clamp(15px, 2.5vw, 20px)',
    },
    footerHeading: { 
      fontSize: 'clamp(1rem, 2.3vw, 1.3rem)', 
      fontWeight: '600', 
      marginBottom: 'clamp(18px, 3vw, 25px)', 
      color: 'white', 
      position: 'relative', 
      paddingBottom: 'clamp(8px, 1.5vw, 12px)',
      width: '100%',
    },
    headingUnderline: { 
      position: 'absolute', 
      bottom: '0', 
      left: '0', 
      width: 'clamp(40px, 8vw, 50px)', 
      height: '3px', 
      background: 'linear-gradient(90deg, #FF9900, #FF6F00)', 
      borderRadius: '2px',
    },
    footerList: { 
      listStyle: 'none', 
      padding: 0, 
      margin: 0,
    },
    footerListItem: { 
      marginBottom: 'clamp(10px, 2vw, 12px)',
    },
    footerLink: { 
      color: '#cbd5e0', 
      textDecoration: 'none', 
      fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', 
      display: 'inline-block', 
      position: 'relative', 
      transition: 'all 0.3s ease',
      lineHeight: '1.5',
    },
    linkArrow: { 
      opacity: 0, 
      transition: 'opacity 0.3s ease', 
      marginRight: '5px',
    },
    linkArrowVisible: { 
      opacity: 1,
    },
    footerLinkHovered: { 
      color: 'white', 
      paddingLeft: 'clamp(15px, 3vw, 20px)',
    },
    locationName: { 
      fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)', 
      fontWeight: '600', 
      marginBottom: 'clamp(12px, 2.5vw, 15px)', 
      color: '#FF9900',
      marginTop: 0,
    },
    contactInfo: { 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'clamp(12px, 2.5vw, 15px)',
    },
    contactItem: { 
      display: 'flex', 
      alignItems: 'flex-start', 
      gap: 'clamp(10px, 2vw, 15px)', 
      transition: 'transform 0.3s ease',
    },
    contactItemHovered: { 
      transform: 'translateX(5px)',
    },
    contactIcon: { 
      width: 'clamp(20px, 3vw, 24px)', 
      height: 'clamp(20px, 3vw, 24px)', 
      filter: 'brightness(0) invert(1)', 
      opacity: '0.8', 
      flexShrink: 0, 
      marginTop: '2px',
    },
    contactText: { 
      margin: 0, 
      color: '#cbd5e0', 
      fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', 
      lineHeight: '1.6',
    },
    footerBottom: { 
      borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
      padding: 'clamp(20px, 3vw, 25px) 0', 
      textAlign: 'center',
      background: 'rgba(0,0,0,0.2)',
    },
    footerBottomText: { 
      margin: 0, 
      color: '#a0aec0', 
      fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)',
      padding: '0 15px',
    },
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 'clamp(60px, 8vw, 80px) clamp(15px, 3vw, 20px)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <Container>
          <h3 style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
            fontWeight: '600',
            color: '#ffd700',
            marginBottom: 'clamp(12px, 2.5vw, 15px)',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>HYBRID CLOUD</h3>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
            fontWeight: '800',
            marginBottom: 'clamp(20px, 3.5vw, 25px)',
            lineHeight: '1.3',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Your Partner in World-Class <br/>Training and Development
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#f0f0f0',
            padding: '0 15px'
          }}>
            Welcome to Hybrid Cloud, your trusted tech education hub in Mahe. We offer personalized, hands-on training in AWS, Azure, Google Cloud, Java, Terraform, Kubernetes, Python. Our curriculum blends real-world projects with expert guidance to build job-ready skills. Join a collaborative community, earn industry-recognized certifications, and advance your career in today's competitive, cloud-driven world—all in
          </p>
        </Container>
      </div>

      {/* Mission & Vision Section */}
      <div style={{
        padding: 'clamp(60px, 8vw, 80px) clamp(15px, 3vw, 20px)',
        background: '#f8f9fa'
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={5} className="mb-4">
              <Card style={{
                border: 'none',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <Card.Img 
                  variant="top" 
                  src="assets/mission.jpg"
                  style={{
                    height: 'clamp(200px, 30vw, 300px)',
                    objectFit: 'cover'
                  }}/>
                <Card.Body style={{ padding: 'clamp(20px, 4vw, 30px)' }}>
                  <Card.Title style={{
                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                    fontWeight: '700',
                    color: '#667eea',
                    marginBottom: 'clamp(15px, 2.5vw, 20px)'
                  }}>Our Mission</Card.Title>
                  <Card.Text style={{
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                    lineHeight: '1.7',
                    color: '#555'
                  }}>
                    Driven by the belief that education unlocks limitless potential, Hybrid Cloud envisions becoming a leading provider of cloud training in Bangalore. We aim to foster a culture of continuous learning and innovation, where individuals are empowered to push boundaries, embrace challenges, and achieve their goals with confidence and purpose.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={5} className="mb-4">
              <Card style={{
                border: 'none',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <Card.Img 
                  variant="top" 
                  src="assets/vision.jpg"
                  style={{
                    height: 'clamp(200px, 30vw, 300px)',
                    objectFit: 'cover'
                  }}
                />
                <Card.Body style={{ padding: 'clamp(20px, 4vw, 30px)' }}>
                  <Card.Title style={{
                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                    fontWeight: '700',
                    color: '#764ba2',
                    marginBottom: 'clamp(15px, 2.5vw, 20px)'
                  }}>Our Vision</Card.Title>
                  <Card.Text style={{
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                    lineHeight: '1.7',
                    color: '#555'
                  }}>
                    At Hybrid Cloud, our Vision is to bridge the gap between ambition and expertise by providing comprehensive cloud training programs tailored to the diverse needs of our students. We strive to equip individuals with the practical skills and knowledge needed to thrive in the competitive tech industry, while building a strong community of confident and capable cloud professionals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Why Choose Section */}
      <div style={{
        padding: 'clamp(60px, 8vw, 80px) clamp(15px, 3vw, 20px)',
        background: '#fff'
      }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 50px)' }}>
            <h6 style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              fontWeight: '600',
              color: '#667eea',
              marginBottom: 'clamp(12px, 2.5vw, 15px)',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>WHY CHOOSE CLOUD INSTITUTION</h6>
            <h4 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: '700',
              color: '#333',
              lineHeight: '1.4',
              maxWidth: '900px',
              margin: '0 auto',
              padding: '0 15px'
            }}>The Hybrid Cloud Advantage: Empowering Your Tech Journey</h4>
          </div>

          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card style={{
                border: 'none',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <Card.Img 
                  variant="top" 
                  style={{
                    height: 'clamp(180px, 25vw, 250px)',
                    objectFit: 'cover'
                  }} 
                  src={"assets/expert instructor.png"}
                />
                <Card.Body style={{ padding: 'clamp(20px, 3.5vw, 25px)' }}>
                  <Card.Title style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)'
                  }}>Expert Instructors</Card.Title>
                  <Card.Text style={{
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                    lineHeight: '1.7',
                    color: '#555'
                  }}>
                    Our courses are led by industry experts who bring real-world experience and knowledge to the classroom, ensuring that our students receive the most up-to-date and relevant training.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card style={{
                border: 'none',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <Card.Img 
                  variant="top" 
                  src="assets/flexible.webp"
                  style={{
                    height: 'clamp(180px, 25vw, 250px)',
                    objectFit: 'cover'
                  }}
                />
                <Card.Body style={{ padding: 'clamp(20px, 3.5vw, 25px)' }}>
                  <Card.Title style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)'
                  }}>Flexible Learning Options</Card.Title>
                  <Card.Text style={{
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                    lineHeight: '1.7',
                    color: '#555'
                  }}>
                    Whether you prefer in-person classes or online learning, we offer flexible options to accommodate your schedule and learning preferences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card style={{
                border: 'none',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <Card.Img 
                  variant="top" 
                  src="assets/support.webp"
                  style={{
                    height: 'clamp(180px, 25vw, 250px)',
                    objectFit: 'cover'
                  }}
                />
                <Card.Body style={{ padding: 'clamp(20px, 3.5vw, 25px)' }}>
                  <Card.Title style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: 'clamp(12px, 2.5vw, 15px)'
                  }}>Career Support</Card.Title>
                  <Card.Text style={{
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                    lineHeight: '1.7',
                    color: '#555'
                  }}>
                    Beyond training, we provide career support services to assist our students in securing job placements and advancing their careers in the tech industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Benefits Section */}
      <div style={{
        padding: 'clamp(60px, 8vw, 80px) clamp(15px, 3vw, 20px)',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 style={{
                fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)',
                fontWeight: '800',
                color: '#333',
                marginBottom: 'clamp(20px, 3.5vw, 25px)',
                lineHeight: '1.3',
                padding: '0 10px'
              }}>
                Benefits of Enrolling in Courses at Hybrid Cloud, Mahe
              </h2>
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: 'clamp(25px, 4vw, 30px)',
                padding: '0 10px'
              }}>
                At Hybrid Cloud, our Cloud Computing Training offers a truly transformative learning experience. You'll gain comprehensive knowledge of cloud technologies, develop hands-on skills, and acquire valuable industry insights. Our training is designed to prepare you for real-world challenges and includes certification opportunities that significantly boost your professional profile.
              </p>
            </Col>

            <Col md={6}>
              <div style={{
                background: '#fff',
                padding: 'clamp(25px, 5vw, 40px)',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <h6 style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                  fontWeight: '700',
                  color: '#667eea',
                  marginBottom: 'clamp(20px, 3.5vw, 25px)'
                }}>Why Choose Cloud Institution?</h6>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    '100% Placement Support Upon Course Completion',
                    'Preparation for Global Certification Exams',
                    'Clear Understanding of Complex Technical Concepts',
                    'Resume Building & Interview Preparation Assistance',
                    'Industry-Integrated Labs and Projects',
                    'Cloud Computing Certification Awarded After Course Completion'
                  ].map((item, index) => (
                    <li key={index} style={{
                      padding: 'clamp(10px, 2vw, 12px) 0',
                      paddingLeft: 'clamp(30px, 5vw, 35px)',
                      position: 'relative',
                      fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                      color: '#555',
                      lineHeight: '1.6',
                      borderBottom: index < 5 ? '1px solid #e0e0e0' : 'none'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: 'clamp(10px, 2vw, 12px)',
                        width: 'clamp(18px, 3vw, 20px)',
                        height: 'clamp(18px, 3vw, 20px)',
                        background: '#667eea',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                        fontWeight: 'bold'
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                  lineHeight: '1.7',
                  color: '#555',
                  marginTop: 'clamp(20px, 3.5vw, 25px)',
                  fontStyle: 'italic'
                }}>
                  Join Hybrid Cloud to stay ahead in the rapidly evolving field of cloud computing and take confident steps toward a successful career.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Section */}
      <footer style={styles.footerSection}>
        <div style={styles.footerContainer}>
          {/* About */}
          <div style={{ ...styles.footerColumn, ...styles.aboutColumn }}>
            <img src="assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
            <p style={styles.footerDescription}>At Hybrid Cloud, your trusted tech education hub in Mahe, we provide personalized, 
              hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, 
              and more—blending real-world projects, expert mentorship, and certifications to launch 
              your cloud career..</p>
          </div>

          {/* Top Courses */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>
              Top Courses 
              <span style={styles.headingUnderline}></span>
            </h3>
            <ul style={styles.footerList}>
              {courseLinks.map((link, idx) => (
                <li key={idx} style={styles.footerListItem}>
                  <a
                    href={link.href}
                    style={hoveredLink === idx ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
                    onMouseEnter={() => setHoveredLink(idx)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={hoveredLink === idx ? { ...styles.linkArrow, ...styles.linkArrowVisible } : styles.linkArrow}>→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>
              Quick Links 
              <span style={styles.headingUnderline}></span>
            </h3>
            <ul style={styles.footerList}>
              {aboutLinks.map((link, idx) => (
                <li key={idx} style={styles.footerListItem}>
                  <a
                    href={link.href}
                    style={hoveredLink === idx + 10 ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
                    onMouseEnter={() => setHoveredLink(idx + 10)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span style={hoveredLink === idx + 10 ? { ...styles.linkArrow, ...styles.linkArrowVisible } : styles.linkArrow}>→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>
              Contact Us 
              <span style={styles.headingUnderline}></span>
            </h3>
            <div style={styles.contactInfo}>
              <h4 style={styles.locationName}>Mahe</h4>
              {[
                { icon: 'assets/icons8-location-96.png', text: 'Anandam realty, palloor, Mahe - 673310' },
                { icon: 'assets/icons8-email-24.png', text: 'info@hybridcloud.com' },
                { icon: 'assets/icons8-phone-50.png', text: '+91 9344613129' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={hoveredContact === idx ? { ...styles.contactItem, ...styles.contactItemHovered } : styles.contactItem}
                  onMouseEnter={() => setHoveredContact(idx)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <img src={item.icon} style={styles.contactIcon} alt="" />
                  <p style={styles.contactText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>&copy; 2025 Hybrid Cloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default About