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
    timeline: "Jan 2023 — July 2023",
    previousTimeline: [""],
    currentPosition: "Software Engineer Intern",
    place: "Prodigy",
    previousPositions: [""],
    description:
      "Engineered an AI chatbot using Retrieval-Augmented Generative (RAG) model, leveraging TensorFlow.js, React Js, Pinecone DB, and Llama2 via LangChain, resulting in 65% improved client matching accuracy, $2M+ in project leads. Innovated interactive client data map to visualize 500+ qualified leads with enhanced UI/UX using React Js and Python Django, boosting data-driven decision-making by 25%. Implemented AWS S3 and EC2 instances, cutting infrastructure costs by 15% while improving scalability and accessibility.",
    skills: [
      "React.js",
      "TensorFlow.js",
      "LangChain",
      "Python Django",
      "AWS",
      "UI/UX",
      "RAG Development"
    ],
  },
  {
    timeline: "Jan 2022 — May 2022",
    previousTimeline: [""],
    currentPosition: "Software Engineer Intern",
    place: "SHP Leading Design",
    previousPositions: [""],
    description:
      "Developed 5+ custom plugins using C# .NET, WPF UI/UX with MVVM principles for Autodesk Revit, accelerating project completion by 25%. Automated HVAC diffuser placement in Revit, reducing time from a week to a day, saving $10,000/project. Devised a script to automate statewide electrical wiring calculations, reducing manual calculation time by 80%. Integrated QA/QC checks across the architectural team, achieving 95% accuracy in detecting 100+ model errors.",
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
    previousTimeline: ["Aug 2020 — Dec 2020"],
    currentPosition: "Software Engineer Intern",
    place: "Emerson",
    previousPositions: [""],
    description:
      "Supported migration of 500,000+ records from Salesforce to in-house CRM 360 Insights using Agile Methodologies. Designed & Developed 15+ key features using C#.NET MVC, Entity Framework, Vue Js, Web API, and SQL Server, improving efficiency by 25%. Collaborated with EMEA stakeholders to gather 50+ requirements, optimizing CRM features for 14,000+ employees. Utilized IntelliJ, GitHub, Azure DevOps, and TeamCity for CI/CD, reducing deployment time by 15%.",
    skills: [
      "C# .NET MVC",
      "Vue.js",
      "SQL Server",
      "Azure DevOps",
      "Agile",
      "CI/CD",
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
                <br />
                {job.previousTimeline}
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
                {job.description}
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