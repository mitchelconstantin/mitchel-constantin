import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Button, Box, Text, Link } from "@chakra-ui/react";

const projects = [
  {
    title: "Constantin Recipes",
    description:
      "Web app for collecting and sharing prized Constantin family recipes",
    link: "https://www.constantinrecipes.com/all",
  },
];

export const Projects = () => {
  return (
    <div>
      {projects.map((p) => (
        <Box maxW="32rem">
          <Heading mb={2}>{p.title}</Heading>
          <Text fontSize="lg">{p.description}</Text>
          <Link
          isExternal
          href={p.link}
          >
            <Button
              rightIcon={<ExternalLinkIcon />}
              size="lg"
              colorScheme="green"
              mt="24px"
            >
              Check it out
            </Button>
          </Link>
        </Box>
      ))}
    </div>
  );
};
