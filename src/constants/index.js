import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "AI Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing Plans",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How It Works",
    url: "#how-it-works",
  },
  {
    id: "3",
    title: "Product Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Create Account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign In",
    url: "#login",
    onlyMobile: true,
  },
];


export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Natural Language Processing",
  "Image Recognition",
  "Voice Recognition",
];


export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

  export const collabContent = [
    {
      id: "0",
      title: "AI-Powered Integration",
      text: "Effortlessly integrate Brainwave with your existing systems and workflows using advanced AI capabilities.",
    },
    {
      id: "1",
      title: "Automated Workflows",
      text: "Streamline repetitive tasks and processes with smart automation powered by AI, freeing up time for more strategic initiatives.",
    },
    {
      id: "2",
      title: "Enhanced Security Measures",
      text: "Ensure the highest level of security for your data and interactions with robust AI-driven security features.",
    },
  ];
  

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "Essential AI capabilities",
    price: "0",
    features: [
      "Basic AI chatbot functionality",
      "Personalized recommendations",
      "Free access to core features",
    ],
  },
  {
    id: "1",
    title: "Pro",
    description: "Advanced AI functionalities",
    price: "9.99",
    features: [
      "Advanced AI chatbot for complex queries",
      "Analytics dashboard for insights",
      "Priority support for quick issue resolution",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Customizable AI solutions",
    price: "Contact us",
    features: [
      "Tailored AI chatbot to meet specific needs",
      "Advanced analytics for detailed insights",
      "Dedicated account manager for personalized support",
    ],
  },
];


export const benefits = [
  {
    id: "0",
    title: "AI-Powered Assistance",
    text: "Harness AI to provide instant answers to user queries, eliminating the need to search multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Natural Language Processing",
    text: "Utilize advanced NLP to understand user requests and deliver precise, relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Cross-Platform Connectivity",
    text: "Connect seamlessly with the AI chatbot across devices, ensuring accessibility and convenience.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "Swift Response",
    text: "Enable users to quickly obtain answers without navigating through extensive information sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "AI-Powered Assistance",
    text: "Harness AI to provide instant answers to user queries, eliminating the need to search multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "5",
    title: "Natural Language Processing",
    text: "Utilize advanced NLP to understand user requests and deliver precise, relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
