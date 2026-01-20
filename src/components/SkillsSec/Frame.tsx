"use client";

import Project1 from "@images/project_one.jpeg";
import Project2 from "@images/project_two.jpeg";
import Project3 from "@images/project_three.jpeg";
import { useRef } from "react";
import { orbitron, blanka } from "@/app/ui/fonts";
import { motion, useInView } from "framer-motion";
import Project from "./Project";

export function Frame() {
  const allProjects = [
    {
      id: 0,
      backgroundImg: Project1.src,
      tools: ["reactJs", "html"],
      title: "Tengu-Drip",
      language: "HTML & CSS",
      site: "https://github.com/Mazakina/tengu-e-commerce-nest-app",
      github: "https://github.com/Mazakina/tengu-e-commerce-nest-app",
      figma:
        "https://www.figma.com/design/cHIKR0d59NVklX7DMxdwOK/Tengu?node-id=0-1&t=tu7hgV31RVTrpRkI-1",
      description:
        " Tengu-Drip é uma plataforma de e-commerce utilizando NestJS, focada em oferecer uma experiência robusta e escalável. Desenvolvido seguindo Clean Architecture e Domain-Driven Design (DDD), garantindo um código modular,de fácil manutenção",
    },
    {
      id: 1,
      backgroundImg: Project2.src,
      tools: ["html"],
      title: "Beralde Verduras",
      language: "HTML & CSS",
      description:
        "Vitrine digital B2B para Beralde Verduras (freelance). Desenvolvido com Next.js, Framer Motion e Supabase, focado em performance, UX e captação de clientes.",
      site: "https://beraldeverduras.vercel.app/",
      github: "https://github.com/Mazakina/beralde_website",
      figma:
        "https://www.figma.com/design/ov1LMm6Imi6VHzbjekX2gc/Beralde-website?node-id=0-1&t=hixY3Jgyx5MBJ8g1-1",
    },
    {
      id: 2,
      backgroundImg: Project3.src,
      tools: [
        "nextJs",
        "reactJs",
        "FaunaDb",
        "Imgur API",
        "Correios API",
        "html",
      ],
      title: "Ink Trail",
      language: "Next JS",
      site: "https://inktrail.vercel.app/",
      github: "https://github.com/Mazakina/ArtMatch",
      description:
        "InkTrail é uma aplicação JAMStack com foco na comunidade artística, Utilizando Next.js, Imgur API para upload de imagens e FaunaDB como banco de dados, A aplicação também integra a API dos Correios Para cadastro.",
      figma:
        "https://www.figma.com/design/8sWORNtMRxw1EUzt7M2BAG/Inktrail?node-id=0-1&t=H3wtSS3hNnFChvPn-1",
    },
  ];
  // Trabalho em Next Js para entrega de conteudo DEV com preview antes de se inscrever. Criado com Stripe para pagamentos, Next Auth para validação, e Prismic como CMS

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "60px 0px 0px 0px ",
  });

  return (
    <>
      <h4
        id="projects"
        className={` 
        ${isInView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
        ${blanka.className}
        transition-all duration-1000  
        tracking-widest 
        ss:mt-0  mt-[180px] ml-24 mr-auto 
        inline-block text-3xl text-c-gray100
        `}
      >
        PROJE<span className="text-c-orange500">T</span>OS
      </h4>
      <motion.div
        ref={ref}
        id="project-section"
        className={`
        ${isInView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
        transition-all duration-700  
        ${orbitron.className}
        box-border 

        w-full 
        mt-16 
        mx-auto 
        h-fit
        relative 
        flex
        justify-around
        flex-wrap
        overflow-hidden`}
      >
        {allProjects.map((project) => {
          return (
            <Project
              key={project.id}
              src={project.backgroundImg}
              description={project.description}
              github={project.github}
              figma={project.figma}
              site={project.site}
            />
          );
        })}
      </motion.div>
    </>
  );
}
