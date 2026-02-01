
// import React, { useState } from "react";

// const Contactus = () => {
//   const [hoveredLink, setHoveredLink] = useState(null);
//     const [hoveredContact, setHoveredContact] = useState(null);
  
//     const courseLinks = [
//       { name: 'AWS Certification Training', href: '/amazone' },
//       { name: 'Azure Certification Training', href: '/azure' },
//       { name: 'Kubernetes Training', href: '/kuber' },
//       { name: 'Python Full Stack Training', href: '/python' },
//       { name: 'Java Full Stack Training', href: '/java' },
//       { name: 'Terraform Training', href: '/teraform' },
//       { name: 'Google Cloud Platform Training', href: '/google' },
//       { name: 'DevOps Training', href: '/devops' },
//     ];
  
//     const aboutLinks = [
//       { name: 'Home', href: '/' },
//       { name: 'About Us', href: '/about' },
//       { name: 'Contact Us', href: '/contactus' }
//     ];
//   const openWhatsApp = () => {
//     const phone = "919344613129";
//     const message = "Hello Admin, I need help";
//     window.open(
//       `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };
//   const styles={
//           footerSection: {
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
//     footerBottomText: { margin: 0, color: '#a0aec0', fontSize: '0.9rem' },}
//   return (
//     <>
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
//           min-height: 100vh;
//           position: relative;
//           overflow-x: hidden;
//         }

//         .contact-page {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 40px 20px;
//           position: relative;
//           z-index: 1;
//         }

//         .hero {
//           text-align: center;
//           margin-bottom: 60px;
//           animation: fadeIn 0.8s ease-out;
//         }

//         .hero h4 {
//           color: #fff;
//           font-size: 14px;
//           font-weight: 700;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//           margin-bottom: 12px;
//         }

//         .hero h3 {
//           color: white;
//           font-size: 56px;
//           font-weight: 900;
//           background: linear-gradient(135deg, #fff, #ffd89b);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .intro-card {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
//           backdrop-filter: blur(20px);
//           border: 2px solid rgba(255, 255, 255, 0.5);
//           border-radius: 30px;
//           padding: 50px;
//           margin-bottom: 50px;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
//                       0 0 0 1px rgba(255, 255, 255, 0.5) inset;
//         }

//         .intro-card h3 {
//           font-size: 34px;
//           font-weight: 800;
//           margin-bottom: 20px;
//           background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .intro-card p {
//           color: #2d3748;
//           font-size: 17px;
//           line-height: 1.9;
//         }

//         .location-card {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
//           backdrop-filter: blur(20px);
//           border: 2px solid rgba(255, 255, 255, 0.5);
//           border-radius: 30px;
//           padding: 45px;
//           margin-bottom: 50px;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
//                       0 0 0 1px rgba(255, 255, 255, 0.5) inset;
//         }

//         .location-card h4 {
//           color: #667eea;
//           font-size: 30px;
//           font-weight: 800;
//           margin-bottom: 30px;
//         }

//         .contact-row {
//           display: flex;
//           align-items: center;
//           margin-bottom: 20px;
//           padding: 18px 20px;
//           border-radius: 16px;
//           background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1));
//           border: 1px solid transparent;
//           transition: all 0.4s ease;
//         }

//         .contact-row:hover {
//           transform: translateX(12px) scale(1.02);
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
//         }

//         .contact-row img {
//           height: 32px;
//         }

//         .contact-row p {
//           margin-left: 20px;
//           font-size: 16px;
//           font-weight: 500;
//         }
//         /* WhatsApp Button Fixed on Right */
//         .whatsapp-container {
//           position: fixed;  
//           right: 30px;        
//           bottom: 30px;       
//           z-index: 9999;     
//         }
//         .whatsapp-btn {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           background: linear-gradient(135deg, #25D366, #128C7E, #075E54);
//           color: white;
//           border: none;
//           border-radius: 999px;
//           padding: 14px 26px;
//           font-size: 18px;
//           font-weight: 500;
//           cursor: pointer;
//           box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
//           transition: transform 0.2s ease, box-shadow 0.2s ease;
//         }

//         .whatsapp-btn img {
//           width: 28px;
//           height: 28px;
//         }

//         .whatsapp-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 14px 30px rgba(37, 211, 102, 0.5);
//         }

//         @media (max-width: 768px) {
//           .whatsapp-container {
//             right: 15px;
//             bottom: 15px;
//           }

//           .whatsapp-btn {
//             padding: 12px 20px;
//             font-size: 16px;
//           }
//         }
//       `}</style>

//       <div className="contact-page">
//         {/* Hero */}
//         <div className="hero">
//           <h4>HYBRID CLOUD</h4>
//           <h3>Contact Us</h3>
//         </div>

//         {/* Intro */}
//         <div className="intro-card">
//           <h3>We're Always Eager to Hear From You!</h3>
//           <p>
//             At Hybrid Cloud, your trusted tech education hub, we offer
//             personalized, hands-on training in AWS, Azure, Google Cloud, DevOps,
//             Java and more. Reach out to us today and take the first step toward a future in tech.
//           </p>
//         </div>

//         {/* Location */}
//         <div className="location-card">
//           <h4>Mahe</h4>
//           <div className="contact-row">
//             <img src="assets/icons8-location-96.png" alt="Location" />
//             <p>Anandam realty, palloor, Mahe - 673310</p>
//           </div>
//           <div className="contact-row">
//             <img src="assets/icons8-email-24.png" alt="Email" />
//             <p>hybridcloudinfo@gmail.com</p>
//           </div>
//           <div className="contact-row">
//             <img src="assets/icons8-phone-50.png" alt="Phone" />
//             <p>+91 9344613129</p>
//           </div>
//         </div>

        
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
       
          
        

//         {/* WhatsApp Button */}
//         <div className="whatsapp-container">
//           <button className="whatsapp-btn" onClick={openWhatsApp}>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//               alt="WhatsApp"
//             />
//             <span>How can I help you?</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contactus;


import React, { useState } from "react";

const Contactus = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);
  
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

  const openWhatsApp = () => {
    const phone = "919344613129";
    const message = "Hello Admin, I need help";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const styles = {
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
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .contact-page {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(30px, 5vw, 40px) clamp(15px, 3vw, 20px);
          position: relative;
          z-index: 1;
        }

        .hero {
          text-align: center;
          margin-bottom: clamp(40px, 7vw, 60px);
          animation: fadeIn 0.8s ease-out;
        }

        .hero h4 {
          color: #fff;
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 700;
          letter-spacing: clamp(2px, 0.5vw, 4px);
          text-transform: uppercase;
          margin-bottom: clamp(8px, 1.5vw, 12px);
        }

        .hero h3 {
          color: white;
          font-size: clamp(2.5rem, 8vw, 3.5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #ffd89b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .intro-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: clamp(20px, 4vw, 30px);
          padding: clamp(30px, 6vw, 50px);
          margin-bottom: clamp(35px, 6vw, 50px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
                      0 0 0 1px rgba(255, 255, 255, 0.5) inset;
        }

        .intro-card h3 {
          font-size: clamp(1.5rem, 4.5vw, 2.125rem);
          font-weight: 800;
          margin-bottom: clamp(15px, 2.5vw, 20px);
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.3;
        }

        .intro-card p {
          color: #2d3748;
          font-size: clamp(0.95rem, 2vw, 1.0625rem);
          line-height: 1.9;
        }

        .location-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: clamp(20px, 4vw, 30px);
          padding: clamp(30px, 5vw, 45px);
          margin-bottom: clamp(35px, 6vw, 50px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
                      0 0 0 1px rgba(255, 255, 255, 0.5) inset;
        }

        .location-card h4 {
          color: #667eea;
          font-size: clamp(1.5rem, 4vw, 1.875rem);
          font-weight: 800;
          margin-bottom: clamp(20px, 4vw, 30px);
        }

        .contact-row {
          display: flex;
          align-items: center;
          margin-bottom: clamp(15px, 2.5vw, 20px);
          padding: clamp(14px, 2.5vw, 18px) clamp(15px, 3vw, 20px);
          border-radius: clamp(12px, 2vw, 16px);
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1));
          border: 1px solid transparent;
          transition: all 0.4s ease;
        }

        .contact-row:hover {
          transform: translateX(clamp(8px, 1.5vw, 12px)) scale(1.02);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
        }

        .contact-row img {
          height: clamp(24px, 4vw, 32px);
          width: clamp(24px, 4vw, 32px);
          flex-shrink: 0;
        }

        .contact-row p {
          margin-left: clamp(12px, 2.5vw, 20px);
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 500;
          line-height: 1.5;
          word-break: break-word;
        }

        /* WhatsApp Button Fixed on Right */
        .whatsapp-container {
          position: fixed;  
          right: clamp(15px, 3vw, 30px);        
          bottom: clamp(15px, 3vw, 30px);       
          z-index: 9999;     
        }

        .whatsapp-btn {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1.5vw, 12px);
          background: linear-gradient(135deg, #25D366, #128C7E, #075E54);
          color: white;
          border: none;
          border-radius: 999px;
          padding: clamp(10px, 2vw, 14px) clamp(16px, 3vw, 26px);
          font-size: clamp(14px, 2.5vw, 18px);
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .whatsapp-btn img {
          width: clamp(22px, 4vw, 28px);
          height: clamp(22px, 4vw, 28px);
        }

        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-btn span {
          display: inline;
        }

        /* Mobile optimization */
        @media (max-width: 480px) {
          .whatsapp-btn span {
            display: none;
          }
          
          .whatsapp-btn {
            width: clamp(50px, 12vw, 60px);
            height: clamp(50px, 12vw, 60px);
            padding: 0;
            justify-content: center;
            align-items: center;
          }

          .contact-row {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .contact-row img {
            margin-bottom: 8px;
          }

          .contact-row p {
            margin-left: 0;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .whatsapp-btn span {
            font-size: 14px;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="contact-page">
        {/* Hero */}
        <div className="hero">
          <h4>HYBRID CLOUD</h4>
          <h3>Contact Us</h3>
        </div>

        {/* Intro */}
        <div className="intro-card">
          <h3>We're Always Eager to Hear From You!</h3>
          <p>
            At Hybrid Cloud, your trusted tech education hub, we offer
            personalized, hands-on training in AWS, Azure, Google Cloud, DevOps,
            Java and more. Reach out to us today and take the first step toward a future in tech.
          </p>
        </div>

        {/* Location */}
        <div className="location-card">
          <h4>Mahe</h4>
          <div className="contact-row">
            <img src="assets/icons8-location-96.png" alt="Location" />
            <p>Anandam realty, palloor, Mahe - 673310</p>
          </div>
          <div className="contact-row">
            <img src="assets/icons8-email-24.png" alt="Email" />
            <p>hybridcloudinfo@gmail.com</p>
          </div>
          <div className="contact-row">
            <img src="assets/icons8-phone-50.png" alt="Phone" />
            <p>+91 9344613129</p>
          </div>
        </div>

        {/* Footer Section */}
        <footer style={styles.footerSection}>
          <div style={styles.footerContainer}>
            {/* About */}
            <div style={{ ...styles.footerColumn, ...styles.aboutColumn }}>
              <img src="assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
              <p style={styles.footerDescription}>Hybrid Cloud offers hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, and more.</p>
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

        {/* WhatsApp Button */}
        <div className="whatsapp-container">
          <button className="whatsapp-btn" onClick={openWhatsApp}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
            <span>How can I help you?</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contactus;