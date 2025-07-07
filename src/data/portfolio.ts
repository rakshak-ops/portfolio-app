// Personal Information
export const personalInfo = {
  name: "Rakshak Kunchum",
  title: "Data Scientist & ML Engineer",
  education: "MS Data Science at Northeastern University",
  bio: [
    "Data Scientist with 3+ years of experience building scalable ML pipelines and predictive models that deliver measurable business impact. Currently pursuing MS in Data Science at Northeastern University with a focus on advanced machine learning and financial analytics.",
    "Specialized in fraud detection, pricing analytics, and financial forecasting with expertise in deploying production-ready ML systems on AWS. Passionate about leveraging data science to solve complex business problems and drive strategic decision-making."
  ],
  resumeUrl: "https://drive.google.com/file/d/your-resume-link/view"
};

// Contact Information
export const contactInfo = {
  email: "kunchum.r@northeastern.edu",
  phone: "+1 (857) 123-4567",
  location: "Boston, MA",
  linkedin: "https://linkedin.com/in/rakshak-kunchum",
  github: "https://github.com/rakshak-kunchum"
};

// Tech Stack
export const techStack = [
  { name: "Python", category: "language" as const },
  { name: "SQL", category: "language" as const },
  { name: "C++", category: "language" as const },
  { name: "AWS", category: "cloud" as const },
  { name: "Snowflake", category: "database" as const },
  { name: "Vector DB", category: "database" as const },
  { name: "PySpark", category: "framework" as const },
  { name: "Hadoop", category: "framework" as const },
  { name: "Scikit-learn", category: "ml" as const },
  { name: "TensorFlow", category: "ml" as const },
  { name: "PyTorch", category: "ml" as const },
  { name: "LangChain", category: "ml" as const },
  { name: "MLflow", category: "tool" as const },
  { name: "Docker", category: "tool" as const },
  { name: "Airflow", category: "tool" as const },
  { name: "DVC", category: "tool" as const },
  { name: "Tableau", category: "tool" as const },
  { name: "Kafka", category: "tool" as const }
];

// Professional Experience
export const experiences = [
  {
    id: "1",
    title: "Data Scientist",
    company: "Flipkart",
    location: "Bangalore, India",
    duration: "Jul 2021 - Jul 2023",
    description: [
      "Built and deployed ML pipelines for fraud detection, reducing false positives by 35% and saving $2M annually through improved transaction monitoring",
      "Developed pricing optimization models using ensemble methods, increasing revenue by 12% across 50+ product categories",
      "Implemented real-time recommendation systems serving 200M+ users with <100ms latency using collaborative filtering and deep learning",
      "Led cross-functional initiatives to establish MLOps best practices, reducing model deployment time from weeks to days"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Kafka", "Snowflake", "Docker", "MLflow"],
    link: "https://www.flipkart.com"
  },
  {
    id: "2",
    title: "Data Science Intern",
    company: "Myntra",
    location: "Bangalore, India",
    duration: "Jan 2021 - Jun 2021",
    description: [
      "Developed customer lifetime value prediction models achieving 85% accuracy, enabling targeted marketing campaigns",
      "Built automated data pipelines processing 10TB+ daily transaction data using PySpark and Airflow",
      "Created interactive dashboards in Tableau for business stakeholders, improving decision-making speed by 40%",
      "Collaborated with product teams to implement A/B testing frameworks for feature rollouts"
    ],
    technologies: ["Python", "PySpark", "Tableau", "Airflow", "SQL", "AWS"],
    link: "https://www.myntra.com"
  }
];

// Projects
export const projects = [
  {
    id: "1",
    title: "Advanced RAG System for Financial Document Analysis",
    description: "Built a sophisticated RAG system using LangChain and vector databases to analyze financial documents, achieving 92% accuracy in extracting key financial metrics and generating automated reports.",
    technologies: ["Python", "LangChain", "ChromaDB", "OpenAI", "Streamlit"],
    categories: ["GenAI", "NLP", "Finance"]
  },
  {
    id: "2",
    title: "Real-time Fraud Detection Pipeline",
    description: "Developed an end-to-end ML pipeline for real-time fraud detection using ensemble methods and feature engineering, deployed on AWS with 99.9% uptime and <50ms inference latency.",
    technologies: ["Python", "TensorFlow", "AWS Lambda", "Kafka", "Docker"],
    categories: ["Machine Learning", "Fraud Detection", "MLOps", "Real-time"]
  },
  {
    id: "3",
    title: "Dynamic Pricing Optimization Engine",
    description: "Created a multi-objective optimization system for e-commerce pricing using reinforcement learning and market analysis, resulting in 15% revenue increase across product categories.",
    technologies: ["Python", "PyTorch", "AWS", "Snowflake", "MLflow"],
    categories: ["Machine Learning", "E-commerce", "Pricing", "Analytics"]
  },
  {
    id: "4",
    title: "Computer Vision for Medical Imaging",
    description: "Developed deep learning models for medical image classification using transfer learning and data augmentation, achieving 94% accuracy in detecting anomalies in X-ray images.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker"],
    categories: ["Deep Learning", "Computer Vision", "Healthcare"]
  },
  {
    id: "5",
    title: "Agricultural Yield Prediction System",
    description: "Built predictive models for crop yield forecasting using satellite imagery and weather data, helping farmers optimize resource allocation and increase productivity by 20%.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    categories: ["Machine Learning", "Agriculture", "Data Science"]
  },
  {
    id: "6",
    title: "Customer Segmentation and Recommendation Engine",
    description: "Implemented unsupervised learning algorithms for customer segmentation and built collaborative filtering recommendation systems, improving customer engagement by 25%.",
    technologies: ["Python", "Scikit-learn", "Spark", "AWS"],
    categories: ["Machine Learning", "Retail", "Analytics"]
  }
];

// Achievements
export const achievements = [
  {
    id: "1",
    title: "Northeastern University Data Science Hackathon",
    organization: "Data Science Hub, Northeastern University",
    date: "Summer 2023",
    award: "3rd Place",
    description: "Secured 3rd place in a competitive data science hackathon focused on forecasting credit card expenditure. Developed predictive models using time series analysis and machine learning techniques to accurately forecast spending patterns, helping financial institutions better understand customer behavior and optimize credit offerings.",
    technologies: ["Python", "Scikit-learn", "Time Series Analysis", "Pandas", "XGBoost"],
    link: "https://www.northeastern.edu/datasciencehub/"
  }
];