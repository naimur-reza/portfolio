import { BsBriefcase } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdConstruct, IoMdContact } from "react-icons/io";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: IoMdConstruct,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: BsBriefcase,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: IoMdContact,
  },
  {
    title: "Resume",
    href: "/resume.pdf",
    icon: GoDownload,
  },
];

export default navItems;
