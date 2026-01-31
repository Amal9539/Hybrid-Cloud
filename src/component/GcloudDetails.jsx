// import React from 'react'

// const GcloudDetails = () => {
//   return (
//     <div>
//       <div>
//         <h3>Google Cloud Platform Certification Training</h3>
//         <div style={{display:"flex"}}>
//       <p style={{width:"600px"}}>Learn foundational Google Cloud skills from expert trainers in our one-day Google Cloud Essentials course. Available online and offline, this dynamic training covers core services including Compute Engine, Cloud Storage, VPC networking, IAM, BigQuery, and Vertex AI—helping you build confidence to deploy, manage, and scale applications on GCP</p>
//       <img src="public/assets/googlec.avif" alt="" style={{height:"300px",width:"300px"}} />
//       </div>
//       </div>
//       <div>
//         <h3>Most Common GCP Cloud Services</h3>
//         <ul>
//             <li>Compute Engine</li>
//             <li>Cloud Pub</li>
//             <li>Cloud Storage</li>
//             <li>Cloud IAM</li>
//             <li>Cloud SQL</li>
//             <li>Cloud Logging</li>
//             <li>BigQuery</li>
//             <li>Monitoring</li>
//             <li>Cloud Functions</li>
//             <li>AI Platform</li>
//             <li>Cloud Dataflow</li>
//             <li>GKE</li>
//         </ul>
//       </div>
//       <div>
//         <h3>What You'll Learn</h3>
//         <ul>
//             <li>Understand Google cloud concepts, architecture, global infrastructure</li>
//             <li>Create and manage Google cloud computing resources</li>
//             <li>Master Google security: IAM and Networking</li>
//             <li>Configure Google databases</li>
//             <li>Automate deployments using CloudFormation, Beanstalk</li>
//             <li>Complete hands-on GCP certification training</li>
//         </ul>
//       </div>
//       <h3>Google Cloud Certification Course Curriculum</h3>
//       <style>{`
//         body {
//           background: #f4f6f8;
//           font-family: Arial, sans-serif;
//         }

//         .accordion {
//           max-width: 800px;
          
//         }

//         .accordion-item {
//           margin-bottom: 12px;
//         }

//         .accordion-header {
//           width: 100%;
//           background: #e3f2fd;
//           border: 1px solid #cfd8dc;
//           padding: 16px;
//           font-size: 16px;
//           text-align: left;
//           border-radius: 6px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .arrow {
//           font-size: 14px;
//         }
//       `}</style>

//       <div className="accordion">
//         <div className="accordion-item">
//           <div className="accordion-header">
//             Introduction to Google Cloud Platform
//             <span className="arrow"></span>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <div className="accordion-header">
//             Core Compute Services
//             <span className="arrow"></span>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <div className="accordion-header">
//             Storage and Database Services
//             <span className="arrow"></span>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <div className="accordion-header">
//             Networking Fundamentals
//             <span className="arrow"></span>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <div className="accordion-header">
//             Identity and Access Management (IAM)
//             <span className="arrow"></span>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <div className="accordion-header">
//             Monitoring, Logging, and Alerting
//             <span className="arrow"></span>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <div className="accordion-header">
//             Automation and DevOps Tools on GCP
//             <span className="arrow"></span>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <div className="accordion-header">
//             Hands-on Labs / Practical Exercises
//             <span className="arrow"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GcloudDetails



import React, { useEffect, useState } from 'react'

const GcloudDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ...rest of your component

  const [openAccordion, setOpenAccordion] = useState(null)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [hoveredContact, setHoveredContact] = useState(null)
  const [hoveredSocial, setHoveredSocial] = useState(null)
  const [hoveredService, setHoveredService] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const accordionItems = [
    {
      title: "Introduction to Google Cloud Platform",
      content: "Overview of GCP architecture, global infrastructure, and core concepts",
      icon: "🚀"
    },
    {
      title: "Core Compute Services",
      content: "Compute Engine, App Engine, Cloud Functions, and Kubernetes Engine",
      icon: "⚡"
    },
    {
      title: "Storage and Database Services",
      content: "Cloud Storage, Cloud SQL, Firestore, BigQuery, and data management",
      icon: "💾"
    },
    {
      title: "Networking Fundamentals",
      content: "VPC, Load Balancing, Cloud CDN, and network security",
      icon: "🌐"
    },
    {
      title: "Identity and Access Management (IAM)",
      content: "User management, roles, permissions, and security best practices",
      icon: "🔐"
    },
    {
      title: "Monitoring, Logging, and Alerting",
      content: "Cloud Monitoring, Cloud Logging, and alerting strategies",
      icon: "📊"
    },
    {
      title: "Automation and DevOps Tools on GCP",
      content: "Cloud Build, Deployment Manager, and CI/CD pipelines",
      icon: "🔧"
    },
    {
      title: "Hands-on Labs / Practical Exercises",
      content: "Real-world projects and certification preparation exercises",
      icon: "💻"
    }
  ]

  const gcpServices = [
    { name: "Compute Engine", color: "#4285f4" },
    { name: "Cloud Pub/Sub", color: "#34a853" },
    { name: "Cloud Storage", color: "#fbbc04" },
    { name: "Cloud IAM", color: "#ea4335" },
    { name: "Cloud SQL", color: "#4285f4" },
    { name: "Cloud Logging", color: "#34a853" },
    { name: "BigQuery", color: "#fbbc04" },
    { name: "Monitoring", color: "#ea4335" },
    { name: "Cloud Functions", color: "#4285f4" },
    { name: "AI Platform", color: "#34a853" },
    { name: "Cloud Dataflow", color: "#fbbc04" },
    { name: "GKE", color: "#ea4335" }
    
  ]

  const learningPoints = [
    "Understand Google Cloud concepts, architecture, and global infrastructure",
    "Create and manage Google Cloud computing resources",
    "Master Google security: IAM and Networking",
    "Configure Google databases and storage solutions",
    "Automate deployments using modern GCP tools",
    "Complete hands-on GCP certification training with real-world projects"
  ]

  const courseLinks = [
    { name: 'AWS Certification Training', href: '/amazone' },
    { name: 'Azure Certification Training', href: '/azure' },
    { name: 'Kubernetes Training', href: '/kuber' },
    { name: 'Python Full Stack Training', href: '/python' },
    { name: 'Java Full Stack Training', href: '/java' },
    { name: 'Terraform Training', href: '/teraform' },
    { name: 'Google Cloud Platform Training', href: '/google' },
  { name: 'DevOps Training', href: '/devops' },
  
  ]

  const aboutLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contactus' }
    
  ]

  // Footer Styles (unchanged)
  const footerStyles = {
    footerSection: {
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      padding: '60px 20px 0',
      marginTop: '0',
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
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0e27',
      fontFamily: "'Outfit', 'Poppins', sans-serif"
    }}>
      {/* Import Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(66, 133, 244, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(52, 168, 83, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(251, 188, 4, 0.1) 0%, transparent 40%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* Main Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section - Bold Asymmetric Design */}
        <div style={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          padding: '40px 20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div style={{
              color: 'white',
              paddingRight: '40px'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '3px',
                color: '#4285f4',
                marginBottom: '20px',
                textTransform: 'uppercase',
                fontFamily: "'Space Mono', monospace"
              }}>
                Professional Certification
              </div>
              
              <h1 style={{
                fontSize: 'clamp(42px, 6vw, 76px)',
                fontWeight: '800',
                margin: '0 0 30px 0',
                lineHeight: '1.1',
                background: 'linear-gradient(135deg, #ffffff 0%, #4285f4 50%, #34a853 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Master Google Cloud Platform
              </h1>
              
              <p style={{
                fontSize: '20px',
                lineHeight: '1.7',
                color: '#b8c5d6',
                marginBottom: '40px',
                maxWidth: '600px'
              }}>
                Build, deploy, and scale applications with confidence. Expert-led training covering Compute Engine, Cloud Storage, VPC networking, IAM, BigQuery, and Vertex AI.
              </p>

             

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
                maxWidth: '500px'
              }}>
                {[
                  { number: '50+', label: 'Hours Training' },
                  { number: '12+', label: 'Core Services' },
                  { number: '100%', label: 'Hands-on Labs' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{
                      fontSize: '32px',
                      fontWeight: '800',
                      color: '#4285f4',
                      marginBottom: '5px'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: '#7a8ba5',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontFamily: "'Space Mono', monospace"
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div style={{
              position: 'relative',
              height: '500px'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                background: 'linear-gradient(135deg, #4285f4, #34a853)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                filter: 'blur(40px)',
                opacity: '0.3',
                animation: 'morphing 8s ease-in-out infinite'
              }}></div>
              <img 
                src="public/assets/googlec.avif" 
                alt="Google Cloud Platform" 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 60px rgba(66, 133, 244, 0.3))',
                  animation: 'float 6s ease-in-out infinite'
                }} 
              />
            </div>
          </div>
        </div>

        {/* Services Section - Bento Grid Style */}
        <div style={{
          padding: '80px 20px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '15px'
            }}>
              Essential GCP Services
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #4285f4, #34a853)',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {gcpServices.map((service, index) => (
              <div 
                key={index}
                style={{
                  background: hoveredService === index 
                    ? 'linear-gradient(135deg, rgba(66, 133, 244, 0.2), rgba(52, 168, 83, 0.2))'
                    : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: hoveredService === index 
                    ? `2px solid ${service.color}` 
                    : '2px solid rgba(255, 255, 255, 0.1)',
                  padding: '30px 25px',
                  borderRadius: '20px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle, ${service.color}20, transparent)`,
                  opacity: hoveredService === index ? 1 : 0,
                  transition: 'opacity 0.4s ease'
                }}></div>
                
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'white',
                  position: 'relative',
                  zIndex: 1,
                  transform: hoveredService === index ? 'translateX(5px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease'
                }}>
                  {service.name}
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '15px',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: service.color,
                  opacity: hoveredService === index ? 1 : 0.3,
                  transition: 'all 0.3s ease',
                  transform: hoveredService === index ? 'scale(1.2)' : 'scale(1)'
                }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes - Card Layout */}
        <div style={{
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            What You'll Master
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '25px'
          }}>
            {learningPoints.map((point, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.1), rgba(52, 168, 83, 0.1))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '30px',
                borderRadius: '20px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#4285f4'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              }}
              >
                <div style={{
                  minWidth: '24px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4285f4, #34a853)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginTop: '3px'
                }}>
                  ✓
                </div>
                <p style={{
                  margin: 0,
                  color: '#d1dae6',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  fontWeight: '400'
                }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Accordion - Modern Minimal */}
        <div style={{
          padding: '80px 20px 100px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Course Curriculum
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {accordionItems.map((item, index) => (
              <div key={index} style={{
                background: openAccordion === index 
                  ? 'linear-gradient(135deg, rgba(66, 133, 244, 0.15), rgba(52, 168, 83, 0.15))'
                  : 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(10px)',
                border: openAccordion === index
                  ? '2px solid #4285f4'
                  : '2px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <button
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '25px 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}>
                    <span style={{
                      fontSize: '28px'
                    }}>
                      {item.icon}
                    </span>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: 'white',
                      textAlign: 'left'
                    }}>
                      {item.title}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '24px',
                    color: '#4285f4',
                    transform: openAccordion === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}>
                    ▼
                  </span>
                </button>
                
                {openAccordion === index && (
                  <div style={{
                    padding: '0 30px 30px 78px',
                    color: '#b8c5d6',
                    fontSize: '16px',
                    lineHeight: '1.7',
                    borderTop: '1px solid rgba(66, 133, 244, 0.2)',
                    paddingTop: '20px',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section (Unchanged) */}
      <div style={footerStyles.footerSection}>
        <div style={footerStyles.footerContainer}>
          {/* About Column */}
          <div style={{ ...footerStyles.footerColumn, ...footerStyles.aboutColumn }}>
            <img src="public/assets/hybrid.svg" alt="Hybrid Cloud Logo" style={footerStyles.footerLogo} />
            <p style={footerStyles.footerDescription}>
              At Hybrid Cloud, your trusted tech education hub in Mahe, we provide personalized, 
              hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, 
              and more—blending real-world projects, expert mentorship, and certifications to launch 
              your cloud career.
            </p>
            
            
          </div>

          {/* Top Courses Column */}
          <div style={footerStyles.footerColumn}>
            <h3 style={footerStyles.footerHeading}>
              Top Courses
              <span style={footerStyles.headingUnderline}></span>
            </h3>
            <ul style={footerStyles.footerList}>
              {courseLinks.map((link, index) => (
                <li key={index} style={footerStyles.footerListItem}>
                  <a
                    href={link.href}
                    style={
                      hoveredLink === index
                        ? { ...footerStyles.footerLink, ...footerStyles.footerLinkHovered }
                        : footerStyles.footerLink
                    }
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      style={
                        hoveredLink === index
                          ? { ...footerStyles.linkArrow, ...footerStyles.linkArrowVisible }
                          : footerStyles.linkArrow
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
          <div style={footerStyles.footerColumn}>
            <h3 style={footerStyles.footerHeading}>
              Quick Links
              <span style={footerStyles.headingUnderline}></span>
            </h3>
            <ul style={footerStyles.footerList}>
              {aboutLinks.map((link, index) => (
                <li key={index + 6} style={footerStyles.footerListItem}>
                  <a
                    href={link.href}
                    style={
                      hoveredLink === index + 6
                        ? { ...footerStyles.footerLink, ...footerStyles.footerLinkHovered }
                        : footerStyles.footerLink
                    }
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      style={
                        hoveredLink === index + 6
                          ? { ...footerStyles.linkArrow, ...footerStyles.linkArrowVisible }
                          : footerStyles.linkArrow
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
          <div style={footerStyles.footerColumn}>
            <h3 style={footerStyles.footerHeading}>
              Contact Us
              <span style={footerStyles.headingUnderline}></span>
            </h3>
            <div style={footerStyles.contactInfo}>
              <h4 style={footerStyles.locationName}>Mahe</h4>
              
              <div
                style={
                  hoveredContact === 0
                    ? { ...footerStyles.contactItem, ...footerStyles.contactItemHovered }
                    : footerStyles.contactItem
                }
                onMouseEnter={() => setHoveredContact(0)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <img src="public/assets/icons8-location-96.png" alt="Location" style={footerStyles.contactIcon} />
                <p style={footerStyles.contactText}>Anandam realty, palloor, Mahe - 673310</p>
              </div>

              <div
                style={
                  hoveredContact === 1
                    ? { ...footerStyles.contactItem, ...footerStyles.contactItemHovered }
                    : footerStyles.contactItem
                }
                onMouseEnter={() => setHoveredContact(1)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <img src="public/assets/icons8-email-24.png" alt="Email" style={footerStyles.contactIcon} />
                <p style={footerStyles.contactText}>info@hybridcloud.com</p>
              </div>

              <div
                style={
                  hoveredContact === 2
                    ? { ...footerStyles.contactItem, ...footerStyles.contactItemHovered }
                    : footerStyles.contactItem
                }
                onMouseEnter={() => setHoveredContact(2)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <img src="public/assets/icons8-phone-50.png" alt="Phone" style={footerStyles.contactIcon} />
                <p style={footerStyles.contactText}>+91 9344613129</p>
              </div>
            </div>
          </div>
        </div>

        <div style={footerStyles.footerBottom}>
          <p style={footerStyles.footerBottomText}>
            &copy; 2025 Hybrid Cloud. All rights reserved. 
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes morphing {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-column {
            grid-column: span 2 !important;
          }
        }

        @media (max-width: 768px) {
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
          .footer-section {
            padding: 40px 15px 0 !important;
          }
        }
      `}</style>
    </div>
  )
}

export default GcloudDetails