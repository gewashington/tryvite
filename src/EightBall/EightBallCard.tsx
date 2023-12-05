import {
  Stack
} from "@chakra-ui/react";


// TRY USING STACK IN CHAKRAUI TO EXPAND SIZE
export function EightBallCard(props: {children: React.ReactNode}) {
  return (
    <Stack spacing={8} shadow={'md'}>
            {props.children}
    </Stack>
  );
}
