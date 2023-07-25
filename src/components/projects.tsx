import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Button,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
} from "@chakra-ui/react";
import CRecipesLogo from "../assets/constantinrecipeslogo.png";

interface Project {
  title: string;
  description: string;
  link: string;
  logo: any;
}
const projects: Project[] = [
  {
    title: "Constantin Recipes",
    description:
      "Web app for collecting and sharing prized Constantin family recipes",
    link: "https://www.constantinrecipes.com/all",
    logo: CRecipesLogo,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      borderRadius={"20px"}
      marginBottom={"8px"}
      height={{ base: "330px", sm: "200px" }}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      alignItems={"center"}
    >
      <Image
        height={{ base: "100px", sm: "200px" }}
        width={{ base: "100px", sm: "200px" }}
        src={project.logo}
        alt={project.description}
      />
      <Stack>
        <CardBody paddingBottom={"10px"}>
          <Heading size="md">{project.title}</Heading>
          <Text py="1">{project.description}</Text>
        </CardBody>
        <CardFooter paddingTop={"0px"} justifyContent={"center"}>
          <Button
            rightIcon={<ExternalLinkIcon />}
            variant="ghost"
            colorScheme="blue"
          >
            Check it out
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export const Projects = () => {
  return (
    <div>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
};
