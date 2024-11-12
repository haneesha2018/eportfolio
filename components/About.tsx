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
          Hello! I’m <BoldT>Haneesha Dushara</BoldT>, a recent graduate with bachelors degree in Computer Science from the University of Cincinnati.
          {/* https://ucinternationalstudentblog.weebly.com/spotlights1.html  */}
          My journey to choosing this path was shaped by a deep passion for learning, self-improvement, and a dedication to achieving academic excellence.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I've gained professional experience through internships with Emerson, SHP Leading Design, and Prodigy, honing my skills in software development, artificial intelligence and data analytics.

          Throughout my time at University of Cincinnati, I was also actively involved in various roles, such as Vice President of Events for the College of Engineering & Applied Science Tribunal and Sponsorship Lead for ACM@UC’s hackathon.
        </p>
      </div>
    </section>
  );
}
