

import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab} from 'react-bootstrap';


const About= () => {
  // Define the sections as tabs
  return (
    <Container className="about-page mt-5">
      <center><h1>About Us</h1></center><br />

      <Tab.Container defaultActiveKey="mission">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="mission">Our Mission and Story</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="whatWeDo">What We Do</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="services">Our Services Area</Nav.Link>
              </Nav.Item>
             
              <Nav.Item>
                <Nav.Link eventKey="board">Board Members</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="mission">
                <h2>Our Mission </h2>
                <p>
                  Our mission is to provide support and opportunities to orphans, helping them to grow, learn, and thrive. Our story began with a vision to ensure every child has a safe and loving environment.It is every child’s right to receive the love, care and attention of their family, community, or even a stranger.
                </p>
                <h2>Story</h2>
                <p>
                In May 2016, one of Orphan Life Foundation’s members visited a school in the village of Didyr, Burkina Faso which we had been helping by contributing to the improvement of the orphan education environment present there. During the tour of the school, a child called him a “SAINT”. He asked as to why the little girl said that. She stated that she had been using the same pencil that had been given to her 2 years ago as part of Orphan Life Foundation’s efforts.The uplifting story about this young girl serves as an inspiration for us and a display of gratitude on the part of the community for extending our support. As Meryl Streep defined it, “The great gift of human beings is that we have the power of empathy.” Please help Orphan Life Foundation use the power of empathy along with YOUR GRATITUDE to make the lives of these orphans and abandoned children better.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="whatWeDo">
                <h2>What We Do</h2>
                <p>
                If we can conquer space,we can also conquer orphan crisis Let’s lay the foundation of orphan welfare by promoting their education, health, and safety!
                Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.
                </p>
                <h2>
                Our United States Division
                </h2>
                <p>
                The goal of the U.S. Division is to identify, monitor, and modify orphan education plans, supporting vulnerable children and families to our best capabilities. With the help of public donation and our partners’ support, we provide financial assistance to the unfortunate.
                </p>

                <h2>
                Our Education Division
                </h2>
                <p>
                Helping registered orphans and their support communities to improve the educational framework in their region is our top priority.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="services">
                <h2>Our Services Area</h2>
                <p>
                Orphan Life Foundation is currently headquartered in the USA and conducting field work in Burkina Faso, specifically in the village of Didyr. The organization works with its global partners that help bring about a change on a local level by facilitating orphans in different areas.
                </p>


              </Tab.Pane>
              {/* <Tab.Pane eventKey="financial">
                <h2>Financial Information</h2>
                <p>
                  Transparency is key to our mission. We publish regular financial reports to show how funds are allocated and used to benefit the children we serve. [Add more details here]
                </p>
              </Tab.Pane> */}
              <Tab.Pane eventKey="board">
                <h2>Board Members</h2>
                <p>
                  Our board consists of dedicated professionals committed to guiding and supporting our mission.Auguste Badiel
President and Founder

Auguste Badiel is from Ohio and has worked with nonprofit community in several states as volunteer and Program Coordinator for the last nineteen years. Auguste developed a strong sense of devotion for the nonprofit sector. He also advocates for children of military/service members who are orphaned as a result of their parents sacrificing their own lives for their beloved country. This experience gave him a deep appreciation for how nonprofits seek to improve the quality of life for young children.

Auguste founded Orphan Life Foundation in 2011 and has served as the organization’s President from 2011 to present. Auguste received a BA in Information System Management, MBA in Business administration, MBA in Cyber Criminology. He currently works at DoD
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default About;

// import React from 'react';

// const About = () => {
//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1>About Orphan Life Foundation</h1>
//       </header>
//       <section style={styles.content}>
//         <h2>Our Mission</h2>
//         <p>
//           Orphan Life Foundation is dedicated to providing love, care, and support to orphans worldwide. 
//           Our mission is to empower vulnerable children with the resources they need to thrive, including 
//           food, medical care, education, and a nurturing community.
//         </p>
//         <h2>What We Do</h2>
//         <p>
//           We work with communities, orphanages, and sponsors around the world to ensure that every child 
//           has the opportunity to lead a fulfilling and healthy life. Through the generous contributions of 
//           our sponsors, we provide essential services that make a real difference in the lives of orphans 
//           and vulnerable children.
//         </p>
//         <h2>How You Can Help</h2>
//         <p>
//           Join us in making a lasting impact! You can support Orphan Life Foundation through various 
//           sponsorship programs, volunteering opportunities, or by making a donation. Together, we can 
//           change lives and build a better future for these children.
//         </p>
//       </section>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '80%',
//     margin: 'auto',
//     padding: '20px',
//     backgroundColor: '#f4f4f4',
//     fontFamily: 'Arial, sans-serif',
//   },
//   header: {
//     textAlign: 'center',
//     padding: '1em 0',
//     color: '#007b5e',
//   },
//   content: {
//     marginTop: '20px',
//     padding: '20px',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     color: '#333',
//     lineHeight: '1.6',
//   },
// };

// export default About;
