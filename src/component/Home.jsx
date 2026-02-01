
// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const Home = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const [hoveredCourse, setHoveredCourse] = useState(null);

//   const courseLinks = [
//     { name: 'AWS Certification Training', href: '/amazone' },
//     { name: 'Azure Certification Training', href: '/azure' },
//     { name: 'Kubernetes Training', href: '/kuber' },
//     { name: 'Python Full Stack Training', href: '/python' },
//     { name: 'Java Full Stack Training', href: '/java' },
//     { name: 'Terraform Training', href: '/teraform' },
//     { name: 'Google Cloud Platform Training', href: '/gcp' },
//     { name: 'DevOps Training', href: '/devops' },
//   ];

//   const aboutLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Contact Us', href: '/contactus' }
//   ];

//   const certificationBenefits = [
//     {
//       icon: '🎯',
//       title: 'Career Advancement',
//       description: 'Boost your career with industry-recognized certifications that employers value.',
//     },
//     {
//       icon: '💰',
//       title: 'Higher Salary',
//       description: 'Certified professionals earn 15-20% more than their non-certified peers.',
//     },
//     {
//       icon: '🌐',
//       title: 'Global Recognition',
//       description: 'Our certifications are recognized worldwide across leading tech companies.',
//     },
//     {
//       icon: '🚀',
//       title: 'Hands-on Experience',
//       description: 'Learn through practical projects and real-world scenarios, not just theory.',
//     },
//     {
//       icon: '👥',
//       title: 'Expert Mentorship',
//       description: 'Get guidance from industry experts with years of practical experience.',
//     },
//     {
//       icon: '📈',
//       title: 'Job Opportunities',
//       description: 'Access to exclusive job opportunities and career support services.',
//     }
//   ];

//   const faqs = [
//     {
//       question: 'Do I need prior tech experience?',
//       answer: 'No prior technical experience is required. Our courses are designed for beginners as well as professionals.'
//     },
//     {
//       question: 'How long does certification take?',
//       answer: 'Most certifications can be completed in 4-8 weeks with dedicated study and practice.'
//     },
//     {
//       question: 'Is placement assistance provided?',
//       answer: 'Yes, we provide comprehensive placement assistance including resume building and interview prep.'
//     },
//     {
//       question: 'Are classes online or offline?',
//       answer: 'We offer both online and offline classes to suit your learning preferences.'
//     }
//   ];

//   const styles = {
//     // Main Container
//     pageWrapper: {
//       fontFamily: "'Poppins', sans-serif",
//       background: '#ffffff',
//       minHeight: '100vh',
//     },

//     // Hero Carousel - Background removed
//     heroSection: {
//       overflow: 'hidden',
//       background: 'transparent',
//       padding: '0',
//     },
//     carouselImage: {
//       width: '100%',
//       height: '600px',
//       objectFit: 'cover',
//       filter: 'brightness(0.9)',
//       borderRadius: '0',
//     },
//     heroTextSection: {
//       background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
//       padding: '100px 20px',
//       textAlign: 'center',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     heroContent: {
//       maxWidth: '900px',
//       margin: '0 auto',
//       position: 'relative',
//       zIndex: 2,
//     },
//     heroTitle: {
//       fontSize: '3.5rem',
//       fontWeight: '800',
//       marginBottom: '20px',
//       color: 'white',
//       lineHeight: '1.2',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
//     },
//     heroSubtitle: {
//       fontSize: '1.4rem',
//       fontWeight: '300',
//       marginBottom: '30px',
//       color: 'white',
//       opacity: '0.95',
//     },
//     heroButton: {
//       background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
//       color: 'white',
//       border: 'none',
//       padding: '15px 40px',
//       fontSize: '1.1rem',
//       fontWeight: '600',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)',
//       transition: 'all 0.3s ease',
//     },

//     // Benefits Section
//     benefitsSection: {
//       padding: '100px 0',
//       background: 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)',
//       position: 'relative',
//     },
//     sectionTitle: {
//       fontSize: '3rem',
//       fontWeight: '700',
//       textAlign: 'center',
//       marginBottom: '20px',
//       color: '#1e3a8a',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
//     },
//     sectionSubtitle: {
//       fontSize: '1.2rem',
//       textAlign: 'center',
//       color: '#475569',
//       marginBottom: '60px',
//       maxWidth: '700px',
//       margin: '0 auto 60px',
//     },
//     benefitsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '30px',
//       padding: '0 20px',
//     },
//     benefitCard: {
//       background: 'white',
//       padding: '40px 30px',
//       borderRadius: '20px',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//       transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//       border: '2px solid transparent',
//       textAlign: 'center',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     benefitCardHovered: {
//       transform: 'translateY(-15px) scale(1.02)',
//       boxShadow: '0 25px 60px rgba(59, 130, 246, 0.3)',
//       borderColor: '#3b82f6',
//       background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     },
//     benefitIcon: {
//       fontSize: '3.5rem',
//       marginBottom: '20px',
//       display: 'block',
//     },
//     benefitTitle: {
//       fontSize: '1.4rem',
//       fontWeight: '600',
//       color: '#1e3a8a',
//       marginBottom: '15px',
//     },
//     benefitDescription: {
//       fontSize: '1rem',
//       color: '#64748b',
//       lineHeight: '1.7',
//     },

//     // FAQ Section
//     faqSection: {
//       padding: '100px 0',
//       background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
//       position: 'relative',
//     },
//     faqContainer: {
//       maxWidth: '1000px',
//       margin: '0 auto',
//       padding: '0 20px',
//     },
//     faqTitle: {
//       fontSize: '3rem',
//       fontWeight: '700',
//       textAlign: 'center',
//       marginBottom: '60px',
//       color: '#78350f',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
//     },
//     faqGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
//       gap: '25px',
//     },
//     faqCard: {
//       background: 'white',
//       padding: '30px',
//       borderRadius: '15px',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//       transition: 'all 0.3s ease',
//       border: '2px solid transparent',
//     },
//     faqCardHovered: {
//       transform: 'scale(1.03)',
//       boxShadow: '0 20px 50px rgba(245, 158, 11, 0.3)',
//       borderColor: '#f59e0b',
//     },
//     faqQuestion: {
//       fontSize: '1.2rem',
//       fontWeight: '600',
//       color: '#1e3a8a',
//       marginBottom: '15px',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '10px',
//     },
//     faqAnswer: {
//       fontSize: '1rem',
//       color: '#475569',
//       lineHeight: '1.8',
//     },

//     // CTA Section
//     ctaSection: {
//       padding: '100px 0',
//       background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
//       textAlign: 'center',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     ctaTitle: {
//       fontSize: '2.5rem',
//       fontWeight: '700',
//       color: 'white',
//       marginBottom: '20px',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
//     },
//     ctaText: {
//       fontSize: '1.2rem',
//       color: 'white',
//       opacity: '0.95',
//       marginBottom: '30px',
//     },
//     ctaButton: {
//       background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
//       color: 'white',
//       border: 'none',
//       padding: '15px 50px',
//       fontSize: '1.1rem',
//       fontWeight: '600',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)',
//       transition: 'all 0.3s ease',
//     },

//     // Footer
//     footerSection: {
//       background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
//       color: 'white',
//       padding: '60px 20px 0',
//     },
//     footerContainer: {
//       maxWidth: '1400px',
//       margin: '0 auto',
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '40px',
//       paddingBottom: '40px',
//     },
//     footerColumn: {
//       padding: '0 20px',
//     },
//     footerLogo: {
//       maxWidth: '180px',
//       marginBottom: '20px',
//     },
//     footerDescription: {
//       fontSize: '0.95rem',
//       lineHeight: '1.8',
//       color: '#d1d5db',
//     },
//     footerHeading: {
//       fontSize: '1.3rem',
//       fontWeight: '600',
//       marginBottom: '25px',
//       color: 'white',
//       borderBottom: '3px solid #f59e0b',
//       paddingBottom: '10px',
//       display: 'inline-block',
//     },
//     footerList: {
//       listStyle: 'none',
//       padding: 0,
//       margin: 0,
//     },
//     footerListItem: {
//       marginBottom: '12px',
//     },
//     footerLink: {
//       color: '#d1d5db',
//       textDecoration: 'none',
//       fontSize: '0.95rem',
//       transition: 'all 0.3s ease',
//       display: 'inline-block',
//     },
//     footerLinkHovered: {
//       color: '#f59e0b',
//       paddingLeft: '10px',
//     },
//     contactItem: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: '12px',
//       marginBottom: '15px',
//     },
//     contactIcon: {
//       width: '20px',
//       height: '20px',
//       filter: 'brightness(0) invert(1)',
//       opacity: '0.8',
//     },
//     contactText: {
//       margin: 0,
//       color: '#d1d5db',
//       fontSize: '0.9rem',
//       lineHeight: '1.6',
//     },
//     footerBottom: {
//       borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//       padding: '25px 0',
//       textAlign: 'center',
//       background: 'rgba(0,0,0,0.2)',
//     },
//     footerBottomText: {
//       margin: 0,
//       color: '#9ca3af',
//       fontSize: '0.9rem',
//     },
//   };

//   return (
//     <div style={styles.pageWrapper}>
//       {/* Hero Carousel */}
//       <div style={styles.heroSection}>
//         <Carousel interval={3000} pause={false} controls={false} indicators={true}>
//           <Carousel.Item>
//             <img src="assets/assure.png" style={styles.carouselImage} alt="Training" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="assets/aswcloudtraining.webp" style={styles.carouselImage} alt="AWS" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="assets/googlecloud.webp" style={styles.carouselImage} alt="Google Cloud" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="assets/javafullstack.png" style={styles.carouselImage} alt="Java" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="assets/pythoncurl.webp" style={styles.carouselImage} alt="Python" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="assets/teraform.webp" style={styles.carouselImage} alt="Terraform" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="assets/kubernets.webp" style={styles.carouselImage} alt="Kubernetes" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="assets/devops.webp" style={styles.carouselImage} alt="DevOps" />
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       {/* Hero Text Section */}
//       <div style={styles.heroTextSection}>
//         <div style={styles.heroContent}>
//           <h1 style={styles.heroTitle}>Transform Your Career with Cloud & IT Certifications</h1>
//           <p style={styles.heroSubtitle}>Industry-leading training programs designed for your success</p>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <section style={styles.benefitsSection}>
//         <Container>
//           <h2 style={styles.sectionTitle}>Why Choose Hybrid Cloud?</h2>
//           <p style={styles.sectionSubtitle}>
//             Join thousands of professionals who have transformed their careers with our comprehensive training programs
//           </p>
//           <div style={styles.benefitsGrid}>
//             {certificationBenefits.map((benefit, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   ...styles.benefitCard,
//                   ...(hoveredCard === idx ? styles.benefitCardHovered : {}),
//                 }}
//                 onMouseEnter={() => setHoveredCard(idx)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <span style={styles.benefitIcon}>{benefit.icon}</span>
//                 <h3 style={{
//                   ...styles.benefitTitle,
//                   color: hoveredCard === idx ? 'white' : '#1e3a8a'
//                 }}>{benefit.title}</h3>
//                 <p style={{
//                   ...styles.benefitDescription,
//                   color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : '#64748b'
//                 }}>{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* FAQ Section */}
//       <section style={styles.faqSection}>
//         <div style={styles.faqContainer}>
//           <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
//           <div style={styles.faqGrid}>
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 style={hoveredCard === `faq-${idx}` ? { ...styles.faqCard, ...styles.faqCardHovered } : styles.faqCard}
//                 onMouseEnter={() => setHoveredCard(`faq-${idx}`)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <h3 style={styles.faqQuestion}>
//                   <span style={{ color: '#f59e0b' }}>Q:</span> {faq.question}
//                 </h3>
//                 <p style={styles.faqAnswer}>{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={styles.footerSection}>
//         <div style={styles.footerContainer}>
//           {/* About */}
//           <div style={styles.footerColumn}>
//             <img src="assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
//             <p style={styles.footerDescription}>
//               Hybrid Cloud offers hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, and more.
//             </p>
//           </div>

//           {/* Top Courses */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Top Courses</h3>
//             <ul style={styles.footerList}>
//               {courseLinks.map((link, idx) => (
//                 <li key={idx} style={styles.footerListItem}>
//                   <a
//                     href={link.href}
//                     style={hoveredCourse === idx ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
//                     onMouseEnter={() => setHoveredCourse(idx)}
//                     onMouseLeave={() => setHoveredCourse(null)}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Quick Links</h3>
//             <ul style={styles.footerList}>
//               {aboutLinks.map((link, idx) => (
//                 <li key={idx} style={styles.footerListItem}>
//                   <a
//                     href={link.href}
//                     style={hoveredLink === idx ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
//                     onMouseEnter={() => setHoveredLink(idx)}
//                     onMouseLeave={() => setHoveredLink(null)}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Contact Us</h3>
//             <div>
//               <h4 style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '15px' }}>Mahe</h4>
//               <div style={styles.contactItem}>
//                 <img src="assets/icons8-location-96.png" style={styles.contactIcon} alt="" />
//                 <p style={styles.contactText}>Anandam realty, palloor, Mahe - 673310</p>
//               </div>
//               <div style={styles.contactItem}>
//                 <img src="assets/icons8-email-24.png" style={styles.contactIcon} alt="" />
//                 <p style={styles.contactText}>info@hybridcloud.com</p>
//               </div>
//               <div style={styles.contactItem}>
//                 <img src="assets/icons8-phone-50.png" style={styles.contactIcon} alt="" />
//                 <p style={styles.contactText}>+91 9344613129</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={styles.footerBottom}>
//           <p style={styles.footerBottomText}>&copy; 2025 Hybrid Cloud. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;




// import React, { useState, useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Container } from 'react-bootstrap';

// const Home = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const [hoveredCourse, setHoveredCourse] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Handle mobile detection
//   useEffect(() => {
//     const updateResponsiveSettings = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//     };

//     updateResponsiveSettings();
//     window.addEventListener('resize', updateResponsiveSettings);
//     return () => window.removeEventListener('resize', updateResponsiveSettings);
//   }, []);

//   const courseLinks = [
//     { name: 'AWS Certification Training', href: '/amazone' },
//     { name: 'Azure Certification Training', href: '/azure' },
//     { name: 'Kubernetes Training', href: '/kuber' },
//     { name: 'Python Full Stack Training', href: '/python' },
//     { name: 'Java Full Stack Training', href: '/java' },
//     { name: 'Terraform Training', href: '/teraform' },
//     { name: 'Google Cloud Platform Training', href: '/gcp' },
//     { name: 'DevOps Training', href: '/devops' },
//   ];

//   const aboutLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Contact Us', href: '/contactus' }
//   ];

//   const certificationBenefits = [
//     {
//       icon: '🎯',
//       title: 'Career Advancement',
//       description: 'Boost your career with industry-recognized certifications that employers value.',
//     },
//     {
//       icon: '💰',
//       title: 'Higher Salary',
//       description: 'Certified professionals earn 15-20% more than their non-certified peers.',
//     },
//     {
//       icon: '🌐',
//       title: 'Global Recognition',
//       description: 'Our certifications are recognized worldwide across leading tech companies.',
//     },
//     {
//       icon: '🚀',
//       title: 'Hands-on Experience',
//       description: 'Learn through practical projects and real-world scenarios, not just theory.',
//     },
//     {
//       icon: '👥',
//       title: 'Expert Mentorship',
//       description: 'Get guidance from industry experts with years of practical experience.',
//     },
//     {
//       icon: '📈',
//       title: 'Job Opportunities',
//       description: 'Access to exclusive job opportunities and career support services.',
//     }
//   ];

//   const faqs = [
//     {
//       question: 'Do I need prior tech experience?',
//       answer: 'No prior technical experience is required. Our courses are designed for beginners as well as professionals.'
//     },
//     {
//       question: 'How long does certification take?',
//       answer: 'Most certifications can be completed in 4-8 weeks with dedicated study and practice.'
//     },
//     {
//       question: 'Is placement assistance provided?',
//       answer: 'Yes, we provide comprehensive placement assistance including resume building and interview prep.'
//     },
//     {
//       question: 'Are classes online or offline?',
//       answer: 'We offer both online and offline classes to suit your learning preferences.'
//     }
//   ];

//   const styles = {
//     pageWrapper: {
//       fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//       background: '#ffffff',
//       minHeight: '100vh',
//       width: '100%',
//       overflowX: 'hidden',
//     },
//     heroSection: {
//       overflow: 'hidden',
//       background: 'transparent',
//       padding: '0',
//       width: '100%',
//       margin: '0',
//     },
//     carouselWrapper: {
//       width: '100%',
//       maxWidth: '100%',
//       margin: '0 auto',
//       overflow: 'hidden',
//       position: 'relative',
//     },
//     heroTextSection: {
//       background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
//       padding: 'clamp(40px, 8vw, 100px) clamp(15px, 5vw, 20px)',
//       textAlign: 'center',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     heroContent: {
//       maxWidth: '900px',
//       margin: '0 auto',
//       position: 'relative',
//       zIndex: 2,
//       padding: '0 10px',
//     },
//     heroTitle: {
//       fontSize: 'clamp(1.5rem, 4.5vw, 3.5rem)',
//       fontWeight: '800',
//       marginBottom: 'clamp(15px, 3vw, 20px)',
//       color: 'white',
//       lineHeight: '1.2',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
//       wordBreak: 'break-word',
//     },
//     heroSubtitle: {
//       fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)',
//       fontWeight: '300',
//       marginBottom: 'clamp(20px, 4vw, 30px)',
//       color: 'white',
//       opacity: '0.95',
//       lineHeight: '1.5',
//     },
//     benefitsSection: {
//       padding: 'clamp(50px, 8vw, 100px) 0',
//       background: 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     sectionTitle: {
//       fontSize: 'clamp(1.5rem, 4vw, 3rem)',
//       fontWeight: '700',
//       textAlign: 'center',
//       marginBottom: 'clamp(15px, 3vw, 20px)',
//       color: '#1e3a8a',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
//       padding: '0 15px',
//       lineHeight: '1.3',
//     },
//     sectionSubtitle: {
//       fontSize: 'clamp(0.9rem, 2.2vw, 1.2rem)',
//       textAlign: 'center',
//       color: '#475569',
//       marginBottom: 'clamp(40px, 6vw, 60px)',
//       maxWidth: '700px',
//       margin: '0 auto clamp(40px, 6vw, 60px)',
//       padding: '0 20px',
//       lineHeight: '1.6',
//     },
//     benefitsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
//       gap: 'clamp(15px, 2.5vw, 30px)',
//       padding: '0 clamp(15px, 3vw, 20px)',
//       maxWidth: '1400px',
//       margin: '0 auto',
//     },
//     benefitCard: {
//       background: 'white',
//       padding: 'clamp(25px, 4vw, 40px) clamp(20px, 3.5vw, 30px)',
//       borderRadius: 'clamp(15px, 3vw, 20px)',
//       boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
//       transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//       border: '2px solid transparent',
//       textAlign: 'center',
//       position: 'relative',
//       overflow: 'hidden',
//       minHeight: isMobile ? 'auto' : '280px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'flex-start',
//     },
//     benefitCardHovered: {
//       transform: isMobile ? 'scale(1.01)' : 'translateY(-10px) scale(1.02)',
//       boxShadow: '0 20px 50px rgba(59, 130, 246, 0.25)',
//       borderColor: '#3b82f6',
//       background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     },
//     benefitIcon: {
//       fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
//       marginBottom: 'clamp(15px, 2.5vw, 20px)',
//       display: 'block',
//       lineHeight: '1',
//     },
//     benefitTitle: {
//       fontSize: 'clamp(1rem, 2.3vw, 1.4rem)',
//       fontWeight: '600',
//       color: '#1e3a8a',
//       marginBottom: 'clamp(10px, 2vw, 15px)',
//       lineHeight: '1.3',
//     },
//     benefitDescription: {
//       fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
//       color: '#64748b',
//       lineHeight: '1.7',
//     },
//     faqSection: {
//       padding: 'clamp(50px, 8vw, 100px) 0',
//       background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
//       position: 'relative',
//     },
//     faqContainer: {
//       maxWidth: '1100px',
//       margin: '0 auto',
//       padding: '0 clamp(15px, 3vw, 20px)',
//     },
//     faqTitle: {
//       fontSize: 'clamp(1.5rem, 4vw, 3rem)',
//       fontWeight: '700',
//       textAlign: 'center',
//       marginBottom: 'clamp(35px, 6vw, 60px)',
//       color: '#78350f',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
//       lineHeight: '1.3',
//     },
//     faqGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
//       gap: 'clamp(15px, 2.5vw, 25px)',
//     },
//     faqCard: {
//       background: 'white',
//       padding: 'clamp(20px, 3.5vw, 30px)',
//       borderRadius: 'clamp(12px, 2.5vw, 15px)',
//       boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
//       transition: 'all 0.3s ease',
//       border: '2px solid transparent',
//       minHeight: isMobile ? 'auto' : '150px',
//     },
//     faqCardHovered: {
//       transform: isMobile ? 'scale(1.01)' : 'scale(1.02)',
//       boxShadow: '0 15px 40px rgba(245, 158, 11, 0.25)',
//       borderColor: '#f59e0b',
//     },
//     faqQuestion: {
//       fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)',
//       fontWeight: '600',
//       color: '#1e3a8a',
//       marginBottom: 'clamp(10px, 2vw, 15px)',
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: 'clamp(8px, 1.5vw, 10px)',
//       lineHeight: '1.4',
//     },
//     faqAnswer: {
//       fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
//       color: '#475569',
//       lineHeight: '1.7',
//     },
//     footerSection: {
//       background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
//       color: 'white',
//       padding: 'clamp(40px, 6vw, 60px) clamp(15px, 3vw, 20px) 0',
//     },
//     footerContainer: {
//       maxWidth: '1400px',
//       margin: '0 auto',
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
//       gap: 'clamp(25px, 4vw, 40px)',
//       paddingBottom: 'clamp(30px, 4vw, 40px)',
//     },
//     footerColumn: {
//       padding: '0 clamp(5px, 1.5vw, 10px)',
//     },
//     footerLogo: {
//       maxWidth: 'clamp(140px, 30vw, 180px)',
//       marginBottom: 'clamp(15px, 2.5vw, 20px)',
//       width: '100%',
//       height: 'auto',
//     },
//     footerDescription: {
//       fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
//       lineHeight: '1.7',
//       color: '#d1d5db',
//     },
//     footerHeading: {
//       fontSize: 'clamp(1rem, 2.3vw, 1.3rem)',
//       fontWeight: '600',
//       marginBottom: 'clamp(18px, 3vw, 25px)',
//       color: 'white',
//       borderBottom: '3px solid #f59e0b',
//       paddingBottom: 'clamp(8px, 1.5vw, 10px)',
//       display: 'inline-block',
//       width: '100%',
//     },
//     footerList: {
//       listStyle: 'none',
//       padding: 0,
//       margin: 0,
//     },
//     footerListItem: {
//       marginBottom: 'clamp(10px, 2vw, 12px)',
//     },
//     footerLink: {
//       color: '#d1d5db',
//       textDecoration: 'none',
//       fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
//       transition: 'all 0.3s ease',
//       display: 'inline-block',
//       lineHeight: '1.5',
//     },
//     footerLinkHovered: {
//       color: '#f59e0b',
//       paddingLeft: isMobile ? '5px' : '10px',
//     },
//     contactItem: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: 'clamp(10px, 2vw, 12px)',
//       marginBottom: 'clamp(12px, 2.5vw, 15px)',
//     },
//     contactIcon: {
//       width: 'clamp(18px, 3vw, 20px)',
//       height: 'clamp(18px, 3vw, 20px)',
//       filter: 'brightness(0) invert(1)',
//       opacity: '0.8',
//       flexShrink: 0,
//       marginTop: '2px',
//     },
//     contactText: {
//       margin: 0,
//       color: '#d1d5db',
//       fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
//       lineHeight: '1.6',
//     },
//     contactHeading: {
//       color: '#f59e0b',
//       fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
//       marginBottom: 'clamp(12px, 2.5vw, 15px)',
//       marginTop: 0,
//       fontWeight: '600',
//     },
//     footerBottom: {
//       borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//       padding: 'clamp(20px, 3vw, 25px) 0',
//       textAlign: 'center',
//       background: 'rgba(0,0,0,0.2)',
//       marginTop: 'clamp(20px, 3vw, 30px)',
//     },
//     footerBottomText: {
//       margin: 0,
//       color: '#9ca3af',
//       fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)',
//       padding: '0 15px',
//     },
//   };

//   return (
//     <div style={styles.pageWrapper}>
//       {/* CSS Media Queries for Carousel - INCREASED DESKTOP WIDTH */}
//       <style>{`
//         .responsive-carousel-img {
//           width: 100%;
//           height: 400px;
//           object-fit: contain;
//           object-position: center;
//           filter: brightness(0.9);
//           display: block;
//           background: #f8fafc;
//         }

//         /* Carousel container width control */
//         .carousel {
//           max-width: 100%;
//           margin: 0 auto;
//           background: #f8fafc;
//         }

//         .carousel-item {
//           background: #f8fafc;
//         }

//         /* Very small phones - 320px to 374px */
//         @media (max-width: 374px) {
//           .responsive-carousel-img {
//             height: 200px !important;
//             width: 100%;
//             margin: 0 auto;
//             object-fit: contain;
//           }
//           .carousel {
//             padding: 10px 5px;
//           }
//         }

//         /* Small phones - 375px to 575px */
//         @media (min-width: 375px) and (max-width: 575px) {
//           .responsive-carousel-img {
//             height: 240px !important;
//             width: 100%;
//             margin: 0 auto;
//             object-fit: contain;
//           }
//           .carousel {
//             padding: 10px;
//           }
//         }

//         /* Large phones - 576px to 767px */
//         @media (min-width: 576px) and (max-width: 767px) {
//           .responsive-carousel-img {
//             height: 280px !important;
//             width: 100%;
//             margin: 0 auto;
//             object-fit: contain;
//           }
//           .carousel {
//             padding: 15px;
//           }
//         }

//         /* Tablets Portrait - 768px to 991px */
//         @media (min-width: 768px) and (max-width: 991px) {
//           .responsive-carousel-img {
//             height: 350px !important;
//             width: 100%;
//             margin: 0 auto;
//             object-fit: contain;
//           }
//           .carousel {
//             max-width: 100%;
//             padding: 20px;
//           }
//         }

//         /* Small laptops / Tablets Landscape - 992px to 1199px */
//         @media (min-width: 992px) and (max-width: 1199px) {
//           .responsive-carousel-img {
//             height: 450px !important;
//             width: 100%;
//             margin: 0 auto;
//             object-fit: cover;
//           }
//           .carousel {
//             max-width: 100%;
//             padding: 0 20px;
//           }
//         }

//         /* Medium screens / Desktops - 1200px to 1399px */
//         @media (min-width: 1200px) and (max-width: 1399px) {
//           .responsive-carousel-img {
//             height: 500px !important;
//             width: 100%;
//             margin: 0 auto;
//             object-fit: cover;
//           }
//           .carousel {
//             max-width: 100%;
//             padding: 0 15px;
//           }
//         }

//         /* Large screens - 1400px to 1599px */
//         @media (min-width: 1400px) and (max-width: 1599px) {
//           .responsive-carousel-img {
//             height: 550px !important;
//             width: 100%;
//             margin: 0 auto;
//             object-fit: cover;
//           }
//           .carousel {
//             max-width: 100%;
//             padding: 0 10px;
//           }
//         }

//         /* Extra large screens - 1600px+ */
//         @media (min-width: 1600px) {
//           .responsive-carousel-img {
//             height: 600px !important;
//             width: 100%;
//             margin: 0 auto;
//             object-fit: cover;
//           }
//           .carousel {
//             max-width: 100%;
//             padding: 0;
//           }
//         }

//         /* Carousel controls on mobile */
//         @media (max-width: 767px) {
//           .carousel-control-prev,
//           .carousel-control-next {
//             display: none;
//           }
//           .carousel-indicators {
//             bottom: 5px;
//           }
//           .carousel-indicators button {
//             width: 6px !important;
//             height: 6px !important;
//             margin: 0 3px !important;
//           }
//         }

//         /* Carousel controls on desktop */
//         @media (min-width: 768px) {
//           .carousel-control-prev,
//           .carousel-control-next {
//             width: 50px;
//             opacity: 0.7;
//           }
//           .carousel-control-prev:hover,
//           .carousel-control-next:hover {
//             opacity: 1;
//           }
//         }

//         /* Better carousel indicators for desktop */
//         .carousel-indicators {
//           bottom: 15px;
//         }

//         .carousel-indicators button {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           margin: 0 5px;
//           background-color: rgba(255, 255, 255, 0.8);
//           border: none;
//         }

//         .carousel-indicators button.active {
//           background-color: #f59e0b;
//           width: 12px;
//           height: 12px;
//         }

//         /* Smooth carousel item transitions */
//         .carousel-item {
//           transition: transform 0.6s ease-in-out;
//         }

//         /* Ensure carousel doesn't overflow */
//         .carousel-inner {
//           overflow: hidden;
//         }

//         /* Better spacing for desktop - minimal padding for maximum width */
//         @media (min-width: 1200px) {
//           .carousel {
//             box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
//           }
//         }
//       `}</style>

//       {/* Hero Carousel */}
//       <div style={styles.heroSection}>
//         <div style={styles.carouselWrapper}>
//           <Carousel 
//             interval={3000} 
//             pause={false} 
//             controls={true} 
//             indicators={true}
//             fade={!isMobile}
//             touch={true}
//           >
//             <Carousel.Item>
//               <img 
//                 src="assets/assure.png" 
//                 className="responsive-carousel-img"
//                 alt="Training" 
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img 
//                 src="assets/aswcloudtraining.webp" 
//                 className="responsive-carousel-img"
//                 alt="AWS" 
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img 
//                 src="assets/googlecloud.webp" 
//                 className="responsive-carousel-img"
//                 alt="Google Cloud" 
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img 
//                 src="assets/javafullstack.png" 
//                 className="responsive-carousel-img"
//                 alt="Java" 
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img 
//                 src="assets/pythoncurl.webp" 
//                 className="responsive-carousel-img"
//                 alt="Python" 
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img 
//                 src="assets/teraform.webp" 
//                 className="responsive-carousel-img"
//                 alt="Terraform" 
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img 
//                 src="assets/kubernets.webp" 
//                 className="responsive-carousel-img"
//                 alt="Kubernetes" 
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img 
//                 src="assets/devops.webp" 
//                 className="responsive-carousel-img"
//                 alt="DevOps" 
//               />
//             </Carousel.Item>
//           </Carousel>
//         </div>
//       </div>

//       {/* Hero Text Section */}
//       <div style={styles.heroTextSection}>
//         <div style={styles.heroContent}>
//           <h1 style={styles.heroTitle}>
//             Transform Your Career with Cloud & IT Certifications
//           </h1>
//           <p style={styles.heroSubtitle}>
//             Industry-leading training programs designed for your success
//           </p>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <section style={styles.benefitsSection}>
//         <Container fluid>
//           <h2 style={styles.sectionTitle}>Why Choose Hybrid Cloud?</h2>
//           <p style={styles.sectionSubtitle}>
//             Join thousands of professionals who have transformed their careers with our comprehensive training programs
//           </p>
//           <div style={styles.benefitsGrid}>
//             {certificationBenefits.map((benefit, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   ...styles.benefitCard,
//                   ...(hoveredCard === idx ? styles.benefitCardHovered : {}),
//                 }}
//                 onMouseEnter={() => setHoveredCard(idx)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onTouchStart={() => setHoveredCard(idx)}
//                 onTouchEnd={() => setHoveredCard(null)}
//               >
//                 <span style={styles.benefitIcon}>{benefit.icon}</span>
//                 <h3 style={{
//                   ...styles.benefitTitle,
//                   color: hoveredCard === idx ? 'white' : '#1e3a8a'
//                 }}>
//                   {benefit.title}
//                 </h3>
//                 <p style={{
//                   ...styles.benefitDescription,
//                   color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : '#64748b'
//                 }}>
//                   {benefit.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* FAQ Section */}
//       <section style={styles.faqSection}>
//         <div style={styles.faqContainer}>
//           <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
//           <div style={styles.faqGrid}>
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 style={
//                   hoveredCard === `faq-${idx}` 
//                     ? { ...styles.faqCard, ...styles.faqCardHovered } 
//                     : styles.faqCard
//                 }
//                 onMouseEnter={() => setHoveredCard(`faq-${idx}`)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onTouchStart={() => setHoveredCard(`faq-${idx}`)}
//                 onTouchEnd={() => setHoveredCard(null)}
//               >
//                 <h3 style={styles.faqQuestion}>
//                   <span style={{ 
//                     color: '#f59e0b', 
//                     flexShrink: 0,
//                     fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)'
//                   }}>
//                     Q:
//                   </span>
//                   <span>{faq.question}</span>
//                 </h3>
//                 <p style={styles.faqAnswer}>{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={styles.footerSection}>
//         <div style={styles.footerContainer}>
//           {/* About */}
//           <div style={styles.footerColumn}>
//             <img 
//               src="assets/hybrid.svg" 
//               alt="Hybrid Cloud Logo" 
//               style={styles.footerLogo} 
//             />
//             <p style={styles.footerDescription}>
// At Hybrid Cloud, your trusted tech education hub in Mahe, we provide personalized, 
//               hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, 
//               and more—blending real-world projects, expert mentorship, and certifications to launch 
//               your cloud career            </p>
//           </div>

//           {/* Top Courses */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Top Courses</h3>
//             <ul style={styles.footerList}>
//               {courseLinks.map((link, idx) => (
//                 <li key={idx} style={styles.footerListItem}>
//                   <a
//                     href={link.href}
//                     style={
//                       hoveredCourse === idx 
//                         ? { ...styles.footerLink, ...styles.footerLinkHovered } 
//                         : styles.footerLink
//                     }
//                     onMouseEnter={() => setHoveredCourse(idx)}
//                     onMouseLeave={() => setHoveredCourse(null)}
//                     onTouchStart={() => setHoveredCourse(idx)}
//                     onTouchEnd={() => setHoveredCourse(null)}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Quick Links</h3>
//             <ul style={styles.footerList}>
//               {aboutLinks.map((link, idx) => (
//                 <li key={idx} style={styles.footerListItem}>
//                   <a
//                     href={link.href}
//                     style={
//                       hoveredLink === idx 
//                         ? { ...styles.footerLink, ...styles.footerLinkHovered } 
//                         : styles.footerLink
//                     }
//                     onMouseEnter={() => setHoveredLink(idx)}
//                     onMouseLeave={() => setHoveredLink(null)}
//                     onTouchStart={() => setHoveredLink(idx)}
//                     onTouchEnd={() => setHoveredLink(null)}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div style={styles.footerColumn}>
//             <h3 style={styles.footerHeading}>Contact Us</h3>
//             <div>
//               <h4 style={styles.contactHeading}>Mahe</h4>
//               <div style={styles.contactItem}>
//                 <img 
//                   src="assets/icons8-location-96.png" 
//                   style={styles.contactIcon} 
//                   alt="Location" 
//                 />
//                 <p style={styles.contactText}>
//                   Anandam realty, palloor, Mahe - 673310
//                 </p>
//               </div>
//               <div style={styles.contactItem}>
//                 <img 
//                   src="assets/icons8-email-24.png" 
//                   style={styles.contactIcon} 
//                   alt="Email" 
//                 />
//                 <p style={styles.contactText}>info@hybridcloud.com</p>
//               </div>
//               <div style={styles.contactItem}>
//                 <img 
//                   src="assets/icons8-phone-50.png" 
//                   style={styles.contactIcon} 
//                   alt="Phone" 
//                 />
//                 <p style={styles.contactText}>+91 9344613129</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={styles.footerBottom}>
//           <p style={styles.footerBottomText}>
//             &copy; 2025 Hybrid Cloud. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle mobile detection
  useEffect(() => {
    const updateResponsiveSettings = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    updateResponsiveSettings();
    window.addEventListener('resize', updateResponsiveSettings);
    return () => window.removeEventListener('resize', updateResponsiveSettings);
  }, []);

  const courseLinks = [
    { name: 'AWS Certification Training', href: '/amazone' },
    { name: 'Azure Certification Training', href: '/azure' },
    { name: 'Kubernetes Training', href: '/kuber' },
    { name: 'Python Full Stack Training', href: '/python' },
    { name: 'Java Full Stack Training', href: '/java' },
    { name: 'Terraform Training', href: '/teraform' },
    { name: 'Google Cloud Platform Training', href: '/google' },
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
    pageWrapper: {
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: '#ffffff',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden',
    },
    heroSection: {
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      padding: '0',
      width: '100%',
      margin: '0',
    },
    carouselWrapper: {
      width: '100%',
      maxWidth: '100%',
      margin: '0',
      overflow: 'hidden',
      position: 'relative',
      padding: '0',
    },
    heroTextSection: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      padding: 'clamp(40px, 8vw, 100px) clamp(15px, 5vw, 20px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContent: {
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      padding: '0 10px',
    },
    heroTitle: {
      fontSize: 'clamp(1.5rem, 4.5vw, 3.5rem)',
      fontWeight: '800',
      marginBottom: 'clamp(15px, 3vw, 20px)',
      color: 'white',
      lineHeight: '1.2',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
      wordBreak: 'break-word',
    },
    heroSubtitle: {
      fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)',
      fontWeight: '300',
      marginBottom: 'clamp(20px, 4vw, 30px)',
      color: 'white',
      opacity: '0.95',
      lineHeight: '1.5',
    },
    benefitsSection: {
      padding: 'clamp(50px, 8vw, 100px) 0',
      background: 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    sectionTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 3rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 'clamp(15px, 3vw, 20px)',
      color: '#1e3a8a',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
      padding: '0 15px',
      lineHeight: '1.3',
    },
    sectionSubtitle: {
      fontSize: 'clamp(0.9rem, 2.2vw, 1.2rem)',
      textAlign: 'center',
      color: '#475569',
      marginBottom: 'clamp(40px, 6vw, 60px)',
      maxWidth: '700px',
      margin: '0 auto clamp(40px, 6vw, 60px)',
      padding: '0 20px',
      lineHeight: '1.6',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: 'clamp(15px, 2.5vw, 30px)',
      padding: '0 clamp(15px, 3vw, 20px)',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    benefitCard: {
      background: 'white',
      padding: 'clamp(25px, 4vw, 40px) clamp(20px, 3.5vw, 30px)',
      borderRadius: 'clamp(15px, 3vw, 20px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? 'auto' : '280px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    benefitCardHovered: {
      transform: isMobile ? 'scale(1.01)' : 'translateY(-10px) scale(1.02)',
      boxShadow: '0 20px 50px rgba(59, 130, 246, 0.25)',
      borderColor: '#3b82f6',
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
    benefitIcon: {
      fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
      marginBottom: 'clamp(15px, 2.5vw, 20px)',
      display: 'block',
      lineHeight: '1',
    },
    benefitTitle: {
      fontSize: 'clamp(1rem, 2.3vw, 1.4rem)',
      fontWeight: '600',
      color: '#1e3a8a',
      marginBottom: 'clamp(10px, 2vw, 15px)',
      lineHeight: '1.3',
    },
    benefitDescription: {
      fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
      color: '#64748b',
      lineHeight: '1.7',
    },
    faqSection: {
      padding: 'clamp(50px, 8vw, 100px) 0',
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      position: 'relative',
    },
    faqContainer: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 clamp(15px, 3vw, 20px)',
    },
    faqTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 3rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 'clamp(35px, 6vw, 60px)',
      color: '#78350f',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
      lineHeight: '1.3',
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      gap: 'clamp(15px, 2.5vw, 25px)',
    },
    faqCard: {
      background: 'white',
      padding: 'clamp(20px, 3.5vw, 30px)',
      borderRadius: 'clamp(12px, 2.5vw, 15px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      minHeight: isMobile ? 'auto' : '150px',
    },
    faqCardHovered: {
      transform: isMobile ? 'scale(1.01)' : 'scale(1.02)',
      boxShadow: '0 15px 40px rgba(245, 158, 11, 0.25)',
      borderColor: '#f59e0b',
    },
    faqQuestion: {
      fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)',
      fontWeight: '600',
      color: '#1e3a8a',
      marginBottom: 'clamp(10px, 2vw, 15px)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'clamp(8px, 1.5vw, 10px)',
      lineHeight: '1.4',
    },
    faqAnswer: {
      fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
      color: '#475569',
      lineHeight: '1.7',
    },
    footerSection: {
      background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
      color: 'white',
      padding: 'clamp(40px, 6vw, 60px) clamp(15px, 3vw, 20px) 0',
    },
    footerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
      gap: 'clamp(25px, 4vw, 40px)',
      paddingBottom: 'clamp(30px, 4vw, 40px)',
    },
    footerColumn: {
      padding: '0 clamp(5px, 1.5vw, 10px)',
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
      color: '#d1d5db',
    },
    footerHeading: {
      fontSize: 'clamp(1rem, 2.3vw, 1.3rem)',
      fontWeight: '600',
      marginBottom: 'clamp(18px, 3vw, 25px)',
      color: 'white',
      borderBottom: '3px solid #f59e0b',
      paddingBottom: 'clamp(8px, 1.5vw, 10px)',
      display: 'inline-block',
      width: '100%',
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
      color: '#d1d5db',
      textDecoration: 'none',
      fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      lineHeight: '1.5',
    },
    footerLinkHovered: {
      color: '#f59e0b',
      paddingLeft: isMobile ? '5px' : '10px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'clamp(10px, 2vw, 12px)',
      marginBottom: 'clamp(12px, 2.5vw, 15px)',
    },
    contactIcon: {
      width: 'clamp(18px, 3vw, 20px)',
      height: 'clamp(18px, 3vw, 20px)',
      filter: 'brightness(0) invert(1)',
      opacity: '0.8',
      flexShrink: 0,
      marginTop: '2px',
    },
    contactText: {
      margin: 0,
      color: '#d1d5db',
      fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
      lineHeight: '1.6',
    },
    contactHeading: {
      color: '#f59e0b',
      fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
      marginBottom: 'clamp(12px, 2.5vw, 15px)',
      marginTop: 0,
      fontWeight: '600',
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: 'clamp(20px, 3vw, 25px) 0',
      textAlign: 'center',
      background: 'rgba(0,0,0,0.2)',
      marginTop: 'clamp(20px, 3vw, 30px)',
    },
    footerBottomText: {
      margin: 0,
      color: '#9ca3af',
      fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)',
      padding: '0 15px',
    },
  };

  return (
    <div style={styles.pageWrapper}>
      {/* CSS Media Queries for Carousel - DESKTOP FIT, MOBILE/TABLET UNCHANGED */}
      <style>{`
        .responsive-carousel-img {
          width: 100%;
          height: 280px;
          object-fit: contain;
          object-position: center;
          display: block;
          background: #f8fafc;
        }

        /* Carousel container with gradient background */
        .carousel {
          max-width: 100%;
          margin: 0 auto;
          background: #f8fafc;
          border-radius: 0;
          overflow: hidden;
        }

        .carousel-item {
          background: #f8fafc;
        }

        /* Very small phones - 320px to 374px - UNCHANGED */
        @media (max-width: 374px) {
          .responsive-carousel-img {
            height: 200px !important;
            width: 100%;
            object-fit: contain;
          }
          .carousel {
            padding: 0;
            max-width: 100%;
          }
        }

        /* Small phones - 375px to 575px - UNCHANGED */
        @media (min-width: 375px) and (max-width: 575px) {
          .responsive-carousel-img {
            height: 240px !important;
            width: 100%;
            object-fit: contain;
          }
          .carousel {
            padding: 0;
            max-width: 100%;
          }
        }

        /* Large phones - 576px to 767px - UNCHANGED */
        @media (min-width: 576px) and (max-width: 767px) {
          .responsive-carousel-img {
            height: 280px !important;
            width: 100%;
            object-fit: contain;
          }
          .carousel {
            padding: 0;
            max-width: 100%;
          }
        }

        /* Tablets Portrait - 768px to 991px - UNCHANGED */
        @media (min-width: 768px) and (max-width: 991px) {
          .responsive-carousel-img {
            height: 350px !important;
            width: 100%;
            object-fit: contain;
          }
          .carousel {
            max-width: 100%;
            padding: 0;
          }
        }

        /* Small laptops / Tablets Landscape - 992px to 1199px - DESKTOP FIT */
        @media (min-width: 992px) and (max-width: 1199px) {
          .responsive-carousel-img {
            height: 500px !important;
            width: 100%;
            object-fit: cover;
          }
          .carousel {
            max-width: 100%;
            padding: 0;
          }
        }

        /* Medium screens / Desktops - 1200px to 1399px - DESKTOP FIT */
        @media (min-width: 1200px) and (max-width: 1399px) {
          .responsive-carousel-img {
            height: 550px !important;
            width: 100%;
            object-fit: cover;
          }
          .carousel {
            max-width: 100%;
            padding: 0;
          }
        }

        /* Large screens - 1400px to 1599px - DESKTOP FIT */
        @media (min-width: 1400px) and (max-width: 1599px) {
          .responsive-carousel-img {
            height: 600px !important;
            width: 100%;
            object-fit: cover;
          }
          .carousel {
            max-width: 100%;
            padding: 0;
          }
        }

        /* Extra large screens - 1600px+ - DESKTOP FIT */
        @media (min-width: 1600px) {
          .responsive-carousel-img {
            height: 650px !important;
            width: 100%;
            object-fit: cover;
          }
          .carousel {
            max-width: 100%;
            padding: 0;
          }
        }

        /* Carousel controls on mobile */
        @media (max-width: 767px) {
          .carousel-control-prev,
          .carousel-control-next {
            display: none;
          }
          .carousel-indicators {
            bottom: 5px;
          }
          .carousel-indicators button {
            width: 20px !important;
            height: 3px !important;
            margin: 0 3px !important;
            border-radius: 2px !important;
          }
        }

        /* Carousel controls on desktop - Enhanced visibility */
        @media (min-width: 768px) {
          .carousel-control-prev,
          .carousel-control-next {
            width: 60px;
            opacity: 0.8;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            height: 60px;
            top: 50%;
            transform: translateY(-50%);
          }
          .carousel-control-prev:hover,
          .carousel-control-next:hover {
            opacity: 1;
            background: rgba(0, 0, 0, 0.5);
          }
          .carousel-control-prev {
            left: 20px;
          }
          .carousel-control-next {
            right: 20px;
          }
        }

        /* Better carousel indicators - RECTANGULAR STYLE */
        .carousel-indicators {
          bottom: 20px;
          z-index: 15;
        }

        .carousel-indicators button {
          width: 30px;
          height: 4px;
          border-radius: 2px;
          margin: 0 4px;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          transition: all 0.3s ease;
        }

        .carousel-indicators button.active {
          background-color: #f59e0b;
          width: 40px;
          height: 4px;
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.6);
        }

        /* Smooth carousel item transitions */
        .carousel-item {
          transition: transform 0.6s ease-in-out;
        }

        /* Ensure carousel doesn't overflow */
        .carousel-inner {
          overflow: hidden;
          border-radius: 0;
        }

        /* Desktop shadow and styling */
        @media (min-width: 1200px) {
          .carousel {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
        }

        /* Benefits Grid Responsive Layout */
        .benefits-grid-responsive {
          display: grid;
          gap: clamp(15px, 2.5vw, 30px);
          padding: 0 clamp(15px, 3vw, 20px);
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Mobile: 1 column */
        @media (max-width: 767px) {
          .benefits-grid-responsive {
            grid-template-columns: 1fr;
          }
        }

        /* Tablet: 2 columns */
        @media (min-width: 768px) and (max-width: 991px) {
          .benefits-grid-responsive {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Desktop: 3 columns (3 top, 3 bottom) */
        @media (min-width: 992px) {
          .benefits-grid-responsive {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* FAQ Grid Responsive Layout */
        .faq-grid-responsive {
          display: grid;
          gap: clamp(15px, 2.5vw, 25px);
        }

        /* Mobile: 1 column */
        @media (max-width: 767px) {
          .faq-grid-responsive {
            grid-template-columns: 1fr;
          }
        }

        /* Tablet and Desktop: 2 columns (2 top, 2 bottom) */
        @media (min-width: 768px) {
          .faq-grid-responsive {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* Hero Carousel with Colorful Gradient Background */}
      <div style={styles.heroSection}>
        <div style={styles.carouselWrapper}>
          <Carousel 
            interval={3000} 
            pause={false} 
            controls={true} 
            indicators={true}
            fade={!isMobile}
            touch={true}
          >
            <Carousel.Item>
              <img 
                src="assets/assure.png" 
                className="responsive-carousel-img"
                alt="Training" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                src="assets/aswcloudtraining.webp" 
                className="responsive-carousel-img"
                alt="AWS" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                src="assets/googlecloud.webp" 
                className="responsive-carousel-img"
                alt="Google Cloud" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                src="assets/javafullstack.png" 
                className="responsive-carousel-img"
                alt="Java" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                src="assets/pythoncurl.webp" 
                className="responsive-carousel-img"
                alt="Python" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                src="assets/teraform.webp" 
                className="responsive-carousel-img"
                alt="Terraform" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                src="assets/kubernets.webp" 
                className="responsive-carousel-img"
                alt="Kubernetes" 
              />
            </Carousel.Item>
            <Carousel.Item>
              <img 
                src="assets/devops.webp" 
                className="responsive-carousel-img"
                alt="DevOps" 
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Hero Text Section */}
      <div style={styles.heroTextSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Transform Your Career with Cloud & IT Certifications
          </h1>
          <p style={styles.heroSubtitle}>
            Industry-leading training programs designed for your success
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section style={styles.benefitsSection}>
        <Container fluid>
          <h2 style={styles.sectionTitle}>Why Choose Hybrid Cloud?</h2>
          <p style={styles.sectionSubtitle}>
            Join thousands of professionals who have transformed their careers with our comprehensive training programs
          </p>
          <div className="benefits-grid-responsive">
            {certificationBenefits.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.benefitCard,
                  ...(hoveredCard === idx ? styles.benefitCardHovered : {}),
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onTouchStart={() => setHoveredCard(idx)}
                onTouchEnd={() => setHoveredCard(null)}
              >
                <span style={styles.benefitIcon}>{benefit.icon}</span>
                <h3 style={{
                  ...styles.benefitTitle,
                  color: hoveredCard === idx ? 'white' : '#1e3a8a'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  ...styles.benefitDescription,
                  color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : '#64748b'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <div style={styles.faqContainer}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className="faq-grid-responsive">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={
                  hoveredCard === `faq-${idx}` 
                    ? { ...styles.faqCard, ...styles.faqCardHovered } 
                    : styles.faqCard
                }
                onMouseEnter={() => setHoveredCard(`faq-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onTouchStart={() => setHoveredCard(`faq-${idx}`)}
                onTouchEnd={() => setHoveredCard(null)}
              >
                <h3 style={styles.faqQuestion}>
                  <span style={{ 
                    color: '#f59e0b', 
                    flexShrink: 0,
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)'
                  }}>
                    Q:
                  </span>
                  <span>{faq.question}</span>
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
            <img 
              src="assets/hybrid.svg" 
              alt="Hybrid Cloud Logo" 
              style={styles.footerLogo} 
            />
            <p style={styles.footerDescription}>
At Hybrid Cloud, your trusted tech education hub in Mahe, we provide personalized, 
              hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, 
              and more—blending real-world projects, expert mentorship, and certifications to launch 
              your cloud career            </p>
          </div>

          {/* Top Courses */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Top Courses</h3>
            <ul style={styles.footerList}>
              {courseLinks.map((link, idx) => (
                <li key={idx} style={styles.footerListItem}>
                  <a
                    href={link.href}
                    style={
                      hoveredCourse === idx 
                        ? { ...styles.footerLink, ...styles.footerLinkHovered } 
                        : styles.footerLink
                    }
                    onMouseEnter={() => setHoveredCourse(idx)}
                    onMouseLeave={() => setHoveredCourse(null)}
                    onTouchStart={() => setHoveredCourse(idx)}
                    onTouchEnd={() => setHoveredCourse(null)}
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
                    style={
                      hoveredLink === idx 
                        ? { ...styles.footerLink, ...styles.footerLinkHovered } 
                        : styles.footerLink
                    }
                    onMouseEnter={() => setHoveredLink(idx)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onTouchStart={() => setHoveredLink(idx)}
                    onTouchEnd={() => setHoveredLink(null)}
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
              <h4 style={styles.contactHeading}>Mahe</h4>
              <div style={styles.contactItem}>
                <img 
                  src="assets/icons8-location-96.png" 
                  style={styles.contactIcon} 
                  alt="Location" 
                />
                <p style={styles.contactText}>
                  Anandam realty, palloor, Mahe - 673310
                </p>
              </div>
              <div style={styles.contactItem}>
                <img 
                  src="assets/icons8-email-24.png" 
                  style={styles.contactIcon} 
                  alt="Email" 
                />
                <p style={styles.contactText}>hybridcloudinfo@gmail.com</p>
              </div>
              <div style={styles.contactItem}>
                <img 
                  src="assets/icons8-phone-50.png" 
                  style={styles.contactIcon} 
                  alt="Phone" 
                />
                <p style={styles.contactText}>+91 9344613129</p>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>
            &copy; 2025 Hybrid Cloud. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;