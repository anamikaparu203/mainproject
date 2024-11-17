

import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab} from 'react-bootstrap';
import edu from'../assets/images/edu.jpg';
import medical from'../assets/images/medical.jpg';

const Program= () => {
  
  return (
    <Container className="about-page mt-5">
      <center><h1>Program</h1></center><br />

      <Tab.Container defaultActiveKey="Program">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="Orphan Education Program">Orphan Education Program</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Orphan Lifestyle Program">Orphan Lifestyle Program</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Orphan Health Program">Orphan Health Program</Nav.Link>
              </Nav.Item>
             
           
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="Program">
                <h2>Our programs</h2>
                <p>
                Little by little, family by family,we can do so much good on so many levels
                </p>
                <img 
                  src={edu} 
                  alt="Program" 
                  style={{ width: '50%', height: '120', marginBottom: '20px' }} 
                />


                <h2>A majority of our projects fall completely in line with our key objectives.</h2>
                <p>
                Every year, millions of individuals help support communities in need through organizing fundraisers, setting up donation programs and holding community service events. Orphan Life Foundation has been recognizing those areas which require attention through the following programs:
                 
                </p>

                
              </Tab.Pane>
              <Tab.Pane eventKey="Orphan Education Program">
                <h2>
                At Orphan Life Foundation, we firmly believe every child has a right to a quality education
                </h2>
                <p>
                
               For orphaned and underprivileged children, education is not just a need; it’s a lifeline to a brighter future. It provides the skills, knowledge, and confidence that children need to break free from the cycle of poverty and hardship. By equipping these young minds with the right tools, we help pave the way for them to become responsible, successful adults who can contribute positively to society.
                </p>
               <h2>Our Education Projects at a Glance</h2>
              <p>To provide resources for better education to orphaned and underprivileged children in the underserved areas of the Philippines, India, Columbia, and Africa, ensuring they have access to the knowledge and skills needed for a secure future.</p>

                <img 
                  src={edu} 
                  alt="Program" 
                  style={{ width: '50%', height: '120', marginBottom: '20px' }} 
                />
             <h2>whatWeDo</h2>
             <p>We fund academic programs, develop educational facilities, and supply learning materials to various orphanages and schools.</p>
             <h2>Impact and Future Goal</h2>
             <p>Thousands of children have been enrolled in schools, with a significant percentage advancing to higher levels of education. We aim to raise more funds to magnify our impact and reach more orphaned children across the world.</p>
                
              </Tab.Pane>
              <Tab.Pane eventKey="Orphan Lifestyle Program">
                <h2>Orphan lifestyle programs</h2>
                <p>
                The plight of orphaned children is heart-wrenching. Many face abandonment, neglect, and the harsh reality of life without basic necessities or parental guidance.
                Being deprived of education, shelter, and a loving environment, these children start their lives at a disadvantage that often sets the course for their future.

               At the Orphan Life Foundation, we believe every child deserves a fair chance at a fulfilling life. This core belief fuels our Orphan Lifestyle Programs, aimed at directly improving the quality of life for orphans.

              <h2>Our Lifestyle Projects at a Glance</h2>
                </p>
                
           We aim to enable children to attend school regularly by providing bicycles as a means of transportation, thereby increasing the literacy rate in underprivileged areas like Burkina Faso.
           <h3>What we do</h3>
In 2022, we purchased and distributed 50 bikes to orphan children in 5 schools in Burkina Faso to make it easier for them to attend school.
Impact and Future Goal
Over all, we distributed 300 bikes, enabling more children to attend school regularly and focus on their education rather than the hardships of their daily commute. We wish to increase this number so more children are empowered to pursue their educational dreams, unburdened by the challenges of distance and transportation. 2022 was our last successful completion of bikes project in Burkina Faso, and we know first-hand the profound impact on the lives of these children and their extended family. These bicycles will not only serve as a necessary means of transportation to school, but also as a symbol of hope for new opportunities and possibilities for the orphans in Burkina Faso.

November 2023, Orphan Life Foundation is planning in providing 50 bikes to 10 schools in the region of Reo, Burkina-Faso. Although 50 bikes might seem like a small contribution, it has and will allow these children a level of mobility that was previously unimaginable. Our goal is to raise funds for purchasing additional bikes to make education more accessible for orphaned and underprivileged children who walked over 5 to 15 miles to their school.
             

                <h2>
                Shelter for Shy Project (2SP)
                </h2>
                <p>
                Objective:
Our goal is to facilitate orphans’ adoption and provide vulnerable children with a safe, stable environment and offer the psychosocial support they need to thrive in later life without vulnerabilities and risks.
<h2>What we do</h2>
We identify orphan children through orphan census registration, offer adoption opportunities, place children in foster families, and offer psychosocial evaluations and interventions to monitor them. Social activities are also organized to create a family-like environment for the unfortunate kids.
<h2>Impact and Future Goal</h2>
In collaboration with local non-profit organizations and local authorities, between 2011 and 2023, we identified 2057 orphan children under 18, facilitated over 17 adoptions, and placed 53 children in foster families. Additionally, 404 orphans have been placed in local shelters managed by local authorities. We aim to continue conducting census in underserved areas to reach orphaned children and improve their quality of life by providing shelter.

                </p>

                <h2>
                Clothes for Orphan Project (COP)
                </h2>
                <p>
                
<p>To collect and distribute usable clothing and shoes to needy orphans, primarily targeting communities where children face extreme weather conditions without proper clothing.  </p>
                  
                 

<h2>What we do</h2>
We provide weather-appropriate clothes and shoes to the needy through an all-volunteer, non-profit program so they can cover themselves and live with dignity.
<h2>impact and Future Goal</h2>
<p>From 2018-2023, we raised over $1700 to distribute clothing and shoes to two orphanages and five orphan schools in Didyr. Our future goal is to raise $2,500 to help more schools and orphanages.</p>
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="Orphan Health Program">
                <h2>Orphan health programs</h2>
                <p>The state of health for orphans worldwide is not just an issue; it’s a crisis.
              
                From illnesses like HIV/AIDS to the basic human need for clean water and proper nutrition, millions of orphan children face life-threatening circumstances every single day.
What we must not forget is that every statistic is a life—a child in need of a family, love, and, most importantly, basic health services.
At Orphan Life Foundation, we’re committed to making a tangible difference in the lives of the orphans and underprivileged in rural areas.
         

<img 
                  src={medical} 
                  alt="Program" 
                  style={{ width: '50%', height: '120', marginBottom: '20px' }} 
                />

                     
                </p>

<h2>Our Health Projects at a Glance</h2>
To curb the devastating impacts of HIV and AIDS on orphan children and their families.
<h2>What we do</h2>
<p>We focus on improving access to nutritional and health services, keeping children in school, protecting their legal and human rights, and promoting emotional support.</p>
<h2>Impact and Future Goal</h2>
<p>We have allocated around $3,000 specifically for the HIV/AIDS program, aimed at rooting out one of the causes of children becoming orphaned in specific regions. By 2020, we performed HIV tests on all orphan children registered in our database and provided medical assistance and sensibilization to the community. We aim to raise more funds to provide ongoing health services and support to the community.</p>
              </Tab.Pane>
            
             
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Program;