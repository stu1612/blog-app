import ProjectCard from "../common/ProjectCard";
import fetchGithubAPI from "@/utils/fetchGithubApi";

export default async function LargeScreenProjectsList() {
  const projects = await fetchGithubAPI();

  return (
    <div className="flex flex-col">
      <h4 className="font-normal text-sm">
        Check out my recent github projects
      </h4>
      <h3 className="font-h3 bg-emerald clip-text">Latest Projects</h3>
      <div className="py-10 grid gap-5">
        {projects?.map((project: any, index: any) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </div>
  );
}
