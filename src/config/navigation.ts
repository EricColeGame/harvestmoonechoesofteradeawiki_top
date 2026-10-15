export interface NavigationItem {
  /** 翻译键：en.json 的 nav 命名空间与顶级 overview 键共用该 slug */
  key: string;
  /** URL 路径（不含 locale 前缀） */
  path: `/${string}`;
  /** 是否为带列表页的内容分类 */
  isContentType: boolean;
}

// 分类来源：关键词.json 的 categories，与 content/<locale>/ 的子目录一一对应
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "purchase", path: "/purchase", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
