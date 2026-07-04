import { ServiceDetail } from '../servicesData'

export const aiAutomationSubServices: Record<string, ServiceDetail> = {
  "ai-chatbots-assistants": {
    slug: "ai-chatbots-assistants",
    title: "AI Chatbots & Assistants",
    icon: "Cpu",
    shortDescription: "Custom intelligent chatbots integrated with your internal knowledge bases to automate customer support and internal workflows.",
    theme: {
      glow: "rgba(139, 92, 246, 0.15)",
      text: "text-violet-400",
      border: "border-violet-500",
      bg: "bg-violet-500/10",
      borderPulse: "border-violet-500/20",
      bulletBg: "bg-violet-500",
      heroPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
      ctaPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 shadow-violet-500/10 hover:shadow-violet-500/20",
      pricingPopularBorder: "border-violet-500",
      pricingPopularBadge: "bg-violet-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(139, 92, 246, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(139, 92, 246, 0.3)] group-hover:bg-violet-500/10",
      hoverBorder: "hover:border-violet-500",
      groupHoverBorder: "group-hover:border-violet-500",
    },
    hero: {
      badge: "AI Chatbots",
      title: "AI Chatbots & Virtual Assistants",
      subText: "Automate support and workflows. We build intelligent virtual assistants integrated with your custom business knowledge base.",
      primaryCtaText: "Build AI Chatbot",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an AI Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Generic chatbots rely on rigid rules and script trees, frustrating customers. AI Chatbots & Virtual Assistants builds intelligent assistants using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). By connecting the AI directly to your product manuals, FAQs, or CRM data, we ensure responses are context-aware, accurate, and helpful.",
    problemsSolved: [
      "Customer support teams overwhelmed by repetitive inquiries.",
      "Generic chatbots giving inaccurate or irrelevant answers.",
      "No 24/7 support leading to missed business leads.",
      "Difficulty locating information across scattered internal documents.",
      "Manual data entry needed to log customer chat details into CRM systems.",
      "High onboarding and training costs for customer support staff."
    ],
    subServices: [
      {
        title: "Knowledge Base RAG Setup",
        description: "Vectorizing internal PDFs and files so the AI chatbot can query your documentation for answers."
      },
      {
        title: "LLM Fine-Tuning & Prompting",
        description: "Configuring system prompts and behaviors to align with your corporate brand voice."
      },
      {
        title: "Omnichannel Deployment",
        description: "Deploying chatbots to your website, WhatsApp, Slack, or Microsoft Teams platforms."
      },
      {
        title: "Human-in-the-Loop Hand-off",
        description: "Integrating pathways to hand off complex queries to live support agents."
      },
      {
        title: "API Pipeline Integrations",
        description: "Connecting chatbots to CRM, database, or scheduling tools to handle user requests."
      },
      {
        title: "Conversation Analytics Tracking",
        description: "Setting up dashboards to track chat volume, accuracy ratings, and conversion rates."
      }
    ],
    features: [
      "Retrieval-Augmented Generation (RAG) querying your business data",
      "Brand-aligned prompting ensuring consistent customer communications",
      "Dynamic human-in-the-loop transitions for complex inquiries",
      "WhatsApp, Slack, and web-chat deployment capability",
      "CRM integrations logging user contact details automatically",
      "Analytical dashboards monitoring chatbot accuracy levels"
    ],
    technologies: ["OpenAI API / Claude API", "LangChain / LlamaIndex", "Vector Databases (Pinecone / Pgvector)", "Python", "Node.js", "React"],
    process: ["Knowledge Audit", "Vector DB & RAG Setup", "Prompt & Tone Configuration", "Platform Integrations Setup", "Accuracy Auditing", "Live Deployment Support"],
    whyChooseUs: [
      {
        title: "Context-Aware AI",
        description: "AI answers queries using your documentation, preventing hallucinations."
      },
      {
        title: "Omnichannel Deployment",
        description: "Chatbots deployed on your site, WhatsApp, or Slack easily."
      },
      {
        title: "Seamless Agent Handoff",
        description: "Complex questions hand off to live support teams smoothly."
      },
      {
        title: "Analytics Tracked",
        description: "Track chat accuracy and volume to continuously optimize performance."
      }
    ],
    faqs: [
      {
        question: "How do you prevent the AI from giving incorrect information?",
        answer: "By using Retrieval-Augmented Generation (RAG). The AI is restricted to querying your verified documentation, ignoring unrelated public data to prevent hallucinations."
      },
      {
        question: "Can the chatbot schedule bookings or edit database records?",
        answer: "Yes. We implement tool-calling capabilities, letting the chatbot securely trigger database updates or book appointments after user confirmation."
      },
      {
        question: "Will the chatbot work on our WhatsApp Business page?",
        answer: "Yes, we integrate chatbots with the WhatsApp Business API, Facebook Messenger, and Slack workspace channels."
      },
      {
        question: "How do we update the chatbot's knowledge later?",
        answer: "We connect the vector database to your CMS or document folders, updating the chatbot's knowledge automatically whenever you update files."
      }
    ],
    cta: {
      headline: "Want to Automate Customer Inquiries with Smart AI?",
      subText: "Let's build a custom AI virtual assistant integrated with your business documentation.",
      primaryBtn: "Build AI Chatbot",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "machine-learning-model-training": {
    slug: "machine-learning-model-training",
    title: "Machine Learning Model Training",
    icon: "Cpu",
    shortDescription: "Custom machine learning models designed for classification, categorization, and feature analysis.",
    theme: {
      glow: "rgba(139, 92, 246, 0.15)",
      text: "text-violet-400",
      border: "border-violet-500",
      bg: "bg-violet-500/10",
      borderPulse: "border-violet-500/20",
      bulletBg: "bg-violet-500",
      heroPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
      ctaPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 shadow-violet-500/10 hover:shadow-violet-500/20",
      pricingPopularBorder: "border-violet-500",
      pricingPopularBadge: "bg-violet-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(139, 92, 246, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(139, 92, 246, 0.3)] group-hover:bg-violet-500/10",
      hoverBorder: "hover:border-violet-500",
      groupHoverBorder: "group-hover:border-violet-500",
    },
    hero: {
      badge: "ML Model Training",
      title: "Machine Learning Model Training",
      subText: "Train custom models. We engineer data pipelines and train classification or categorization models to solve business challenges.",
      primaryCtaText: "Train ML Model",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Data Scientist",
      secondaryCtaLink: "/contact"
    },
    overview: "Generic APIs are often inadequate for highly specific categorization or processing tasks. Machine Learning Model Training designs data preparation pipelines, builds neural networks, and trains custom models (using PyTorch or TensorFlow) tailored to your industry datasets, deploying them as fast API endpoints.",
    problemsSolved: [
      "Generic AI tools failing to categorize highly specialized industry documents.",
      "High costs of querying public APIs for high-volume text or image processing.",
      "Ineffective classification models yielding low accuracy rates.",
      "No clean dataset preparation pipeline in place.",
      "Difficulties deploying trained models to live, scalable API endpoints.",
      "Data privacy requirements preventing the use of public cloud AI APIs."
    ],
    subServices: [
      {
        title: "Dataset Preparation & Labeling",
        description: "Cleaning, organizing, and labeling raw data to prepare it for model training inputs."
      },
      {
        title: "Model Selection & Architecture",
        description: "Selecting optimal network structures (CNNs, transformers, linear models) for your business task."
      },
      {
        title: "Model Training & Tuning",
        description: "Running training loops and adjusting hyperparameters to maximize classification accuracy."
      },
      {
        title: "Model Evaluation",
        description: "Auditing models against validation datasets to check for bias and errors."
      },
      {
        title: "API Deployment Setup",
        description: "Packaging models into Docker containers and deploying them as fast API endpoints."
      },
      {
        title: "Performance Monitoring",
        description: "Tracking inference speeds and accuracy drift over time."
      }
    ],
    features: [
      "Custom data preparation and labeling pipelines",
      "Bespoke neural network architectures matching target tasks",
      "Hyperparameter tuning maximizing classification accuracy",
      "Thorough evaluation reports checking for data bias",
      "Dockerized model deployments serving fast API requests",
      "Data-private model setups running on dedicated host VPCs"
    ],
    technologies: ["Python", "PyTorch / TensorFlow", "Scikit-Learn", "Hugging Face", "Docker", "FastAPI"],
    process: ["Data Audit & Feasibility Study", "Dataset Cleaning & Labeling", "Model Selection & Training", "Accuracy Auditing", "Docker API Deployment", "Inference Monitoring"],
    whyChooseUs: [
      {
        title: "Domain Tailored",
        description: "Models trained specifically on your industry datasets for high accuracy."
      },
      {
        title: "Data Secure",
        description: "No public cloud APIs used — data stays secure within your private hosting."
      },
      {
        title: "Deploy Ready",
        description: "Models packaged as clean Docker API endpoints for easy integration."
      },
      {
        title: "Cost Efficient",
        description: "Trained models run on dedicated hosts, avoiding high per-request API fees."
      }
    ],
    faqs: [
      {
        question: "How much data is required to train a custom model?",
        answer: "It depends on the task complexity. Simple classification tasks might need a few thousand examples, while complex models require significantly more data."
      },
      {
        question: "Do you deploy the model on our servers?",
        answer: "Yes, we deploy models on your private cloud hosting (AWS or GCP) to ensure full data privacy and control."
      },
      {
        question: "Can we retrain the model as we get new data?",
        answer: "Yes. We build automated data pipelines, letting you easily run retraining loops as new datasets accumulate."
      },
      {
        question: "What format will the API respond in?",
        answer: "Standard JSON, returning classification categories, confidence scores, or metadata details in milliseconds."
      }
    ],
    cta: {
      headline: "Need a Machine Learning Model Tailored to Your Data?",
      subText: "Let's clean your datasets and train a custom classification model optimized for your operations.",
      primaryBtn: "Train ML Model",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "robotic-process-automation": {
    slug: "robotic-process-automation",
    title: "Robotic Process Automation (RPA)",
    icon: "Cpu",
    shortDescription: "Automating legacy database entries, screen scraping, and document checks using software bots.",
    theme: {
      glow: "rgba(139, 92, 246, 0.15)",
      text: "text-violet-400",
      border: "border-violet-500",
      bg: "bg-violet-500/10",
      borderPulse: "border-violet-500/20",
      bulletBg: "bg-violet-500",
      heroPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
      ctaPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 shadow-violet-500/10 hover:shadow-violet-500/20",
      pricingPopularBorder: "border-violet-500",
      pricingPopularBadge: "bg-violet-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(139, 92, 246, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(139, 92, 246, 0.3)] group-hover:bg-violet-500/10",
      hoverBorder: "hover:border-violet-500",
      groupHoverBorder: "group-hover:border-violet-500",
    },
    hero: {
      badge: "RPA Automation",
      title: "Robotic Process Automation",
      subText: "Automate legacy tasks. We build software bots to handle data entry, web scraping, and file processing tasks dynamically.",
      primaryCtaText: "Implement RPA",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a DevOps Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Legacy systems without API endpoints require slow, manual data entry, creating operational bottlenecks. Robotic Process Automation (RPA) builds software bots that interact with browser screens and databases, automatically copying data, scraping files, and processing records.",
    problemsSolved: [
      "Staff spending hours manually copying data into legacy systems without APIs.",
      "Frequent data entry errors from manual typing.",
      "Slow, manual document validation and checks.",
      "Difficulty scraping and compiling data from complex web directories.",
      "Operational delays caused by manual report generation.",
      "Scaling bottlenecks from repetitive, manual workflows."
    ],
    subServices: [
      {
        title: "Workflow Mapping",
        description: "Mapping manual click patterns and data entry paths to prepare for automation."
      },
      {
        title: "Browser Automation",
        description: "Developing bots (using Puppeteer or Playwright) to navigate screens and input data automatically."
      },
      {
        title: "Data Scraping & Extraction",
        description: "Building scrapers to extract tabular data from directories or documents."
      },
      {
        title: "OCR Document Processing",
        description: "Integrating Optical Character Recognition (OCR) to extract text details from scanned invoice PDFs."
      },
      {
        title: "Error Handling Setup",
        description: "Configuring bots to flag unusual pages or exceptions for manual review."
      },
      {
        title: "Scheduled Run Automation",
        description: "Setting up bots to run automatically on schedules or triggers."
      }
    ],
    features: [
      "Automated browser click and input flows replacing manual entry",
      "High-speed data scraping from web directories and PDFs",
      "OCR processing extracting text from scanned invoices",
      "Robust exception handling flagging page changes for review",
      "Cron-scheduled automation runs requiring no manual startup",
      "Detailed run logs tracking processing history"
    ],
    technologies: ["Node.js / Python", "Playwright / Puppeteer", "Tesseract OCR", "Docker", "Cron schedulers"],
    process: ["Workflow Mapping & Audit", "Bot Script Development", "OCR & Data Sync Integration", "Exception Handling Testing", "Staging Run Review", "Deploy & Schedule Setup"],
    whyChooseUs: [
      {
        title: "Legacy System Friendly",
        description: "Automate workflows on older systems without APIs."
      },
      {
        title: "Accurate & Reliable",
        description: "Eliminate manual data entry typos and processing errors."
      },
      {
        title: "Saves Time",
        description: "Bots run tasks in seconds, freeing up staff time."
      },
      {
        title: "Robust Safety Checks",
        description: "Bots flag page edits or errors immediately instead of guessing."
      }
    ],
    faqs: [
      {
        question: "Can RPA work on legacy software without APIs?",
        answer: "Yes. RPA bots simulate human interactions, navigating browser screens and inputting data directly, making APIs unnecessary."
      },
      {
        question: "What happens if a website's layout changes?",
        answer: "Layout changes can break selectors. We code bots with fallback selectors and exception alerts to notify developers of changes."
      },
      {
        question: "Is OCR accurate for reading invoice PDFs?",
        answer: "Yes, modern OCR engines achieve high accuracy for typed text. We include validation rules to flag low-confidence reads for review."
      },
      {
        question: "Can the bots run on a cloud server?",
        answer: "Yes. We package bots in Docker containers to run headless on cloud servers, scheduled to trigger automatically."
      }
    ],
    cta: {
      headline: "Still Copying Data Manually Into Legacy Systems?",
      subText: "Let's build a software bot to automate data entry and document validation.",
      primaryBtn: "Implement RPA",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "predictive-analytics-platforms": {
    slug: "predictive-analytics-platforms",
    title: "Predictive Analytics Platforms",
    icon: "Cpu",
    shortDescription: "Custom dashboards and prediction pipelines built to forecast sales demand, churn rates, and trends.",
    theme: {
      glow: "rgba(139, 92, 246, 0.15)",
      text: "text-violet-400",
      border: "border-violet-500",
      bg: "bg-violet-500/10",
      borderPulse: "border-violet-500/20",
      bulletBg: "bg-violet-500",
      heroPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
      ctaPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 shadow-violet-500/10 hover:shadow-violet-500/20",
      pricingPopularBorder: "border-violet-500",
      pricingPopularBadge: "bg-violet-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(139, 92, 246, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(139, 92, 246, 0.3)] group-hover:bg-violet-500/10",
      hoverBorder: "hover:border-violet-500",
      groupHoverBorder: "group-hover:border-violet-500",
    },
    hero: {
      badge: "Predictive AI",
      title: "Predictive Analytics Platforms",
      subText: "Forecast customer demand. We build custom data dashboards and regression pipelines to predict sales, churn, and trends.",
      primaryCtaText: "Build Analytics Platform",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Data Scientist",
      secondaryCtaLink: "/contact"
    },
    overview: "Relying solely on historical dashboards gives you retrospective insight but fails to predict future trends. Predictive Analytics Platforms build data regression pipelines and forecasting models, presenting insights on clean React dashboards to help you optimize inventory and resource allocation.",
    problemsSolved: [
      "Unexpected inventory stockouts due to poor demand forecasting.",
      "High customer churn rates caught too late to implement retention steps.",
      "Ineffective sales target projections based on simple average formulas.",
      "Fragmented data scattered across platforms, preventing consolidated analysis.",
      "Slow, manual spreadsheet modeling to generate business forecasts.",
      "Missed sales trends from lack of predictive analytics."
    ],
    subServices: [
      {
        title: "Forecasting Pipeline Design",
        description: "Building automated data connectors to stream and format database records for predictive pipelines."
      },
      {
        title: "Time-Series Sales Modeling",
        description: "Training time-series forecasting models to predict monthly product demand."
      },
      {
        title: "Churn Risk Auditing",
        description: "Developing classification algorithms to identify customer churn risks based on usage patterns."
      },
      {
        title: "React Dashboard Development",
        description: "Designing clean dashboards in React using Tremor or Recharts to display forecasts clearly."
      },
      {
        title: "Database Sync Piping",
        description: "Piping predictive outputs back into your CRM or main PostgreSQL database."
      },
      {
        title: "Insight Alert Setup",
        description: "Configuring alerts to flag high churn risks or low stock predictions automatically."
      }
    ],
    features: [
      "Time-series models forecasting product sales demand",
      "Churn risk classifiers flagging customer retention targets",
      "Interactive React dashboards displaying data predictions",
      "Automated database connectors updating predictions daily",
      "Alert notifications flagging predicted inventory stockouts",
      "CSV and PDF export systems for sharing forecasts"
    ],
    technologies: ["Next.js / React", "Recharts / Tremor", "Python", "Pandas / Scikit-Learn", "PostgreSQL", "FastAPI"],
    process: ["Prediction Goals Discovery", "Historical Data Consolidation", "Regression Pipeline Coding", "UI Dashboard Design", "Accuracy Validation", "Production Launch"],
    whyChooseUs: [
      {
        title: "Actionable Insights",
        description: "Visual dashboards present future forecasts clearly to guide planning."
      },
      {
        title: "Data Secure",
        description: "Sensitive sales records stay secure within your cloud database network."
      },
      {
        title: "Automated Updates",
        description: "Pipelines sync automatically, keeping predictions updated daily."
      },
      {
        title: "Custom Metrics",
        description: "Models tuned specifically to your business metrics, not generic averages."
      }
    ],
    faqs: [
      {
        question: "How accurate are the forecasting models?",
        answer: "Accuracy depends on data quality and volume. We evaluate models against historical test datasets to optimize prediction accuracy."
      },
      {
        question: "Can we connect the dashboard to HubSpot or Salesforce?",
        answer: "Yes, we integrate with major CRM and database systems via APIs to sync prediction variables."
      },
      {
        question: "What is time-series forecasting?",
        answer: "A modeling approach analyzing historical timestamp data (like daily sales) to forecast future values, accounting for seasonal trends."
      },
      {
        question: "Is a custom platform better than using Excel?",
        answer: "Yes. Excel requires slow, manual data imports. A custom web platform automates syncs, runs advanced models, and updates in real-time."
      }
    ],
    cta: {
      headline: "Need to Forecast Sales and Customer Retention Trends?",
      subText: "Let's build a custom predictive analytics dashboard to automate forecasts and guide planning.",
      primaryBtn: "Build Analytics Platform",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "natural-language-processing": {
    slug: "natural-language-processing",
    title: "Natural Language Processing (NLP)",
    icon: "Cpu",
    shortDescription: "Custom text classification, sentiment analysis, and keyword extraction systems built using LLMs.",
    theme: {
      glow: "rgba(139, 92, 246, 0.15)",
      text: "text-violet-400",
      border: "border-violet-500",
      bg: "bg-violet-500/10",
      borderPulse: "border-violet-500/20",
      bulletBg: "bg-violet-500",
      heroPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
      ctaPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 shadow-violet-500/10 hover:shadow-violet-500/20",
      pricingPopularBorder: "border-violet-500",
      pricingPopularBadge: "bg-violet-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(139, 92, 246, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(139, 92, 246, 0.3)] group-hover:bg-violet-500/10",
      hoverBorder: "hover:border-violet-500",
      groupHoverBorder: "group-hover:border-violet-500",
    },
    hero: {
      badge: "NLP Solutions",
      title: "Natural Language Processing",
      subText: "Analyze unstructured text. We build custom text classification, sentiment mapping, and automated document analysis systems using LLMs.",
      primaryCtaText: "Build NLP Solution",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to an NLP Specialist",
      secondaryCtaLink: "/contact"
    },
    overview: "Processing thousands of customer emails, feedback reviews, or contract PDFs manually is slow and expensive. Natural Language Processing (NLP) builds automated pipelines to analyze unstructured text, categorizing sentiments, extracting key terms, and summarizing documents in milliseconds.",
    problemsSolved: [
      "Processing volume bottlenecks from manual email categorization.",
      "High costs of reviewing and summarizing legal contracts.",
      "Unnoticed negative sentiment trends in customer reviews.",
      "Ineffective search systems failing to parse PDF files.",
      "Manual data entry needed to log document summaries into databases.",
      "Languages barriers limiting customer support responsiveness."
    ],
    subServices: [
      {
        title: "Text Classification Setup",
        description: "Categorizing incoming emails or support tickets automatically based on content and sentiment."
      },
      {
        title: "Sentiment Analysis Pipelines",
        description: "Monitoring product reviews to map and alert the team of negative sentiment trends."
      },
      {
        title: "Automated Document Summarization",
        description: "Building LLM pipelines to extract key clauses and summarize long contract PDFs."
      },
      {
        title: "Entity Extraction (NER)",
        description: "Extracting names, dates, addresses, and phone numbers from unstructured text blocks."
      },
      {
        title: "Vector Search Implementation",
        description: "Configuring semantic search engines to search PDF documents by concept context, not just keywords."
      },
      {
        title: "Machine Translation Setup",
        description: "Integrating translation pipelines to translate incoming customer messages in real-time."
      }
    ],
    features: [
      "Automated text classifiers categorizing support tickets",
      "Sentiment mapping dashboards monitoring customer reviews",
      "LLM summarization pipelines processing contract PDFs",
      "Entity extraction parsing names and dates automatically",
      "Semantic search engine indexing text documents by context",
      "Real-time translation pipelines supporting global support teams"
    ],
    technologies: ["Python", "Hugging Face transformers", "OpenAI API", "Spacy", "Vector Databases (Pinecone / Pgvector)", "FastAPI"],
    process: ["NLP Requirements Discovery", "Dataset Preparation & Tokenization", "LLM & Pipeline Configuration", "API Integration Setup", "Accuracy Auditing", "Production Launch"],
    whyChooseUs: [
      {
        title: "Automate Text Tasks",
        description: "Classify and summarize thousands of documents in seconds."
      },
      {
        title: "Context-Aware Search",
        description: "Semantic search parses documents by intent and context, not just keywords."
      },
      {
        title: "Sentiment Monitoring",
        description: "Track customer sentiments dynamically to identify issues early."
      },
      {
        title: "Secure Data Pipelines",
        description: "Text is processed securely within your private VPC cloud networks."
      }
    ],
    faqs: [
      {
        question: "How is semantic search different from keyword search?",
        answer: "Keyword search matches exact words. Semantic search uses vector embeddings to understand context and intent, returning relevant results even if terms differ."
      },
      {
        question: "Can NLP summarize complex legal contracts accurately?",
        answer: "Yes, by utilizing advanced LLMs and targeted prompts, we can accurately extract key terms and summarize long contract PDFs."
      },
      {
        question: "Does the NLP system support multiple languages?",
        answer: "Yes, our pipelines support multilingual models, analyzing and classifying text in dozens of languages."
      },
      {
        question: "Is our document data secure during processing?",
        answer: "Yes, we run models in secure VPC cloud hosting to keep all sensitive documents private."
      }
    ],
    cta: {
      headline: "Overwhelmed by Manual Document Reviews and Processing?",
      subText: "Let's build a custom NLP pipeline to automate text classification and summarization.",
      primaryBtn: "Build NLP Solution",
      secondaryBtn: "Schedule a Consultation"
    }
  },
  "computer-vision-solutions": {
    slug: "computer-vision-solutions",
    title: "Computer Vision Solutions",
    icon: "Cpu",
    shortDescription: "Custom image classification, object detection, and automated visual inspection systems.",
    theme: {
      glow: "rgba(139, 92, 246, 0.15)",
      text: "text-violet-400",
      border: "border-violet-500",
      bg: "bg-violet-500/10",
      borderPulse: "border-violet-500/20",
      bulletBg: "bg-violet-500",
      heroPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600",
      heroPrimaryShadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
      ctaPrimaryBtn: "from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 shadow-violet-500/10 hover:shadow-violet-500/20",
      pricingPopularBorder: "border-violet-500",
      pricingPopularBadge: "bg-violet-500",
      cardHoverGlow: "hover:shadow-[0_0_30px_rgba(139, 92, 246, 0.15)]",
      iconHoverGlow: "group-hover:shadow-[0_0_15px_rgba(139, 92, 246, 0.3)] group-hover:bg-violet-500/10",
      hoverBorder: "hover:border-violet-500",
      groupHoverBorder: "group-hover:border-violet-500",
    },
    hero: {
      badge: "Vision AI",
      title: "Computer Vision Solutions",
      subText: "Analyze visual data. We build custom image classification, object detection, and visual QA systems using convolutional neural networks.",
      primaryCtaText: "Build Vision Solution",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Talk to a Vision Engineer",
      secondaryCtaLink: "/contact"
    },
    overview: "Manual visual inspection tasks are slow and subject to fatigue errors. Computer Vision Solutions trains convolutional neural networks (CNNs) to analyze images and video feeds, automatically detecting objects, identifying quality issues, and classifying images.",
    problemsSolved: [
      "Operational errors from manual visual inspection in manufacturing.",
      "High costs of sorting and classifying large image datasets.",
      "Undetected product defects slipping past manual inspection.",
      "Lack of automated security video analysis capabilities.",
      "Manual data entry needed to log image details into databases.",
      "Scaling bottlenecks from manual image processing workflows."
    ],
    subServices: [
      {
        title: "Image Classification Design",
        description: "Training neural networks to categorize images automatically into custom folders."
      },
      {
        title: "Object Detection Setup",
        description: "Configuring models (like YOLO) to identify and locate specific objects in images."
      },
      {
        title: "Visual Quality Control",
        description: "Automating product defect inspection on assembly lines using camera feeds."
      },
      {
        title: "OCR Document Parsing",
        description: "Extracting printed text from packaging labels or receipts automatically."
      },
      {
        title: "Video Event Tracking",
        description: "Analyzing video feeds to trigger alerts when security zones are breached."
      },
      {
        title: "Model Deployment & Setup",
        description: "Packaging vision models into Docker APIs for fast cloud inference."
      }
    ],
    features: [
      "Custom neural networks categorizing image files automatically",
      "Object detection models locating specific items in images",
      "Quality control inspection checks verifying assembly components",
      "OCR engines parsing text from receipts and packaging labels",
      "Video analysis systems triggering alerts for security events",
      "Dockerized model deployments serving fast API requests"
    ],
    technologies: ["Python", "PyTorch / TensorFlow", "OpenCV", "YOLO", "Docker", "FastAPI"],
    process: ["Vision Requirements Discovery", "Dataset Collection & Labeling", "Model Selection & Training", "Accuracy Auditing", "Docker API Deployment", "Monitoring & Tuning"],
    whyChooseUs: [
      {
        title: "High Accuracy",
        description: "Neural networks trained specifically on your image data."
      },
      {
        title: "Fast Processing",
        description: "Classify and analyze image datasets in milliseconds."
      },
      {
        title: "Continuous Uptime",
        description: "Visual inspection runs 24/7 with zero fatigue errors."
      },
      {
        title: "Secure Deployments",
        description: "Visual data stays secure within your cloud database network."
      }
    ],
    faqs: [
      {
        question: "How do you train visual quality control models?",
        answer: "By collecting images of both passing and defective products, then training a classification model to detect defects automatically."
      },
      {
        question: "What is YOLO and when is it used?",
        answer: "YOLO (You Only Look Once) is an advanced object detection framework, used when you need to locate multiple objects in images in real-time."
      },
      {
        question: "Can the vision API run on-premise?",
        answer: "Yes, we deploy models on local edge devices or private cloud servers to ensure low latency and security."
      },
      {
        question: "What image formats are supported?",
        answer: "All standard web formats, including JPG, PNG, WebP, and raw camera feeds, are processed dynamically by our APIs."
      }
    ],
    cta: {
      headline: "Need to Automate Visual Inspections or Image Processing?",
      subText: "Let's build a custom computer vision API to analyze your image datasets.",
      primaryBtn: "Build Vision Solution",
      secondaryBtn: "Schedule a Consultation"
    }
  }
}
