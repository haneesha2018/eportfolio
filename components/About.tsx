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
        Hello! I'm <BoldT>Haneesha Dushara</BoldT>, a recent Computer Science graduate from the University of Cincinnati with a 3.9 GPA and nearly 2.5 years of combined professional experience — including <BoldT>8 months in a full-time Software Engineer role</BoldT> and <BoldT>1 year 8 months across 5 semesters of co-op technical internships</BoldT>. I am a continuous and curious learner passionate about leveraging technology to solve real-world problems.
      </p>

      <p className="text-start text-muted-foreground lg:px-6">
        My professional journey includes my current role as a Software Engineer at NASPA in Business Systems Strategy, where I have architected enterprise-scale cloud solutions on Microsoft Azure, modernized legacy systems, and led automation workflows that significantly improved operational efficiency and reduced costs. My co-op and internships at Emerson, SHP Leading Design, and Prodigy further strengthened my skills in cloud computing, full‑stack development, system integration, and security, empowering me to tackle complex technical challenges effectively.
      </p>

      <p className="text-start text-muted-foreground lg:px-6">
        Beyond academics and technical work, I have taken on leadership roles such as Sponsorship Lead for ACM@UC's hackathon, Student Ambassador for UC International, and Vice President of Events for the College of Engineering & Applied Science Tribunal. These experiences have honed my collaboration, planning, and communication skills, complementing my technical expertise.
      </p>

      <p className="text-start text-muted-foreground lg:px-6">
        Fueled by a commitment to innovation, I strive to build impactful technology solutions that make a meaningful difference.
      </p>
    </div>
    </section>
  );
}
