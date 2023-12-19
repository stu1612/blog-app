"use client";

interface SectionLayoutProps {
  children: React.ReactNode;
  title: string;
}

import useNavContext from "@/hooks/useNavContext";

export default function SectionLayout({ children, title }: SectionLayoutProps) {
  const { isOpen } = useNavContext();

  return (
    <section
      className={`padding-container w-full ${
        isOpen ? "blur-sm md:blur-0" : ""
      }`}
    >
      {/* <h2 className="hidden md:block font-h2">{title}</h2> */}
      <h2 className="font-h2 bg-hyper clip-text text-center lg:hidden">
        {title}
      </h2>
      <h2 className="hidden lg:block font-h2">{title}</h2>
      {children}
    </section>
  );
}
