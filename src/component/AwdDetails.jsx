// import React from 'react'

// const AwdDetails = () => {
//   return (
//     <div>
//       <div>
//         <h3>
//             AWS Cloud Certification Training
//         </h3>
//         <div style={{display:"flex"}}>
//         <p style={{width:"600px"}}>Are you ready to accelerate your career as a Cloud Architect?
//             At Cloud Institution, we offer the best AWS Solution Architect Training designed to help beginners and professionals master AWS cloud architecture, design principles, and deployment strategies.</p>
//             <img src="assets/aws1.jpg" alt="" style={{height:"500px",borderRadius:"8px"}}/>
//             </div>
//       </div>
//       <div>
//         <h3>Most Common AWS Cloud Services</h3>
//         <ul>
//             <li>Amazon VPC</li>
//             <li>Amazon EC2</li> 
//             <li>IAM </li> 
//             <li>S3 Bucket</li>
//             <li>Lambda</li>
//             <li>RDS</li>
//             <li>DynamoDB</li>
//             <li>CloudWatch</li>
//             <li>CloudTrail</li>
//             <li>Route53</li>
//             <li>LoadBalancer</li>
//             <li>SNS</li>
//         </ul>
//       </div>
//       <div>
//         <h3>What You'll Learn</h3>
//         <p>Jump-start your cloud journey and build confidence with our  AWS Cloud Practitioner Essentials course. Taught by experienced AWS trainers, this dynamic online course covers crucial AWS topics, including cloud concepts</p>
//       </div>
//       <div>
//         <h3>Essentials Key Features</h3>
//         <ul>
//           <li>Understand AWS concepts, architecture, global infrastructure</li>
//           <li>Create and manage AWS computing resources</li>
//           <li>Master AWS security: IAM and VPC</li>
//           <li>Configure AWS databases: RDS, DynamoDB</li>
//           <li>Automate deployments using CloudFormation, Beanstalk</li>
//           <li>Complete hands-on AWS certification training, Chennai</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default AwdDetails



import React, { useEffect } from 'react';
const AwdDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ...rest of your component

  
  const [hoveredService, setHoveredService] = React.useState(null);
  const [hoveredFeature, setHoveredFeature] = React.useState(null);
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredContact, setHoveredContact] = React.useState(null);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);

  const styles = {
    pageContainer: {
      width: '100%',
      minHeight: '100vh',
      
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
    },
    heroSection: {
      background: 'linear-gradient(135deg, #FF9900 0%, #FF6F00 100%)',
      padding: '100px 20px',
      textAlign: 'center',
      color: 'white',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      letterSpacing: '-1px',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      fontWeight: '300',
      opacity: '0.95',
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    introSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '50px',
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap',
    },
    introContent: {
      flex: '1 1 500px',
    },
    introHeading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#FF9900',
      marginBottom: '25px',
      lineHeight: '1.3',
    },
    introText: {
      fontSize: '1.15rem',
      lineHeight: '1.8',
      color: '#2d3748',
      textAlign: 'justify',
    },
    introImage: {
      flex: '1 1 400px',
      maxWidth: '500px',
    },
    awsImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(255, 153, 0, 0.3)',
      transition: 'transform 0.3s ease',
    },
    sectionWrapper: {
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '50px',
      marginBottom: '40px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#FF9900',
      marginBottom: '30px',
      position: 'relative',
      paddingBottom: '15px',
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #FF9900, #FF6F00)',
      borderRadius: '2px',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    serviceItem: {
      background: 'linear-gradient(135deg, #fff9f0 0%, #ffe8cc 100%)',
      padding: '20px 25px',
      borderRadius: '12px',
      fontSize: '1rem',
      color: '#2d3748',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    serviceItemHovered: {
      background: 'linear-gradient(135deg, #FF9900 0%, #FF6F00 100%)',
      color: 'white',
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(255, 153, 0, 0.4)',
      border: '2px solid #FF9900',
    },
    checkIcon: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      background: '#FF9900',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      flexShrink: 0,
    },
    checkIconHovered: {
      background: 'white',
      color: '#FF9900',
    },
    featuresList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    featureItem: {
      background: 'white',
      padding: '25px 30px',
      marginBottom: '15px',
      borderRadius: '12px',
      fontSize: '1.05rem',
      color: '#2d3748',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid #e9ecef',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '15px',
      lineHeight: '1.6',
    },
    featureItemHovered: {
      background: 'linear-gradient(135deg, #FF9900 0%, #FF6F00 100%)',
      color: 'white',
      transform: 'translateX(10px)',
      boxShadow: '0 8px 20px rgba(255, 153, 0, 0.4)',
      border: '2px solid #FF9900',
    },
    starIcon: {
      fontSize: '20px',
      color: '#fbbf24',
      flexShrink: 0,
      marginTop: '2px',
    },
    whatYouLearnSection: {
      background: 'linear-gradient(135deg, #232f3e 0%, #131921 100%)',
      borderRadius: '20px',
      padding: '50px',
      color: 'white',
      marginBottom: '40px',
    },
    whatYouLearnTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#FF9900',
    },
    whatYouLearnText: {
      fontSize: '1.15rem',
      lineHeight: '1.8',
      opacity: '0.95',
    },
    badge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #232f3e 0%, #131921 100%)',
      color: 'white',
      padding: '8px 20px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
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
    aboutColumn: {
      gridColumn: 'span 1',
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
      background: 'linear-gradient(90deg, #FF9900, #FF6F00)',
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
      color: '#FF9900',
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
      background: 'linear-gradient(135deg, #FF9900, #FF6F00)',
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

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.badge}>AWS Certified Training Partner</div>
        <h1 style={styles.heroTitle}>AWS Cloud Certification Training</h1>
        <p style={styles.heroSubtitle}>
          Are you ready to accelerate your career as a Cloud Architect? At Cloud Institution, 
          we offer the best AWS Solution Architect Training designed to help beginners and 
          professionals master AWS cloud architecture, design principles, and deployment strategies.
        </p>
      </div>

      {/* Introduction Section */}
      <div style={styles.introSection}>
        <div style={styles.introContent}>
          <h2 style={styles.introHeading}>Why Choose Our AWS Training?</h2>
          <p style={styles.introText}>
            Transform your career with our comprehensive AWS certification program. Our expert-led 
            training combines theoretical knowledge with hands-on practical experience, ensuring 
            you're fully prepared to tackle real-world cloud challenges. Whether you're starting 
            your cloud journey or advancing your existing skills, our AWS Solution Architect Training 
            provides the perfect foundation for success in cloud computing.
          </p>
        </div>
        <div style={styles.introImage}>
          <img 
            src="assets/aws1.jpg" 
            alt="AWS Cloud Training" 
            style={styles.awsImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
      </div>

      {/* AWS Services Section */}
      <div style={styles.sectionWrapper}>
        <div style={styles.sectionCard}>
          <h3 style={styles.sectionTitle}>
            Most Common AWS Cloud Services
            <span style={styles.titleUnderline}></span>
          </h3>
          <ul style={styles.servicesGrid}>
            {[
              'Amazon VPC',
              'Amazon EC2',
              'IAM (Identity & Access Management)',
              'S3 Bucket',
              'AWS Lambda',
              'Amazon RDS',
              'DynamoDB',
              'CloudWatch',
              'CloudTrail',
              'Route 53',
              'Elastic Load Balancer',
              'Amazon SNS'
            ].map((service, index) => (
              <li
                key={index}
                style={
                  hoveredService === index
                    ? { ...styles.serviceItem, ...styles.serviceItemHovered }
                    : styles.serviceItem
                }
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <span
                  style={
                    hoveredService === index
                      ? { ...styles.checkIcon, ...styles.checkIconHovered }
                      : styles.checkIcon
                  }
                >
                  ✓
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div style={styles.sectionWrapper}>
        <div style={styles.whatYouLearnSection}>
          <h3 style={styles.whatYouLearnTitle}>What You'll Learn in AWS Cloud Platform</h3>
          <p style={styles.whatYouLearnText}>
            Jump-start your cloud journey and build confidence with our AWS Cloud Practitioner 
            Essentials course. Taught by experienced AWS trainers, this dynamic online course 
            covers crucial AWS topics, including cloud concepts, core AWS services, security 
            best practices, architectural patterns, and cost optimization strategies. You'll 
            gain hands-on experience with real-world scenarios and prepare for AWS certification exams.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div style={styles.sectionWrapper}>
        <div style={styles.sectionCard}>
          <h3 style={styles.sectionTitle}>
            Essentials Key Features
            <span style={styles.titleUnderline}></span>
          </h3>
          <ul style={styles.featuresList}>
            {[
              'Understand AWS concepts, architecture, and global infrastructure',
              'Create and manage AWS computing resources efficiently',
              'Master AWS security: IAM policies, VPC, and security groups',
              'Configure AWS databases: RDS, DynamoDB, and data management',
              'Automate deployments using CloudFormation and Elastic Beanstalk',
              'Complete hands-on AWS certification training in Mahe with real-world projects'
            ].map((feature, index) => (
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
                <span style={styles.starIcon}>★</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <footer style={styles.footerSection}>
        <div style={styles.footerContainer}>
          {/* About Column */}
          <div style={{ ...styles.footerColumn, ...styles.aboutColumn }}>
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
                <p style={styles.contactText}>hybridcloudinfo@gmail.com</p>
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
      </footer>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-column {
            grid-column: span 2 !important;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
          }
          .intro-section {
            flex-direction: column;
            padding: 50px 20px !important;
          }
          .section-card {
            padding: 30px 20px !important;
          }
          .section-title {
            font-size: 1.8rem !important;
          }
          .what-you-learn-section {
            padding: 30px 20px !important;
          }
          .footer-container {
            grid-template-columns: 1fr !important;
          }
          .about-column {
            grid-column: span 1 !important;
          }
          .footer-column {
            padding: 0 !important;
          }
          .footer-heading {
            font-size: 1.2rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.5rem !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-section {
            padding: 40px 15px 0 !important;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-card {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default AwdDetails;