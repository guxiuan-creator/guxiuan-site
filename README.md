# GUXIUAN Personal Site

极简个人网站（中文为主、英文点缀），包含：
- Home / About / Photography / Notes / Contact
- Notes：展示封面/标题/日期，点击跳转公众号原文（或外部视频链接）

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开：`http://localhost:3000`（若端口被占用会自动变成 3001/3002）。

## 如何更新 Notes（公众号文章目录）

1. 把封面图放到：`public/notes/covers/`（推荐 WebP/JPG，也可 SVG）
2. 在 `src/content/notes.ts` 新增一条记录：
   - `title`：标题
   - `date`：日期（YYYY-MM-DD）
   - `url`：公众号文章链接
   - `cover`：封面路径（例如 `/notes/covers/xxx.webp`）

## 如何更新 Photography（摄影合集目录）

1. 准备每个合集的封面图，放到：`public/photos/covers/`
2. 在 `src/content/photography.ts` 增加一个 `album`

> 下一步可以加合集详情页与筛选（按年份/地点/展会）。

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
