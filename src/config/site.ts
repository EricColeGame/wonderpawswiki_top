export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  steamUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "WonderPaws Wiki",
  shortName: "WonderPaws",
  logoText: "W",
  tagline: "Cozy Paw City Life Sim Guides, Characters & Pets",
  description: "WonderPawsWiki provides guides, characters, items, beginner tips, and community resources to help players explore quests, discover content, and enjoy the game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wonderpawswiki.top",
  supportEmail: "support@wonderpawswiki.top",
  gameUrl: "https://www.wonderpawsgame.com/",
  steamUrl: "https://store.steampowered.com/app/5057350/WonderPaws/",
  heroVideoId: "aiqk8-SVlaQ", // WonderPaws: Official Announcement Trailer
  social: {
    discord: "https://discord.gg/Kr3mts9cWk",
    youtube: "https://www.youtube.com/watch?v=aiqk8-SVlaQ",
  },
  locales: ["en", "ja", "ko", "es"],
  defaultLocale: "en",
};
