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
import logo from './logo.png'; // Adjust the path if necessary

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    const { username, password } = values;

    // Simulate backend credential check
    if (username === 'admin' && password === 'password123') {
      console.log('Login successful');
      // Save the authentication token to localStorage
      localStorage.setItem('authToken', 'your-auth-token');
      // Redirect to the main page
      navigate('/');
    } else {
      // Show error if credentials are incorrect
      alert('Invalid username or password');
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'4xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={logo} alt="Logo" boxSize="100px" />
          <Heading fontSize={'4xl'}>Вход</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="username" isInvalid={errors.username}>
                <FormLabel>Логин</FormLabel>
                <Input
                  name="username"
                  type="text"
                  {...register('username', { required: 'Логин обязателен' })}
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
                  {...register('password', { required: 'Пароль обязателен' })}
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
                  Войти
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Нет аккаунта? <Link as={RouterLink} to="/register" color={'blue.400'}>Зарегистрируйтесь</Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
