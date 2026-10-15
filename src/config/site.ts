export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
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
  name: "Harvest Moon: Echoes of Teradea Wiki",
  shortName: "HM Echoes of Teradea",
  logoText: "HM",
  tagline: "Farming Guides, Romance Candidates, Villagers & Walkthroughs",
  description: "Your complete guide to Harvest Moon: Echoes of Teradea — farming and crop tips, animal companions, all 10 romance candidates, villager profiles, island exploration and story walkthroughs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://harvestmoonechoesofteradeawiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://harvestmoonechoesofteradeawiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3591180/Harvest_Moon_Echoes_of_Teradea/",
  heroVideoId: "i1SAY6ptubg", // Harvest Moon: Echoes of Teradea gameplay showcase (4K, no commentary)
  social: {
    youtube: "https://www.youtube.com/@NatsumeInc",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
