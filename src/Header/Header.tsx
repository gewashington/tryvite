'use client'

import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import fortuneteller from '../assets/fortunetellerbanner5.png'

export function Header() {
  return (
    <Flex
      shadow={"md"}
      align={"end"}
      w={'full'}
      h={'50vh'}
      backgroundImage={fortuneteller}
      backgroundSize={'stretch'}
      backgroundPosition={'center center'}>
      <VStack
        justify={'start'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Discover your answers...
          </Text>
        </Stack>
      </VStack>
    </Flex>
  )
}