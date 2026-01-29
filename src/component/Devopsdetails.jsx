// import React from 'react'

// const Devopsdetails = () => {
//   return (
//     <div>
//       <div>
//         <h2>DevOps Certification Training</h2>
//         <p>Learn foundational DevOps  skills from DevOps Training Partner</p>
//       </div>
//       <div style={{display:"flex",}}>
//         <p style={{width:"600px"}}>Jump-start your DevOps journey and build confidence with our one-day
//             DevOps Essentials Course. Taught by experienced DevOps trainers,
//             this dynamic Offline & Online course covers crucial DevOps topics, including cloud concepts, best practices, and basic DevOps Tools , preparing you for the DevOps</p>
//             <img src="src/assets/devops1.jpg" alt="" style={{height:"300px",width:"300px",borderRadius:"10px"}} />
//       </div>
//       <div>
//         <h3>Most Common DevOps Tools</h3>
//         <ul>
//         <li>Devops</li>
//         <li>Terraform</li>
//         <li>Linux</li>
//         <li>Kubernetes</li>
//         <li>Gitlab</li>
//         <li>Jenkins</li>
//         <li>Maven</li>
//         <li>Python</li>
//         <li>Docker</li>
//         <li>Ansible</li>
//         <li>Git</li>
//         <li>Grafana</li>
//         </ul>
//       </div>
//       <div>
//       <h3>What You'll Learn</h3>
//       <p>Jump-start your DevOps journey and build confidence with our DevOps Essentials course. Taught by experienced DevOps trainers, this dynamic Online and Offline course covers crucial  DevOps topics, including cloud concepts.</p>
//       </div>
//       <div>
//         <h3>Essentials Key Features</h3>
//         <ul>
//             <li>Continuous Integration / Continuous Deployment</li>
//             <li>Infrastructure as Code (IaC)</li>
//             <li>Containerization & Orchestration</li>
//             <li>Version Control & Collaboration</li>
//             <li>Release Management & Automation</li>
//             <li>Security & Compliance</li>
//         </ul>
//       </div>
//     </div>
    
//   )
// }

// export default Devopsdetails


import React, { useEffect } from 'react';

const Devopsdetails = () => {
   useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // optional: smooth scroll
  });
}, []);
  
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredContact, setHoveredContact] = React.useState(null);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);
  const [hoveredTool, setHoveredTool] = React.useState(null);

  const styles = {
    pageWrapper: {
      minHeight: '100vh',
      
      width:"100%",
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    },
    mainContent: {
      padding: '48px 16px',
      
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      
    },
    // Hero Section
    heroCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      overflow: 'hidden',
      marginBottom: '32px',
    },
    heroHeader: {
      background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
      padding: '32px',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '8px',
      margin: '0',
    },
    heroSubtitle: {
      color: '#fef3c7',
      fontSize: '1.125rem',
      margin: '0',
    },
    heroContent: {
      padding: '32px',
    },
    heroFlex: {
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    heroText: {
      flex: '1',
      minWidth: '300px',
    },
    heroDescription: {
      color: '#374151',
      lineHeight: '1.8',
      fontSize: '1.125rem',
      margin: '0',
    },
    heroImageWrapper: {
      flexShrink: '0',
    },
    heroImage: {
      borderRadius: '12px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      width: '320px',
      height: '256px',
      objectFit: 'cover',
      border: '4px solid #fde68a',
    },
    // Tools Section
    toolsCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      padding: '32px',
      marginBottom: '32px',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      margin: '0 0 24px 0',
    },
    badge: {
      backgroundColor: '#f59e0b',
      color: 'white',
      borderRadius: '8px',
      padding: '4px 12px',
      marginRight: '12px',
      fontSize: '1.5rem',
    },
    toolsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
    },
    toolItem: {
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '1px solid #fde68a',
      cursor: 'pointer',
    },
    toolItemHovered: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-2px)',
    },
    toolText: {
      color: '#92400e',
      fontWeight: '600',
      margin: '0',
    },
    // Two Column Section
    twoColumnGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginBottom: '32px',
    },
    columnCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      padding: '32px',
    },
    blueBadge: {
      backgroundColor: '#3b82f6',
      color: 'white',
      borderRadius: '8px',
      padding: '4px 12px',
      marginRight: '12px',
      fontSize: '1.5rem',
    },
    orangeBadge: {
      backgroundColor: '#ea580c',
      color: 'white',
      borderRadius: '8px',
      padding: '4px 12px',
      marginRight: '12px',
      fontSize: '1.5rem',
    },
    featureList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '12px',
    },
    checkmark: {
      color: '#ea580c',
      marginRight: '12px',
      marginTop: '4px',
      fontSize: '1.2rem',
    },
    featureText: {
      color: '#374151',
      margin: '0',
    },
    // CTA Section
    ctaCard: {
      background: 'linear-gradient(90deg, #f59e0b 0%, #ea580c 100%)',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      padding: '32px',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '16px',
      margin: '0 0 16px 0',
    },
    ctaText: {
      color: '#fef3c7',
      marginBottom: '24px',
      margin: '0 0 24px 0',
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#f59e0b',
      fontWeight: 'bold',
      padding: '12px 32px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    // Footer Styles
    footerSection: {
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      padding: '60px 20px 0',
      marginTop: '80px',
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
      color: '#cbd5e0',
      marginBottom: '20px',
    },
    footerHeading: {
      fontSize: '1.4rem',
      fontWeight: '600',
      marginBottom: '25px',
      color: 'white',
      position: 'relative',
      paddingBottom: '12px',
    },
    headingUnderline: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '50px',
      height: '3px',
      background: 'linear-gradient(90deg, #667eea, #764ba2)',
      borderRadius: '2px',
    },
    footerList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    footerListItem: {
      marginBottom: '12px',
    },
    footerLink: {
      color: '#cbd5e0',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      position: 'relative',
    },
    footerLinkHovered: {
      color: 'white',
      paddingLeft: '20px',
    },
    linkArrow: {
      opacity: 0,
      transition: 'opacity 0.3s ease',
      marginRight: '5px',
    },
    linkArrowVisible: {
      opacity: 1,
    },
    locationName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#667eea',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '15px',
      transition: 'transform 0.3s ease',
    },
    contactItemHovered: {
      transform: 'translateX(5px)',
    },
    contactIcon: {
      width: '24px',
      height: '24px',
      filter: 'brightness(0) invert(1)',
      opacity: '0.8',
      flexShrink: 0,
      marginTop: '2px',
    },
    contactText: {
      margin: '0',
      color: '#cbd5e0',
      fontSize: '0.95rem',
      lineHeight: '1.6',
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '25px 0',
      textAlign: 'center',
    },
    footerBottomText: {
      margin: '0',
      color: '#a0aec0',
      fontSize: '0.9rem',
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
      marginTop: '20px',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent',
    },
    socialIconHovered: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      transform: 'translateY(-3px)',
      border: '2px solid white',
    },
  };

  const courseLinks = [
    { name: 'AWS Certification Training', href: '/amazone' },
    { name: 'Azure Certification Training', href: '/azure' },
    { name: 'Kubernetes Training', href: '/kuber' },
    { name: 'Python Full Stack Training', href: '/python' },
    { name: 'Java Full Stack Training', href: '/java' },
    { name: 'Terraform Training', href: '/teraform' }
  ];

  const aboutLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contactus' }
  ];

  const tools = [
    'DevOps', 'Terraform', 'Linux', 'Kubernetes', 
    'GitLab', 'Jenkins', 'Maven', 'Python', 
    'Docker', 'Ansible', 'Git', 'Grafana'
  ];
  
  const features = [
    'Continuous Integration / Continuous Deployment',
    'Infrastructure as Code (IaC)',
    'Containerization & Orchestration',
    'Version Control & Collaboration',
    'Release Management & Automation',
    'Security & Compliance'
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.container}>
          {/* Hero Section */}
          <div style={styles.heroCard}>
            <div style={styles.heroHeader}>
              <h1 style={styles.heroTitle}>DevOps Certification Training</h1>
              <p style={styles.heroSubtitle}>Learn foundational DevOps skills from DevOps Training Partner</p>
            </div>

            <div style={styles.heroContent}>
              <div style={styles.heroFlex}>
                <div style={styles.heroText}>
                  <p style={styles.heroDescription}>
                    Jump-start your DevOps journey and build confidence with our one-day
                    DevOps Essentials Course. Taught by experienced DevOps trainers,
                    this dynamic Offline & Online course covers crucial DevOps topics, including 
                    cloud concepts, best practices, and basic DevOps Tools, preparing you for the DevOps 
                    certification and real-world implementation.
                  </p>
                </div>
                <div style={styles.heroImageWrapper}>
                  <img 
                    src="src/assets/devops1.jpg" 
                    alt="DevOps Course" 
                    style={styles.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div style={styles.toolsCard}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.badge}>🛠️</span>
              Most Common DevOps Tools
            </h2>
            <div style={styles.toolsGrid}>
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  style={
                    hoveredTool === index
                      ? { ...styles.toolItem, ...styles.toolItemHovered }
                      : styles.toolItem
                  }
                  onMouseEnter={() => setHoveredTool(index)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <p style={styles.toolText}>{tool}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div style={styles.twoColumnGrid}>
            {/* What You'll Learn */}
            <div style={styles.columnCard}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.blueBadge}>🎓</span>
                What You'll Learn
              </h2>
              <p style={styles.heroDescription}>
                Jump-start your DevOps journey and build confidence with our DevOps 
                Essentials course. Taught by experienced DevOps trainers, this dynamic 
                Online and Offline course covers crucial DevOps topics, including cloud 
                concepts, automation practices, and industry-standard tools that will 
                prepare you for a successful career in DevOps engineering.
              </p>
            </div>

            {/* Key Features */}
            <div style={styles.columnCard}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.orangeBadge}>⭐</span>
                Essentials Key Features
              </h2>
              <ul style={styles.featureList}>
                {features.map((feature, index) => (
                  <li key={index} style={styles.featureItem}>
                    <span style={styles.checkmark}>✓</span>
                    <p style={styles.featureText}>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footerSection}>
        <div style={styles.footerContainer}>
          {/* About Column */}
          <div style={styles.footerColumn}>
            <img src="src/assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
            <p style={styles.footerDescription}>
              At Hybrid Cloud, your trusted tech education hub in Mahe, we provide personalized, 
              hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, 
              and more—blending real-world projects, expert mentorship, and certifications to launch 
              your cloud career.
            </p>
            
            {/* Social Icons */}
           
          </div>

          {/* Top Courses Column */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>
              Top Courses
              <span style={styles.headingUnderline}></span>
            </h3>
            <ul style={styles.footerList}>
              {courseLinks.map((link, index) => (
                <li key={index} style={styles.footerListItem}>
                  <a
                    href={link.href}
                    style={
                      hoveredLink === index
                        ? { ...styles.footerLink, ...styles.footerLinkHovered }
                        : styles.footerLink
                    }
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      style={
                        hoveredLink === index
                          ? { ...styles.linkArrow, ...styles.linkArrowVisible }
                          : styles.linkArrow
                      }
                    >
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>
              Quick Links
              <span style={styles.headingUnderline}></span>
            </h3>
            <ul style={styles.footerList}>
              {aboutLinks.map((link, index) => (
                <li key={index + 6} style={styles.footerListItem}>
                  <a
                    href={link.href}
                    style={
                      hoveredLink === index + 6
                        ? { ...styles.footerLink, ...styles.footerLinkHovered }
                        : styles.footerLink
                    }
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      style={
                        hoveredLink === index + 6
                          ? { ...styles.linkArrow, ...styles.linkArrowVisible }
                          : styles.linkArrow
                      }
                    >
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>
              Contact Us
              <span style={styles.headingUnderline}></span>
            </h3>
            <div style={styles.contactInfo}>
              <h4 style={styles.locationName}>Mahe</h4>
              
              {/* Location */}
              <div
                style={
                  hoveredContact === 0
                    ? { ...styles.contactItem, ...styles.contactItemHovered }
                    : styles.contactItem
                }
                onMouseEnter={() => setHoveredContact(0)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <img src="src/assets/icons8-location-96.png" alt="Location" style={styles.contactIcon} />
                <p style={styles.contactText}>Anandam realty, palloor, Mahe - 673310</p>
              </div>

              {/* Email */}
              <div
                style={
                  hoveredContact === 1
                    ? { ...styles.contactItem, ...styles.contactItemHovered }
                    : styles.contactItem
                }
                onMouseEnter={() => setHoveredContact(1)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <img src="src/assets/icons8-email-24.png" alt="Email" style={styles.contactIcon} />
                <p style={styles.contactText}>info@hybridcloud.com</p>
              </div>

              {/* Phone */}
              <div
                style={
                  hoveredContact === 2
                    ? { ...styles.contactItem, ...styles.contactItemHovered }
                    : styles.contactItem
                }
                onMouseEnter={() => setHoveredContact(2)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <img src="src/assets/icons8-phone-50.png" alt="Phone" style={styles.contactIcon} />
                <p style={styles.contactText}>+91 9344613129</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>
            &copy; 2025 Hybrid Cloud. All rights reserved. 
          </p>
        </div>
      </div>

      {/* Responsive Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.875rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Devopsdetails;