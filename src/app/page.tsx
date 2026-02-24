import Image from "next/image";
import { 
  Camera, 
  PlayCircle, 
  Mail, 
  ChevronRight,
  MessageCircle,
  Dumbbell,
  Sparkle,
  LucideIcon,
  Users,
  Play
} from "lucide-react";

// --- Types ---
interface LinkItem {
  name: string; // Fallback name
  url: string;
  icon: LucideIcon;
  isYoutube?: boolean;
}

interface Section {
  title: string;
  links: LinkItem[];
}

// --- Helpers ---
function getYoutubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

async function getVideoTitle(url: string, fallback: string): Promise<string> {
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=${url}&format=json`, {
      next: { revalidate: 86400 } // Cache title for 24 hours
    });
    if (!response.ok) return fallback;
    const data = await response.json();
    return data.title || fallback;
  } catch {
    return fallback;
  }
}

function formatCount(count: number): string {
  if (count >= 1000000) return (count / 1000000).toFixed(1) + "M";
  if (count >= 1000) return (count / 1000).toFixed(1) + "K";
  return count.toString();
}

// --- Data Configuration ---
const SECTIONS: Section[] = [
  {
    title: "My Equipment",
    links: [
      { name: "Parallettes", url: "#", icon: Dumbbell },
      { name: "Dip Bars", url: "#", icon: Dumbbell },
      { name: "Chalk", url: "#", icon: Sparkle },
      { name: "Camera", url: "#", icon: Camera },
    ],
  },
  {
    title: "Videos",
    links: [
      { 
        name: "Calisthenics Transformation", 
        url: "https://www.youtube.com/watch?v=QkjxgFJ2Z9E", 
        icon: PlayCircle,
        isYoutube: true 
      },
      { 
        name: "Beginner Guide", 
        url: "https://www.youtube.com/watch?v=w-Jr2hxJFqo", 
        icon: PlayCircle,
        isYoutube: true 
      },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Email", url: "mailto:hello@jiram.sw", icon: Mail },
      { name: "DM me on socials", url: "#", icon: MessageCircle },
    ],
  },
];

const SOCIAL_LINKS = [
  { 
    label: "Instagram", 
    url: "https://instagram.com/jiram.sw", 
    path: "M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.071-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"
  },
  { 
    label: "TikTok", 
    url: "https://tiktok.com/@jiram.sw", 
    path: "M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z" 
  },
  { 
    label: "YouTube", 
    url: "https://youtube.com/@jiram.sw", 
    path: "M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377,.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z" 
  },
];

// --- API Functions ---
async function getInstagramCount(username: string): Promise<number> {
  try {
    const response = await fetch(`https://instagram-statistics-api.p.rapidapi.com/community?url=https%3A%2F%2Fwww.instagram.com%2F${username}%2F`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'instagram-statistics-api.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY || ''
      },
      next: { revalidate: 50000 }
    });
    if (!response.ok) return 0;
    const result = await response.json();
    return result.data?.usersCount || 0;
  } catch {
    return 0;
  }
}

async function getTikTokCount(username: string): Promise<number> {
  try {
    const response = await fetch(`https://www.tiktok.com/@${username}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 },
    });
    if (!response.ok) return 0;
    const html = await response.text();
    const jsonStr = html.split('<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application/json">')[1]?.split('</script>')[0];
    if (!jsonStr) return 0;
    const data = JSON.parse(jsonStr);
    return data["__DEFAULT_SCOPE__"]?.["webapp.user-detail"]?.userInfo?.stats?.followerCount || 0;
  } catch {
    return 0;
  }
}

// --- Video Component ---
async function YouTubeCard({ name, url }: { name: string, url: string }) {
  const videoId = getYoutubeId(url);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
  // Fetch the actual title dynamically
  const dynamicTitle = await getVideoTitle(url, name);

  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full h-44 overflow-hidden rounded-2xl flex items-end p-4 bg-neutral-900 border border-white/5 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
    >
      {/* Background Thumbnail */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      {/* Play Icon Badge */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-red-600 group-hover:border-red-600 transition-colors">
        <Play size={18} fill="currentColor" className="text-white ml-0.5" />
      </div>

      <div className="relative z-10 w-full">
        <span className="text-[14px] font-black uppercase tracking-wider text-white line-clamp-2 drop-shadow-md">
          {dynamicTitle}
        </span>
      </div>
    </a>
  );
}

// --- Main Component ---
export default async function LinkTree() {
  const username = "jiram.sw";
  
  const [igCount, ttCount] = await Promise.all([
    getInstagramCount(username),
    getTikTokCount(username)
  ]);

  const totalFollowersFormatted = formatCount(igCount + ttCount);
  const bannerImage = `https://unavatar.io/tiktok/${username}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white font-sans selection:bg-neutral-800 relative overflow-x-hidden">
      
      {/* 1. Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <Image 
          src={bannerImage} 
          alt="Jiram" 
          fill 
          className="object-cover object-top scale-105" 
          unoptimized 
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        
        <div className="absolute bottom-4 left-0 w-full p-6 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic text-white drop-shadow-2xl">
                Jiram
            </h1>
            
            <p className="text-neutral-400 text-[10px] font-black uppercase tracking-[0.4em] mt-4">
                Calisthenics Athlete
            </p>
        </div>
      </div>

      {/* 2. Content Section */}
      <main className="flex-grow px-6 pb-20 space-y-12 max-w-md mx-auto w-full z-10 -mt-6 box-border">
        
        {/* Social Icons Bar */}
        <div className="flex gap-3 justify-center items-center">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-neutral-900 border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all active:scale-95"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 32 32" fill="white">
                  <path d={social.path} />
                </svg>
              </a>
            ))}

            <div className="h-12 px-5 flex flex-shrink-0 items-center justify-center gap-2 bg-neutral-900 border border-white/10 rounded-2xl">
                <Users size={14} className="text-red-600" />
                <span className="text-[12px] font-black tracking-wider uppercase">
                  {totalFollowersFormatted}
                </span>
            </div>
        </div>

        {/* Link Sections */}
        {SECTIONS.map((section) => (
          <section key={section.title} className="space-y-4 w-full">
            <div className="flex items-center gap-3 ml-1">
              <div className="w-[3px] h-4 bg-red-600 rounded-full" />
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-neutral-500">
                {section.title}
              </h2>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {section.links.map((link, i) => {
                // Check if it's a YouTube link to use the card style
                if (link.isYoutube) {
                  // @ts-expect-error - Server Component in map
                  return <YouTubeCard key={i} name={link.name} url={link.url} />;
                }

                const Icon = link.icon;
                return (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-neutral-100 transition-all active:scale-[0.98] w-full shadow-lg border border-transparent"
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1 mr-2">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-black group-hover:text-red-600 transition-colors">
                        <Icon size={20} strokeWidth={2.5} />
                      </div>
                      <span className="text-[15px] font-bold tracking-tight text-black leading-tight break-words whitespace-normal">
                        {link.name}
                      </span>
                    </div>
                    <ChevronRight 
                      size={18} 
                      className="flex-shrink-0 text-neutral-400 group-hover:translate-x-1 group-hover:text-red-600 transition-all" 
                    />
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      <footer className="pb-12 pt-4 text-center z-10">
         <p className="text-neutral-700 text-[10px] font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} JIRAM • All Rights Reserved
         </p>
      </footer>

      <div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-red-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}