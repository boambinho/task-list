import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';

function ErrorPage() {
  return (
    <Stack spacing={6}>
      <br />

      <Heading as="h1" size="4xl" noOfLines={1} color="red">
        ¡ERROR!
      </Heading>
      <Heading as="h2" size="3xl" noOfLines={1}>
        ESTA PÁGINA NO EXISTE
      </Heading>
      <br />
      <Heading as="h3" size="sm" fontStyle={'italic'} fontWeight={'lighter'}>
        Para acceder a las funcionalidades de la página, utilizar la barra de
        navegación superior.
      </Heading>
    </Stack>
  );
}

export default ErrorPage;
