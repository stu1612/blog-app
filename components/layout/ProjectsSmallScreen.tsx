import ProjectCard from "../common/ProjectCard";
import fetchGithubAPI from "@/utils/fetchGithubApi";

export default async function ProjectsSmallScreen() {
  const projects = await fetchGithubAPI();

  return (
    <div className="grid-projects">
      <div className="flex flex-col gap-10 ">
        <h3 className="font-h2 md:font-h3 flex justify-center text-center bg-emerald clip-text py-10">
          Latest Projects on Github
        </h3>
        <div className="grid gap-5 ">
          {projects?.map((project: any, index: any) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
