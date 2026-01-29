import React from 'react'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';

const Certificationhct = () => {
  return (
    <div style={{ background: '#e9f5ff', padding: '60px 0' }}>
       <Container>
        <Row className="align-items-center">
          
          {/* LEFT SIDE */}
          <Col md={6}>
            <h2 className="fw-bold mb-4">
              Exam & <span className="text-primary">Certification</span>
            </h2>

            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Do I need prior tech experience to take the course or certification?
                </Accordion.Header>
                <Accordion.Body>
                  No prior technical experience is required. Our courses are designed
                  for beginners as well as professionals.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Career growth with IT Certification?
                </Accordion.Header>
                <Accordion.Body>
                  IT certifications boost credibility, skills, and job opportunities
                  across cloud and DevOps roles.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Does Certification guarantee jobs?
                </Accordion.Header>
                <Accordion.Body>
                  Certifications improve chances but do not guarantee jobs. Skills
                  and practice matter most.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Benefits of Cloud/IT Certification?
                </Accordion.Header>
                <Accordion.Body>
                  Higher salary potential, global recognition, and career flexibility.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Can I learn Cloud/IT without coding?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, many cloud roles require minimal coding initially.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Which certifications are best for beginners?
                </Accordion.Header>
                <Accordion.Body>
                  AWS Cloud Practitioner, Azure Fundamentals, and Google Cloud Digital
                  Leader are ideal.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            
          </Col>

          {/* RIGHT SIDE */}
          <Col md={5} className="text-center mt-4 mt-md-0">
            <div
              style={{
                display: 'inline-block',
                marginTop:"60px",
                marginLeft:"30px",
                width:"500px"
              }}
            >
              <img
                src={"src/assets/certification.jpg"}
                alt="Certificate"
                className="img-fluid"
                style={{ maxHeight: '399px', maxWidth:"800px", background: '#fff' ,borderRadius:"8px",border:"2px solid lightblue"}}
              />
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Certificationhct
