import emoji from "react-easy-emoji";

export const greetings = {
  name: "Jasser Rahali",
  title: "Hi all, I'm Jasser",
  description:
    "I'm a passionate Full Stack web developer having an experience of web applications with JAVA, Spring Boot  Angular, NodeJs and ExpressJs.",
  resumeLink: "https://drive.google.com/file/d/1RZQwh_EOrV0NXTnCiY0AHREvpktmuDHP/view?usp=share_link",
};

export const openSource = {
  githubUserName: "JasserRahali",
};

export const contact = {};

export const socialLinks = {
  url: "https://jasser-rahali.me",
  linkedin: "https://www.linkedin.com/in/rahali-jasser/",
  github: "https://github.com/JasserRahali",
  instagram: "https://www.instagram.com/jasser.rahali/",
  facebook: "https://www.facebook.com/tn.anonyme/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in Angular9"
        ),
        emoji("⚡ Building responsive full stack project with MEAN Stack"),
        // emoji(
        // 	"⚡ Building RESTful APIs in Django & Django REST Framework"
        // ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
        },
        {
          skillName: "NodeJs",
          fontAwesomeClassname: "vscode-icons:file-type-node2",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Software Development",
      lottieAnimationFile: "/lottie/skills/software.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
        ),
        emoji(
          "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
        ),
        emoji(
          "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
        ),
        emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
        emoji(
          "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
        ),
      ],
      softwareSkills: [
        {
          skillName: "JAVA",
          fontAwesomeClassname: "vscode-icons:file-type-java",
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "/public/img/icons/common/springboot.svg",
        },
        {
          skillName: "Web3js",
          fontAwesomeClassname: "logos:web3js",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
        {
          skillName: "Ganache",
          fontAwesomeClassname: "logos:ganache-icon",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        // {
        // 	skillName: "Azure",
        // 	fontAwesomeClassname: "logos:microsoft-azure",
        // },
        // {
        // 	skillName: "Heroku",
        // 	fontAwesomeClassname: "logos:heroku-icon",
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        // {
        // 	skillName: "Cloudinary",
        // 	fontAwesomeClassname: "logos:cloudinary",
        // },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
        // {
        // 	skillName: "Sentry",
        // 	fontAwesomeClassname: "logos:sentry-icon",
        // },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Preparatory Institute for Engineering Studies of Monastir",
    // subHeader: "Engineer Diploma in Computer Science",
    duration: "August 2014 - August 2017",
    desc: "Participated in the research of XXX and published 3 papers.",
    grade: "Grade A",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    schoolName: "National Engineering School Of Carthage",
    subHeader: "Engineer Diploma in Computer Science",
    duration: "September 2017 - September 2021",
    desc: "Participated in the research of XXX and published 3 papers.",
    grade: "Grade A",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Engineer",
    company: "Focus-Corporation , Tunisia",
    companylogo: "/img/icons/common/focus.jpg",
    date: "Dec 2021 – Present",
    desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
  },
  {
    role: "Full Stack Engineer",
    company: "iXnihilo SAS , Tunisia",
    companylogo: "/img/icons/common/xnihilo.png",
    date: "Mar 2021 – Nov 2021",
    desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Engineer",
    company: "DATATEGY , Paris",
    companylogo: "/img/icons/common/datategy.png",
    date: "Feb 2020 - Mar 2021",
    desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
  },
];

export const projects = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/JasserRahali/JasserRahali.github.io",
    link: "https://jasser-rahali.me/",
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Jasser RAHALI",
  description: "A passionate Full Stack Web and Software Developer .",
  author: "Jasser RAHALI",
  image:
    "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/271456693_10217436521384760_4621332567215018395_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RbCcwKguHn4AX_V3Bp3&tn=jo2YXgyIx3wMc2jc&_nc_ht=scontent.ftun6-1.fna&oh=00_AT-MkL68tcxZSFyIWdgpCjnrW8d1Ung4r4jLL8MGPGN7QQ&oe=6327228C",
  url: "https://jasser-rahali.me/",
  keywords: [
    "Jasser",
    "Jasser RAHALI",
    "@jasser.rahali",
    "tn.anonyme",
    "Portfolio",
    "Jasser Portfolio ",
    "Jasser RAHALI Portfolio",
  ],
};
