import farhanPortrait from '@/src/assets/images/farhan_editor_portrait_1790509231257.jpg';
import shortFormTravel from '@/src/assets/images/short_form_travel_1790509243055.jpg';
import shortFormFood from '@/src/assets/images/short_form_food_1790509256170.jpg';
import shortFormWorkspace from '@/src/assets/images/short_form_workspace_1790509267494.jpg';
import shortFormVr from '@/src/assets/images/short_form_vr_1790509303113.jpg';
import shortFormDog from '@/src/assets/images/short_form_dog_1790509282487.jpg';
import shortFormFitness from '@/src/assets/images/short_form_fitness_1790509888906.jpg';
import shortFormFashion from '@/src/assets/images/short_form_fashion_1790509904176.jpg';
import shortFormPodcast from '@/src/assets/images/short_form_podcast_1790509917427.jpg';

import longFormTech from '@/src/assets/images/long_form_tech_1790509316992.jpg';
import longFormRobot from '@/src/assets/images/long_form_robot_1790509329633.jpg';
import longFormMasterclass from '@/src/assets/images/long_form_masterclass_1790509360019.jpg';
import longFormChallenge from '@/src/assets/images/long_form_challenge_1790509344729.jpg';
import longFormFinance from '@/src/assets/images/long_form_finance_1790509933754.jpg';
import longFormTokyo from '@/src/assets/images/long_form_tokyo_1790509944960.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'short' | 'long';
  subtitle: string;
  thumbnail: string;
  duration: string;
  aspectRatio: '9:16' | '16:9';
  retention: string;
  client?: string;
  tools: string[];
  description: string;
  highlightText?: string;
}

export const PORTRAIT_IMAGE = farhanPortrait;

export const SHORT_FORM_PROJECTS: ProjectItem[] = [
  {
    id: 'sf-1',
    title: 'Small Trips Big Memories',
    category: 'short',
    subtitle: 'Outdoor Expedition & Travel Reel',
    thumbnail: shortFormTravel,
    duration: '0:34',
    aspectRatio: '9:16',
    retention: '88% Completion',
    client: 'Wanderlust Co.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Sound Design'],
    description: 'Dynamic pacing, custom typography tracking, and ambient nature foley to deliver high emotional payoff in under 35 seconds.',
    highlightText: 'EXPLORE OUTDOORS'
  },
  {
    id: 'sf-2',
    title: 'Artisanal Street Tacos',
    category: 'short',
    subtitle: 'Culinary Macro & Fast Paced Food Edit',
    thumbnail: shortFormFood,
    duration: '0:28',
    aspectRatio: '9:16',
    retention: '92% Retention',
    client: 'Taqueria Moderna',
    tools: ['Speed Ramps', 'Color Grade', 'SFX Foley'],
    description: 'Micro-cuts synced to sizzling grill audio and punchy bass hits designed to ignite instant culinary cravings.',
    highlightText: 'SIZZLING FLAVORS'
  },
  {
    id: 'sf-3',
    title: 'In The Edit Bay',
    category: 'short',
    subtitle: 'Creator Workflow & Aesthetic Desk Setup',
    thumbnail: shortFormWorkspace,
    duration: '0:42',
    aspectRatio: '9:16',
    retention: '84% Completion',
    client: 'Creator Studio Pro',
    tools: ['After Effects', 'Kinetic Text', 'Soundtrack Sync'],
    description: 'Cinematic b-roll sequence capturing the late night rhythm of digital editing with custom UI overlays.',
    highlightText: 'CREATIVE PROCESS'
  },
  {
    id: 'sf-4',
    title: 'Cyber Immersion',
    category: 'short',
    subtitle: 'VR Gaming & Hardware Experience',
    thumbnail: shortFormVr,
    duration: '0:30',
    aspectRatio: '9:16',
    retention: '89% Retention',
    client: 'NextGen Gaming',
    tools: ['VFX Keying', 'Glow Transitions', 'Cyber Sound Design'],
    description: 'Neon color contrast and seamless match cuts transitioning between physical reality and virtual worlds.',
    highlightText: 'VIRTUAL WORLDS'
  },
  {
    id: 'sf-5',
    title: 'Beach Day Freedom',
    category: 'short',
    subtitle: 'Pet Lifestyle & High Frame-Rate Shutter',
    thumbnail: shortFormDog,
    duration: '0:25',
    aspectRatio: '9:16',
    retention: '94% Retention',
    client: 'Paws & Sands',
    tools: ['High FPS Slow-Mo', 'Film LUT', 'Ocean Ambience'],
    description: 'Crisp 120fps motion tracking and buoyant sound score capturing the pure kinetic joy of beach recreation.',
    highlightText: 'GOLDEN MEMORIES'
  },
  {
    id: 'sf-6',
    title: 'Peak Intensity Athlete',
    category: 'short',
    subtitle: 'High-Impact Sports & Fitness Reel',
    thumbnail: shortFormFitness,
    duration: '0:22',
    aspectRatio: '9:16',
    retention: '91% Retention',
    client: 'AeroFit Performance',
    tools: ['Heavy Bass Drop Sync', 'Speed Ramp', 'Texture Grain'],
    description: 'Punchy athlete training montage with heavy sound hits, chalk bursts, and seamless rhythm ramping.',
    highlightText: 'PEAK ATHLETICS'
  },
  {
    id: 'sf-7',
    title: 'Neon Noir Streetwear',
    category: 'short',
    subtitle: 'Urban Fashion & High-Contrast Editorial',
    thumbnail: shortFormFashion,
    duration: '0:31',
    aspectRatio: '9:16',
    retention: '87% Retention',
    client: 'Obsidian Label',
    tools: ['Film Halation', 'Whip Pans', 'Audio Stems'],
    description: 'Rain reflections and cyberpunk neon tones matched to deep electronic beats for high-end fashion appeal.',
    highlightText: 'URBAN RUNWAY'
  },
  {
    id: 'sf-8',
    title: 'Unfiltered Podcast Cuts',
    category: 'short',
    subtitle: 'High Viral Engagement Dialogue Edit',
    thumbnail: shortFormPodcast,
    duration: '0:45',
    aspectRatio: '9:16',
    retention: '93% Retention',
    client: 'The Deep Dive Show',
    tools: ['Hormozi Captions', 'Sound SFX Pops', 'Zoom Cuts'],
    description: 'Dynamic zoom-ins on punchlines, clean noise floor, and active subtitle highlighting that prevents dropoff.',
    highlightText: 'VIRAL DIALOGUE'
  }
];

export const LONG_FORM_PROJECTS: ProjectItem[] = [
  {
    id: 'lf-1',
    title: 'Top 5 New Gadgets 2025',
    category: 'long',
    subtitle: 'Authority Tech Breakdown & Unboxing',
    thumbnail: longFormTech,
    duration: '14:20',
    aspectRatio: '16:9',
    retention: '68% AVD (High)',
    client: 'TechVibe Daily',
    tools: ['Premiere Pro', 'Lower Thirds', 'B-Roll Rhythm', 'Multi-Cam'],
    description: 'High-energy consumer tech review featuring seamless multicam studio cutaways, clean product zooms, and energetic retention spikes.',
    highlightText: 'TECH BREAKDOWN'
  },
  {
    id: 'lf-2',
    title: 'Meet The AI Creator: I Am A Bot!',
    category: 'long',
    subtitle: 'Documentary Visual Essay & Sci-Fi Retrospective',
    thumbnail: longFormRobot,
    duration: '16:35',
    aspectRatio: '16:9',
    retention: '72% AVD (Exceptional)',
    client: 'Future Mind Institute',
    tools: ['DaVinci Resolve', 'Sound Design', 'Motion Graphics', 'Archive Sourcing'],
    description: 'Deep narrative arc blending philosophical voiceover, synthetic AI graphics, and moody orchestral riser cues.',
    highlightText: 'DOCUMENTARY ESSAY'
  },
  {
    id: 'lf-3',
    title: 'Image Gen Masterclass: Create Like An AI',
    category: 'long',
    subtitle: 'Educational Deep Dive & Software Walkthrough',
    thumbnail: longFormMasterclass,
    duration: '21:10',
    aspectRatio: '16:9',
    retention: '64% AVD (Benchmark)',
    client: 'PromptArt Academy',
    tools: ['Screen Recording Polish', 'Cursor Smoothing', 'Chapter Markers', 'Visual Cues'],
    description: 'Complex technical concepts rendered visually engaging with 2D motion callouts, step-by-step UI zooms, and chapter pacing.',
    highlightText: 'CREATIVE MASTERCLASS'
  },
  {
    id: 'lf-4',
    title: '24-Hour Video Production Challenge',
    category: 'long',
    subtitle: 'High-Stakes Creator Vlog & Studio Marathon',
    thumbnail: longFormChallenge,
    duration: '18:45',
    aspectRatio: '16:9',
    retention: '70% AVD (Viral)',
    client: 'Solo Creators Lab',
    tools: ['Fast Cuts', 'J-Cuts / L-Cuts', 'Dramatic Tension', 'Frame.io Workflow'],
    description: 'Tension-building countdown editing that keeps viewers glued to the screen through sleep deprivation and deadline pressure.',
    highlightText: 'PRODUCTION CHALLENGE'
  },
  {
    id: 'lf-5',
    title: 'The Great Market Reset: Economics Explained',
    category: 'long',
    subtitle: 'High-Value Finance & Macro Analysis Video Essay',
    thumbnail: longFormFinance,
    duration: '24:15',
    aspectRatio: '16:9',
    retention: '74% AVD (Top Tier)',
    client: 'Apex Macro Capital',
    tools: ['Kinetic Data Viz', 'Documentary Scoring', 'Custom Maps', 'Archival Clean Up'],
    description: 'Complex monetary systems made accessible through bespoke 2D animated charts, archival footage restoration, and cinematic sound design.',
    highlightText: 'MACRO DOCUMENTARY'
  },
  {
    id: 'lf-6',
    title: 'Lost in Shinjuku: 72 Hours in Tokyo',
    category: 'long',
    subtitle: 'Cinematic Travel Feature & Sound Immersion',
    thumbnail: longFormTokyo,
    duration: '19:50',
    aspectRatio: '16:9',
    retention: '77% AVD (Viral Reach)',
    client: 'Nomad Chronicles',
    tools: ['Ambient Foley', 'Film Stock Emulation', 'Seamless Audio Match Cuts'],
    description: 'A sensory travel documentary using 3D spatial field recordings and deep neon contrast grade to transport viewers into rainy Tokyo nights.',
    highlightText: 'TRAVEL CINEMA'
  }
];

export const CORE_CONTENT_FORMATS = [
  {
    id: 'yt-head',
    title: 'YouTube Talking Head',
    desc: 'Authority building, thought leadership podcasts & educational breakdown cuts.',
    icon: 'Mic'
  },
  {
    id: 'yt-long',
    title: 'Long-Form YouTube Videos',
    desc: 'Documentary style storytelling, visual essays, b-roll layering, and retention hooks.',
    icon: 'Film'
  },
  {
    id: 'reels-shorts',
    title: 'Instagram Reels & Shorts',
    desc: '0.5-second thumb-stopping visual hooks, rapid transitions, and viral vertical formatting.',
    icon: 'Smartphone'
  },
  {
    id: 'ugc-ads',
    title: 'Social Media Ads (Paid UGC)',
    desc: 'Direct-response ad creative, split testing hooks, dynamic CTAs for FB, TikTok & Meta.',
    icon: 'Flame'
  },
  {
    id: 'linkedin-b2b',
    title: 'LinkedIn Executive & B2B Videos',
    desc: 'Clean aesthetic, corporate branding, professional lower thirds, and executive storytelling.',
    icon: 'Briefcase'
  }
];

export const FAQS = [
  {
    question: 'How do I get started?',
    answer: 'Simply click "Send Me a Message" or "Book a Call". We\'ll review your project scope, discuss your target audience and retention goals, and set up a shared Frame.io or Google Drive folder for raw footage handoff.'
  },
  {
    question: "What if they're not a good fit?",
    answer: "Every partnership starts with an initial trial project or paid pilot video. If the creative direction doesn't align with your vision, you're free to pause with zero long-term commitments."
  },
  {
    question: 'How is payment handled?',
    answer: 'Clients can pay using a credit or debit card via a secure Stripe payment link. Payments are typically processed bi-weekly or monthly. Our agency handles talent compensation, ensuring timely and accurate payments.'
  },
  {
    question: 'How do you ensure data security and confidentiality?',
    answer: 'All client assets, raw footage, and brand materials are managed in private cloud storage with strict non-disclosure compliance. We never publish project cuts without written client permission.'
  },
  {
    question: 'How do I ensure productivity and accountability?',
    answer: 'We provide structured 24–48h turnarounds on first cuts with transparent Frame.io timecoded reviews and regular status updates via Slack, WhatsApp, or Telegram.'
  }
];
