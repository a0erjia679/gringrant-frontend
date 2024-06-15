import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookiesConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesConsent', 'true');
    setIsVisible(false);
  };

  const bgColor = useColorModeValue('gray.800', 'gray.200');
  const textColor = useColorModeValue('white', 'black');

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      bottom={0}
      width="100%"
      bg={bgColor}
      color={textColor}
      py={4}
      px={8}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      zIndex={1000}
    >
      <Text>
        Этот сайт использует куки, потому что без них всё работало бы через жопу.{' '}
      </Text>
      <Button colorScheme="teal" onClick={handleAccept}>
        Великолепно
      </Button>
    </Box>
  );
};

export default CookiesBanner;
