// import React from 'react'

// const Pythondetails = () => {
//   return (
//     <div>
//       <div>
//         <h3>Python Full-Stack Course</h3>
//         <p>Learn foundational Python skills from Advanced  Training</p><br/><br/>
//         <div style={{display:"flex"}}>
//         <p style={{width:"300px"}}>Jump-start your Python Full Stack  journey and build confidence with our  Essentials course. Taught by experienced  trainers,
//         this dynamic Online and  Offline Python full-stack training covers Python, Django or Flask for backend, and HTML, CSS, JavaScript, and React for frontend. It also includes databases</p>
// <img src="assets/python2.jpg" alt="" style={{height:'300px',width:"300px"}}/>
// </div>
//       </div>
//       <div>
//         <h3>Topic Are</h3>
//         <ul>
//             <li>Python</li>
//             <li>HTML</li>
//             <li>React js</li>
//             <li>Django</li>
//             <li>CSS</li>
//             <li>Javascript</li>
//             <li>MySQL</li>
//             <li>Bootstrap</li>
//             <li>Springboot</li>
//         </ul>
//       </div>
//       <div>
//         <h3>What You'll Learn</h3>
//         <p>Jump-start your Python Full Stack  journey and build confidence with our  Essentials course. Taught by experienced  trainers</p>
//       </div>
//       <div>
//         <h3>Essentials Key Features</h3>
//         <ul>
//             <li>Responsive Frameworks</li>
//             <li>Scalability</li>
//             <li>Complete hands-on Python Full stack certification training</li>
//             <li>Backend with Python</li>
//             <li>Frontend Technologies</li>
//             <li>Database Integration</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Pythondetails



import React, { useEffect } from 'react';

const PythondetailsWithFooter = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ...rest of your component

  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredContact, setHoveredContact] = React.useState(null);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);
  const [hoveredTopic, setHoveredTopic] = React.useState(null);

  const styles = {
    pageWrapper: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
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
      background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
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
      color: '#bfdbfe',
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
      border: '4px solid #e0e7ff',
    },
    // Topics Section
    topicsCard: {
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
      backgroundColor: '#4f46e5',
      color: 'white',
      borderRadius: '8px',
      padding: '4px 12px',
      marginRight: '12px',
      fontSize: '1.5rem',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
    },
    topicItem: {
      background: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%)',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      transition: 'box-shadow 0.3s ease',
      border: '1px solid #e0e7ff',
      cursor: 'pointer',
    },
    topicItemHovered: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    topicText: {
      color: '#4338ca',
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
    greenBadge: {
      backgroundColor: '#16a34a',
      color: 'white',
      borderRadius: '8px',
      padding: '4px 12px',
      marginRight: '12px',
      fontSize: '1.5rem',
    },
    purpleBadge: {
      backgroundColor: '#9333ea',
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
      color: '#9333ea',
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
      background: 'linear-gradient(90deg, #4f46e5 0%, #9333ea 100%)',
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
      color: '#ddd6fe',
      marginBottom: '24px',
      margin: '0 0 24px 0',
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#4f46e5',
      fontWeight: 'bold',
      padding: '12px 32px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    ctaButtonHover: {
      backgroundColor: '#eef2ff',
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
    { name: 'Terraform Training', href: '/teraform' },
     { name: 'Google Cloud Platform Training', href: '/google' },
  { name: 'DevOps Training', href: '/devops' },
  ];

  const aboutLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contactus' }
  ];

  const topics = ['Python', 'HTML', 'React.js', 'Django', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap', 'Springboot'];
  
  const features = [
    'Responsive Frameworks',
    'Scalability',
    'Complete hands-on Python Full stack certification training',
    'Backend with Python',
    'Frontend Technologies',
    'Database Integration'
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.container}>
          {/* Hero Section */}
          <div style={styles.heroCard}>
            <div style={styles.heroHeader}>
              <h1 style={styles.heroTitle}>Python Full-Stack Course</h1>
              <p style={styles.heroSubtitle}>Learn foundational Python skills from Advanced Training</p>
            </div>

            <div style={styles.heroContent}>
              <div style={styles.heroFlex}>
                <div style={styles.heroText}>
                  <p style={styles.heroDescription}>
                    Jump-start your Python Full Stack journey and build confidence with our 
                    Essentials course. Taught by experienced trainers, this dynamic Online and 
                    Offline Python full-stack training covers Python, Django or Flask for backend, 
                    and HTML, CSS, JavaScript, and React for frontend. It also includes databases.
                  </p>
                </div>
                <div style={styles.heroImageWrapper}>
                  <img 
                    src="assets/python2.jpg" 
                    alt="Python Course" 
                    style={styles.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Topics Section */}
          <div style={styles.topicsCard}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.badge}>📚</span>
              Topics Covered
            </h2>
            <div style={styles.topicsGrid}>
              {topics.map((topic, index) => (
                <div 
                  key={index}
                  style={
                    hoveredTopic === index
                      ? { ...styles.topicItem, ...styles.topicItemHovered }
                      : styles.topicItem
                  }
                  onMouseEnter={() => setHoveredTopic(index)}
                  onMouseLeave={() => setHoveredTopic(null)}
                >
                  <p style={styles.topicText}>{topic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div style={styles.twoColumnGrid}>
            {/* What You'll Learn */}
            <div style={styles.columnCard}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.greenBadge}>🎓</span>
                What You'll Learn
              </h2>
              <p style={styles.heroDescription}>
                Jump-start your Python Full Stack journey and build confidence with our 
                Essentials course. Taught by experienced trainers, you'll gain comprehensive 
                knowledge in both frontend and backend technologies, preparing you for a 
                successful career in full-stack development.
              </p>
            </div>

            {/* Key Features */}
            <div style={styles.columnCard}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.purpleBadge}>⭐</span>
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
            <img src="assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
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
                <img src="assets/icons8-location-96.png" alt="Location" style={styles.contactIcon} />
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
                <img src="assets/icons8-email-24.png" alt="Email" style={styles.contactIcon} />
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
                <img src="assets/icons8-phone-50.png" alt="Phone" style={styles.contactIcon} />
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

export default PythondetailsWithFooter;