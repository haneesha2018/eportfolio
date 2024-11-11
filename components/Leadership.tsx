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

const leadershipPositions = [
  {
    timeline: "Aug 2022 — April 2024",
    currentPosition: "Sponsorship Lead",
    place: "Hackathon Revolution UC by ACM@UC, University of Cincinnati",
    description:
      "Raised $25,000+ for UC’s Biggest Student-Led Hackathon, Revolution UC, engaging 300+ students from Midwest Universities. Expanded hackathon scale by 20% each year by leading and supporting the team in securing sponsorships and corporate partnerships.",
    skills: ["Fundraising", "Event Management", "Team Leadership"],
  },
  {
    timeline: "May 2022 — April 2024",
    currentPosition: "Student Ambassador",
    place: "UC International Admissions, University of Cincinnati",
    description:
      "Counseled over 2000 students, assisting with informed college decisions and demonstrating commitment to student success. Represented the University globally, promoting programs as a representative of the International Admissions Office.",
    skills: ["Counseling", "Public Speaking", "Student Advocacy"],
  },
  {
    timeline: "Aug 2020 — April 2024",
    currentPosition: "Vice President of Events",
    place: "College of Engineering and Applied Sciences Tribunal, University of Cincinnati",
    description:
      "Strategized and executed college-wide events for the undergraduate engineering student government, serving 7000 students and increasing student engagement by 15% annually.",
    skills: ["Event Planning", "Leadership", "Community Engagement"],
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
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-sm text-slate-400 whitespace-nowrap">
                {position.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {position.currentPosition} • {position.place}
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
        ))}
      </>
    </section>
  );
}
