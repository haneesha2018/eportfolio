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
          Hi! I’m <BoldT>Haneesha Dushara</BoldT>, a Software Engineer with a Computer Science degree from the University of Cincinnati (<BoldT>GPA 3.9</BoldT>) and about <BoldT>2.5 years of combined experience</BoldT> across full-time and internship roles. I currently work at NASPA in Business Systems Strategy, where I design and deploy cloud-native solutions on Microsoft Azure, modernize systems, and automate workflows that improve performance and reduce costs.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          My experience spans cloud architecture, full-stack development, AI-driven automation, and system integration, with hands-on contributions to projects that support thousands of users and streamline complex organizational operations. Previously, I gained experience at Emerson, SHP Leading Design, and Prodigy, building scalable, data-driven software solutions across different industries. I’m passionate about creating technology that’s efficient, reliable, and genuinely useful.
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
