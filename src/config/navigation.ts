export type NavigationItem = {
  key: string;
  path: string;
  isContentType: boolean;
};

// 导航暂未重建：内容型导航清空，后续阶段按新主题填充
export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
