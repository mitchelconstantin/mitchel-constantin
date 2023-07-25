import { projects } from "../utils/constants";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </>
  );
};
