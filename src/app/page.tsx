import Image from "next/image";
import { 
  Camera, 
  PlayCircle, 
  Mail, 
  ChevronRight,
  MessageCircle,
  Dumbbell,
  Sparkle,
  LucideIcon
} from "lucide-react";

// --- Types ---
interface LinkItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface Section {
  title: string;
  links: LinkItem[];
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
      { name: "Calisthenics Transformation", url: "https://www.youtube.com/", icon: PlayCircle },
      { name: "How to get started with calisthenics for beginners", url: "https://www.youtube.com/", icon: PlayCircle },
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
    path: "M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"
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

async function getTikTokData(username: string) {
  try {
    const res = await fetch(
      `https://www.tiktok.com/oembed?url=https://www.tiktok.com/@${username}`, 
      { next: { revalidate: 3600 } }
    );
    return res.ok ? res.json() : null;
  } catch { return null; }
}

export default async function LinkTree() {
  const username = "jiram.sw";
  const tiktokData = await getTikTokData(username);
  const name = tiktokData?.author_name || "Jiram Sw";
  const avatar = `https://unavatar.io/tiktok/${username}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white font-sans selection:bg-neutral-800 relative overflow-hidden">
      {/* Subtle Red Touches (Static Gradients, no glow/blur) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" 
           style={{ 
             background: 'radial-gradient(circle at 0% 0%, #7f1d1d 0%, transparent 40%), radial-gradient(circle at 100% 100%, #7f1d1d 0%, transparent 40%)' 
           }} 
      />
      
      {/* 1. Profile Section */}
      <div className="flex flex-col items-center pt-12 pb-8 px-6 z-10">
        <div className="relative w-32 h-32 border-2 border-white rounded-full overflow-hidden">
          <Image 
            src={avatar} 
            alt={name} 
            fill 
            className="object-cover" 
            unoptimized 
            priority
          />
        </div>
        
        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">{name}</h1>
          <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em] mt-3 mb-8">
            Calisthenics Athlete
          </p>

          <div className="flex gap-4 justify-center">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 32 32" fill="white">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Links */}
      <main className="flex-grow px-6 space-y-10 max-w-md mx-auto w-full z-10">
        {SECTIONS.map((section) => (
          <section key={section.title} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-4 bg-red-600 rounded-full" />
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-neutral-400">
                {section.title}
              </h2>
            </div>
            <div className="grid gap-3">
              {section.links.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between p-4 bg-neutral-900/50 border border-white/10 rounded-2xl"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-white text-black">
                        <Icon size={18} strokeWidth={2.5} />
                      </div>
                      <span className="text-[15px] font-bold tracking-tight text-white/90 leading-tight">
                        {link.name}
                      </span>
                    </div>
                    <ChevronRight 
                      size={18} 
                      className="flex-shrink-0 text-neutral-500" 
                    />
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      {/* 3. Footer */}
      <footer className="py-12 text-center z-10">
         <p className="text-neutral-700 text-[10px] font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} JIRAM
         </p>
      </footer>
    </div>
  );
}