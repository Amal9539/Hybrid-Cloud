// // import React from 'react'
// // <style>
// //   .whatsapp-btn {
// //     display: flex;
// //     align-items: center;
// //     gap: 12px;

// //     background: linear-gradient(135deg, #25D366, #1ebe5d);
// //     color: white;

// //     border: none;
// //     border-radius: 999px;
// //     padding: 14px 26px;

// //     font-size: 18px;
// //     font-weight: 500;

// //     cursor: pointer;
// //     box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
// //     transition: transform 0.2s ease, box-shadow 0.2s ease;
// //   }

// //   .whatsapp-btn img {
// //     width: 28px;
// //     height: 28px;
// //   }

// //   .whatsapp-btn:hover {
// //     transform: translateY(-2px);
// //     box-shadow: 0 14px 30px rgba(37, 211, 102, 0.5);
// //   }
// // </style>

// // const Contactus = () => {
// //     const openWhatsApp = () => {
// //     const phone = "919876543210"; // admin number (with country code)
// //     const message = "Hello Admin, I need help";
// //     window.open(
// //       `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
// //       "_blank"
// //     );
// // };
// //   return (
// //     <div>
// //       <div>
// //         <h4>HYBRID CLOUD</h4>
// //         <h3>Contact Us</h3>
// //       </div>
      
// // <button class="whatsapp-btn" onclick="openWhatsApp()">
// //   <img
// //     src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
// //     alt="WhatsApp"
    
// //   />
// //   <span>How can I help you?</span>
// // </button>
// //     </div>
// //   )
// // }

// // export default Contactus



// import React from "react";

// const Contactus = () => {
//   const openWhatsApp = () => {
//     const phone = "919876543210";
//     const message = "Hello Admin, I need help";
//     window.open(
//       `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

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

//         body::before {
//           content: '';
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: 
//             radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.3) 0%, transparent 50%),
//             radial-gradient(circle at 80% 80%, rgba(72, 219, 251, 0.3) 0%, transparent 50%),
//             radial-gradient(circle at 40% 20%, rgba(253, 203, 110, 0.3) 0%, transparent 50%);
//           pointer-events: none;
//           z-index: 0;
//         }

//         .contact-page {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 40px 20px;
//           position: relative;
//           z-index: 1;
//         }

//         /* Hero Section */
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
//           text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
//         }

//         .hero h3 {
//           color: white;
//           font-size: 56px;
//           font-weight: 900;
//           background: linear-gradient(135deg, #fff, #ffd89b);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//           filter: drop-shadow(0 4px 20px rgba(255, 255, 255, 0.3));
//         }

//         /* Intro Card */
//         .intro-card {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
//           backdrop-filter: blur(20px);
//           border: 2px solid rgba(255, 255, 255, 0.5);
//           border-radius: 30px;
//           padding: 50px;
//           margin-bottom: 50px;
//           box-shadow: 
//             0 20px 60px rgba(0, 0, 0, 0.15),
//             0 0 0 1px rgba(255, 255, 255, 0.5) inset;
//           animation: slideUp 0.8s ease-out 0.2s both;
//         }

//         .intro-card h3 {
//           color: #1a1a2e;
//           font-size: 34px;
//           font-weight: 800;
//           margin-bottom: 20px;
//           background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-left:300px;
//         }

//         .intro-card p {
//           color: #2d3748;
//           font-size: 17px;
//           line-height: 1.9;
//           width: 100%;
//           max-width: 900px;
//           margin-left:190px;
          
//         }

//         /* Location Card */
//         .location-card {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
//           backdrop-filter: blur(20px);
//           border: 2px solid rgba(255, 255, 255, 0.5);
//           border-radius: 30px;
//           padding: 45px;
//           margin-bottom: 50px;
//           box-shadow: 
//             0 20px 60px rgba(0, 0, 0, 0.15),
//             0 0 0 1px rgba(255, 255, 255, 0.5) inset;
//           animation: slideUp 0.8s ease-out 0.4s both;
//         }

//         .location-card h4 {
//           color: #667eea;
//           font-size: 30px;
//           font-weight: 800;
//           margin-bottom: 30px;
//           padding-bottom: 15px;
//           border-bottom: 3px solid;
//           border-image: linear-gradient(90deg, #667eea, #764ba2, #f093fb) 1;
//           display: inline-block;
//         }

//         .contact-row {
//           display: flex;
//           align-items: center;
//           margin-bottom: 20px;
//           padding: 18px 20px;
//           border-radius: 16px;
//           background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1));
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           border: 1px solid transparent;
//         }

//         .contact-row:hover {
//           background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(240, 147, 251, 0.2));
//           transform: translateX(12px) scale(1.02);
//           border: 1px solid rgba(102, 126, 234, 0.3);
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
//         }

//         .contact-row img {
//           height: 32px;
//           filter: brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(1187%) hue-rotate(225deg) brightness(95%) contrast(89%);
//         }

//         .contact-row p {
//           color: #2d3748;
//           font-size: 16px;
//           font-weight: 500;
//           margin-left: 20px;
//         }

//         /* Footer Section */
//         .footer {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 40px;
//           background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(45, 55, 72, 0.95));
//           backdrop-filter: blur(20px);
//           border: 2px solid rgba(255, 255, 255, 0.2);
//           border-radius: 30px;
//           padding: 60px 40px;
//           margin-bottom: 40px;
//           box-shadow: 
//             0 25px 70px rgba(0, 0, 0, 0.3),
//             0 0 0 1px rgba(255, 255, 255, 0.1) inset;
//           animation: slideUp 0.8s ease-out 0.6s both;
//         }

//         .footer-col {
//           animation: fadeIn 0.8s ease-out;
//         }

//         .footer-col img {
//           width: 160px;
//           margin-bottom: 20px;
         
//         }

//         .footer-col p {
//           color: rgba(255, 255, 255, 0.85);
//           font-size: 15px;
//           line-height: 1.8;
//           max-width: 300px;
//         }

//         .footer-col h2 {
//           color: white;
//           font-size: 24px;
//           font-weight: 800;
//           margin-bottom: 25px;
//           position: relative;
//           padding-bottom: 12px;
//         }

//         .footer-col h2::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 60px;
//           height: 4px;
//           background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
//           border-radius: 2px;
//         }

//         .footer-col ul {
//           list-style: none;
//         }

//         .footer-col ul li {
//           color: rgba(255, 255, 255, 0.8);
//           font-size: 15px;
//           margin-bottom: 14px;
//           padding-left: 24px;
//           position: relative;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .footer-col ul li::before {
//           content: '→';
//           position: absolute;
//           left: 0;
//           font-size: 18px;
//           background: linear-gradient(135deg, #667eea, #f093fb);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           transition: all 0.3s ease;
//         }

//         .footer-col ul li:hover {
//           color: white;
//           padding-left: 32px;
//           transform: translateX(4px);
//         }

//         .footer-col ul li:hover::before {
//           background: linear-gradient(135deg, #ffd89b, #f093fb);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .footer-help h4 {
//           color: #ffd89b;
//           font-size: 20px;
//           font-weight: 700;
//           margin-bottom: 20px;
//         }

//         .footer-contact-row {
//           display: flex;
//           align-items: center;
//           margin-bottom: 18px;
//           padding: 0px;
//           border-radius: 10px;
//           transition: all 0.3s ease;
//         }

//         .footer-contact-row:hover {
//           background: rgba(255, 255, 255, 0.05);
//           transform: translateX(6px);
//         }

//         .footer-contact-row img {
//           height: 20px;
//           width: 20px;
//           filter: brightness(0) saturate(100%) invert(88%) sepia(48%) saturate(1567%) hue-rotate(316deg) brightness(104%) contrast(101%);
//         }

//         .footer-contact-row p {
//           color: rgba(255, 255, 255, 0.8);
//           font-size: 14px;
//           margin-left: 15px;
//         }

//         /* WhatsApp Button */
//         .whatsapp-container {
//           text-align: center;
//           animation: slideUp 0.8s ease-out 0.8s both;
//         }

//         .whatsapp-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 14px;
//           background: linear-gradient(135deg, #25D366, #128C7E, #075E54);
//           color: white;
//           border: none;
//           border-radius: 999px;
//           padding: 20px 40px;
//           font-size: 19px;
//           font-weight: 700;
//           cursor: pointer;
//           box-shadow: 
//             0 15px 45px rgba(37, 211, 102, 0.5),
//             0 0 0 4px rgba(255, 255, 255, 0.3);
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           overflow: hidden;
//         }

//         .whatsapp-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//           transition: left 0.7s ease;
//         }

//         .whatsapp-btn:hover::before {
//           left: 100%;
//         }

//         .whatsapp-btn img {
//           width: 32px;
//           height: 32px;
//           animation: pulse 2s ease-in-out infinite;
//           filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
//         }

//         .whatsapp-btn:hover {
//           transform: translateY(-4px) scale(1.05);
//           box-shadow: 
//             0 20px 60px rgba(37, 211, 102, 0.6),
//             0 0 0 6px rgba(255, 255, 255, 0.4);
//         }

//         .whatsapp-btn:active {
//           transform: translateY(-2px) scale(1.03);
//         }

//         /* Animations */
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.15);
//           }
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .hero h3 {
//             font-size: 38px;
//           }

//           .intro-card {
//             padding: 35px;
            
//           }

//           .intro-card p {
//             width: 100%;
//           }

//           .footer {
//             padding: 40px 25px;
//             gap: 35px;
//           }

//           .location-card {
//             padding: 35px;
//           }
//         }
//       `}</style>

//       <div className="contact-page">
//         {/* Hero Section */}
//         <div className="hero">
//           <h4>HYBRID CLOUD</h4>
//           <h3>Contact Us</h3>
//         </div>

//         {/* Intro Section */}
//         <div className="intro-card">
//           <h3>We're Always Eager to Hear From You!</h3>
//           <p>
//             At Hybrid Cloud, your trusted tech education hub, we offer
//             personalized, hands-on training in AWS, Azure, Google Cloud, DevOps,
//             Java and more. Our programs combine real-world projects, expert
//             mentorship, and globally recognized certifications—empowering you to
//             launch and grow your career in the cloud and beyond. Reach out to us
//             today and take the first step toward a future in tech
//           </p>
//         </div>

//         {/* Location Section */}
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

//         {/* Footer Section */}
//         <div className="footer">
//           <div className="footer-col">
//             <img src="assets/hybrid.svg" alt="Hybrid Cloud" />
//             <p>
//               At Hybrid Cloud, your trusted tech education hub in Mahe, we
//               provide personalized, hands-on training in AWS, Azure, Google
//               Cloud, Java, Python, Terraform, Kubernetes, and more—blending
//               real-world projects, expert mentorship, and certifications to
//               launch your cloud career.
//             </p>
//           </div>

//           <div className="footer-col">
//             <h2>Top Courses</h2>
//             <ul>
//               <li>AWS Certification Training</li>
//               <li>Azure Certification Training</li>
//               <li>Kubernetes Training</li>
//               <li>Python Full Stack Training</li>
//               <li>Java Full Stack Training</li>
//               <li>Terraform Training</li>
//             </ul>
//           </div>

//           <div className="footer-col">
//             <h2>About</h2>
//             <ul>
//               <li>Home</li>
//               <li>About Us</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           <div className="footer-col">
//             <h2>Help</h2>
//             <div className="footer-help">
//               <h4>Mahe</h4>
//               <div className="footer-contact-row">
//                 <img src="assets/icons8-location-96.png" alt="Location" />
//                 <p>Anandam realty, palloor, Mahe - 673310</p>
//               </div>
//               <div className="footer-contact-row">
//                 <img src="assets/icons8-email-24.png" alt="Email" />
//                 <p>hybridcloudinfo@gmail.com</p>
//               </div>
//               <div className="footer-contact-row">
//                 <img src="assets/icons8-phone-50.png" alt="Phone" />
//                 <p>+91 9344613129</p>
//               </div>
//             </div>
//           </div>
//         </div>

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
  const styles={
          footerSection: {
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      padding: '60px 20px 0',
      marginTop: '80px',
      display: 'flex',
      flexDirection: 'column',
    },
    footerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      paddingBottom: '40px',
    },
    footerColumn: { padding: '0 20px' },
    aboutColumn: { gridColumn: 'span 1' },
    footerLogo: { maxWidth: '180px', marginBottom: '20px' },
    footerDescription: { fontSize: '0.95rem', lineHeight: '1.8', color: '#cbd5e0', marginBottom: '20px' },
    footerHeading: { fontSize: '1.4rem', fontWeight: '600', marginBottom: '25px', color: 'white', position: 'relative', paddingBottom: '12px' },
    headingUnderline: { position: 'absolute', bottom: '0', left: '0', width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF9900, #FF6F00)', borderRadius: '2px' },
    footerList: { listStyle: 'none', padding: 0, margin: 0 },
    footerListItem: { marginBottom: '12px' },
    footerLink: { color: '#cbd5e0', textDecoration: 'none', fontSize: '0.95rem', display: 'inline-block', position: 'relative', transition: 'all 0.3s ease' },
    linkArrow: { opacity: 0, transition: 'opacity 0.3s ease', marginRight: '5px' },
    linkArrowVisible: { opacity: 1 },
    footerLinkHovered: { color: 'white', paddingLeft: '20px' },
    locationName: { fontSize: '1.1rem', fontWeight: '600', marginBottom: '15px', color: '#FF9900' },
    contactInfo: { display: 'flex', flexDirection: 'column', gap: '15px' },
    contactItem: { display: 'flex', alignItems: 'flex-start', gap: '15px', transition: 'transform 0.3s ease' },
    contactItemHovered: { transform: 'translateX(5px)' },
    contactIcon: { width: '24px', height: '24px', filter: 'brightness(0) invert(1)', opacity: '0.8', flexShrink: 0, marginTop: '2px' },
    contactText: { margin: 0, color: '#cbd5e0', fontSize: '0.95rem', lineHeight: '1.6' },
    footerBottom: { borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '25px 0', textAlign: 'center' },
    footerBottomText: { margin: 0, color: '#a0aec0', fontSize: '0.9rem' },}
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
          padding: 40px 20px;
          position: relative;
          z-index: 1;
        }

        .hero {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeIn 0.8s ease-out;
        }

        .hero h4 {
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .hero h3 {
          color: white;
          font-size: 56px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #ffd89b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .intro-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 30px;
          padding: 50px;
          margin-bottom: 50px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
                      0 0 0 1px rgba(255, 255, 255, 0.5) inset;
        }

        .intro-card h3 {
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .intro-card p {
          color: #2d3748;
          font-size: 17px;
          line-height: 1.9;
        }

        .location-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 30px;
          padding: 45px;
          margin-bottom: 50px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
                      0 0 0 1px rgba(255, 255, 255, 0.5) inset;
        }

        .location-card h4 {
          color: #667eea;
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding: 18px 20px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1));
          border: 1px solid transparent;
          transition: all 0.4s ease;
        }

        .contact-row:hover {
          transform: translateX(12px) scale(1.02);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
        }

        .contact-row img {
          height: 32px;
        }

        .contact-row p {
          margin-left: 20px;
          font-size: 16px;
          font-weight: 500;
        }
        /* WhatsApp Button Fixed on Right */
        .whatsapp-container {
          position: fixed;  
          right: 30px;        
          bottom: 30px;       
          z-index: 9999;     
        }
        .whatsapp-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #25D366, #128C7E, #075E54);
          color: white;
          border: none;
          border-radius: 999px;
          padding: 14px 26px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .whatsapp-btn img {
          width: 28px;
          height: 28px;
        }

        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(37, 211, 102, 0.5);
        }

        @media (max-width: 768px) {
          .whatsapp-container {
            right: 15px;
            bottom: 15px;
          }

          .whatsapp-btn {
            padding: 12px 20px;
            font-size: 16px;
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
      {/* Footer */}
      <footer style={styles.footerSection}>
        <div style={styles.footerContainer}>
          {/* About */}
          <div style={{ ...styles.footerColumn, ...styles.aboutColumn }}>
            <img src="assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
            <p style={styles.footerDescription}>Hybrid Cloud offers hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, and more.</p>
          </div>

          {/* Top Courses */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Top Courses <span style={styles.headingUnderline}></span></h3>
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
            <h3 style={styles.footerHeading}>Quick Links <span style={styles.headingUnderline}></span></h3>
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
            <h3 style={styles.footerHeading}>Contact Us <span style={styles.headingUnderline}></span></h3>
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
