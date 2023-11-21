import { Injectable } from '@angular/core'

export interface Card {
  title: string
  link: string
  imgSrc: string
  content_ZH: string
  content_EN: string
}

@Injectable()
export class ListDataService {
  constructor() {}

  private cardSource: Card[] = [
    {
      title: 'passbox',
      link: 'https://apps.zhangzhankui.com/passbox',
      imgSrc: 'https://apps.zhangzhankui.com/passbox/favicon.svg',
      content_ZH:
        '一个多功能工具箱，主要用于密码管理和笔记记录。离线运行，没有数据离开您的计算机。支持Windows和macOS客户端。详细介绍请访问官方网站。',
      content_EN:
        'A versatile toolbox primarily designed for password management and note-taking. Operates offline with no data leaving your computer. It offers clients for both Windows and macOS.',
    },
    {
      title: 'aes-my-file',
      link: 'https://apps.zhangzhankui.com/aes-my-file',
      imgSrc: 'https://apps.zhangzhankui.com/aes-my-file/favicon.svg',
      content_ZH:
        '使用AES-256-GCM算法进行文件加密和解密。用Zig语言编写，运行速度非常快，支持处理任何大小和类型的文件。下载即用无需编程知识。',
      content_EN:
        'Encrypt and decrypt files using the AES-256-GCM algorithm. Developed in Zig language for high-speed performance, supporting files of any size and type.',
    },
    {
      title: 'player',
      link: 'https://apps.zhangzhankui.com/player',
      imgSrc: 'https://apps.zhangzhankui.com/player/favicon.svg',
      content_ZH: '使用现代化的UI，让人工智能辅助您管理本地视频。🚧开发中，敬请期待。',
      content_EN:
        'Use a modern UI and let AI assist you in managing local videos. 🚧Currently in development, stay tuned for updates.',
    },
    {
      title: 'simple_alarm_clock',
      link: 'https://apps.zhangzhankui.com/simple_alarm_clock',
      imgSrc: 'https://apps.zhangzhankui.com/simple_alarm_clock/favicon.svg',
      content_ZH:
        '一个简单的时间管理工具，提供语义化的时间表达和美观的用户界面。适用于Windows和macOS。🚧开发中，敬请期待。',
      content_EN:
        'A user-friendly time management tool with a simple interface and semantic time expressions. Available for both Windows and macOS. 🚧Currently in development, stay tuned for updates.',
    },
    {
      title: 'seed',
      link: 'https://github.com/zzk13180/seed',
      imgSrc: 'https://apps.zhangzhankui.com/seed/favicon.svg',
      content_ZH: '🌱monorepo架构的种子项目，总结大型项目架构经验。',
      content_EN:
        '🌱Seed project for monorepo. Summarizing experience in architecting large-scale projects. pnpm-workspace + Vite + Nx + Tauri.',
    },
    {
      title: 'insert-line-custom-text',
      link: 'https://marketplace.visualstudio.com/items?itemName=zzk13180.insert-line-custom-text',
      imgSrc: 'https://apps.zhangzhankui.com/insert-line-custom-text/favicon.svg',
      content_ZH:
        '一个简单的Visual Studio Code (VSCode) 扩展，用于在文档中插入带有自定义文本的新行。',
      content_EN:
        'A simple Visual Studio Code extension designed to insert new lines with customized text into your documents.',
    },
    {
      title: 'db',
      link: 'https://apps.zhangzhankui.com/db',
      imgSrc: 'https://apps.zhangzhankui.com/db/favicon.svg',
      content_ZH: '使用Zig语言编写的简单数据库。🚧待办事项。',
      content_EN: 'A simple database written in the Zig language.🚧TODO.',
    },
    {
      title: 'http',
      link: 'https://apps.zhangzhankui.com/http',
      imgSrc: 'https://apps.zhangzhankui.com/http/favicon.svg',
      content_ZH: '使用Zig语言编写的简单HTTP服务器。🚧待办事项。',
      content_EN: 'A simple HTTP server written in Zig language.🚧TODO.',
    },
    {
      title: 'cron-picker',
      link: 'https://apps.zhangzhankui.com/cron-picker',
      imgSrc: 'https://apps.zhangzhankui.com/cron-picker/favicon.png',
      content_ZH: '一个Web组件使用友好且声明性的方式生成cron表达式。🚧开发中，敬请期待。',
      content_EN:
        'A Web Component that generates cron expressions in a user-friendly and declarative manner. 🚧Currently in development, stay tuned for updates.',
    },
    {
      title: 'bilibili_uwp_mp4_decode',
      link: 'https://apps.zhangzhankui.com/bilibili_uwp_mp4_decode',
      imgSrc: 'https://apps.zhangzhankui.com/bilibili_uwp_mp4_decode/favicon.svg',
      content_ZH: '解密哔哩哔哩UWP客户端下载的视频。',
      content_EN: 'Decrypt videos downloaded by the Bilibili UWP client.',
    },
    {
      title: 'bilibili',
      link: 'https://space.bilibili.com/39296661',
      imgSrc: 'https://apps.zhangzhankui.com/bilibili/favicon.svg',
      content_ZH: '我的哔哩哔哩个人空间。',
      content_EN:
        'My personal space on Bilibili, featuring original articles and videos.',
    },
    {
      title: 'zzk13180',
      link: 'https://github.com/zzk13180',
      imgSrc: 'https://apps.zhangzhankui.com/zzk13180/favicon.svg',
      content_ZH: '我的GitHub主页。',
      content_EN: 'My GitHub Overview.',
    },
    {
      title: 'website',
      link: 'https://github.com/zzk13180/website',
      imgSrc: 'https://apps.zhangzhankui.com/website/favicon.svg',
      content_ZH: '本站源码。',
      content_EN: 'Source code of this site.',
    },
  ]

  getCardSource(keyword: string): Card[] {
    return this.cardSource.filter(item => {
      return (
        item.title === 'seed' ||
        item.title === 'passbox' ||
        item.title === 'website' ||
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.content_ZH.toLowerCase().includes(keyword.toLowerCase()) ||
        item.content_EN.toLowerCase().includes(keyword.toLowerCase())
      )
    })
  }
}
