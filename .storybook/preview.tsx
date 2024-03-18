import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => <ChakraProvider><Story/></ChakraProvider>
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
