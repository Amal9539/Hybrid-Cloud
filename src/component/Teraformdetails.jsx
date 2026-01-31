// import React from 'react'

// const Teraformdetails = () => {
//   return (
//     <div>
//       <div>
//         <h2>Terraform Certification Training</h2>
//         <div style={{display:"flex"}}>
//             <p>Learn foundational Terraform skills with Expertise. Jump-start your Infrastructure as Code (IaC) journey and build confidence through our Terraform Training Essentials course, taught by experienced trainers. This dynamic training is available both online and offline</p>
//             <img src="public/assets/tera1.webp" alt="" style={{height:"300px",width:"300px"}} />
//         </div>
//       </div>
//       <div>
//       <h3>Most Common Terraform Services</h3>
//       <ul>
//         <li>Module</li>
//         <li>Init</li>
//         <li>Versions</li>
//         <li>Provider</li>
//         <li>Destroy</li>
//         <li>Lifecycle</li>
//         <li>Workscape</li>
//         <li>Remote state</li>
//         <li>AWS</li>
//         <li>Azure</li>
//         <li>Validate</li>
//         <li>Apply</li>
//         <li>Download Curriculum</li>

//       </ul>
//       </div>
//       <div>
//         <h3>What You'll Learn</h3>
//         <p>Our Terraform Training is designed to give you both theoretical knowledge and hands-on practical skills in Infrastructure as Code (IaC). By the end of the course, you’ll be confident in automating, scaling, and managing cloud infrastructure across AWS , Azure and GCP.</p>
//       </div>
//       <div>
//         <h3>Essentials Key Features</h3>
//         <ul>
//             <li>Understand Terraform concepts</li>
//             <li>Foundational Cloud Knowledge</li>
//             <li>DevOps Fundamentals</li>
//             <li>Certification Preparation</li>
//             <li>Toolchain Overview</li>
//             <li>Expert Instruction</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Teraformdetails


import React, { useEffect } from 'react';

const Teraformdetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ...rest of your component

  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredContact, setHoveredContact] = React.useState(null);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);
  const [hoveredService, setHoveredService] = React.useState(null);
  const [hoveredFeature, setHoveredFeature] = React.useState(null);

  const styles = {
    pageWrapper: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #faf5ff 0%, #f5f3ff 50%, #ede9fe 100%)',
    },
    // Hero Section - Clean and Minimal
    heroSection: {
      padding: '100px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    heroPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      opacity: 0.3,
    },
    heroContent: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '800px',
      margin: '0 auto',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
      margin: '0 0 20px 0',
      letterSpacing: '-0.5px',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '40px',
      fontWeight: '400',
      margin: '0 0 40px 0',
    },
    heroButton: {
      backgroundColor: 'white',
      color: '#8b5cf6',
      padding: '18px 48px',
      fontSize: '1.1rem',
      fontWeight: '700',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
    },
    // Main Content Section
    mainContent: {
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    // Description Card - Light and Airy
    descriptionCard: {
      background: 'white',
      borderRadius: '24px',
      padding: '60px 50px',
      marginBottom: '80px',
      boxShadow: '0 10px 40px rgba(139, 92, 246, 0.1)',
      border: '1px solid rgba(139, 92, 246, 0.1)',
    },
    descriptionFlex: {
      display: 'flex',
      gap: '50px',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    descriptionText: {
      flex: 1,
      minWidth: '300px',
    },
    descriptionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '24px',
      margin: '0 0 24px 0',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    descriptionParagraph: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: '#4b5563',
      margin: '0',
    },
    descriptionImage: {
      borderRadius: '20px',
      width: '390px',
      height: '320px',
      objectFit: 'cover',
      boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)',
    },
    // Section Title
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1f2937',
      textAlign: 'center',
      marginBottom: '60px',
      margin: '0 0 60px 0',
    },
    gradientText: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    // Services Grid - Clean Cards
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '20px',
      marginBottom: '80px',
    },
    serviceCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '32px 24px',
      textAlign: 'center',
      border: '2px solid #e9d5ff',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    serviceCardHovered: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)',
      border: '2px solid #8b5cf6',
      background: 'linear-gradient(135deg, #faf5ff 0%, white 100%)',
    },
    serviceText: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1f2937',
      margin: '0',
    },
    // Features Section - Modern Layout
    featuresSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
      marginBottom: '80px',
    },
    featureCard: {
      background: 'white',
      borderRadius: '24px',
      padding: '50px 40px',
      border: '2px solid #e9d5ff',
      boxShadow: '0 10px 40px rgba(139, 92, 246, 0.08)',
      transition: 'all 0.3s ease',
    },
    featureCardTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '30px',
      margin: '0 0 30px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    featureBadge: {
      fontSize: '2rem',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      borderRadius: '12px',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    featureList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      marginBottom: '20px',
      padding: '16px',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    featureItemHovered: {
      background: '#faf5ff',
      transform: 'translateX(8px)',
    },
    featureCheckmark: {
      color: '#8b5cf6',
      fontSize: '1.5rem',
      flexShrink: 0,
      fontWeight: 'bold',
    },
    featureText: {
      fontSize: '1.05rem',
      color: '#4b5563',
      margin: '0',
      lineHeight: '1.6',
    },
    // Call to Action - Vibrant
    ctaSection: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      borderRadius: '24px',
      padding: '70px 50px',
      textAlign: 'center',
      boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)',
      marginBottom: '80px',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
    ctaContent: {
      position: 'relative',
      zIndex: 1,
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
      margin: '0 0 20px 0',
    },
    ctaText: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '40px',
      margin: '0 0 40px 0',
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#8b5cf6',
      padding: '18px 50px',
      fontSize: '1.15rem',
      fontWeight: '700',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
    },
    // Footer Styles
    footerSection: {
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
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

  const services = [
    'Module', 'Init', 'Versions', 'Provider', 
    'Destroy', 'Lifecycle', 'Workspace', 'Remote State', 
    'AWS', 'Azure', 'Validate', 'Apply'
  ];
  
  const features = [
    'Understand Terraform concepts',
    'Foundational Cloud Knowledge',
    'DevOps Fundamentals',
    'Certification Preparation',
    'Toolchain Overview',
    'Expert Instruction'
  ];

  const learningPoints = [
    'Automate infrastructure deployment',
    'Manage multi-cloud environments',
    'Implement IaC best practices',
    'Master state management',
    'Build reusable modules',
    'Secure cloud resources'
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Terraform Certification Training</h1>
          <p style={styles.heroSubtitle}>
            Master Infrastructure as Code with Expert-Led Training
          </p>
          
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Description Card */}
        <div style={styles.descriptionCard}>
          <div style={styles.descriptionFlex}>
            <div style={styles.descriptionText}>
              <h2 style={styles.descriptionTitle}>
                Transform Your Cloud Career
              </h2>
              <p style={styles.descriptionParagraph}>
                Learn foundational Terraform skills with Expertise. Jump-start your 
                Infrastructure as Code (IaC) journey and build confidence through our 
                Terraform Training Essentials course, taught by experienced trainers. 
                This dynamic training is available both online and offline, covering 
                essential concepts and real-world implementations across AWS, Azure, and GCP.
              </p>
            </div>
            <img 
              src="public/assets/tera1.webp" 
              alt="Terraform" 
              style={styles.descriptionImage}
            />
          </div>
        </div>

        {/* Services Section */}
        <h2 style={styles.sectionTitle}>
          Most Common <span style={styles.gradientText}>Terraform Services</span>
        </h2>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={
                hoveredService === index
                  ? { ...styles.serviceCard, ...styles.serviceCardHovered }
                  : styles.serviceCard
              }
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <p style={styles.serviceText}>{service}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <h2 style={styles.sectionTitle}>
          What You'll <span style={styles.gradientText}>Master</span>
        </h2>
        <div style={styles.featuresSection}>
          {/* What You'll Learn */}
          <div style={styles.featureCard}>
            <h3 style={styles.featureCardTitle}>
              <span style={styles.featureBadge}>🎯</span>
              Learning Outcomes
            </h3>
            <ul style={styles.featureList}>
              {learningPoints.map((point, index) => (
                <li 
                  key={index} 
                  style={
                    hoveredFeature === index
                      ? { ...styles.featureItem, ...styles.featureItemHovered }
                      : styles.featureItem
                  }
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <span style={styles.featureCheckmark}>✓</span>
                  <p style={styles.featureText}>{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div style={styles.featureCard}>
            <h3 style={styles.featureCardTitle}>
              <span style={styles.featureBadge}>⭐</span>
              Course Highlights
            </h3>
            <ul style={styles.featureList}>
              {features.map((feature, index) => (
                <li 
                  key={index + 6} 
                  style={
                    hoveredFeature === index + 6
                      ? { ...styles.featureItem, ...styles.featureItemHovered }
                      : styles.featureItem
                  }
                  onMouseEnter={() => setHoveredFeature(index + 6)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <span style={styles.featureCheckmark}>✓</span>
                  <p style={styles.featureText}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
       
      </div>

      {/* Footer */}
      <div style={styles.footerSection}>
        <div style={styles.footerContainer}>
          {/* About Column */}
          <div style={styles.footerColumn}>
            <img src="public/assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
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
                <img src="public/assets/icons8-location-96.png" alt="Location" style={styles.contactIcon} />
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
                <img src="public/assets/icons8-email-24.png" alt="Email" style={styles.contactIcon} />
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
                <img src="public/assets/icons8-phone-50.png" alt="Phone" style={styles.contactIcon} />
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
            font-size: 2.5rem !important;
          }
          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Teraformdetails;