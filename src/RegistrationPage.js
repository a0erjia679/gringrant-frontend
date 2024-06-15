import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  Image,
  Text,
  Link,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from './logo.png';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    try {
      // Assume registration is successful
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={logo} alt="Logo" boxSize="100px" />
          <Heading fontSize={'4xl'}>Регистрация</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="username" isInvalid={errors.username}>
                <FormLabel>Имя пользователя</FormLabel>
                <Input
                  name="username"
                  type="text"
                  {...register('username', { required: 'Имя пользователя обязательно' })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel>Пароль</FormLabel>
                <Input
                  name="password"
                  type="password"
                  {...register('password', {
                    required: 'Пароль обязателен',
                    minLength: {
                      value: 8,
                      message: 'Пароль должен содержать минимум 8 символов',
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                      message: 'Пароль должен содержать минимум одну заглавную букву, одну строчную букву и одну цифру',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  type="submit">
                  Зарегистрироваться
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Уже зарегистрированы? <Link as={RouterLink} to="/login" color={'blue.400'}>Авторизуйтесь</Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegistrationPage;
