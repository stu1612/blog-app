import ProjectCard from "../common/ProjectCard";
import fetchGithubAPI from "@/utils/fetchGithubApi";

export default async function ProjectsList() {
  const projects = await fetchGithubAPI();

  return (
    <div className="grid-projects">
      <div className="flex flex-col gap-5">
        <h3 className="font-h3">Latest Projects</h3>
        <div className="grid gap-5">
          {projects?.map((project: any, index: any) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
