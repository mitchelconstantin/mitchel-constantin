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
  Link,
} from "@chakra-ui/react";
import { Project } from "../utils/types";

export const ProjectCard = ({ project }: { project: Project }) => {
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
      borderRadius={'20px'}
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
          <Link isExternal href={project.link}>
            <Button
              rightIcon={<ExternalLinkIcon />}
              variant="ghost"
              colorScheme="blue"
            >
              Check it out
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
};
