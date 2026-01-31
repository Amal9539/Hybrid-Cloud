// import React from 'react'

// const JavaDetails = () => {
//   return (
//     <div>
//       <div>
//         <h3>Java Full Stack  Certification Training</h3>
//         <p style={{width:"300px"}}>Learn foundational Java skills from Advanced  Training</p><br/><br/>
//         <div style={{display:"flex"}}>
//         <p style={{width:"300px"}}>Jump-start your Java Full Stack  journey and build confidence with our  Essentials course.   Taught by experienced  trainers,this dynamic Online Java full-stack training </p>
//             <img src="public/assets/javafull.webp" alt="" style={{height:"300px",width:"300px"}}/>
//             </div>
//       </div>
//       <div>
//         <h3>Topic Are</h3>
//         <ul>
//             <li>Python</li>
//             <li>HTML</li>
//             <li>React js</li>
//             <li>CSS</li>
//             <li>Javascript</li>
//             <li>MySQL</li>
//             <li>Bootstrap</li>
//             <li>Springboot</li>
//             <li>JDBC</li>
//             <li>JEE</li>
//             <li>JSP</li>
//             <li>Hibernate</li>
//         </ul>
//       </div>
//       <div>
//       <h3>What You'll Learn</h3>
//       <div >
//       <p>Jump-start your Java Full Stack  journey and build confidence with our  Essentials course. Taught by experienced  trainers,this dynamic Online and  Offline Java full-stack training covers Java, Spring Boot, Hibernate for backend and frontend and HTML, CSS, JavaScript, and React for frontend. It also includes database</p>
      
//       </div>
//       </div>
//       <div>
//         <h3>Essentials Key Features</h3>
//         <ul>
//             <li>Responsive Frameworks</li>
//             <li>Scalability</li>
//             <li>Complete hands-on Java Full stack certification training</li>
//             <li>Backend with java</li>
//             <li>Frontend Technologies</li>
//             <li>Database Integration</li>
//         </ul>
//       </div>

//     </div>
//   )
// }

// export default JavaDetails



import React, { useState, useEffect } from 'react'

const JavaDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ...rest of your component

  const [hoveredTopic, setHoveredTopic] = useState(null)
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [hoveredContact, setHoveredContact] = useState(null)
  const [hoveredSocial, setHoveredSocial] = useState(null)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const topics = [
    { name: 'Java', color: '#f89820', icon: '☕' },
    { name: 'HTML', color: '#e34c26', icon: '🌐' },
    { name: 'React.js', color: '#61dafb', icon: '⚛️' },
    { name: 'CSS', color: '#264de4', icon: '🎨' },
    { name: 'JavaScript', color: '#f7df1e', icon: '⚡' },
    { name: 'MySQL', color: '#00758f', icon: '🗄️' },
    { name: 'Bootstrap', color: '#7952b3', icon: '📱' },
    { name: 'Spring Boot', color: '#6db33f', icon: '🍃' },
    { name: 'JDBC', color: '#f89820', icon: '🔗' },
    { name: 'JEE', color: '#e76f00', icon: '🏢' },
    { name: 'JSP', color: '#f89820', icon: '📄' },
    { name: 'Hibernate', color: '#59666c', icon: '💤' }
  ]

  const features = [
    'Responsive Frameworks',
    'Scalability',
    'Complete hands-on Java Full Stack certification training',
    'Backend with Java',
    'Frontend Technologies',
    'Database Integration'
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

  // Footer Styles
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
      background: 'linear-gradient(135deg, #fff5eb 0%, #ffe8d6 50%, #ffd4b8 100%)',
      fontFamily: "'Raleway', 'Nunito', sans-serif"
    }}>
      {/* Import Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
      
      {/* Decorative Elements */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(248, 152, 32, 0.15), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        position: 'fixed',
        bottom: '5%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(97, 218, 251, 0.12), transparent)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <div style={{
          padding: '80px 20px 60px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div>
              <div style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '3px',
                color: '#f89820',
                marginBottom: '20px',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                Full Stack Development
              </div>

              <h1 style={{
                fontSize: 'clamp(40px, 6vw, 68px)',
                fontWeight: '900',
                margin: '0 0 25px 0',
                lineHeight: '1.1',
                color: '#2d1b0e',
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '-1px'
              }}>
                Java Full Stack
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #f89820, #e76f00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Certification Training
                </span>
              </h1>

              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#5d4e42',
                marginBottom: '35px',
                maxWidth: '500px'
              }}>
                Jump-start your Java Full Stack journey and build confidence with our comprehensive Essentials course. Taught by experienced trainers, this dynamic training covers both backend and frontend development.
              </p>

              
            </div>

            {/* Right Image */}
            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                position: 'absolute',
                width: '450px',
                height: '450px',
                background: 'linear-gradient(135deg, #f89820, #e76f00)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                opacity: '0.2',
                animation: 'pulse 4s ease-in-out infinite'
              }}></div>
              
              <img 
                src="public/assets/javafull.webp" 
                alt="Java Full Stack" 
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  borderRadius: '30px',
                  boxShadow: '0 30px 60px rgba(45, 27, 14, 0.15)',
                  transform: 'rotate(-3deg)',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-3deg) scale(1)'}
              />
            </div>
          </div>
        </div>

        {/* Topics Section - Vibrant Cards */}
        <div style={{
          padding: '80px 20px',
          background: 'white',
          clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 54px)',
                fontWeight: '900',
                color: '#2d1b0e',
                marginBottom: '15px',
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '-1px'
              }}>
                Technologies Covered
              </h2>
              <div style={{
                width: '100px',
                height: '5px',
                background: 'linear-gradient(90deg, #f89820, #e76f00)',
                margin: '0 auto',
                borderRadius: '10px'
              }}></div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '25px'
            }}>
              {topics.map((topic, index) => (
                <div 
                  key={index}
                  style={{
                    background: hoveredTopic === index 
                      ? `linear-gradient(135deg, ${topic.color}15, ${topic.color}25)`
                      : 'linear-gradient(135deg, #fafafa, #f5f5f5)',
                    border: hoveredTopic === index 
                      ? `3px solid ${topic.color}` 
                      : '3px solid transparent',
                    padding: '30px 25px',
                    borderRadius: '20px',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: hoveredTopic === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredTopic === index 
                      ? `0 20px 40px ${topic.color}30`
                      : '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  onMouseEnter={() => setHoveredTopic(index)}
                  onMouseLeave={() => setHoveredTopic(null)}
                >
                  {/* Background Icon */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    fontSize: '100px',
                    opacity: hoveredTopic === index ? 0.15 : 0.05,
                    transition: 'opacity 0.4s ease',
                    transform: 'rotate(15deg)'
                  }}>
                    {topic.icon}
                  </div>

                  <div style={{
                    fontSize: '40px',
                    marginBottom: '15px',
                    transition: 'transform 0.4s ease',
                    transform: hoveredTopic === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)'
                  }}>
                    {topic.icon}
                  </div>

                  <div style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: hoveredTopic === index ? topic.color : '#2d1b0e',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.3s ease',
                    fontFamily: "'Raleway', sans-serif"
                  }}>
                    {topic.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div style={{
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            padding: '60px',
            boxShadow: '0 30px 60px rgba(45, 27, 14, 0.1)',
            border: '2px solid rgba(248, 152, 32, 0.2)'
          }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 54px)',
              fontWeight: '900',
              color: '#2d1b0e',
              marginBottom: '30px',
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '-1px'
            }}>
              What You'll Learn
            </h2>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.9',
              color: '#5d4e42',
              marginBottom: '0'
            }}>
              Jump-start your Java Full Stack journey and build confidence with our comprehensive Essentials course. 
              Taught by experienced trainers, this dynamic online and offline Java full-stack training covers 
              <strong style={{ color: '#f89820' }}> Java, Spring Boot, Hibernate</strong> for backend development and 
              <strong style={{ color: '#61dafb' }}> HTML, CSS, JavaScript, and React</strong> for frontend development. 
              It also includes <strong style={{ color: '#00758f' }}>database integration</strong> to give you a complete 
              full-stack skillset.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div style={{
          padding: '80px 20px 100px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 54px)',
              fontWeight: '900',
              color: '#2d1b0e',
              marginBottom: '15px',
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '-1px'
            }}>
              Essentials Key Features
            </h2>
            <div style={{
              width: '100px',
              height: '5px',
              background: 'linear-gradient(90deg, #f89820, #e76f00)',
              margin: '0 auto',
              borderRadius: '10px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  background: hoveredFeature === index
                    ? 'linear-gradient(135deg, #fff, #fffaf5)'
                    : 'white',
                  padding: '35px 30px',
                  borderRadius: '25px',
                  border: hoveredFeature === index 
                    ? '3px solid #f89820'
                    : '3px solid #f5f5f5',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: hoveredFeature === index
                    ? '0 20px 50px rgba(248, 152, 32, 0.2)'
                    : '0 10px 25px rgba(0,0,0,0.05)',
                  transform: hoveredFeature === index ? 'translateY(-5px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <div style={{
                    minWidth: '50px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    background: hoveredFeature === index
                      ? 'linear-gradient(135deg, #f89820, #e76f00)'
                      : 'linear-gradient(135deg, #fff5eb, #ffe8d6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: '900',
                    color: hoveredFeature === index ? 'white' : '#f89820',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {index + 1}
                  </div>

                  <p style={{
                    margin: 0,
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#2d1b0e',
                    lineHeight: '1.5',
                    fontFamily: "'Raleway', sans-serif"
                  }}>
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div style={{
          background: 'linear-gradient(135deg, #2d1b0e, #4a3426)',
          padding: '80px 20px',
          clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)'
        }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '900',
              marginBottom: '25px',
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '-1px'
            }}>
              Ready to Become a Full Stack Developer?
            </h2>
            
            <p style={{
              fontSize: '18px',
              lineHeight: '1.7',
              marginBottom: '40px',
              color: '#d4c5b8',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              Join thousands of students who have transformed their careers with our comprehensive 
              Java Full Stack training program.
            </p>

            
          </div>
        </div>
      </div>

      {/* Footer Section */}
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
                    onMouseEnter={() => setHoveredLink(index)}
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
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }

        @media (max-width: 968px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
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

export default JavaDetails