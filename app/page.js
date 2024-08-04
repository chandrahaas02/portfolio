"use client"
import Image from "next/image";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos"
import { TickMark } from "./svg";
import { Icon } from '@iconify/react';

const ExpCard = ({ props }) => {
  const { name, company, description } = props
  return (
    <div className="card bg-primary shadow-3xl rounded-2xl max-w-2xl">
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-left">{company}</p>
        <p className="text-left">{description}</p>
      </div>
    </div>
  )
}

export default function Home() {

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 500)
  }, []);
  return (
    <div className="bg-base-200">
      <div className="w-screen flex content-center justify-center fixed z-10">
        <div className="navbar  bg-primary text-slate m-5 rounded-full text-2xl w-fit h-fit opacity-80">
            <ul className="menu menu-horizontal px-1 text-l">
              <li><a className="hover:rounded-full" href="#">Home</a></li>
              <li><a className="hover:rounded-full" href="#skills">Skills</a></li>
              <li><a className="hover:rounded-full" href="#exp">Experience</a></li>
              <li><a className="hover:rounded-full">Blog</a></li>
              <li><a className="hover:rounded-full">Tools</a></li>
              <li><a className="hover:rounded-full">Games</a></li>
            </ul>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={"/portfolio/haas.png"} width={500} height={500} alt="me" />
          <div>
            <h1 className="text-4xl font-bold">Hello, I'm Chandrahaas <span className="wave">👋</span> </h1>
            <h1 className="animate-typing overflow-hidden text-6xl font-bold whitespace-nowrap text-green-500 pt-5 pb-5">Full Stack Engineer</h1>
            <div className="flex flex-row gap-10">
              <a href="https://www.linkedin.com/in/chandrahaas-vakkalagadda-05b909188/"><Icon icon="fa6-brands:linkedin" width="3rem" height="3rem" /></a>
              <a href="https://github.com/chandrahaas02"><Icon icon="fa6-brands:github" width="3rem" height="3rem" /></a>
              <a href="mailto:chandrahaas02@gmail.com"><Icon icon="fa6-brands:google" width="3rem" height="3rem" /></a>
            </div>
          </div>
        </div>
      </div>
      <div id="skills"className="flex flex-col justify-center items-center bg-base-200 min-h-80" data-aos="fade-in">
        <h2 className="text-3xl p-5" >Skills</h2>
        <div className="grid grid-rows-2 grid-flow-col gap-16">
          <div><Icon icon="skill-icons:gcp-dark" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:aws-dark" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:gitlab-dark" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:python-dark" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:linux-dark" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:windows-dark" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:nodejs-dark" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:react-dark" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:kubernetes" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:docker" width="7rem" height="7rem" /></div>
          <div><Icon icon="skill-icons:grafana-dark" width="7rem" height="7rem" /></div>
        </div>
      </div>
      <div  id="exp" className="flex flex-col justify-center items-center bg-base-200 min-h-screen mt-12">
        <h2 className="text-3xl self-center p-6">Work Experience</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <TickMark />
          <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
            <ExpCard props={{name:"Devops Engineer", company:"StoryXpress", description:"Optimized infrastructure and deployment through Kubernetes migration, GitOps Stratergy, and continuous monitoring. Led development of AI tools for image recognition, text transcription, and product content generation."}}/>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <TickMark />
          <div className="timeline-end mb-10" data-aos="fade-left">
            <ExpCard props={{name:"Data Science Intern",company:"I'm beside You",description:"Designed a Recomendation System using collabrative filters and explored several DL based approaches"}}/>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <TickMark />
          <div className="timeline-start mb-10 md:text-end" data-aos="fade-right">
            <ExpCard props={{name:"Service Provider",company:"Willings", description:"Created a one-stop destination for Japanese wall art by crawling across brochures of major wallpaper companies. Designed user and admin portals and implemented a database to store and manage data."}}/>
          </div>
          <hr />
        </li>
      </ul>
      </div>
    </div>
  );
}
