import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  gymImage1,
  gymImage2,
  gymImage3,
  gymImage4,
  gymImage5,
  gymImage6,
  gymImage7,
  gymImage8,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
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
  "Whether you’re just starting out on your fitness journey, or are a conditioned fitness enthusiast.";

export const collabContent = [
  {
    id: "0",
    title: " Cycling",
    text: collabText,
  },
  {
    id: "1",
    title: "Yoga",
  },
  {
    id: "2",
    title: "Zumba",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Gym1",
    icon: gymImage1,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Gym2",
    icon: gymImage2,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Gym3",
    icon: gymImage3,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Gym4",
    icon: gymImage4,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Gym5",
    icon: gymImage5,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Gym6",
    icon: gymImage6,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Gym7",
    icon: gymImage7,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Gym8",
    icon: gymImage8,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Expert And Qualified Trainers",
    text: "We have best, skilled, and qualified trainers in Mikegym. We have trainers with over 10 years of working, teaching and training experience.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: gymImage1,
  },
  {
    id: "1",
    title: "Flexible Workout Time",
    text: "Mikegym has one of the best flexible workout time schedule. We provide fitness services for our members, base on their convinient time.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: gymImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect to us from everywhere",
    text: "Connect with FitPulse from anywhere within the globe, through live chat with our instructors or admin. We respond realtime.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: gymImage8,
  },
  {
    id: "3",
    title: "Special Plans And Bonus",
    text: "We have special plans that allows families to access ourfitness services at cheap and discount prices. We also provide bonuses to our VIP members.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: gymImage3,
    light: true,
  },
  {
    id: "4",
    title: "Special sessions",
    text: "Book special sessions according to your time schedule and get maximum benefits in return.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: gymImage4,
  },
  {
    id: "5",
    title: "Healthy lifestyle weekly newsletter",
    text: "When ypu are registered with us, be assured of weekly updates on how to keep fit and healthy.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: gymImage5,
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
