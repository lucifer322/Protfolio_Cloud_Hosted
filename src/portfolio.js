/* Prakhar Chitransh Portfolio Configuration */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Prakhar Chitransh",
  title: "Hi all, I'm Prakhar 👋",
  subTitle: emoji(
    "A results-driven Full Stack Developer 🚀 specializing in Backend and Cloud-based solutions. Experienced in building scalable web apps and APIs using Python, Flask, Node.js, Go, and React.js. Passionate about solving complex problems, optimizing system performance, and integrating AI/ML into real-world systems."
  ),
  resumeLink:"https://drive.google.com/file/d/1k_6DCkINoZK5YYkrrQRDNi-LpqACkUhU/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/lucifer322",
  linkedin: "https://www.linkedin.com/in/prakhar-chitransh-097750222/",
  gmail: "prakharchitransh56@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO BUILDS SCALABLE AND DATA-DRIVEN SYSTEMS",
  skills: [
    emoji("⚡ Develop robust and high-performance RESTful APIs & microservices"),
    emoji("⚡ Build interactive, responsive, and modern UIs with React.js"),
    emoji("⚡ Integrate data pipelines, cloud storage, and analytics dashboards"),
    emoji("⚡ Work with cross-functional teams using Agile methodology and CI/CD pipelines")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Go", fontAwesomeClassname: "fas fa-code" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "S.R.M. Institute of Science and Technology",
      logo: require("./assets/images/srm.png"),
      subHeader: "Bachelor of Technology (B.Tech) in Artificial Intelligence",
      duration: "September 2020 – June 2024",
      desc: "Focused on software engineering, algorithms, and data-driven systems.",
      descBullets: [
        "Relevant Coursework: Data Structures, Computer Architecture, Computational Theory",
        "Graduated with distinction and active participation in AI/ML projects"
      ]
    }
  ]
};

// Tech Stack / Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend", progressPercentage: "90%" },
    { Stack: "Frontend/Design", progressPercentage: "80%" },
    { Stack: "Cloud & DevOps", progressPercentage: "70%" },
    { Stack: "Programming & DSA", progressPercentage: "95%" }
  ],
  displayCodersrank: true
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Development Engineer",
      company: "Tata Consultancy Services (TCS)",
      companylogo: require("./assets/images/TATA.png"),
      date: "September 2024 – Present",
      desc: "Building and deploying backend solutions and data analytics systems for enterprise clients such as PwC UK.",
      descBullets: [
        "Developed BSOD Diagnostic Tool diagnosing issues across 30K+ devices, reducing troubleshooting time by 40%",
        "Built Flask-based APIs integrated with React frontend to enhance chatbot performance and contextual accuracy",
        "Engineered Node.js API with Databricks and Azure Blob integration improving dashboard rendering by 50%",
        "Worked closely with DevOps & QA teams on CI/CD and secure deployment pipelines"
      ]
    },
    {
      role: "Software Engineer (Apprentice)",
      company: "Genpact",
      companylogo: require("./assets/images/Genpact.png"),
      date: "May 2024 – Sep 2024",
      desc: "Contributed to backend optimization and intelligent search modules for Axis Bank client applications.",
      descBullets: [
        "Developed Smart Search & Suggestion system using MongoDB Full-text Search and Elasticsearch",
        "Reduced query resolution time by 20% for 800+ customer service representatives",
        "Contributed to Saksham Web Application – a learning & performance platform for Axis Bank representatives"
      ]
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS THAT DEMONSTRATE MY EXPERTISE IN FULL STACK DEVELOPMENT AND AI/ML",
  projects: [
    {
      image: require("./assets/images/Traffic.png"),
      projectName: "Cloud-based Smart Traffic Management System",
      projectDesc:
        "Developed a real-time traffic optimization system leveraging IoT, cloud storage, and data analytics to manage congestion efficiently.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/lucifer322/Cloud-based-Smart-Traffic-Management-System" }
      ]
    },
    {
      image: require("./assets/images/message.png"),
      projectName: "Prakhar Chat App",
      projectDesc:
        "Real-time chat application with socket-based messaging, authentication, and group chat features using MERN stack.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/lucifer322/prakhar-chat-app" }
      ]
    },
    {
      image: require("./assets/images/Diabetes_ML.png"),
      projectName: "Diabetes Drug Testing using Machine Learning",
      projectDesc:
        "Machine learning pipeline identifying ideal candidates for drug testing through data preprocessing and predictive analytics.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/lucifer322/Patient-Selection-for-Diabetes-Drug-Testing-master" }
      ]
    },
    {
      image: require("./assets/images/netflixgpt.png"),
      projectName: "NetflixGPT",
      projectDesc:
        "GPT-powered recommendation engine providing personalized movie suggestions and insights using TMDB API and OpenAI.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/lucifer322/netflixgpt" }
      ]
    },
    {
      image: require("./assets/images/Churnpm.png"),
      projectName: "IvyKids Churn Prediction Models",
      projectDesc:
        "Built ML models to predict customer churn and support retention strategies using classification and regression analysis.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/lucifer322/Ivykids_churn_prediction_Models" }
      ]
    },
    {
      image: require("./assets/images/Twitter.png"),
      projectName: "Twitter IvyKids MERN Stack Project",
      projectDesc:
        "A social media web app for IvyKids featuring posts, comments, likes, and user analytics dashboard using MERN stack.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/lucifer322/twitter-ivykids-mern-stack-project" }
      ]
    },
    {
      image: require("./assets/images/Brain_tumor_Detection.png"),
      projectName:"Brain Tumor Detection in MRI Images using Deep Learning",
      projectDesc:"Developed a CNN model to accurately detect brain tumors from MRI scans, achieving high accuracy through data augmentation and hyperparameter tuning.",
      footerLink:[
        {name:"GitHub Repo", url:"https://github.com/lucifer322/Brain-tumor-detection"}
      ]
      }
  ],
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Recognitions and impactful contributions throughout my professional journey",
  achievementsCards: [
    {
      title: "PwC Client Recognition",
      subtitle:
        "Recognized by PwC for building the BSOD Diagnostic Tool at TCS, reducing SLA time by 60% and improving device diagnostics for 30,000+ endpoints.",
      image: require("./assets/images/pwc.png"),
      imageAlt: "PwC Logo",
      footerLink:[]
    },
    {
      title: "Saksham Web Application – Genpact (Axis Bank Client)",
      subtitle:
        "Built and contributed to Saksham, a web-based learning platform for Axis Bank customer representatives with integrated search and weekly test modules.",
      image: require("./assets/images/AXISBANK.png"),
      imageAlt: "Axis Bank Logo",
      footerLink:[]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy documenting my learnings, sharing insights, and exploring new technologies.",
  displayMediumBlogs: "true",
  blogs: [],
  display: true
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: emoji("I enjoy sharing knowledge and technical insights!"),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Occasionally sharing stories and tech journeys",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download or view my resume below",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project, opportunity, or just say hi? My inbox is open.",
  number: "+91 9517474711",
  email_address: "prakharchitransh56@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "prakharchitransh",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
