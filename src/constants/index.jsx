import { GraduationCap } from "lucide-react";
import { School } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import {  NotebookPen } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];
export const featuresEn = [
  {
    icon: <GraduationCap />,
    text: "For students after IGCSE-O/A levels",
    description: [
      "Identify the most suitable universities and scholarships for your desired major and budget",
      "Assist with writing Common App and Coalition essays, and personal statements",
      "Provide guidance for visa preparation following admission",
      "Offer full support to help you settle in the United States"
    ],
  },
  
  {
    icon: <BookOpenCheck />,
    text: "For students who after GED",
    description: [

      "Identify and apply to the most suitable colleges for your score and budget",
      "Assist in transferring to your desired state or private university",
      "Maximize your chances of securing scholarships",
      "Prepare you thoroughly for the visa interview"
    ],
  },
  {
    icon: <NotebookPen />,
    text: "For students currently in IGCSE/GED/Grade 12",
    description: [
      "Provide tutoring to improve grades/scores",
      "Recommend guide/tutor services if needed",
      "Get you started with extracurriculars that will make you stand out for scholarships and part-time jobs in America"
    ],
  },
  {
    icon: <School />,
    text: "For age 25+ or partial education students",
    description: [
      "Provide comprehensive application support for community college/university and visa application",
      "Prepare you for a successful visa interview",
      "Assist with your transition and settlement in the United States"
    ],
  },
];

export const featuresMy = [
  {
    icon: <GraduationCap />,
    text: "IGCSE-O level ဖြေဆိုပြီး ကျောင်းသားများအတွက်",
    description: [
      "မိမိနှစ်သက်ရာမေဂျာရွေးချယ်ခြင်း",
      "အဆိုပါမေဂျာအတွက် မိမိနှင့်အသင့်တော်ဆုံးတက္ကသိုလ်များနှင့်စကော်လားရှစ်များရှာဖွေလျှောက်ပေးခြင်း",
      "ဝင်ခွင့်ရပြီးနောက် ဗီဇာပြင်ဆင်ပေးခြင်း",
      "အမေရိကရောက်ရှိလျှင် အခြေကျရေးပြင်ဆင်ပေးခြင်း"
    ],
  },
  {
    icon: <NotebookPen />,
    text: "IGCSE/ GED/ Grade 12 တက်ဆဲ ကျောင်းသား/သူများ",
    description: [
      "Grade/score မြင့်မားစေရန် အကြံညဏ်နှင့်တကွ လိုအပ်ပါက guide/tutor service များညွှန်းပေးခြင်း",
      "အနာဂတ် ကျောင်းစကော်လာရှစ်လျှောက်လျှင်၊ အမေရိကအရောက် part-time ရှာဖွေလျှင် သူများထက်တစ်ပန်းသာစေမည့် extracurriculars များအကြံပေးခြင်း"
    ],
  },
  {
    icon: <BookOpenCheck />,
    text: "GED ဖြေဆိုပြီး ကျောင်းသား/သူများ",
    description: [
      "Community College မှအစ နှစ်သက်ရာ state/private university များတက်ရောက်နိုင်ရန်၊ scholarships များ တတ်နိုင်သမျှရနိုင်ရန်နှင့် visa interview အထိပြင်ဆင်ပေးခြင်း"
    ],
  },
  {
    icon: <School />,
    text: "ပညာရေးတပိုင်းတစ (သို့) community college သီးသန့်ကျောင်းသားများအတွက်",
    description: [
      "Community college နဲ့ visa application အတွက် စာရွက်စာတမ်းအပြည့်အစုံပြင်ဆင်ပေးခြင်း",
      "visa interview အတွက် လေ့ကျင့်ပေးခြင်း",
      "အမေရိကရောက် အခြေတကျဖြစ်ရန် ပြင်ဆင်ပေးခြင်း"
    ],
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
