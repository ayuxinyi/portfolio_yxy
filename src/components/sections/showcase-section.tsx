import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const project1Ref = useRef<HTMLDivElement | null>(null);
  const project2Ref = useRef<HTMLDivElement | null>(null);
  const project3Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: (index + 1) * 0.3,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.jpg" alt="project1" />
            </div>
            <div className="text-content">
              <h2>
                借助 AI 自动化创意、设计与开发，让项目从想法到上线更轻松。
              </h2>
              <p className="text-white-50 md:text-xl line-clamp-2">
                基于 Next.js 与 Tailwind 构建界面，结合 Convex 与 Upstash
                支撑实时数据与性能优化， 并通过 AI
                协助完成内容生成与功能开发，让创意快速转化为可上线的产品。
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.jpg" alt="聊天网站截图" />
              </div>
              <div className="text-content">
                <h2>AI 驱动的聊天平台</h2>
                {/* <p className="text-white-50 md:text-xl line-clamp-2">
                  基于 Next.js 与 shadcn/ui
                  构建，打造稳定流畅的智能聊天体验。结合 Kinde + Better Auth
                  提供安全认证， 使用 UploadThing 实现文件上传，Arcjet
                  负责防护与速率限制。
                </p> */}
              </div>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.jpg" alt="一个鸡尾酒网站的首页" />
              </div>
              <div className="text-content">
                <h2>鸡尾酒主题展示网站首页</h2>
                {/* <p className="text-white-50 md:text-xl line-clamp-2">
                  基于 React 与 Tailwind CSS 打造现代化布局，结合 GSAP
                  动效增强页面节奏感，
                  呈现品牌氛围、酒款展示与滚动动态交互，让访客获得更具情绪表达的视觉体验。
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
