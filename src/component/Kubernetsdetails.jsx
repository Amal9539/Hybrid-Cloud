// import React from 'react'

// const Kubernetsdetails = () => {
//   return (
//     <div>
//       <div>
//         <h2>Kubernetes Training</h2>
//       </div>
//       <div style={{display:"flex"}}> 
//         <p>Learn foundational Kubernetes skills with Expertise. Jump-start your Kubernetes journey and build confidence through our Training Essentials course, taught by experienced trainers. This dynamic training is available both online and offline</p>
//         <img src="assets/kuber1.webp" alt="" style={{height:"300px",width:"300px"}} />
//       </div>
//       <div>
//         <h3>Most Common Kubernetes Services</h3>
//         <ul>
//            <li>Kubernetes</li> 
//             <li>Architecture</li>
//             <li>Environment Setup</li>
//             <li>Components Hieratchy</li>
//             <li>K8S API</li>
//             <li>API Versions</li>
//             <li>Pods, Replica sets</li>
//             <li>Scaling and Auto Scaling</li>
//             <li>Config Maps</li>
//             <li>Kubectl Commands</li>
//             <li>Mini-Kube</li>
//             <li>Kubernetes Namescape</li>
//         </ul>
//       </div>
//       <div>
//         <h3>What You'll Learn</h3>
//         <ul>
//             <li>Introduction to K8S</li>
//             <li>Architecture Of K8s</li>
//             <li>Core Concepts</li>
//             <li>AKS</li>
//             <li>EKS</li>
//             <li>Complete hands-on Kubernetes training</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Kubernetsdetails




import React, { useEffect } from 'react';

const KubernetesDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ...rest of your component

  const [activeService, setActiveService] = React.useState(null);
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const services = [
    { title: 'Kubernetes', icon: '⎈', color: '#326CE5' },
    { title: 'Architecture', icon: '🏗️', color: '#FF6B6B' },
    { title: 'Environment Setup', icon: '⚙️', color: '#4ECDC4' },
    { title: 'Components Hierarchy', icon: '📊', color: '#FFB84D' },
    { title: 'K8S API', icon: '🔌', color: '#51CF66' },
    { title: 'API Versions', icon: '📋', color: '#F06595' },
    { title: 'Pods, Replica sets', icon: '📦', color: '#845EF7' },
    { title: 'Scaling & Auto Scaling', icon: '📈', color: '#FF8787' },
    { title: 'Config Maps', icon: '🗺️', color: '#20C997' },
    { title: 'Kubectl Commands', icon: '💻', color: '#FFC078' },
    { title: 'Mini-Kube', icon: '🎯', color: '#51CF66' },
    { title: 'Kubernetes Namespace', icon: '🏷️', color: '#339AF0' }
  ];

  const learningPoints = [
    { title: 'Introduction to K8S', desc: 'Master the fundamentals of Kubernetes container orchestration' },
    { title: 'Architecture Of K8s', desc: 'Deep dive into master and worker node components' },
    { title: 'Core Concepts', desc: 'Pods, Services, Deployments, and more' },
    { title: 'AKS', desc: 'Azure Kubernetes Service implementation' },
    { title: 'EKS', desc: 'Elastic Kubernetes Service on AWS' },
    { title: 'Hands-on Training', desc: 'Real-world projects and practical experience' }
  ];

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
    <div style={{
      minHeight: '100vh',
      background: '#FAFBFC',
      fontFamily: '"Poppins", -apple-system, sans-serif',
      color: '#1A202C'
    }}>
      {/* Animated Background Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(50, 108, 229, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(78, 205, 196, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 184, 77, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Decorative Shapes */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, rgba(50, 108, 229, 0.1), rgba(78, 205, 196, 0.1))',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'float 6s ease-in-out infinite'
      }} />

      <div style={{
        position: 'fixed',
        bottom: '10%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 184, 77, 0.1))',
        borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <section style={{
          padding: '100px 24px 120px',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              {/* Badge */}
              

              {/* Title */}
              <h1 style={{
                fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                margin: '0 0 28px 0',
                background: 'linear-gradient(135deg, #1E3A8A 0%, #0369A1 50%, #0891B2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'fadeInUp 0.6s ease-out 0.1s both',
                letterSpacing: '-0.02em'
              }}>
                Master Kubernetes
              </h1>

              <p style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                lineHeight: '1.8',
                color: '#475569',
                margin: '0 0 44px 0',
                maxWidth: '700px',
                animation: 'fadeInUp 0.6s ease-out 0.2s both'
              }}>
                Learn foundational Kubernetes skills with expert-led training. Jump-start your 
                container orchestration journey through hands-on projects, real-world scenarios, 
                and industry best practices.
              </p>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                animation: 'fadeInUp 0.6s ease-out 0.3s both'
              }}>
                

                
              </div>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '32px',
                marginTop: '64px',
                animation: 'fadeInUp 0.6s ease-out 0.4s both'
              }}>
                {[
                  { number: '100+', label: 'Students Trained', color: '#326CE5' },
                  { number: '40+', label: 'Hours Content', color: '#0891B2' },
                  { number: '95%', label: 'Success Rate', color: '#10B981' }
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '24px',
                    borderLeft: `4px solid ${stat.color}`,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{
                      fontSize: '2.2rem',
                      fontWeight: '800',
                      color: stat.color,
                      marginBottom: '6px',
                      lineHeight: 1
                    }}>{stat.number}</div>
                    <div style={{
                      fontSize: '0.95rem',
                      color: '#64748B',
                      fontWeight: '600',
                      letterSpacing: '0.3px'
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section style={{
          padding: '100px 24px',
          background: '#FFFFFF'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '70px' }}>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                borderRadius: '12px',
                padding: '8px 20px',
                marginBottom: '20px'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: '#92400E',
                  letterSpacing: '1px'
                }}>COMPREHENSIVE CURRICULUM</span>
              </div>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                fontWeight: '800',
                margin: '0 0 20px 0',
                color: '#0F172A',
                letterSpacing: '-0.02em'
              }}>
                Course Topics
              </h2>
              <p style={{
                fontSize: '1.15rem',
                color: '#64748B',
                maxWidth: '650px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Comprehensive coverage of essential Kubernetes concepts and tools
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    background: activeService === index 
                      ? '#FFFFFF'
                      : '#FAFBFC',
                    border: activeService === index 
                      ? `2px solid ${service.color}` 
                      : '2px solid #F1F5F9',
                    borderRadius: '20px',
                    padding: '32px',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: activeService === index ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: activeService === index 
                      ? `0 20px 40px ${service.color}20`
                      : '0 4px 12px rgba(0, 0, 0, 0.04)',
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                  }}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: activeService === index 
                      ? `linear-gradient(135deg, ${service.color}, ${service.color}DD)`
                      : `${service.color}15`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    marginBottom: '24px',
                    transition: 'all 0.3s ease',
                    boxShadow: activeService === index 
                      ? `0 8px 24px ${service.color}30`
                      : 'none'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    margin: '0',
                    transition: 'color 0.3s ease'
                  }}>
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section style={{
          padding: '100px 24px',
          maxWidth: '1400px',
          margin: '0 auto',
          background: '#FAFBFC'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)',
              borderRadius: '12px',
              padding: '8px 20px',
              marginBottom: '20px'
            }}>
              <span style={{
                fontSize: '0.9rem',
                fontWeight: '700',
                color: '#1E3A8A',
                letterSpacing: '1px'
              }}>LEARNING PATH</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontWeight: '800',
              margin: '0 0 20px 0',
              color: '#0F172A',
              letterSpacing: '-0.02em'
            }}>
              What You'll Learn
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#64748B',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Build production-ready skills in cloud-native container orchestration
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px'
          }}>
            {learningPoints.map((point, index) => (
              <div
                key={index}
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #F1F5F9',
                  borderRadius: '24px',
                  padding: '36px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#326CE5';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(50, 108, 229, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#F1F5F9';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #326CE5 0%, #0891B2 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 20px rgba(50, 108, 229, 0.25)'
                }}>
                  {index + 1}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  margin: '0 0 14px 0',
                  paddingRight: '60px',
                  lineHeight: '1.3'
                }}>
                  {point.title}
                </h3>
                <p style={{
                  color: '#64748B',
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  margin: '0'
                }}>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '100px 24px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1E3A8A 0%, #0369A1 50%, #0891B2 100%)',
            borderRadius: '32px',
            padding: '70px 48px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(30, 58, 138, 0.25)'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
              `,
              pointerEvents: 'none'
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '8px 20px',
                marginBottom: '24px',
                backdropFilter: 'blur(10px)'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  letterSpacing: '1px'
                }}>START YOUR JOURNEY</span>
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                margin: '0 0 20px 0',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}>
                Ready to Master Kubernetes?
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.95)',
                margin: '0 0 40px 0',
                maxWidth: '650px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.7'
              }}>
                Join hundreds of professionals who've advanced their careers with our expert-led training
              </p>
              
            </div>
          </div>
        </section>

        {/* Footer */}
        <div style={{
          background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
          color: 'white',
          padding: '60px 20px 0',
          marginTop: '80px',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            paddingBottom: '40px',
          }}>
            {/* About Column */}
            <div style={{ padding: '0 20px' }}>
              <img src="assets/hybrid.svg" alt="Hybrid Cloud Logo" style={{
                maxWidth: '180px',
                marginBottom: '20px',
                
              }} />
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: '#cbd5e0',
                marginBottom: '20px',
              }}>
                At Hybrid Cloud, your trusted tech education hub in Mahe, we provide personalized, 
                hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, 
                and more—blending real-world projects, expert mentorship, and certifications to launch 
                your cloud career.
              </p>
            </div>

            {/* Top Courses Column */}
            <div style={{ padding: '0 20px' }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '25px',
                color: 'white',
                position: 'relative',
                paddingBottom: '12px',
              }}>
                Top Courses
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px',
                }}></span>
              </h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {courseLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a
                      href={link.href}
                      style={{
                        color: hoveredLink === index ? 'white' : '#cbd5e0',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        position: 'relative',
                        paddingLeft: hoveredLink === index ? '20px' : '0',
                      }}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span style={{
                        opacity: hoveredLink === index ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        marginRight: '5px',
                      }}>→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div style={{ padding: '0 20px' }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '25px',
                color: 'white',
                position: 'relative',
                paddingBottom: '12px',
              }}>
                Quick Links
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px',
                }}></span>
              </h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {aboutLinks.map((link, index) => (
                  <li key={index + 6} style={{ marginBottom: '12px' }}>
                    <a
                      href={link.href}
                      style={{
                        color: hoveredLink === index + 6 ? 'white' : '#cbd5e0',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        position: 'relative',
                        paddingLeft: hoveredLink === index + 6 ? '20px' : '0',
                      }}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span style={{
                        opacity: hoveredLink === index + 6 ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        marginRight: '5px',
                      }}>→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div style={{ padding: '0 20px' }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '25px',
                color: 'white',
                position: 'relative',
                paddingBottom: '12px',
              }}>
                Contact Us
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px',
                }}></span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#667eea',
                }}>Mahe</h4>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <img src="assets/icons8-location-96.png" alt="Location" style={{
                    width: '24px',
                    height: '24px',
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.8',
                    flexShrink: 0,
                    marginTop: '2px',
                  }} />
                  <p style={{ margin: '0', color: '#cbd5e0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Anandam realty, palloor, Mahe - 673310
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <img src="assets/icons8-email-24.png" alt="Email" style={{
                    width: '24px',
                    height: '24px',
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.8',
                    flexShrink: 0,
                    marginTop: '2px',
                  }} />
                  <p style={{ margin: '0', color: '#cbd5e0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    info@hybridcloud.com
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <img src="assets/icons8-phone-50.png" alt="Phone" style={{
                    width: '24px',
                    height: '24px',
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.8',
                    flexShrink: 0,
                    marginTop: '2px',
                  }} />
                  <p style={{ margin: '0', color: '#cbd5e0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    +91 9344613129
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '25px 0',
            textAlign: 'center',
          }}>
            <p style={{ margin: '0', color: '#a0aec0', fontSize: '0.9rem' }}>
              &copy; 2025 Hybrid Cloud. All rights reserved. 
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 50px 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default KubernetesDetails;