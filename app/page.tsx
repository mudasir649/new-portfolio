"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Monitor, Palette, Mic2, Gamepad2, Camera, MoonIcon, Code, Server, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const socialLinks = [
    { icon: "facebook", href: "#" },
    { icon: "instagram", href: "#" },
    { icon: "twitter", href: "#" },
    { icon: "linkedin", href: "#" },
    { icon: "github", href: "#" },
    { icon: "dribbble", href: "#" },
  ];

  const languages = [
    { name: "Bangla", value: 100 },
    { name: "English", value: 90 },
    { name: "Spanish", value: 60 },
  ];

  const skills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 85 },
    { name: "JS", value: 80 },
    { name: "PHP", value: 75 },
    { name: "WordPress", value: 65 },
  ];

  const extraSkills = [
    "Bootstrap, Materialize",
    "Stylus, Sass, Less",
    "Gulp, Webpack, Grunt",
    "GIT Knowledge",
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12 text-yellow-400" />,
      title: "Frontend Development",
      description: "React, Next.js, Vue.js",
    },
    {
      icon: <Server className="w-12 h-12 text-yellow-400" />,
      title: "Backend Development",
      description: "Node.js, Python, Java",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-400" />,
      title: "Mobile Development",
      description: "React Native, Flutter",
    },
    {
      icon: <Monitor className="w-12 h-12 text-yellow-400" />,
      title: "Web Development",
      description: "Blog, E-Commerce",
    },
    {
      icon: <Palette className="w-12 h-12 text-yellow-400" />,
      title: "UI/UX Design",
      description: "Mobile App, Website Design",
    },
    {
      icon: <Mic2 className="w-12 h-12 text-yellow-400" />,
      title: "Sound Design",
      description: "Voice Over, Beat Making",
    },
    {
      icon: <Gamepad2 className="w-12 h-12 text-yellow-400" />,
      title: "Game Design",
      description: "Character Design, Props & Objects",
    },
    {
      icon: <Camera className="w-12 h-12 text-yellow-400" />,
      title: "Photography",
      description: "Portrait, Product Photography",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&q=80",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&q=80",
      tags: ["React", "D3.js", "Firebase"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile app for tracking workouts and nutrition with progress analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&q=80",
      tags: ["React Native", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="p-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full"></div>
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl font-semibold">Rayan Adlrdard</h2>
            <p className="text-gray-600 mb-4">Front-End Developer</p>
            
            <div className="flex justify-center gap-2 mb-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-colors"
                >
                  <span className={`icon-${link.icon}`}></span>
                </Link>
              ))}
            </div>

            <div className="space-y-4 text-left">
              <div>
                <span className="font-medium">Age:</span>
                <span className="float-right">24</span>
              </div>
              <div>
                <span className="font-medium">Residence:</span>
                <span className="float-right">BD</span>
              </div>
              <div>
                <span className="font-medium">Freelance:</span>
                <span className="float-right text-green-500">Available</span>
              </div>
              <div>
                <span className="font-medium">Address:</span>
                <span className="float-right">Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-left font-semibold mb-4">Languages</h3>
              {languages.map((lang, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{lang.name}</span>
                    <span>{lang.value}%</span>
                  </div>
                  <Progress value={lang.value} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-left font-semibold mb-4">Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-left font-semibold mb-4">Extra Skills</h3>
              <ul className="space-y-2 text-left">
                {extraSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black">
              DOWNLOAD CV
            </Button>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          <Card className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  I'm Rayan Adlrdard
                  <br />
                  <span className="text-yellow-400">Front-end</span> Developer
                </h1>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat feugiat placerat lobortis. Natoque
                  rutrum semper sed suspendisse nunc lectus.
                </p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  HIRE ME →
                </Button>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=1000&q=80"
                  alt="Rayan Adlrdard"
                  width={400}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-center mb-2">My Services</h2>
            <p className="text-gray-600 text-center mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Lorem ipsum
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Card>
              ))}
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Advertising</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna
                  viverra morbi.
                </p>
                <Button variant="outline" className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-white">
                  ORDER NOW →
                </Button>
              </Card>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-center mb-2">My Projects</h2>
            <p className="text-gray-600 text-center mb-8">
              Here are some of my recent projects showcasing my skills and experience in web development.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-white"
                        asChild
                      >
                        <Link href={project.demoLink}>Live Demo</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-white"
                        asChild
                      >
                        <Link href={project.githubLink}>GitHub</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="flex flex-col gap-4 items-center">
            <Button variant="outline" size="icon" className="rounded-full">
              <MoonIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              Home
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              Services
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              CV
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              Portfolio
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              Blog
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}