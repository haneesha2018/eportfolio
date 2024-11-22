"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const leadershipPositions = [
  {
    timeline: "Aug 2022 — April 2024",
    currentPosition: "Sponsorship Lead",
    place: "Hackathon Revolution UC by ACM@UC, University of Cincinnati",
    description:
      "Raised $25,000+ for UC’s Biggest Student-Led Hackathon, Revolution UC, engaging 300+ students from Midwest Universities. Expanded hackathon scale by 20% each year by leading and supporting the team in securing sponsorships and corporate partnerships.",
    skills: ["Fundraising", "Event Management", "Team Leadership"],
    imagepath: "https://haneesha2018.github.io/eportfolio/SponsorshipLead.jpg",
    link: "https://www.linkedin.com/posts/revolutionuc_hackathon-revolutionuc-activity-7167258201913057280-fNPL?utm_source=share&utm_medium=member_desktop"
  },
  {
    timeline: "May 2022 — April 2024",
    currentPosition: "Student Ambassador",
    place: "UC International Admissions, University of Cincinnati",
    description:
      "Counseled over 2000 students, assisting with informed college decisions and demonstrating commitment to student success. Represented the University globally, promoting programs as a representative of the International Admissions Office.",
    skills: ["Counseling", "Public Speaking", "Student Advocacy"],
    imagepath: "https://haneesha2018.github.io/eportfolio/IntlAmbass.jpg",
    link: "https://ucinternationalstudentblog.weebly.com/spotlights1.html"
  },
  {
    timeline: "Jan 2022 — April 2024",
    currentPosition: "Vice President of Events",
    place: "College of Engineering and Applied Sciences Tribunal, University of Cincinnati",
    description:
      "Strategized and executed college-wide events for the undergraduate engineering student government, serving 7000 students and increasing student engagement by 15% annually.",
    skills: ["Event Planning", "Leadership", "Community Engagement"],
    imagepath: "https://haneesha2018.github.io/eportfolio/CeasTribunal.png",
    link: "https://www.linkedin.com/company/ceas-tribunal/"
  },
];

export default function LeadershipCard() {
  return (
    <section id="leadership" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Academic Activities & Leadership
        </h2>
      </div>
      <>
        {leadershipPositions.map((position, index) => (
          <Link
            key={index}
            href={position.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <CardTitle className="text-sm text-slate-400 whitespace-nowrap">
                  {position.timeline}
                </CardTitle>
                <Image
                  src={position.imagepath}
                  alt={position.currentPosition}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {position.currentPosition} • {position.place}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {position.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {position.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </Link>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <Link
          href="https://www.linkedin.com/in/haneesha-dushara/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Leadership Experience
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </Link>
      </div>
    </section>
  );
}
