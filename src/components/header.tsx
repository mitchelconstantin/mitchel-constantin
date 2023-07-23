import {
  useColorMode,
  Button,
  Heading,
  Image,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //todo: replace with real photo
  const imageUrl =
    "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png";
  return (
    <header>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="filled"
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src={imageUrl}
          alt="Mitchel"
        />
        <Stack>
          <CardBody>
            <Heading>Mitchel Constantin</Heading>
            <Heading>Software Engineer</Heading>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </CardBody>
        </Stack>
      </Card>
    </header>
  );
};
