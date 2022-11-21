import {
  Center,
  Heading,
  VStack,
  Image,
  HStack,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";

import { HatIcon } from "../Illustrations";
import bg from "../../assets/paper-vow-bg.png";
import ornament from "../../assets/ornament.svg";
import ornamentDivider from "../../assets/ornament-divider.svg";

export default function Vow({
  children,
  isSelected,
}: {
  children: React.ReactNode;
  isSelected: boolean;
}) {
  return (
    <Box
      backgroundImage={bg}
      width={"200px"}
      height={"300px"}
      color={"secondary.500"}
      borderRadius={"xl"}
      backgroundSize={"cover"}
      p={4}
    >
      <Flex
        justifyContent={"space-between"}
        direction={"column"}
        alignItems={"center"}
        height={"100%"}
      >
        <HStack>
          <Divider
            orientation="horizontal"
            width={"14px"}
            borderColor={"secondary.500"}
            borderRadius={"sm"}
            borderWidth={"0.5px"}
          />
          <Image src={ornament} width={"20px"} />
          <Divider
            orientation="horizontal"
            width={"14px"}
            borderColor={"secondary.500"}
            borderRadius={"sm"}
            borderWidth={"0.5px"}
          />
        </HStack>
        <Center>
          <VStack spacing={10}>
            <HatIcon boxSize={"6rem"} />
            <Heading
              as={"p"}
              variant={"h1"}
              lineHeight={"1.625rem"}
              fontSize={"1.5rem"}
              textAlign={"center"}
            >
              {children}
            </Heading>
          </VStack>
        </Center>

        <HStack spacing={2}>
          <Image src={ornamentDivider} width={"30px"} />
          <Image src={ornament} width={"20px"} />
          <Image src={ornamentDivider} width={"30px"} />
        </HStack>
      </Flex>
    </Box>
  );
}
