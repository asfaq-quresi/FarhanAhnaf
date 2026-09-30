export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  category: 'channel' | 'direct' | 'profile';
  icon: string;
  colorClass: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@farhanahnaf',
    url: 'https://youtube.com/@farhanahnaf',
    category: 'channel',
    icon: 'Youtube',
    colorClass: 'hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@farhanahnaf',
    url: 'https://instagram.com/farhanahnaf',
    category: 'channel',
    icon: 'Instagram',
    colorClass: 'hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10'
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    handle: '@farhanahnaf',
    url: 'https://x.com/farhanahnaf',
    category: 'channel',
    icon: 'Twitter',
    colorClass: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'in/farhanahnaf',
    url: 'https://linkedin.com/in/farhanahnaf',
    category: 'profile',
    icon: 'Linkedin',
    colorClass: 'hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    handle: '+880 1581-928743',
    url: 'https://wa.me/8801581928743',
    category: 'direct',
    icon: 'Phone',
    colorClass: 'hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    handle: '@farhanahnaf',
    url: 'https://t.me/farhanahnaf',
    category: 'direct',
    icon: 'MessageSquare',
    colorClass: 'hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10'
  }
];

export const CONTACT_INFO = {
  name: 'Farhan Ahnaf',
  role: 'Professional Video Editor & Storyteller',
  email: 'farhanframes@gmail.com',
  whatsapp: '+880 1581-928743',
  whatsappUrl: 'https://wa.me/8801581928743',
  telegram: '@farhanahnaf',
  telegramUrl: 'https://t.me/farhanahnaf',
  location: 'Dhaka, Bangladesh',
  timezone: 'Asia/Dhaka (GMT+6)'
};
