export default function SkeletonProjectCard() {
  return (
    <div className="flex flex-row justify-start items-center">
      <div className="bg-slate-300 dark:bg-slate-800 h-[150px] w-[150px] lg:h-[80px] lg:w-[80px] mr-3 rounded-none lg:rounded-full"></div>
      <div className="flex flex-col">
        <div className="h-6 w-28 bg-slate-300 dark:bg-slate-800 rounded-lg"></div>
      </div>
    </div>
  );
}
