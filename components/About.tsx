"use client";
/* eslint-disable */
import styled from 'styled-components';

const BoldT = styled.span`
  font-weight: bold;
  color: white;
`;

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
      <p className="text-start text-muted-foreground lg:px-6">
        Hello! I'm <BoldT>Haneesha Dushara</BoldT>, a recent Computer Science graduate with a bachelor's degree from the University of Cincinnati. With a 3.9 GPA and over 1.5 years of professional full-time internship experience, I'm a continuous and curious learner.
      </p>

      <p className="text-start text-muted-foreground lg:px-6">
        My professional journey includes full-time internships at Emerson, SHP Leading Design, and Prodigy, where I developed critical skills in software development, artificial intelligence, and data analytics. These experiences have equipped me with the technical expertise and problem-solving abilities necessary to tackle complex challenges.
      </p>

      <p className="text-start text-muted-foreground lg:px-6">
        Beyond academics, I've been actively involved in leadership roles such as Sponsorship Lead for ACM@UC's hackathon, Student Ambassador for UC International, and Vice President of Events for the College of Engineering & Applied Science Tribunal. These experiences have not only enhanced my technical skills but also developed my abilities in team collaboration, planning, and communication.
      </p>
      <p className="text-start text-muted-foreground lg:px-6">
        My passion for technology is driven by a commitment to solving complex problems that can make a difference in the world.
      </p>
      </div>
    </section>
  );
}
