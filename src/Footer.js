import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={4}
      px={8}
      bg={useColorModeValue('gray.200', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Text textAlign="center">© 2024 Гриненко Ольга Евгеньевна</Text>
    </Box>
  );
};

export default Footer;
