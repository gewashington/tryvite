import { Box } from "@chakra-ui/react";

export function Feature(props: { children: React.ReactNode }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      {props.children}
    </Box>
  );
}
