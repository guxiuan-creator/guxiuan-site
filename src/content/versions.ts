export type VersionNote = {
  version: string;
  date: string;
  summary: string;
  changes: string[];
};

export const VERSION_NOTES: VersionNote[] = [
  {
    version: "v1.0.0",
    date: "2026-03-09",
    summary: "Product 板块上线与联系入口重构",
    changes: [
      "导航中的 Versions 正式升级为 Product（产品）板块",
      "Product 页面新增“项目预告 + 网站更新日志”双区结构",
      "顶部新增信件图标，全局弹窗展示邮箱与社媒入口",
      "联系弹窗升级为更大尺寸，邮箱支持一键复制",
      "小红书 / 抖音 / B站改为平台图标展示，B站昵称更新为“璇子什么都会”",
    ],
  },
  {
    version: "v0.9.0",
    date: "2026-03-08",
    summary: "优化摄影子集体验与访问路径",
    changes: [
      "摄影子集支持骨架屏与动态加载动画",
      "相册返回逻辑优化：从首页进入可返回首页",
      "相册图片支持站内大图预览（替代直接原图跳转）",
    ],
  },
  {
    version: "v0.8.0",
    date: "2026-03-07",
    summary: "统一暗色模式细节与形象素材",
    changes: [
      "修复黑暗模式标签/卡片对比度问题",
      "首页和关于页头像资源分离，支持独立替换",
      "移除关于页贴纸中的 PM v0.9 角标",
    ],
  },
  {
    version: "v0.7.0",
    date: "2026-03-06",
    summary: "站点元信息与基础体验完善",
    changes: [
      "补充 favicon、OG 图与分享元信息",
      "整理首页、笔记、摄影的基础展示结构",
      "强化移动端和暗色模式的一致性体验",
    ],
  },
];

