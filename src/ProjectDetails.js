import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StarIcon, EditIcon } from '@chakra-ui/icons';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Assume project data is passed via location state
  const project = location.state?.project || {};
  const [isFavorite, setIsFavorite] = useState(project.isFavorite || false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Optionally, update the favorite status in the backend or localStorage
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      p={6}
    >
      <Stack spacing={4} width={'100%'} maxW={'4xl'} bg={useColorModeValue('white', 'gray.700')} p={8} rounded={'lg'} boxShadow={'lg'} position="relative">
        <Grid templateColumns="1fr auto" alignItems="start">
          <GridItem>
            <Heading fontSize={'2xl'} textAlign="center">
              Информация о заявке: {project.title}
            </Heading>
          </GridItem>
          <GridItem>
            <Stack direction="column" spacing={2}>
              <IconButton
                aria-label="Toggle Favorite"
                icon={<StarIcon />}
                colorScheme={isFavorite ? "yellow" : "gray"}
                onClick={handleToggleFavorite}
              />
              <IconButton
                aria-label="Edit Project"
                icon={<EditIcon />}
                colorScheme="teal"
                onClick={() => navigate('/')}
              />
            </Stack>
          </GridItem>
        </Grid>
        <Box textAlign="left" mt={4}>
          <Text fontWeight="bold" mb={1}>Описание проекта</Text>
          <Text mb={4}>{project.description}</Text>
        </Box>
        <Box textAlign="left">
          <Text fontWeight="bold" mb={1}>Цели проекта</Text>
          <Text mb={4}>{project.goals}</Text>
        </Box>
        <Box textAlign="left">
          <Text fontWeight="bold" mb={1}>Социальная значимость проекта</Text>
          <Text mb={4}>{project.socialImportance}</Text>
        </Box>
        <Box textAlign="left">
          <Text fontWeight="bold" mb={1}>Целевые группы проекта</Text>
          <Text mb={4}>{project.targetGroups}</Text>
        </Box>
        <Box textAlign="left">
          <Text fontWeight="bold" mb={1}>Задачи проекта</Text>
          <Text mb={4}>{project.tasks}</Text>
        </Box>
        <Box textAlign="left">
          <Text fontWeight="bold" mb={1}>Оценка нейросети</Text>
          <Text as="span">
            {project.status === 'Одобрено' ? (
              <Text as="span" color="green.500">одобрено</Text>
            ) : (
              <Text as="span" color="red.500">отклонено</Text>
            )}
          </Text>
        </Box>
        <Button colorScheme="teal" onClick={() => navigate(-1)}>Вернуться</Button>
      </Stack>
    </Flex>
  );
};

export default ProjectDetails;
