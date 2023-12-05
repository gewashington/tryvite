import {
  Stack
} from "@chakra-ui/react";


// TRY USING STACK IN CHAKRAUI TO EXPAND SIZE
export function EightBallCard(props: {children: React.ReactNode}) {
  return (
    <Stack spacing={8} shadow={'dark-lg'} w={'75vh'} h={'50vh'} rounded={'md'} marginTop={'25px'}>
            {props.children}
    </Stack>
  );
}
