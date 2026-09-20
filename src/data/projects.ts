export interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
  status: "placeholder" | "live";
}

// NOTE: All links are placeholders for now — replace `link` and flip
// `status` to "live" as Johnny confirms which projects to feature.
export const projects: Project[] = [
  {
    title: "AI Fleet Management Platform",
    role: "Architect · SAISD",
    period: "In Progress",
    description:
      "AI-first full-stack fleet management for school transportation. Tracks driver ETA per waypoint with AI agents verifying route adherence and safe driving, plus an ambient panic-AI system that manages emergencies on the bus.",
    tags: ["AI Agents", "Full Stack", "Real-Time Tracking", "Safety Systems"],
    link: "#",
    status: "placeholder",
  },
  {
    title: "AI Call Center Platform",
    role: "AI Systems Architect · SegurosAurora.com",
    period: "2025 — Present",
    description:
      "Modular call-center API integrating LLM reasoning with telephony. Agent-based workflows coordinate data lookup, form completion, and DB updates, with RAG pipelines over internal knowledge bases and real-time Twilio STT/TTS.",
    tags: ["LLM", "LangChain", "RAG", "Twilio", "Docker"],
    link: "#",
    status: "placeholder",
  },
  {
    title: "Real Estate Valuation ML Pipeline",
    role: "AI Engineering Lead · First Rate Developers",
    period: "2022 — 2023",
    description:
      "Predictive modeling pipeline combining deep learning and gradient boosting for property price estimation. Automated MLOps for ingestion, feature engineering, training, and versioned deployment, plus computer vision for property image analysis.",
    tags: ["Machine Learning", "MLOps", "Computer Vision", "Forecasting"],
    link: "#",
    status: "placeholder",
  },
  {
    title: "AI Media Generation Platform",
    role: "Lead Software Engineer · Product Perfect / QGet.io",
    period: "2023 — Present",
    description:
      "Large-scale social platform for AI-generated media. LLM-driven content pipelines for generation, moderation, and ranking; multimodal services combining language, image, and video models; low-latency microservice architecture.",
    tags: ["Generative AI", "Microservices", "Multimodal", "Edge Deployment"],
    link: "#",
    status: "placeholder",
  },
  {
    title: "Food Delivery Platform",
    role: "Project Lead · Computer Pro",
    period: "2017 — 2019",
    description:
      "Delivery platform processing thousands of daily orders. Distributed microservices for order management, payment processing, and logistics, with CI/CD pipelines and containerized deployments on Kubernetes.",
    tags: ["Microservices", "Kubernetes", "CI/CD", "Payments"],
    link: "#",
    status: "placeholder",
  },
  {
    title: "Cross-Platform Insurance Apps",
    role: "Mobile Development Lead · JepNest & Noduk",
    period: "2019 — 2021",
    description:
      "Insurance applications for field agents and internal teams with shared code across iOS and Android. .NET backend services for policy management and claims processing over a hybrid relational/document data architecture.",
    tags: ["Xamarin", ".NET", "Mobile", "Data Architecture"],
    link: "#",
    status: "placeholder",
  },
];
