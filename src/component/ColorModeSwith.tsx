import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwith = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text ml={2}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwith;
