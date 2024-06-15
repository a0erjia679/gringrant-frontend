import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Textarea,
} from '@chakra-ui/react';

const ProjectForm = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'4xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'}>Расскажите нам о проекте, чтобы оценить Ваши шансы</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="projectName">
              <FormLabel>Введите название проекта</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="direction">
              <FormLabel>Выберите направление</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="shortDescription">
              <FormLabel>Введите краткое описание проекта</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl id="goals">
              <FormLabel>Укажите цели проекта</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl id="socialSignificance">
              <FormLabel>Опишите социальную значимость проекта</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl id="targetGroups">
              <FormLabel>Опишите целевые группы проекта</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl id="tasks">
              <FormLabel>Опишите задачи проекта</FormLabel>
              <Textarea />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
                }}
              >
                Оценить
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ProjectForm;
