import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { coffeeRecipeGroups } from "../utils/constants";
import { CoffeeRecipe } from "../components/coffee-recipe";

export const Coffee = () => {
  return (
    <div>
      <p>Landing page for some of my go to coffee recipes. This page is a work in progress!</p>
      <Tabs align="center" variant="soft-rounded" colorScheme="blue">
        <TabList>
          {coffeeRecipeGroups.map((c) => (
            <Tab color={"lightgrey"} key={c.name}>
              {c.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {coffeeRecipeGroups.map((group) => (
            <TabPanel key={group.name}>
              <Accordion allowMultiple width="100%">
                {group.recipes.map((recipe) => {
                  return (
                    <AccordionItem key={recipe.description}>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            yields: {recipe.yields}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <CoffeeRecipe coffee={recipe} />
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};
