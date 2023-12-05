import SkeletonBlogCard from "@/components/skeleton/SkeletonBlogCard";
import SkeletonButton from "@/components/skeleton/SkeletonButton";
import SkeletonProjectCard from "@/components/skeleton/SkeletonProjectCard";
import SkeletonSmallTitle from "@/components/skeleton/SkeletonTitleMd";
import SkeletonTitleSm from "@/components/skeleton/SkeletonTitleSm";
import SkeletonTitleXs from "@/components/skeleton/SkeletonTitleXs";

export default function SkeletonBlogsLayout() {
  return (
    <section className="padding-container w-full animate-pulse">
      <SkeletonSmallTitle />
      <div className="grid-container-lg grid gap-10 my-20">
        <div className="grid-blogs grid gap-y-10 h-fit">
          <SkeletonBlogCard />
          <SkeletonBlogCard />
        </div>
        <div className="grid-side px-12">
          {/* CATEGORIES */}
          <>
            <SkeletonTitleXs />
            <SkeletonTitleSm />
            <div className="flex flex-row gap-5 flex-wrap py-10 ">
              <SkeletonButton />
              <SkeletonButton />
              <SkeletonButton />
              <SkeletonButton />
            </div>
          </>

          {/* PROJECTS */}
          <div className="flex flex-col">
            <SkeletonTitleXs />
            <SkeletonTitleSm />

            <div className="py-10 grid gap-5">
              {/* LOADING PROJECT CARD */}
              <SkeletonProjectCard />
              <SkeletonProjectCard />
              <SkeletonProjectCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
