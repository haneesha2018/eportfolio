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
    timeline: "Sept 2025 – Present",
    currentPosition: "Software Engineer II — NASPA (Business Systems Strategy)",
    description: [
      "Designed and deployed cloud-native event management platform on Azure with Node.js and REST APIs, supporting 6,000+ users and $3M+ in annual transactions.",
      "Architected integration pipelines across Salesforce, Accelevents, and Workato, automating 95% of conference workflows.",
      "Modernized legacy systems through containerization (Docker, Nginx) and Azure Container Apps with automated GitHub CI/CD pipelines, achieving zero downtime across production deployments.",
      "Accelerated development velocity 30% through LLM-assisted workflows (Claude, GitHub Copilot) for coding, debugging, and refactoring.",
      "Contributed to AI governance standards for the organization, establishing responsible AI usage policies across development and operations teams.",
      "Reduced infrastructure costs by $60K+ annually through cloud optimization and architectural improvements."
    ],
    skills: [
      "Node.js", "REST API", "Microsoft Azure", "Azure Container Apps", "Docker", "Nginx", "GitHub CI/CD", "Salesforce", "Accelevents", "Workato", "LLM (Claude, Copilot)", "AI Governance", "Cloud Optimization"
    ]
  },
  {
    timeline: "Jan 2025 – Aug 2025",
    currentPosition: "Software Engineer — NASPA (Business Systems Strategy)",
    description: [
      "Built conference registration and volunteer management systems on Azure with Node.js and REST APIs, serving 30+ organizational divisions.",
      "Optimized Salesforce SOQL queries and ETL pipelines, reducing API consumption by 50% and improving query response times by 5×.",
      "Migrated legacy monolithic applications to containerized Azure infrastructure with Docker and GitHub CI/CD, reducing deployment time by 40%.",
      "Re-architected member newsletter delivery system with SendGrid and Cloudflare, increasing email deliverability to 99.5% for 14,000+ members."
    ],
    skills: [
      "Node.js", "REST API", "Microsoft Azure", "Salesforce SOQL", "ETL", "Docker", "GitHub CI/CD", "SendGrid", "Cloudflare"
    ]
  },
  {
    timeline: "Jan 2023 – July 2023",
    currentPosition: "Software Engineer Intern – Prodigy",
    description: [
      "Developed a RAG-powered chatbot with LangChain, LLaMA2, and Pinecone vector database, improving client-project matching accuracy by 65%.",
      "Built React.js frontend with TensorFlow.js integration for real-time model inference and interactive chat interface.",
      "Deployed chatbot infrastructure on AWS (EC2, S3), reducing hosting costs by 15% while improving scalability and availability."
    ],
    skills: [
      "LangChain", "LLaMA2", "Pinecone", "React.js", "TensorFlow.js", "AWS EC2", "AWS S3"
    ]
  },
  {
    timeline: "Jan 2022 – May 2022",
    currentPosition: "Software Engineer Intern – SHP Leading Design",
    description: [
      "Developed 5+ custom Autodesk Revit plugins in C#/.NET with WPF (MVVM architecture), accelerating architectural design workflows by 25%.",
      "Automated HVAC diffuser placement algorithm, reducing design iteration time from 5 days to 1 day and saving $10K+ per project.",
      "Built automated QA/QC validation system detecting 100+ model errors with 95% accuracy, reducing manual review time by 60%."
    ],
    skills: [
      "C#/.NET", "WPF", "MVVM", "Autodesk Revit", "Automation", "QA/QC"
    ]
  },
  {
    timeline: "May 2021 – Aug 2021",
    currentPosition: "Software Engineer Intern – Emerson",
    description: [
      "Designed and implemented 15+ features for internal CRM platform with C# .NET MVC, Entity Framework, Vue.js, and SQL Server, improving processing efficiency by 25%.",
      "Established automated CI/CD pipelines with GitHub, Azure DevOps, and TeamCity, reducing deployment time by 15%."
    ],
    skills: [
      "C# .NET MVC", "Entity Framework", "Vue.js", "SQL Server", "GitHub", "Azure DevOps", "TeamCity", "CI/CD"
    ]
  },
  {
    timeline: "Aug 2020 – Dec 2020",
    currentPosition: "Software Engineer Intern – Emerson",
    description: [
      "Migrated 500K+ records from Salesforce to in-house CRM (360 Insights) with zero data loss, enabling consolidated reporting across regions.",
      "Gathered and documented 50+ business and technical requirements from EMEA stakeholders for enterprise CRM serving 14,000+ users.",
      "Enhanced 10+ CRM features in C# .NET with Web API and SQL Server optimization, reducing average processing time by 30%."
    ],
    skills: [
      "Salesforce", "CRM (360 Insights)", "C# .NET", "Web API", "SQL Server", "Requirements Gathering"
    ]
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
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition}
              </p>
              <CardDescription className="py-3 text-muted-foreground">
                {job.description.map((desc, idx) => (
                  <span key={idx}>
                    • {desc}
                    <br />
                  </span>
                ))}
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