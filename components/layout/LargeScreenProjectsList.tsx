import ProjectCard from "../common/ProjectCard";

const img1 = "/images/git_1.jpg";
const img2 = "/images/git_2.jpg";
const img3 = "/images/git_3.jpg";
const img4 = "/images/git_4.jpg";

export default function LargeScreenProjectsList() {
  return (
    <div className="flex flex-col">
      <h4 className="font-normal text-sm">
        Check out my recent github projects
      </h4>
      <h3 className="font-h3 bg-emerald clip-text">Latest Projects</h3>
      <div className="py-10 grid gap-5">
        <ProjectCard img={img1} title="Portfolio Project" />
        <ProjectCard img={img2} title="Portfolio Project2" />
        <ProjectCard img={img3} title="Portfolio Project3" />
        <ProjectCard img={img4} title="Portfolio Project4" />
      </div>
    </div>
  );
}
