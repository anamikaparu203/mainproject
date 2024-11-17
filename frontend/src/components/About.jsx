

import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab} from 'react-bootstrap';

import orphan from'../assets/images/orphan.jpg';
import auguste from'../assets/images/auguste.jpg';
import rupal from'../assets/images/rupal.jpg';
import mary from'../assets/images/mary.jpg'
import anand from'../assets/images/anand.jpg'

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
                <Nav.Link eventKey="Board Members">Board Members</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>

            <Tab.Content>
              <Tab.Pane eventKey="mission">
              
              <img 
                  src={orphan} 
                  alt="Mission Image" 
                  style={{ width: '80%', height: '120', marginBottom: '20px' }} 
                />
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
                <h2>"Providing better educational opportunities to orphans, we empower them to complete their basic as well as advanced schooling."</h2>
              <p>We achieve this by cultivating a safe and efficient teaching environment, providing basic school supplies, reducing the level of educational disparity, and reducing or better yet eliminating the barriers orphans face for schooling.</p>
              
              <h2>Our Health
              Division</h2>
              <p>This division is focused on granting easy access to health and nutritional services to orphans and their families. With our specialized strategy, we work to minimize the risk of contracting the HIV/AIDS virus in orphan children. Working in close coordination with the education division, the health sector ensures maximum support for children’s careers, optimal protection of their legal and human rights, and meeting their emotional needs.</p>
              <h2>Our Safety
              Division</h2>
               <p>Our safety division works day in and night out to ensure the safety and wellbeing of orphans. This division focuses on offering adoption opportunities, facilitating the adoption process, conducting psychosocial evaluations, and using interventions to monitor children in fostering environments.</p>
              </Tab.Pane>
              
              <Tab.Pane eventKey="Board Members">

                {/* <h2>Board Members</h2> */}
               {/* <h2>Auguste Badiel</h2>
                <img 
                  src={auguste} 
                  alt="Board Members" 
                  style={{ width: '50%', height: '120', marginBottom: '20px' }} 
                /> */}
                  <h2>Auguste Badiel</h2>
                <p>
                  Our board consists of dedicated professionals committed to guiding and supporting our mission.Auguste Badiel
                President and Founder

                Auguste Badiel is from Ohio and has worked with nonprofit community in several states as volunteer and Program Coordinator for the last nineteen years. Auguste developed a strong sense of devotion for the nonprofit sector. He also advocates for children of military/service members who are orphaned as a result of their parents sacrificing their own lives for their beloved country. This experience gave him a deep appreciation for how nonprofits seek to improve the quality of life for young children.

                Auguste founded Orphan Life Foundation in 2011 and has served as the organization’s President from 2011 to present. Auguste received a BA in Information System Management, MBA in Business administration, MBA in Cyber Criminology. He currently works at DoD
                </p>
                
                <img 
                  src={auguste} 
                  alt="Board Members" 
                  style={{ width: '50%', height: '120', marginBottom: '20px' }} 
                />

                <h2>Rupal Shah</h2>

                

               <p>Rupal Shah currently serves as the Vice President of the Orphan Life Foundation. Rupal has an extensive background in charitable efforts including seats on various charity boards including Junior Achievement NJ, an organization which provides education to underprivileged children, New Eyes for the Needy, an organization which provides glasses to the disadvantaged and most recently Essex County Family Justice who provides resources for victims of domestic violence. Rupal aspires to help those in need.

               Rupal holds a BS from Rutgers University and an MBA from the New York University, Stern Business School. She currently works at PGIM Fixed Income in their Client Advisory Group.</p>
            
               <img 
                  src={rupal} 
                  alt="Board Members" 
                  style={{ width: '50%', height: '120', marginBottom: '20px' }} 
                />



            <h2>"Providing better educational opportunities to orphans, we empower them to complete their basic as well as advanced schooling."</h2>
            <p>We achieve this by cultivating a safe and efficient teaching environment, providing basic school supplies, reducing the level of educational disparity, and reducing or better yet eliminating the barriers orphans face for schooling.</p>
            
            <h2>Mary Ellen Cavanaugh</h2>
            Treasurer

           <p>Mary Ellen Cavanaugh serves on the board of directors and as Treasurer of Orphan Life Foundation. Mary Ellen has been involved and supported many projects with nonprofits for several years, including American Cancer Society, Susan G. Komen Foundation and Samaritan’s Purse - Operation Christmas Child. She hopes to use her passion and skillset to support the objectives of Orphan Life Foundation to better the lives of orphans around the world.

          Mary Ellen graduated from Mount Saint Mary College with a BS in Business Management and Administration. She has over 20 years of experience in senior finance related roles. She has experience in both public and private organizations, domestic and international sectors, around various industries. The companies she has supported are Lucent Technologies, Tiffany & Co., The Louis Berger Group, and Aquestive Therapeutics, Inc. to name a few. Mary Ellen is currently the Treasurer at Wejo Inc.</p>
                  <img 
                  src={mary} 
                  alt="Board Members" 
                  style={{ width: '50%', height: '120', marginBottom: '20px' }} 
                />



          <h2>Anand S. Shah</h2>
Secretary

<p>Anand S. Shah serves on the board of directors and serves as Secretary of Orphan Life Foundation. Anand has worked with nonprofits for several years, including providing pro bono legal counsel to New York Legal Assistance Group and the Toys “R” Us Children’s Fund. He has also served on the Board of Trustees for New Eyes for The Needy. Anand is a practicing attorney in New York and New Jersey specializing in cross-border transactions, governance, financing, capital markets and M&A. Anand aspires to use his legal skillset to fulfill the mission of Orphan Life Foundation to better the lives of orphans all over the world.

Anand graduated from Boston College with a BS in Accounting and Information Systems, and from Seton Hall University School of Law with a JD. He recently was the Deputy General Counsel of HBC LP (the holding company of Saks Fifth Avenue, Saks Off 5th, Hudson’s Bay Company, Lord & Taylor and Convene), and the General Counsel of Toys “R” Us.</p>

<img 
                  src={anand} 
                  alt="Board Members" 
                  style={{ width: '50%', height: '120', marginBottom: '20px' }} 
                />

              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default About;
