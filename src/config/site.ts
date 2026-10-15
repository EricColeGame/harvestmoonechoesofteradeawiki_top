export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  nintendoUrl?: string;
  playstationUrl?: string;
  officialWebsite?: string;
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
  supportEmail: "support@harvestmoonechoesofteradeawiki.top",
  gameUrl: "https://store.steampowered.com/app/3591180/Harvest_Moon_Echoes_of_Teradea/",
  nintendoUrl: "https://www.nintendo.com/us/store/products/harvest-moon-echoes-of-teradea-switch/",
  playstationUrl: "https://store.playstation.com/en-us/concept/10018934",
  officialWebsite: "https://www.natsume.com/current_game/",
  heroVideoId: "i1SAY6ptubg", // "Harvest Moon: Echoes of Teradea Gameplay – First 45 Minutes (4K, No Commentary)" — verified playable
  social: {
    youtube: "https://www.youtube.com/@NatsumeInc",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
