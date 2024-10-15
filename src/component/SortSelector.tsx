import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        order by:relevance
      </MenuButton>
      <MenuList>
        <MenuItem>sjdh</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
