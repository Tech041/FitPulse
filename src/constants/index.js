import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
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
    title: "Benefits",
    url: "#features",
  },
  {
    id: "1",
    title: "contact us",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "package",
    url: "#pricing",
  },
  {
    id: "3",
    title: "about us",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "sign up",
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

export const fitPulseServices = [
  "Private sessions",
  "Convenient schedules",
  "Follow-up",
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
    title: "Foundation",
    text: "FitPulse was founded on the pursuit of self-improvement.Our gym is architecturally designed to give you the best atmosphere for a satisfactory workout and a beautiful view of the city of Lagos.",
    date: " Since July 2020",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Online Instruction",
    text: "We have integrated online gym instructions into our operations so that our clients can have same  physical and online experience.",
    date: " Since May 2021",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Real time chat  with your instructors",
    text: " Our coaches lead the fitness industry when it comes to helping people get into the best shape of their lives and reaching their fitness goals safely.",
    date: " Since Dec 2023",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integrated free medical checks",
    text: "We offer free medical checks to our registered customers and also offer partner with clinics for efficient healthcare delivery.",
    date: " Since May 2024",
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
    description: "Standard gym sessions.",
    price: "0",
    features: [
      "Daily gym visitation from mondays to fridays",
      "General instructions within a group or division.",
      "Follow up and general care",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Personalized gym sessions",
    price: "9.99",
    features: [
      "Personal gym visitation from mondays to fridays",
      "Special instructions within a group or division.",
      "Follow up and general care",
    ],
  },
  {
    id: "2",
    title: "Gold",
    description: "Accelerated gym sessions.",
    price: 15.99,
    features: [
      "Custom gym visitation from mondays to fridays",
      "Private instructions within a group or division.",
      "Follow up and general care",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Expert And Qualified Trainers",
    text: "We have best, skilled, and qualified trainers in FitPulse. We have trainers with over 10 years of working, teaching and training experience.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: gymImage1,
  },
  {
    id: "1",
    title: "Flexible Workout Time",
    text: "FitPulse has one of the best flexible workout time schedule. We provide fitness services for our members, base on their convinient time.",
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
