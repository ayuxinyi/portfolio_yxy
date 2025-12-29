const navLinks = [
  {
    name: "作品集",
    link: "#work",
  },
  {
    name: "经历",
    link: "#experience",
  },
  {
    name: "技能",
    link: "#skills",
  },
  {
    name: "客户评价",
    link: "#testimonials",
  },
];

const words = [
  { text: "创意", imgPath: "/images/ideas.svg" },
  { text: "概念", imgPath: "/images/concepts.svg" },
  { text: "设计", imgPath: "/images/designs.svg" },
  { text: "代码", imgPath: "/images/code.svg" },
  { text: "创意", imgPath: "/images/ideas.svg" },
  { text: "概念", imgPath: "/images/concepts.svg" },
  { text: "设计", imgPath: "/images/designs.svg" },
  { text: "代码", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "年行业经验" },
  { value: 200, suffix: "+", label: "满意客户" },
  { value: 108, suffix: "+", label: "已完成项目" },
  { value: 90, suffix: "%", label: "客户复购率" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "专业前端",
    desc: "熟练掌握现代技术栈，构建高性能与可维护的界面。",
  },
  {
    imgPath: "/images/chat.png",
    title: "交互体验",
    desc: "注重用户体验与动效细节，让界面更生动、更易用。",
  },
  {
    imgPath: "/images/time.png",
    title: "性能优化",
    desc: "持续优化加载速度与渲染表现，带来流畅的使用体验。",
  },
];

const techStackImgs = [
  {
    name: "React 前端开发",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python 自动化 / 开发",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node.js 后端开发",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "交互式网页 / 3D开发",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "项目管理 / Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React 前端开发",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python 自动化 / 开发",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js 后端开发",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "3D / 交互式开发",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "项目管理 / Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "YXY 在团队中发挥了创造力与技术优势，为我们的前端性能带来了显著提升，他的贡献让产品体验更快、更稳定。",
    imgPath: "/images/logos/dzjt1.png",
    logoPath: "/images/logos/dzjt.png",
    title: "全栈开发工程师",
    date: "2023年1月 - 至今",
    responsibilities: [
      "负责 德州交投 网站的前端功能开发与维护。",
      "与UI/UX团队紧密合作，实现一致且顺畅的用户体验。",
      "优化应用性能，提高访问速度与可扩展性。",
    ],
  },
  {
    review:
      "YXY 在 Docker 的项目中展现了优秀的全栈能力，他始终以解决问题为核心思路推动项目落地。",
    imgPath: "/images/logos/sdca1.png",
    logoPath: "/images/logos/sdca.jpg",
    title: "前端开发工程师",
    date: "2020年6月 - 2023年12月",
    responsibilities: [
      "负责 山东CA 多项 Web 应用的开发与扩展性设计。",
      "与后端团队协作，保证 API 与前端无缝衔接。",
      "参与开源生态建设，贡献用于 山东CA 系统的工具。",
    ],
  },
  {
    review:
      "Adrian 主导的 Appwrite 移动端开发为产品带来更高质量与更快交付，他的解决方案有效支持了产品目标落地。",
    imgPath: "/images/logos/sdqz1.png",
    logoPath: "/images/logos/sdqz.png",
    title: "前端开发工程师",
    date: "2019年3月 - 2020年5月",
    responsibilities: [
      "基于 Vue.js 构建跨平台应用并接入后端服务。",
      "针对移动端性能进行优化与稳定性提升。",
      "根据团队反馈迭代功能并完善用户体验。",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Adrian 能够将复杂需求转化为高效且稳定的网站结构。他的技术判断与执行力让我们的项目受益匪浅。",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "与 Adrian 合作非常愉快。他不仅让旧网站焕然一新，还极大改善了用户体验。强烈推荐！",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "专业、准时、结果导向——这是 Adrian 给我最深的印象。他对开发的热情体现在每个细节里。",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian 让我们的网站重新焕发生机，界面清晰、体验顺畅。非常理想的合作伙伴。",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "专业的电商开发能力，帮助我们显著提升了转化率。他对业务逻辑也有深入理解，非常难得。",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "前后端都能独当一面，交付速度快且质量稳定。我们对最终成果非常满意。",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  { name: "X / Twitter", url: "https://www.x.com/", imgPath: "/images/x.png" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
