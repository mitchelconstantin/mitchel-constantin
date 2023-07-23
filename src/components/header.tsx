import {
//   useColorMode,
//   Button,
  Heading,
  Image,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Mitchel from "../assets/mitchel.jpg";

export const Header = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Card
      direction={{  sm: "row" }}
      style={{padding: '8px', margin: '8px'}}
      overflow="hidden"
      variant="filled"
    >
      <Image borderRadius="full" boxSize="120px" src={Mitchel} alt="Mitchel" />
      <Stack>
        <CardBody>
          <Heading size="lg">Mitchel Constantin</Heading>
          <Heading size="md">Software Engineer</Heading>
          {/* <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button> */}
        </CardBody>
      </Stack>
    </Card>
  );
};
