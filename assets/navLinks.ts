import { AiOutlineProject } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { GiSwordsPower } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";

const navLinks = [
  {
    icon: { BsPersonCircle },
    title: "about",
    href: "/#about",
  },
  {
    icon: { GiSwordsPower },
    title: "experience",
    href: "/#experience",
  },
  {
    icon: { AiOutlineProject },
    title: "projects",
    href: "/#projects",
  },
  {
    icon: { GrContactInfo },
    title: "contact",
    href: "/#contact",
  },
];

export default navLinks;
