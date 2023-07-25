import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { CiCoffeeBean } from "react-icons/ci";
import { ICoffeeRecipe } from "../utils/types";

export const CoffeeRecipe = ({ coffee }: { coffee: ICoffeeRecipe }) => {
  return (
    <div>
      {coffee.description} from {coffee.reference?.name}
      <List spacing={3}>
        {coffee.steps?.map((step) => {
          return (
            <ListItem justifyItems={"left"} key={step.description + step.start}>
              <ListIcon as={CiCoffeeBean} color="blue.500" />
              {step.description}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
