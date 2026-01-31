// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// const Cources = () => {
//   return (
//     <div>
//       <h2 style={{textAlign:"center"}}>Guaranteed Career Advancement Training Programs</h2>
//       <div className='row'>
//           <Card style={{ width: '18rem', marginLeft:"40px"}}>
//       <Card.Img variant="top" src="assets/ma.webp" style={{height:"170px"}} />
//       <Card.Body>
//         <Card.Title>Azure Certificate Training</Card.Title>
//         <Card.Text>
//           Duration :50hr<br/>
//           Mode of Training:Online
//         </Card.Text>
//        <Link to="/azure" className="btn btn-primary mb-3">
//           Get Cource Details
//         </Link>
//       </Card.Body>
//     </Card>


//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="assets/aws.webp" style={{height:"170px"}} />
//       <Card.Body>
//         <Card.Title>AWS Certificate Training</Card.Title>
//         <Card.Text>
//           Duration :50hr<br/>
//           Mode of Training:Online
//         </Card.Text>
//         <Link to="/amazone" className="btn btn-primary mb-3">
//           Get Cource Details
//         </Link>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="assets/gcloud.webp" style={{height:"170px"}}/>
//       <Card.Body>
//         <Card.Title> Google Cloud Platform Training</Card.Title>

//         <Card.Text>
//           Duration :50hr<br/>
//           Mode of Training:Online
//         </Card.Text>
//         <Link to="/google" className="btn btn-primary mb-3">
//           Get Cource Details
//         </Link>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="assets/java.webp" style={{height:"170px"}} />
//       <Card.Body>
//         <Card.Title>Java Full-Stack Training</Card.Title>
//         <Card.Text>
//            Duration :240hr<br/>
//           Mode of Training:Online
//         </Card.Text>
//         <Link to="/java" className="btn btn-primary mb-3">
//           Get Cource Details
//         </Link>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="assets/python1.webp" style={{height:"170px"}} />
//       <Card.Body>
//         <Card.Title>Python Full-Stack Training</Card.Title>
//         <Card.Text>
//           Duration :240hr<br/>
//           Mode of Training:Online
//         </Card.Text>
//         <Link to="/python" className="btn btn-primary mb-3">
//           Get Cource Details
//         </Link>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="assets/devopss.webp" style={{height:"170px"}} />
//       <Card.Body>
//         <Card.Title>DevOps Training</Card.Title>
//         <Card.Text>
//           Duration :45hr<br/>
//           Mode of Training:Online
//         </Card.Text>
//         <Link to="/devops" className="btn btn-primary mb-3">
//           Get Cource Details
//         </Link>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="assets/tera.png" style={{height:"170px"}} />
//       <Card.Body>
//         <Card.Title>Terraform Training</Card.Title>
//         <Card.Text>
//           Duration :30hr<br/>
//           Mode of Training:Online
//         </Card.Text>
//         <Link to="/teraform" className="btn btn-primary mb-3">
//           Get Cource Details
//         </Link>
//       </Card.Body>
//     </Card>





//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="assets/kuber.png" />
//       <Card.Body>
//         <Card.Title>Kubernetes Training</Card.Title>
//         <Card.Text>
//           Duration :45hr<br/>
//           Mode of Training:Online
//         </Card.Text>
//         <Link to="/kuber" className="btn btn-primary mb-3">
//           Get Cource Details
//         </Link>
//       </Card.Body>
//     </Card>


//       </div>


//       <div style={{display:"flex",backgroundColor:"lightblue"}}>
//       <div>
//         <img src={"assets/hybrid.svg"} alt="" />
//         <p style={{width:"300px"}}>At Hybrid Cloud , your trusted tech education hub in Mahe. we provide personalized, hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, and more—blending real-world projects, expert mentorship, and certifications to launch your cloud career.</p>
//       </div>
//       <div>
//         <h2>Top Cources</h2>
//         <ul>
//             <li>AWS Certification Training</li>
//             <li>Azure Certification Training </li>
//             <li>Kubernetes Training</li>
//             <li>Python Full Stack Training </li>
//             <li>Java Full Stack Training </li>
//             <li>Terraform Training</li>
//         </ul>
//       </div>
//       <div>
//         <h2>About</h2>
//         <ul>
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
            
//         </ul>
//       </div>
//       <div>
//         <h2>Help</h2>
//         <div>
//             <h4>Mahe</h4>
//             <div style={{display:"flex"}}>
//             <img src="assets/icons8-location-96.png" style={{height:"30px"}} alt="" />
//             <p style={{marginLeft:"20px"}}>Anandam realty, palloor, Mahe - 673310</p>
//             </div>
//              <div style={{display:"flex"}}>
//             <img src="assets/icons8-email-24.png" style={{height:"30px"}} alt="" />
//             <p style={{marginLeft:"20px"}}>Anandam realty, palloor, Mahe - 673310</p>
//             </div>
//             <div style={{display:"flex"}}>
//             <img src="assets/icons8-phone-50.png" style={{height:"30px"}} alt="" />
//             <p style={{marginLeft:"20px"}}> +91 9344613129</p>
//             </div>
//         </div>
//       </div>
//     </div>

//     </div>
//   )
// }

// export default Cources



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [hoveredContact, setHoveredContact] = useState(null);
  const courseData = [
    {
      title: 'Azure Certificate Training',
      duration: '50hr',
      image: 'assets/ma.webp',
      link: '/azure'
    },
    {
      title: 'AWS Certificate Training',
      duration: '50hr',
      image: 'assets/aws.webp',
      link: '/amazone'
    },
    {
      title: 'Google Cloud Platform Training',
      duration: '50hr',
      image: 'assets/gcloud.webp',
      link: '/google'
    },
    {
      title: 'Java Full-Stack Training',
      duration: '100hr',
      image: 'assets/java.webp',
      link: '/java'
    },
    {
      title: 'Python Full-Stack Training',
      duration: '100hr',
      image: 'assets/python1.webp',
      link: '/python'
    },
    {
      title: 'DevOps Training',
      duration: '45hr',
      image: 'assets/devopss.webp',
      link: '/devops'
    },
    {
      title: 'Terraform Training',
      duration: '30hr',
      image: 'assets/tera.png',
      link: '/teraform'
    },
    {
      title: 'Kubernetes Training',
      duration: '45hr',
      image: 'assets/kuber.png',
      link: '/kuber'
    }
  ];
  const courseLinks = [
    { name: 'AWS Certification Training', href: '/amazone' },
    { name: 'Azure Certification Training', href: '/azure' },
    { name: 'Kubernetes Training', href: '/kuber' },
    { name: 'Python Full Stack Training', href: '/python' },
    { name: 'Java Full Stack Training', href: '/java' },
    { name: 'Terraform Training', href: '/teraform' },
    { name: 'Google Cloud Platform Training', href: '/gcp' },
    { name: 'DevOps Training', href: '/devops' },
  ];

  const aboutLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contactus' }
  ];

  const styles = {
    coursesContainer: {
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
    },
    heroSection: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '80px 20px',
      textAlign: 'center',
      color: 'white',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    mainHeading: {
      fontSize: '2.8rem',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      letterSpacing: '-0.5px',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      fontWeight: '300',
      opacity: '0.95',
      maxWidth: '700px',
      margin: '0 auto',
    },
    coursesSection: {
      padding: '80px 20px',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    coursesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      justifyItems: 'center',
    },
    courseCard: {
      width: '100%',
      maxWidth: '350px',
      border: 'none',
      borderRadius: '16px',
      overflow: 'hidden',
      background: 'white',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardImageWrapper: {
      position: 'relative',
      height: '200px',
      overflow: 'hidden',
    },
    courseImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    cardBodyCustom: {
      padding: '25px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    courseTitle: {
      fontSize: '1.35rem',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '20px',
      minHeight: '60px',
      lineHeight: '1.4',
    },
    courseDetails: {
      marginBottom: '25px',
      flexGrow: 1,
    },
    detailItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
      color: '#4a5568',
      fontSize: '0.95rem',
    },
    detailStrong: {
      color: '#2d3748',
      marginRight: '5px',
    },
    btnCourseDetails: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      width: '100%',
      padding: '14px 24px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
      marginTop: 'auto',
      border: 'none',
    },
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
    footerColumn: { padding: '0 20px' },
    aboutColumn: { gridColumn: 'span 1' },
    footerLogo: { maxWidth: '180px', marginBottom: '20px' },
    footerDescription: { fontSize: '0.95rem', lineHeight: '1.8', color: '#cbd5e0', marginBottom: '20px' },
    footerHeading: { fontSize: '1.4rem', fontWeight: '600', marginBottom: '25px', color: 'white', position: 'relative', paddingBottom: '12px' },
    headingUnderline: { position: 'absolute', bottom: '0', left: '0', width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF9900, #FF6F00)', borderRadius: '2px' },
    footerList: { listStyle: 'none', padding: 0, margin: 0 },
    footerListItem: { marginBottom: '12px' },
    footerLink: { color: '#cbd5e0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease', display: 'inline-block', position: 'relative' },
    footerLinkHovered: { color: 'white', paddingLeft: '20px' },
    linkArrow: { opacity: 0, transition: 'opacity 0.3s ease', marginRight: '5px' },
    linkArrowVisible: { opacity: 1 },
    locationName: { fontSize: '1.1rem', fontWeight: '600', marginBottom: '15px', color: '#FF9900' },
    contactInfo: { display: 'flex', flexDirection: 'column', gap: '15px' },
    contactItem: { display: 'flex', alignItems: 'flex-start', gap: '15px', transition: 'transform 0.3s ease' },
    contactItemHovered: { transform: 'translateX(5px)' },
    contactIcon: { width: '24px', height: '24px', filter: 'brightness(0) invert(1)', opacity: '0.8', flexShrink: 0, marginTop: '2px' },
    contactText: { margin: 0, color: '#cbd5e0', fontSize: '0.95rem', lineHeight: '1.6' },
    footerBottom: { borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '25px 0', textAlign: 'center' },
    footerBottomText: { margin: 0, color: '#a0aec0', fontSize: '0.9rem' },
  }
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const getCardStyle = (index) => ({
    ...styles.courseCard,
    transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
    boxShadow: hoveredCard === index 
      ? '0 12px 30px rgba(0, 0, 0, 0.15)' 
      : '0 4px 15px rgba(0, 0, 0, 0.08)',
  });

  const getImageStyle = (index) => ({
    ...styles.courseImage,
    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
  });

  const getButtonStyle = (index) => ({
    ...styles.btnCourseDetails,
    background: hoveredButton === index 
      ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' 
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transform: hoveredButton === index ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: hoveredButton === index 
      ? '0 6px 20px rgba(102, 126, 234, 0.4)' 
      : '0 4px 12px rgba(102, 126, 234, 0.3)',
  });

  const getLinkStyle = (index) => ({
    ...styles.footerLink,
    color: hoveredLink === index ? 'white' : '#cbd5e0',
    paddingLeft: hoveredLink === index ? '20px' : '0',
  });

  return (
    <div style={styles.coursesContainer} class="col-lg-6 col-md-6 col-sm-6">
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.mainHeading}>Guaranteed Career Advancement Training Programs</h1>
        <p style={styles.heroSubtitle}>Transform your career with industry-leading certifications and hands-on training</p>
      </section>

      {/* Courses Grid */}
      <section style={styles.coursesSection}>
        <div style={styles.container}>
          <div style={styles.coursesGrid}>
            {courseData.map((course, index) => (
              <div 
                key={index} 
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.cardImageWrapper}>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    style={getImageStyle(index)}
                  />
                </div>
                <div style={styles.cardBodyCustom}>
                  <h3 style={styles.courseTitle}>{course.title}</h3>
                  <div style={styles.courseDetails}>
                    <div style={styles.detailItem}>
                      <span><strong style={styles.detailStrong}>Duration:</strong> {course.duration}</span>
                    </div>
                    <div style={styles.detailItem}>
                      <span><strong style={styles.detailStrong}>Mode:</strong> Online</span>
                    </div>
                  </div>
                  <Link 
                    to={course.link} 
                    style={getButtonStyle(index)}
                    onMouseEnter={() => setHoveredButton(index)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Get Course Details
                    <span style={{ 
                      transition: 'transform 0.3s ease',
                      transform: hoveredButton === index ? 'translateX(5px)' : 'translateX(0)',
                      display: 'inline-block'
                    }}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>


        <footer style={styles.footerSection}>
      <div style={styles.footerContainer}>
        {/* About Column */}
        <div style={{ ...styles.footerColumn, ...styles.aboutColumn }}>
          <img src="assets/hybrid.svg" alt="Hybrid Cloud Logo" style={styles.footerLogo} />
          <p style={styles.footerDescription}>
            At Hybrid Cloud, your trusted tech education hub in Mahe, we provide personalized, 
              hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, 
              and more—blending real-world projects, expert mentorship, and certifications to launch 
              your cloud career..
          </p>
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
                  style={hoveredLink === index ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span style={hoveredLink === index ? { ...styles.linkArrow, ...styles.linkArrowVisible } : styles.linkArrow}>→</span>
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
              <li key={index} style={styles.footerListItem}>
                <a
                  href={link.href}
                  style={hoveredLink === index + 10 ? { ...styles.footerLink, ...styles.footerLinkHovered } : styles.footerLink}
                  onMouseEnter={() => setHoveredLink(index + 10)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span style={hoveredLink === index + 10 ? { ...styles.linkArrow, ...styles.linkArrowVisible } : styles.linkArrow}>→</span>
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
              style={hoveredContact === 0 ? { ...styles.contactItem, ...styles.contactItemHovered } : styles.contactItem}
              onMouseEnter={() => setHoveredContact(0)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <img src="assets/icons8-location-96.png" alt="Location" style={styles.contactIcon} />
              <p style={styles.contactText}>Anandam realty, palloor, Mahe - 673310</p>
            </div>
            {/* Email */}
            <div
              style={hoveredContact === 1 ? { ...styles.contactItem, ...styles.contactItemHovered } : styles.contactItem}
              onMouseEnter={() => setHoveredContact(1)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <img src="assets/icons8-email-24.png" alt="Email" style={styles.contactIcon} />
              <p style={styles.contactText}>info@hybridcloud.com</p>
            </div>
            {/* Phone */}
            <div
              style={hoveredContact === 2 ? { ...styles.contactItem, ...styles.contactItemHovered } : styles.contactItem}
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
        <p style={styles.footerBottomText}>&copy; 2025 Hybrid Cloud. All rights reserved.</p>
      </div>
    </footer>
      </section>
      
      
    </div>
  );
};

export default Courses;