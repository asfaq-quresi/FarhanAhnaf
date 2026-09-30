import farhanPortrait from '@/src/assets/images/FarhanAhnaf.png';
import thumbSfNewReel1 from '@/src/assets/images/thumb_sf_new_reel_1.jpg';
import thumbSfNewReel2 from '@/src/assets/images/thumb_sf_new_reel_2.jpg';
import thumbSfNewReel3 from '@/src/assets/images/thumb_sf_new_reel_3.jpg';
import thumbSfNewReel4 from '@/src/assets/images/thumb_sf_new_reel_4.jpg';
import thumbSf4MoneyReel2 from '@/src/assets/images/thumb_sf_4money_reel_2.jpg';
import thumbSf4Money2 from '@/src/assets/images/thumb_sf_4money_2.jpg';
import thumbSfAeRev from '@/src/assets/images/thumb_sf_ae_rev.jpg';
import thumbSfAe from '@/src/assets/images/thumb_sf_ae.jpg';
import thumbSfComR2 from '@/src/assets/images/thumb_sf_com_r2.jpg';
import thumbSfRev03 from '@/src/assets/images/thumb_sf_rev03.jpg';
import thumbSfServiceReel from '@/src/assets/images/thumb_sf_service_reel.jpg';
import thumbSfTake2323 from '@/src/assets/images/thumb_sf_take_2323.jpg';
import thumbSfVoiceOver from '@/src/assets/images/thumb_sf_voice_over.jpg';
import thumbSfComp1 from '@/src/assets/images/thumb_sf_comp_1.jpg';
import thumbSfDocFinal from '@/src/assets/images/thumb_sf_doc_final.jpg';

import thumbLfMoney1 from '@/src/assets/images/thumb_lf_money_1.jpg';
import thumbLfAlgorithm2 from '@/src/assets/images/thumb_lf_algorithm_2.jpg';
import thumbLfBrokeRev from '@/src/assets/images/thumb_lf_broke_rev.jpg';
import thumbLfComFin from '@/src/assets/images/thumb_lf_com_fin.jpg';
import thumbLfDebt from '@/src/assets/images/thumb_lf_debt.jpg';
import thumbLfInvesting1 from '@/src/assets/images/thumb_lf_investing_1.jpg';
import thumbLfRoringKitty from '@/src/assets/images/thumb_lf_roring_kitty.jpg';
import thumbLfFinalIntro from '@/src/assets/images/thumb_lf_final_intro.jpg';
import thumbLfSummit from '@/src/assets/images/thumb_lf_summit.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'short' | 'long';
  subtitle: string;
  thumbnail: string;
  videoSrc?: string;
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
    title: 'Hook & Retention Master Reel',
    category: 'short',
    subtitle: 'Viral Pacing, Pattern Interrupts & Kinetic Cuts',
    thumbnail: thumbSfNewReel1,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/New%20Reel-1.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL05ldyBSZWVsLTEubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDEzOSwiZXhwIjoyNzUwNzYwNTM5fQ.HeupTPq4CLFFwzCMBTDTMC6gfI8sHCJ-jEns5cPkLDC10m-02DSQguGaSRzu83J4rxlkMGCaDR8-__UjVeaM6w',
    duration: '0:35',
    aspectRatio: '9:16',
    retention: '94% Retention',
    client: 'Farhan Ahnaf',
    tools: ['Premiere Pro', 'After Effects', 'Kinetic Text', 'Sound Design'],
    description: 'Ultra-fast visual pacing with punchy sound design and dynamic motion to lock in viewers in the first 3 seconds.',
    highlightText: 'VIRAL HOOK'
  },
  {
    id: 'sf-2',
    title: 'Talking Head Dynamic Cut',
    category: 'short',
    subtitle: 'Punchy Zoom-Ins & Hormozi Kinetic Captions',
    thumbnail: thumbSfNewReel2,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/New%20Reel-2.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL05ldyBSZWVsLTIubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDE1MCwiZXhwIjoyNzUwNzYwNTUwfQ.3bvk7WmnsCOf49K5BWEPPbalNAUF7M_qJCD8qCfVu0CHsFMXQHWVcyvB-kyE6Je_iOwglJSAGrQ3iRg1r_EhrQ',
    duration: '0:35',
    aspectRatio: '9:16',
    retention: '91% Completion',
    client: 'Creator Studio',
    tools: ['Speed Ramps', 'Dynamic Captions', 'Audio Pop SFX'],
    description: 'Seamless cutaways, sound effects punctuation, and active color highlighting designed to maximize algorithmic watch time.',
    highlightText: 'DYNAMIC PACING'
  },
  {
    id: 'sf-3',
    title: 'High-Impact Visual Narrative',
    category: 'short',
    subtitle: 'Soundtrack Sync & Cinematic B-Roll Layering',
    thumbnail: thumbSfNewReel3,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/New%20Reel-3.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL05ldyBSZWVsLTMubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDE2MywiZXhwIjoyNzUwNzYwNTYzfQ.PIuiO9g7KXnxLHMcCATgbqXrxiVNcoiYDFawEaQ7dOi8qs3OYSmlsbFoCnOsk2rKklGv3rmTQ1eIF33pQaxptw',
    duration: '0:27',
    aspectRatio: '9:16',
    retention: '88% Retention',
    client: 'Media Vision',
    tools: ['Beat Sync', 'Atmospheric Foley', 'Color Grading'],
    description: 'Rhythmic audio-driven cuts matched to musical transients with immersive ambient textures.',
    highlightText: 'CINEMATIC SYNC'
  },
  {
    id: 'sf-4',
    title: 'Creative Editing Flow',
    category: 'short',
    subtitle: 'Fast Transitions & Audio Design Foley',
    thumbnail: thumbSfNewReel4,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/New%20Reel-4.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL05ldyBSZWVsLTQubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDI4MywiZXhwIjoyNzUwNzYwNjgzfQ.Eq8eazLy9BkTo4s3b8AFXKwZYRWPnGfUXXg3sQcrSETylSpGxMo0GZrADE3F_qJZdktm3unf5ZTBXnniX7HS7w',
    duration: '0:26',
    aspectRatio: '9:16',
    retention: '92% Completion',
    client: 'Solo Creators Lab',
    tools: ['Match Cuts', 'Whip Transitions', 'Audio Stems'],
    description: 'High-energy storytelling with seamless transitions that effortlessly guide the viewer across scenes.',
    highlightText: 'CREATIVE FLOW'
  },
  {
    id: 'sf-5',
    title: '4 Money Psychology Reel',
    category: 'short',
    subtitle: 'Wealth Mindset, Behavioral Loops & Micro-Infographics',
    thumbnail: thumbSf4MoneyReel2,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/4Money%20Reel-2.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzLzRNb25leSBSZWVsLTIubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDA0NywiZXhwIjoyNzUwNzYwNDQ3fQ.qpgLO_nkwI53CsTiEyTVzdUP9Tea6BoHtSttKSrOW1ISviuV453WJX4j3V-0nJ8ycf69xDjWW7-WsKi40eDinA',
    duration: '1:11',
    aspectRatio: '9:16',
    retention: '89% AVD',
    client: 'Finance Media',
    tools: ['2D Graphs', 'Sound Riser', 'Kinetic Typography'],
    description: 'Complex financial psychology simplified into rapid-fire vertical insights with custom animated charts.',
    highlightText: 'MONEY PSYCHOLOGY'
  },
  {
    id: 'sf-6',
    title: 'Finance Wealth Rules',
    category: 'short',
    subtitle: 'Kinetic Typography & Sound Immersion',
    thumbnail: thumbSf4Money2,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/4Money2.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzLzRNb25leTIubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDA1OSwiZXhwIjoyNzUwNzYwNDU5fQ.CuMX1CilO2kU2RRx2dfK1YVSLrEQQU5awVUwX7tY05KfLrreuZSBOWdx8naWQXYMm6PJB8SREeXVVb2SSq2jRw',
    duration: '0:54',
    aspectRatio: '9:16',
    retention: '87% Retention',
    client: 'Wealth Capital',
    tools: ['Motion Graphics', 'Audio EQ', 'Split Screens'],
    description: 'Brisk educational vertical edit breaking down fundamental rules of wealth building and compound growth.',
    highlightText: 'WEALTH RULES'
  },
  {
    id: 'sf-7',
    title: 'After Effects Motion Showcase',
    category: 'short',
    subtitle: '2D Animation, Visual Tracking & Title Design',
    thumbnail: thumbSfAeRev,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/Ae%20Rev.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL0FlIFJldi5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzcwMDg0LCJleHAiOjI3NTA3NjA0ODR9.7DZbbuH3zWnT1iycWz6q61papPLk2gcsC3dGA11f9jNPp9FoEPCoXhowquf5IEvdxtjPyFMDbOinh0ylgnWX0A',
    duration: '1:15',
    aspectRatio: '9:16',
    retention: '93% Retention',
    client: 'VFX Motion Hub',
    tools: ['After Effects', 'Rotoscoping', '3D Camera Tracking'],
    description: 'High-end visual showcase featuring custom AE title sequences, track mattes, and seamless element integration.',
    highlightText: 'AE MOTION'
  },
  {
    id: 'sf-8',
    title: 'After Effects VFX Cut',
    category: 'short',
    subtitle: 'Seamless Compositing & Visual Effects',
    thumbnail: thumbSfAe,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/Ae.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL0FlLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA3NzAwOTksImV4cCI6Mjc1MDc2MDQ5OX0.LZBw-eTTGQeqtskjfzaPIRdKrj5Y845Cqwpxg47va9VHTI2iPAQ-emuf_xZMYFbBG9CcQ0TYH-Ivya28JUXtAg',
    duration: '1:07',
    aspectRatio: '9:16',
    retention: '90% Retention',
    client: 'Digital Arts Lab',
    tools: ['Color Isolation', 'Glow FX', 'Optical Flares'],
    description: 'Eye-catching visual effects edit highlighting clean mask transitions, stylized glow curves, and optical dynamics.',
    highlightText: 'VFX COMPOSITING'
  },
  {
    id: 'sf-9',
    title: 'Commercial Direct Response Reel',
    category: 'short',
    subtitle: 'Fast Hook & High-Converting CTR Visuals',
    thumbnail: thumbSfComR2,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/Com%20R-2.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL0NvbSBSLTIubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDExNCwiZXhwIjoyNzUwNzYwNTE0fQ.7qApuC9cFb-njHFrKRJ6ZwxkGOImxWYEDtQ_G43KL4l7Ko5zmz5sI2R6GmsE7tpiLbjBbOf9kxMkNb_79Y8k1w',
    duration: '0:27',
    aspectRatio: '9:16',
    retention: '95% Completion',
    client: 'Direct Brands Co.',
    tools: ['Conversion Hooks', 'CTA Animation', 'Sound Sweetening'],
    description: 'High-performing social ad creative structured for instant hook capture, curiosity retention, and direct action.',
    highlightText: 'DIRECT RESPONSE'
  },
  {
    id: 'sf-10',
    title: 'Retention Master Cut',
    category: 'short',
    subtitle: 'Micro-Cuts, Sound Rises & Pattern Interrupts',
    thumbnail: thumbSfRev03,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/Revvvvvv03.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL1JldnZ2dnZ2MDMubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDIwMCwiZXhwIjoyNzUwNzYwNjAwfQ.aG3xf7TpRVnMV0wdIMtBiLVkrBWmUvQ2KWb7NtvBxkqWIG2TSqGh16snsGsjY_k_3K8_GdUHPkN5iVNEjmdk1g',
    duration: '0:38',
    aspectRatio: '9:16',
    retention: '96% Retention',
    client: 'Creator Series',
    tools: ['Pattern Interrupts', 'SFX Foley', 'Zoom Layering'],
    description: 'Continuous motion pacing engineered to defeat viewer scroll habits through synchronized sound and micro-zooms.',
    highlightText: 'RETENTION PEAK'
  },
  {
    id: 'sf-11',
    title: 'Agency & Service Showcase',
    category: 'short',
    subtitle: 'Client Testimonials & Authority Framing',
    thumbnail: thumbSfServiceReel,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/Service%20Reel.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL1NlcnZpY2UgUmVlbC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzcwMzExLCJleHAiOjI3NTA3NjA3MTF9.pzSGxOAAyX3T1yk7bbjapWsxW3M33mBSFJO1TyrCqlfriUkkMsEbxSklzFCg3fXhV3Ag0NZMjUL9luXGv47L2Q',
    duration: '0:31',
    aspectRatio: '9:16',
    retention: '86% AVD',
    client: 'Premium Agency',
    tools: ['Authority Cut', 'Brand Accents', 'Clean Lower Thirds'],
    description: 'Polished B2B agency promo reel highlighting deliverables, client feedback, and professional craftsmanship.',
    highlightText: 'AGENCY PROMO'
  },
  {
    id: 'sf-12',
    title: 'Creator Dialogue Jump Cut',
    category: 'short',
    subtitle: 'Dynamic Subtitle Pop & Reaction Cuts',
    thumbnail: thumbSfTake2323,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/Take%202323.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL1Rha2UgMjMyMy5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzcwMzI1LCJleHAiOjI3NTA3NjA3MjV9.mO5bNiH6at2C1-4UXpE5Sn_tfvRpdARnLSKOUI4WAVz77rtEwxQxfwkcp1KXuFyR93INcesRKahqMMU2wA6fUw',
    duration: '0:43',
    aspectRatio: '9:16',
    retention: '92% Completion',
    client: 'Daily Podcaster',
    tools: ['Breath Removal', 'Punchy Subtitles', 'Sound Accents'],
    description: 'Tight conversational edit eliminating pauses and amplifying energy with animated emojis and punchline zooms.',
    highlightText: 'DIALOGUE POP'
  },
  {
    id: 'sf-13',
    title: 'Voiceover Narrative Reel',
    category: 'short',
    subtitle: 'Atmospheric Storytelling & Foley Beats',
    thumbnail: thumbSfVoiceOver,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/voice%20over%20reels.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL3ZvaWNlIG92ZXIgcmVlbHMubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDM0MywiZXhwIjoyNzUwNzYwNzQzfQ.k1hmyeI82eya1ybVaxKVm9Rd9qz9MfLpCQeZ6HJclZMo56I0t6gP8GC7X98t5iCBTv_97SvhlYrYMaYv0OxYRQ',
    duration: '0:15',
    aspectRatio: '9:16',
    retention: '97% Completion (Peak)',
    client: 'Story Brand Co.',
    tools: ['Ambient Soundscape', 'Sub-Bass Foley', 'Film Grade'],
    description: 'Short atmospheric voiceover vignette blending cinematic footage with rich room tone and emotive pacing.',
    highlightText: 'VOICEOVER SHORT'
  },
  {
    id: 'sf-14',
    title: 'Creative Composition Reel',
    category: 'short',
    subtitle: 'Split Screen & Multi-Angle Geometry',
    thumbnail: thumbSfComp1,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/Comp%201%201.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL0NvbXAgMSAxLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA3NzAzOTEsImV4cCI6Mjc1MDc2MDc5MX0.DZ2QHv9gXLGBGVRLVUHxJOmrbS2FWoh4Ri4Th7s0i1yO70YRijBXWSu54GqSYJ5wUuKA5d6wYNUDdU-OUbAGyA',
    duration: '0:51',
    aspectRatio: '9:16',
    retention: '89% Retention',
    client: 'Design Vanguard',
    tools: ['Split Screen', 'Grid Transitions', 'Sound Immersion'],
    description: 'Visually complex multi-panel composition displaying simultaneous angles and synchronized sound cues.',
    highlightText: 'COMPOSITION REEL'
  },
  {
    id: 'sf-15',
    title: 'Vertical Mini-Documentary',
    category: 'short',
    subtitle: 'Cinematic Storytelling for Mobile Audiences',
    thumbnail: thumbSfDocFinal,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/shorts/Doc%204%20Pr%20Final%203%20%20.0%201.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vc2hvcnRzL0RvYyA0IFByIEZpbmFsIDMgIC4wIDEubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc3MDQxNCwiZXhwIjoyNzUwNzYwODE0fQ.hOaWZahOgyGkps0CFkxKHjqvxkfsEnMTAm3LWfOPMI--j2OoqIrh8XoyyQUNmb4Sy2PsgMcfdjYjQiJiXLDpng',
    duration: '0:41',
    aspectRatio: '9:16',
    retention: '94% Retention',
    client: 'DocuStory Media',
    tools: ['Documentary Pacing', 'Archival Cutaways', 'Orchestral Foley'],
    description: 'Documentary depth formatted into a vertical frame with high production value, archival pacing, and compelling audio scoring.',
    highlightText: 'MINI-DOC'
  }
];

export const LONG_FORM_PROJECTS: ProjectItem[] = [
  {
    id: 'lf-1',
    title: '4 Money Rules for Financial Freedom',
    category: 'long',
    subtitle: 'Wealth Habits, Behavioral Economics & Psychology of Money',
    thumbnail: thumbLfMoney1,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/4%20Money%201.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy80IE1vbmV5IDEubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc2Njk1MywiZXhwIjozMzI5NTIzMDk1M30.y2nXjSYCBDQvFe0a9gxuzJ6jk1-M5ZLnWalZtUuwKpoIlb-bRl-2noU4KYXF9N0uwFXv8BVKUfywd-TLf7GntA',
    duration: '1:33',
    aspectRatio: '16:9',
    retention: '84% AVD (High Reach)',
    client: 'Farhan Ahnaf',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Sound Design', 'Kinetic Graphics'],
    description: 'High-retention macro documentary dissecting the psychology of money, impulse spending, and algorithmic wealth habits.',
    highlightText: 'MONEY & WEALTH'
  },
  {
    id: 'lf-2',
    title: 'Beating The YouTube Algorithm',
    category: 'long',
    subtitle: 'Audience Retention Engineering & Recommendation Engine',
    thumbnail: thumbLfAlgorithm2,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/Algorithom%202%201.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy9BbGdvcml0aG9tIDIgMS5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzY2OTc2LCJleHAiOjMzMjk1MjMwOTc2fQ.RWOEtokURfeULUZWKkdp5VgvHj6wSg2qpg_OYIX-7AndsCnC5r1flqfxgL5aLBpJmV5DnIsz7pVraNjyEessuQ',
    duration: '1:39',
    aspectRatio: '16:9',
    retention: '89% AVD (Exceptional)',
    client: 'Growth Creator Lab',
    tools: ['Retention Graph Polish', 'Lower Thirds', 'Chart Animation'],
    description: 'Behind-the-scenes breakdown of audience retention mechanics, hook timing, and pacing architectures that trigger recommendation feeds.',
    highlightText: 'ALGORITHM STRATEGY'
  },
  {
    id: 'lf-3',
    title: 'From Zero to Scale: Broke Blueprint',
    category: 'long',
    subtitle: 'Career Transformation & Digital Skill Monetization',
    thumbnail: thumbLfBrokeRev,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/Broke%20Revvvv-2.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy9Ccm9rZSBSZXZ2dnYtMi5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzY2OTk4LCJleHAiOjMzMjk1MjMwOTk4fQ.mwFXqcD6zOD7aNWhyHLTBh0ZyuKoUiUWVw7xUlVzcdmF64PCGUorKPljhFfxi5LrdGQnFi2evQNVX3V6RRdFKQ',
    duration: '1:18',
    aspectRatio: '16:9',
    retention: '85% AVD (Top Tier)',
    client: 'Solo Founder Series',
    tools: ['B-Roll Layering', 'Sound Foley', 'Fast Cut Transitions'],
    description: 'Visual essay exploring the psychological and practical steps required to build high-income digital leverage and escape the 9-to-5 loop.',
    highlightText: 'CAREER BLUEPRINT'
  },
  {
    id: 'lf-4',
    title: 'The Truth About Commercial Finance',
    category: 'long',
    subtitle: 'Corporate Debt, Credit Lines & Capital Structure Breakdown',
    thumbnail: thumbLfComFin,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/Com%20Fin.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy9Db20gRmluLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA3NjcwMjIsImV4cCI6MzMyOTUyMzEwMjJ9.5Utl4MojltTCE8q9vVZKGW-7jd1rzsFd-DGB7DPrD66A2tbJmkK1YmNrq1dJYa9PhBrPd1I33hlOCSAoNyGJ-Q',
    duration: '2:21',
    aspectRatio: '16:9',
    retention: '78% AVD (Educational)',
    client: 'Apex Capital Media',
    tools: ['Documentary Grading', 'Custom Title Cards', 'Audio Clean-up'],
    description: 'Detailed educational documentary explaining complex corporate financing mechanisms and credit markets with clean graphical pacing.',
    highlightText: 'COMMERCIAL FINANCE'
  },
  {
    id: 'lf-5',
    title: 'The Modern Debt Trap Explained',
    category: 'long',
    subtitle: 'How Credit Expansion & Inflation Drain Middle Class Wealth',
    thumbnail: thumbLfDebt,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/Debt.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy9EZWJ0Lm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA3NjcwNDUsImV4cCI6MzMyOTUyMzEwNDV9.eu58kl6sK3OMO5oGoIv0qHBeVOOSpJaKeJAqPW5XbYSSbx9A1U7ZcHra0jX5oY4obNZJQgOsOi53Fx-clRKYig',
    duration: '2:17',
    aspectRatio: '16:9',
    retention: '86% AVD (High Engagement)',
    client: 'Macro Insight Studio',
    tools: ['Kinetic Data Viz', 'Archival Sourcing', 'Atmospheric Foley'],
    description: 'A cinematic documentary examining credit expansion, inflationary pressure, and practical escape routes from consumer debt cycles.',
    highlightText: 'DEBT ECONOMICS'
  },
  {
    id: 'lf-7',
    title: 'Smart Investing for Complete Beginners',
    category: 'long',
    subtitle: 'Index Funds, Compound Growth & Portfolio Allocation',
    thumbnail: thumbLfInvesting1,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/Investing%201.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy9JbnZlc3RpbmcgMS5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzY3MDg4LCJleHAiOjMzMjk1MjMxMDg4fQ.jfMfyHFHmSroE4gf-C_3sgnNn1VFOQGc4NSWXKbGPR09hyLaR5C5iQSHt2VacXf6vTux7og5qTln8_aj0GbSHQ',
    duration: '1:06',
    aspectRatio: '16:9',
    retention: '88% AVD (Viral Pacing)',
    client: 'NextGen Finance',
    tools: ['Color Grading', 'Sound Design', 'Infographic Animation'],
    description: 'Simplified investing principles delivered with brisk, engaging pacing that prevents boredom while teaching foundational financial literacy.',
    highlightText: 'INVESTING ESSENTIALS'
  },
  {
    id: 'lf-8',
    title: 'The Roaring Kitty Saga: WallStreetBets',
    category: 'long',
    subtitle: 'Internet Culture, Meme Mania & Retail Power',
    thumbnail: thumbLfRoringKitty,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/Roring%20Kitty.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy9Sb3JpbmcgS2l0dHkubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc2NzEyNywiZXhwIjozMzI5NTIzMTEyN30.PWZDUNIAmY7FHWYvfAOmLUXQlG5mO9qxma0AhL8pC4G9MYgmWtJ3WMnZnB5-CYQpw9g9v-JZgHYbJCPZTcr6Cg',
    duration: '2:08',
    aspectRatio: '16:9',
    retention: '91% AVD (Viral Peak)',
    client: 'Digital Culture Lab',
    tools: ['Meme Layering', 'Fast Paced Cuts', 'Epic Risers', 'News Montages'],
    description: 'High-energy cultural video essay capturing the GameStop short squeeze and the democratization of retail investing.',
    highlightText: 'CULTURE DOCUMENTARY'
  },
  {
    id: 'lf-9',
    title: 'Visual Storytelling: The Power of The Cut',
    category: 'long',
    subtitle: 'Cinematic Hook Architecture, Rhythm & Editorial Pacing',
    thumbnail: thumbLfFinalIntro,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/Final%20Intro%20Video.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy9GaW5hbCBJbnRybyBWaWRlby5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzY3MjA1LCJleHAiOjMzMjk1MjMxMjA1fQ.SKziVCP-I8e1lni2z4eYzLZMc-dq2cpzTSI_-ley3q5lp9MFWrAdsZjZNeqBsQCFEMHb7DCcqk2iVbpvFpEZtQ',
    duration: '0:42',
    aspectRatio: '16:9',
    retention: '94% AVD (Peak Retention)',
    client: 'Farhan Ahnaf Portfolio',
    tools: ['Film Emulation', 'Match Cuts', 'Sub-Bass Foley', 'Speed Ramps'],
    description: 'Punchy showcase trailer demonstrating rhythm, seamless match cuts, sound immersion, and high-impact visual hooks.',
    highlightText: 'FEATURE TRAILER'
  },
  {
    id: 'lf-10',
    title: 'Global Creator Summit: Keynote & Stage',
    category: 'long',
    subtitle: 'Event Post-Production, Speaker Highlights & Stage Energy',
    thumbnail: thumbLfSummit,
    videoSrc: 'https://ktotdzrwhmppthtnjwsk.supabase.co/storage/v1/object/sign/farhan%20video/long/Summit.mp4?token=eyJraWQiOiI2YTg3YTM4Yy03YjZiLTRiMDUtOGY2MS1kNjY5ODUwYTYyOWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmYXJoYW4gdmlkZW8vbG9uZy9TdW1taXQubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDc2NzIyOSwiZXhwIjozMzI5NTIzMTIyOX0.saBO8fLrQuSp1DMNm2uzgoxe2sXEzduPIYqkue8IGLAyOkTr5FslkWDJe5hzMZqvQgOBJQ-z8AvLnbb6pyzPfA',
    duration: '0:48',
    aspectRatio: '16:9',
    retention: '83% AVD (Live Stage)',
    client: 'Summit Media Global',
    tools: ['Multicam Switching', 'Live Audio Mastering', 'Dynamic Lower Thirds'],
    description: 'Polished high-energy recap and keynote highlights edit capturing audience energy, stage presentations, and executive insights.',
    highlightText: 'STAGE KEYNOTE'
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
    question: 'What type of videos do you edit?',
    answer: 'I edit a wide range of content, including YouTube videos, short-form content, social media reels, promotional videos, interviews, cinematic edits, and personal projects.'
  },
  {
    question: 'What editing software do you use?',
    answer: "I primarily work with professional editing tools such as Adobe Premiere Pro, After Effects, Photoshop, and DaVinci Resolve, depending on the project's requirements."
  },
  {
    question: 'Can you match a specific editing style?',
    answer: 'Yes. I can follow an existing visual style or create an editing approach based on your references, brand, audience, and the overall mood you want for the video.'
  },
  {
    question: 'What do you need from me to start editing?',
    answer: 'Usually, I need the raw footage, audio or voice-over, any reference videos, and your editing requirements. Clear instructions help me understand the desired result before I begin.'
  },
  {
    question: 'Do you also provide revisions?',
    answer: 'Yes. I include revisions so that the final edit matches the intended direction. Feedback can be provided during the revision process to fine-tune pacing, transitions, audio, visuals, and other details.'
  }
];
