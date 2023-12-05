import React from "react";
import SkeletonTitleLg from "./SkeletonTitleLg";
import SkeletonTitleMd from "./SkeletonTitleMd";
import SkeletonTitleSm from "./SkeletonTitleSm";

export default function SkeletonHomeLayout() {
  return (
    <div className="animate-pulse h-auto padding-container">
      <div>
        <SkeletonTitleLg />
        <SkeletonTitleLg />
        <SkeletonTitleLg />
      </div>
      <div className="grid grid-cols-gallery my-20">
        <div className="h-[400px] bg-slate-300 dark:bg-slate-800"></div>
        <div className="flex-col flex-start sm:px-6 lg:px-12">
          <div className="font-h2 py-6 md:py-4">
            <SkeletonTitleMd />
          </div>
          <SkeletonTitleSm />
          <SkeletonTitleSm />
          <SkeletonTitleSm />
          <SkeletonTitleSm />
          <SkeletonTitleSm />
        </div>
      </div>
    </div>
  );
}
