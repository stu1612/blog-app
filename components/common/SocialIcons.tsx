import { socialLinks } from "@/constants/navLinks";
import { SocialProps } from "@/types";

export default function SocialIcons() {
  return socialLinks.map((link: SocialProps) => (
    <a
      href={link.url}
      key={link.id}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-2"
    >
      {link.icon}
    </a>
  ));
}
