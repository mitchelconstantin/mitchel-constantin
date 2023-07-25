import { Button, ButtonGroup, Link } from "@chakra-ui/react";
import { CgMail } from "react-icons/cg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { LiaGithubSquare } from "react-icons/lia";

const websites: { title: string; link: string; icon?: any }[] = [
  {
    title: "Github",
    link: "https://github.com/mitchelconstantin",
    icon: <LiaGithubSquare size="25px" />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/mitchelconstantin",
    icon: <AiOutlineLinkedin size="25px" />,
  },
  {
    title: "Email",
    link: "mailto:mitchconstantin@gmail.com",
    icon: <CgMail size="25px" />,
  },
];

export const ContactMe = () => {
  return (
    <ButtonGroup
      variant="ghost"
      style={{ padding: "8px" }}
      spacing={{ base: 1, md: 6 }}
    >
      {websites.map(({ title, link, icon }) => (
        <Link key={title} isExternal href={link}>
          <Button leftIcon={icon} colorScheme="blue">
            {title}
          </Button>
        </Link>
      ))}
    </ButtonGroup>
  );
};
