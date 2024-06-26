import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={4}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error) ? 'Invalid Page' : 'Unexpected Error'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
