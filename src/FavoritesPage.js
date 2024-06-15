import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const boxBgColor = useColorModeValue('white', 'gray.700');
  const textColorApproved = useColorModeValue('green.500', 'green.500');
  const textColorRejected = useColorModeValue('red.500', 'red.500');

  // Example data, replace this with your actual data
  const favoritesData = [
    {
      title: "Молодежный инфошоп «Продвинутые горожане»: от клуба к комьюнити",
      date: "01.01.1970 00:00:00 (Екб)",
      status: "Оценка нейросети: отклонено",
      description: "Описание проекта",
      goals: "Цели проекта",
      socialImportance: "Социальная значимость проекта",
      targetGroups: "Целевые группы проекта",
      tasks: "Задачи проекта",
      isFavorite: true,
    },
    {
      title: "Институт наставничества «ОБНИНСКИЙ ПОТЕНЦИАЛ» по организации трубопроводных водоканальных соревновательных самосовершенствовательных уберреалистичных соревнований",
      date: "01.01.1970 00:00:00 (Екб)",
      status: "Оценка нейросети: одобрено",
      description: "Описание проекта",
      goals: "Цели проекта",
      socialImportance: "Социальная значимость проекта",
      targetGroups: "Целевые группы проекта",
      tasks: "Задачи проекта",
      isFavorite: true,
    },
    {
      title: "Лаборатория традиционного искусства",
      date: "01.01.1970 00:00:00 (Екб)",
      status: "Оценка нейросети: отклонено",
      description: "Описание проекта",
      goals: "Цели проекта",
      socialImportance: "Социальная значимость проекта",
      targetGroups: "Целевые группы проекта",
      tasks: "Задачи проекта",
      isFavorite: true,
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
          <Heading fontSize={'2xl'}>Избранное</Heading>
        </Stack>
        {favoritesData.map((item, index) => (
          <Box
            key={index}
            p={5}
            shadow='md'
            borderWidth='1px'
            rounded='lg'
            bg={boxBgColor}
            width={'100%'}
            mb={4}
          >
            <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Box flex="1" pr={4} maxW="70%">
                <Text fontWeight="bold" mb={2}>{item.title}</Text>
                <Text mb={2}>{item.date}</Text>
                <Text fontWeight="bold">
                  Оценка нейросети:{' '}
                  <Text as="span" color={item.status.includes("одобрено") ? textColorApproved : textColorRejected}>
                    {item.status.split(': ')[1]}
                  </Text>
                </Text>
              </Box>
              <Flex alignItems="center">
                <Button
                  colorScheme="teal"
                  mr={2}
                  onClick={() => navigate('/project-details', { state: { project: item } })}
                >
                  Посмотреть
                </Button>
                <IconButton
                  aria-label="Remove from favorites"
                  icon={<CloseIcon />}
                  colorScheme="red"
                  variant="outline"
                />
              </Flex>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

export default FavoritesPage;
