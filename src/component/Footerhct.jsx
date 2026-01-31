import React from 'react'


const Footerhct = () => {
  return (
    <div style={{display:"flex",backgroundColor:"lightblue"}}>
      <div>
        <img src={"assets/hybrid.svg"} alt="" />
        <p style={{width:"300px"}}>At Hybrid Cloud , your trusted tech education hub in Mahe. we provide personalized, hands-on training in AWS, Azure, Google Cloud, Java, Python, Terraform, Kubernetes, and more—blending real-world projects, expert mentorship, and certifications to launch your cloud career.</p>
      </div>
      <div>
        <h2>Top Cources</h2>
        <ul>
            <li>AWS Certification Training</li>
            <li>Azure Certification Training </li>
            <li>Kubernetes Training</li>
            <li>Python Full Stack Training </li>
            <li>Java Full Stack Training </li>
            <li>Terraform Training</li>
        </ul>
      </div>
      <div>
        <h2>About</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            
        </ul>
      </div>
      <div>
        <h2>Help</h2>
        <div>
            <h4>Mahe</h4>
            <div style={{display:"flex"}}>
            <img src="assets/icons8-location-96.png" style={{height:"30px"}} alt="" />
            <p style={{marginLeft:"20px"}}>Anandam realty, palloor, Mahe - 673310</p>
            </div>
             <div style={{display:"flex"}}>
            <img src="assets/icons8-email-24.png" style={{height:"30px"}} alt="" />
            <p style={{marginLeft:"20px"}}>Anandam realty, palloor, Mahe - 673310</p>
            </div>
            <div style={{display:"flex"}}>
            <img src="assets/icons8-phone-50.png" style={{height:"30px"}} alt="" />
            <p style={{marginLeft:"20px"}}> +91 9344613129</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footerhct
