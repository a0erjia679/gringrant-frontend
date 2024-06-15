import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const HistoryPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const boxBgColor = useColorModeValue('white', 'gray.700');
  const textColorApproved = useColorModeValue('green.500', 'green.500');
  const textColorRejected = useColorModeValue('red.500', 'red.500');

  // Example data, replace this with your actual data
  const historyData = [
    {
      title: "Молодежный инфошоп «Продвинутые горожане»: от клуба к комьюнити",
      date: "01.01.1970 00:00:00 (Екб)",
      status: "Оценка нейросети: отклонено",
    },
    {
      title: "Институт наставничества «ОБНИНСКИЙ ПОТЕНЦИАЛ» по организации...",
      date: "01.01.1970 00:00:00 (Екб)",
      status: "Оценка нейросети: одобрено",
    },
    {
      title: "Лаборатория традиционного искусства",
      date: "01.01.1970 00:00:00 (Екб)",
      status: "Оценка нейросети: отклонено",
    },
  ];

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={bgColor}
    >
      <Stack spacing={8} mx={'auto'} maxW={'4xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'}>История</Heading>
        </Stack>
        {historyData.map((item, index) => (
          <Box
            key={index}
            p={5}
            shadow='md'
            borderWidth='1px'
            rounded='lg'
            bg={boxBgColor}
            width={'100%'}
          >
            <Stack>
              <Text fontWeight="bold">{item.title}</Text>
              <Text>{item.date}</Text>
              <Text fontWeight="bold">
                Оценка нейросети:{' '}
                <Text as="span" color={item.status.includes("одобрено") ? textColorApproved : textColorRejected}>
                  {item.status.split(': ')[1]}
                </Text>
              </Text>
              <Button
                mt={2}
                colorScheme="teal"
                alignSelf="flex-end"
              >
                Посмотреть
              </Button>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

export default HistoryPage;
