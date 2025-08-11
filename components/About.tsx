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
          Hi! I’m <BoldT>Haneesha Dushara</BoldT> — a recent Computer Science graduate from the University of Cincinnati (<BoldT>3.9 GPA</BoldT>) with about <BoldT>2.5 years of combined professional experience</BoldT>. That includes <BoldT>8 months as a full-time Software Engineer</BoldT> and <BoldT>1 year 8 months</BoldT> across five co-op technical internships. I’m a curious, continuous learner who loves using technology to solve real-world problems.
        </p>
        <div className="text-start text-muted-foreground lg:px-6">
          <p>
            Right now, I’m a Software Engineer at NASPA in Business Systems Strategy, where I’ve:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Built enterprise-scale cloud solutions on Microsoft Azure</li>
            <li>Modernized legacy systems</li>
            <li>Led automation projects that improved efficiency and cut costs</li>
          </ul>
        </div>
        <p className="text-start text-muted-foreground lg:px-6">
          Before NASPA, I gained hands-on experience at Emerson, SHP Leading Design, and Prodigy, working on cloud computing, full-stack development, system integration, and security.
        </p>

        <p className="text-start text-muted-foreground lg:px-6">
          Outside of coding, I’ve enjoyed leadership roles like Sponsorship Lead for ACM@UC’s hackathon, Student Ambassador for UC International, and VP of Events for my college’s engineering tribunal. These have strengthened my collaboration, planning, and communication skills — things I value just as much as technical expertise.
        </p>

        <p className="text-start text-muted-foreground lg:px-6">
          I’m driven by the idea that technology can create meaningful impact, and I’m always excited to explore new tools, ideas, and projects that push what’s possible.
        </p>
      </div>
    </section>
  );
}
