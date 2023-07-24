import {
  useColorMode,
  Button,
  Heading,
  Image,
  Card,
  CardBody,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import Mitchel from "../assets/mitchel.jpg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card
      borderRadius={"20px"}
      direction={{ sm: "row" }}
      style={{ padding: "8px", margin: "8px" }}
      overflow="hidden"
      variant="filled"
      width="100%"
      justify={"center"}
      alignItems={"center"}
    >
      <Image
        borderRadius="full"
        boxSize={{ base: "90px", sm: "120px" }}
        src={Mitchel}
        alt="Mitchel"
      />
      <Stack>
        <CardBody>
          <Heading size={{ base: "md", sm: "lg" }}>Mitchel Constantin</Heading>
          <Heading size={{ base: "sm", sm: "md" }}>Software Engineer</Heading>
        </CardBody>
      </Stack>
      <IconButton
        isRound
        aria-label="color-mode"
        variant={"ghost"}
        style={{ marginTop: "4px" }}
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
    </Card>
  );
};
