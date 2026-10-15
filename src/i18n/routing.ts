import { defineRouting } from "next-intl/routing";

// 唯一真相源：本站最终语言集合（BCP47 语言码字面量）
export const locales = ["en", "ja", "de", "es"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
