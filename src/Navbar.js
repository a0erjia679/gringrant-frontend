import React from 'react';
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path if necessary

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or session data here
    localStorage.removeItem('authToken'); // Example of clearing a token from localStorage
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <Box bg={useColorModeValue('white', 'gray.800')} px={4} shadow="md">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          <Image src={logo} alt="Logo" boxSize="50px" />
          <Text fontSize="xl" fontWeight="bold" ml={3}>
            ГРИНГРАНТ
          </Text>
        </Flex>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem as={RouterLink} to="/">Оценка</MenuItem>
                <MenuItem as={RouterLink} to="/favorites">Избранное</MenuItem>
                <MenuItem as={RouterLink} to="/history">История</MenuItem>
                <MenuItem onClick={handleLogout}>Выйти</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
