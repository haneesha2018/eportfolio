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

const jobPositions = [
  {
    timeline: "Jan 2025 — Present",
    previousTimeline: [""],
    currentPosition: "Software Engineer (System Specialist at Business Systems Strategy)",
    place: "NASPA",
    previousPositions: [""],
    description: [
      "Architected and deployed enterprise-scale conference registration platform on Microsoft Azure, processing $3M+ revenue across 6,000+ registrants with 99.9% uptime, reducing registration errors by 75% and eliminating 200+ hours of manual processing annually.",
      "Engineered automated integration pipeline connecting Accelevents, Workato, and Salesforce APIs for multi-event management system serving 8+ annual conferences, achieving 95% workflow automation and saving 100+ operational hours per event cycle.",
      "Led comprehensive legacy system modernization initiative, migrating ColdFusion-based Applicant Tracking System and Member Newsletter System to Lucee framework, enhancing security posture for 10,000+ users while implementing SendGrid API integration and Salesforce CRM automation for seamless user authentication and subscriber management.",
      "Directed enterprise security incident response and orchestrated migration of 4 legacy production servers to secure Azure infrastructure, deploying SQL Server on Azure VMs and containerizing Lucee/Nginx applications using Azure Container Instances, implementing modern security protocols and achieving $60,000 annual cost reduction while maintaining zero-downtime deployment."
    ],
    skills: [
      "Microsoft Azure",
      "Accelevents API",
      "Workato",
      "Salesforce API",
      "Lucee",
      "SendGrid API",
      "SQL Server",
      "Azure VM",
      "Azure Container Instances",
      "Nginx",
      "Enterprise Security",
      "Workflow Automation"
    ],
  },
  {
    timeline: "Jan 2023 — July 2023",
    previousTimeline: [""],
    currentPosition: "Software Engineer Intern",
    place: "Prodigy",
    previousPositions: [""],
    description: [
      "Innovated interactive client data map to visualize 500+ qualified leads with enhanced UI/UX using React Js and Python Django, boosting data-driven decision-making by 25%.",
      "Deployed apps on AWS EC2 with S3 storage integration, reducing infrastructure costs by 15% while improving scalability and accessibility."
    ],
    skills: [
      "React.js",
      "TensorFlow.js",
      "LangChain",
      "Python Django",
      "AWS",
      "UI/UX"
    ],
  },
  {
    timeline: "Jan 2022 — May 2022",
    previousTimeline: [""],
    currentPosition: "Software Engineer Intern",
    place: "SHP Leading Design",
    previousPositions: [""],
    description: [
      "Developed 5+ custom plugins using C# .NET, WPF UI/UX with MVVM principles for Autodesk Revit, accelerating project completion by 25%.",
      "Automated HVAC diffuser placement in Revit, reducing time from a week to a day, saving $10,000/project.",
      "Devised a script to automate statewide electrical wiring calculations, reducing manual calculation time by 80%.",
      "Integrated QA/QC checks across the architectural team, achieving 95% accuracy in detecting 100+ model errors."
    ],
    skills: [
      "C# .NET",
      "WPF",
      "MVVM",
      "Automation",
      "QA/QC",
      "Revit Development"
    ],
  },
  {
    timeline: "May 2021 — Aug 2021",
    previousTimeline: [""],
    currentPosition: "Software Engineer Intern",
    place: "Emerson",
    previousPositions: [""],
    description: [
      "Designed & Implemented 15+ key features for in-house CRM using C#.NET MVC, Entity Framework, Vue Js, Web API, and SQL Server, helping optimize the system improving efficiency by 25%, supporting software lifecycle, demonstrating clear test planning and user support.",
      "Created and Maintained Comprehensive Unit Tests using NUnit, achieving 90% code coverage and reducing post-deployment issues by 20%.",
      "Utilized IntelliJ tools for debugging and testing, GitHub for code review and version control, Azure DevOps for project management, and TeamCity for CI/CD, which streamlined the development process and reduced deployment time by 15%."
    ],
    skills: [
      "C# .NET MVC",
      "Vue.js",
      "SQL Server",
      "Azure DevOps",
      "Agile",
      "CI/CD",
      "NUnit Testing",
      "CRM Development"
    ],
  },
  {
    timeline: "Aug 2020 — Dec 2020",
    previousTimeline: [""],
    currentPosition: "Software Engineer Intern",
    place: "Emerson",
    previousPositions: [""],
    description: [
      "Supported in the migration of 500,000+ records from Salesforce to in-house CRM 360 Insights, enhancing data accessibility and system integration by being involved throughout the entire software development lifecycle (SDLC) using Agile Methodologies for sprint planning.",
      "Collaborated with EMEA stakeholders to gather 50+ business & technical requirements for CRM used by 14,000+ users across multiple regions.",
      "Developed and modified 10+ existing CRM features to align with requirements using C#.NET MVC, Entity Framework, Vue Js, Web API, and SQL Server, resulting in a 30% reduction in processing time."
    ],
    skills: [
      "C# .NET MVC",
      "Vue.js",
      "SQL Server",
      "Azure DevOps",
      "Agile",
      "CI/CD",
      "NUnit Testing",
      "CRM Development"
    ],
  }
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-sm text-slate-400 whitespace-nowrap">
                {job.timeline}
                {/* <br />
                {job.previousTimeline} */}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
              • {job.description[0]}
                <br></br>
              •  {job.description[1]}
                <br></br>
              {job.description[2] && (
                <>
                  •  {job.description[2]}
                  <br></br>
                </>
              )}
              {job.description[3] && (
                <>
                  •  {job.description[3]}
                  <br></br>
                </>
              )}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
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