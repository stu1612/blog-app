import SocialIcons from "../common/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative bottom-0 padding-container w-full h-36 mt-24 bg-slate-300 dark:bg-slate-600 z-20">
      <div className="w-appWidth mx-auto h-full flex flex-col items-center justify-evenly md:flex-row md:justify-between ">
        <div>
          <small>&copy; Copyright 2023, stuBlog</small>
        </div>
        <ul className="flex flex-row items-center">
          <li>stu.bolderson@aol.com</li>
          <li className="mx-3 flex">
            <SocialIcons />
          </li>
        </ul>
      </div>
    </footer>
  );
}
