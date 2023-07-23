import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, List, ListIcon, ListItem } from "@chakra-ui/react";

const ExternalLink = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link href={link} isExternal>
      {title} <ExternalLinkIcon mx="2px" />
    </Link>
  );
};

const websites: { title: string; link: string }[] = [
  { title: "Github", link: "https://github.com/mitchelconstantin" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/mitchelconstantin" },
  { title: "email", link: "mailto:mitchconstantin@gmail.com" },
];

export const ContactMe = () => {
  return (
    <List justifyItems={"left"} style={{ width: "100%" }} spacing={3}>
      {websites.map(({ title, link }) => (
        <ListItem style={{ width: "100%" }} alignItems="left">
          <ListIcon as={ChevronRightIcon} color="green.500" />
          <ExternalLink title={title} link={link} />
        </ListItem>
      ))}
    </List>
  );
};
