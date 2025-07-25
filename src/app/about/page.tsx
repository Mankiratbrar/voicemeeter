import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX Design",
  "JavaScript",
  "HTML",
  "CSS",
  "Responsive Design",
  "Accessibility",
  "Version Control (Git)",
  "Testing (Jest, React Testing Library)",
  "Performance Optimization",
];

export default function About() {
  return (
    <main className="relative min-h-screen bg-background text-foreground px-6 sm:px-12 lg:px-24">
    <section className="max-w-screen mx-auto bg-card text-card-foreground shadow-xl rounded-2xl p-10 flex flex-col md:flex-col items-start">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-2">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Hi! I’m Mankirat Brar, a passionate front-end developer with a keen eye for design and detail. I love turning creative ideas into delightful digital experiences and building products that users love.

From a young age, I was drawn to technology and the art of problem-solving. My journey began with experimenting on static websites and gradually exploring modern frameworks like React and Next.js. Over the years, I’ve cultivated a strong foundation in TypeScript, Tailwind CSS, and UI/UX best practices. This background empowers me to deliver not just visually pleasing interfaces, but responsive and accessible user experiences.

          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Skills & Tools</h2>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium shadow"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section className="items-start">
          <h2 className="text-2xl font-semibold text-primary mb-2">Our Mission</h2>
          <p className="text-muted-foreground">
            To craft impactful digital experiences with clean code, beautiful interfaces, and user-first thinking.
          </p>
        </section>
      </section>
    </main>
  );
}
