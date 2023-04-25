import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import BottomNav from "./components/bottomnav";
import Nav from "./components/nav";

const Services = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Services - Travelsnest Refurbished Rental</title>
        <meta
          name="description"
          content="These are the services Travelsnest currently provides, or would want to provide in the future."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        overflowX={"scroll"}
        direction={"column"}
        alignItems="center"
        width={"100%"}
      >
        <Nav />
        <Flex direction={"column"} alignItems={"center"} width={"95%"}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            width={"100%"}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              backgroundImage={"/filler.webp"}
              padding={8}
              width={"25%"}
              height={{ base: 200, md: 300, lg: 400 }}
              backgroundSize={"100% 100%"}
            >
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                backgroundColor={"white"}
                width={"95%"}
                height={140}
                border={"1px solid black"}
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "7pt", md: "11.5pt", lg: "18pt" }}
                >
                  CORPORATE
                  <br />
                  HOUSING
                </Text>
                <Button
                  backgroundColor={"red"}
                  color={"white"}
                  borderRadius={0}
                  colorScheme={"transparent"}
                  onClick={() => router.push("/corporatehousing")}
                  fontSize={{ base: "6pt", md: "10pt", lg: "14pt" }}
                  padding={{ base: 0, md: 2, lg: 4 }}
                >
                  CLICK
                </Button>
              </Flex>
            </Flex>
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              backgroundImage={"/filler2.jpg"}
              padding={8}
              width={"25%"}
              height={{ base: 200, md: 300, lg: 400 }}
              backgroundSize={"100% 100%"}
            >
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                backgroundColor={"white"}
                width={"95%"}
                height={140}
                border={"1px solid black"}
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "7pt", md: "11.5pt", lg: "18pt" }}
                >
                  COMING
                  <br />
                  SOON
                </Text>
                <Button
                  backgroundColor={"red"}
                  color={"white"}
                  borderRadius={0}
                  colorScheme={"transparent"}
                  onClick={() => router.push("/")}
                  fontSize={{ base: "6pt", md: "10pt", lg: "14pt" }}
                  padding={{ base: 0, md: 2, lg: 4 }}
                >
                  CLICK
                </Button>
              </Flex>
            </Flex>
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              backgroundImage={"/filler3.jpg"}
              padding={8}
              width={"25%"}
              height={{ base: 200, md: 300, lg: 400 }}
              backgroundSize={"100% 100%"}
            >
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                backgroundColor={"white"}
                width={"95%"}
                height={140}
                border={"1px solid black"}
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "7pt", md: "11.5pt", lg: "18pt" }}
                >
                  COMING
                  <br />
                  SOON
                </Text>
                <Button
                  backgroundColor={"red"}
                  color={"white"}
                  borderRadius={0}
                  colorScheme={"transparent"}
                  fontSize={{ base: "6pt", md: "10pt", lg: "14pt" }}
                  padding={{ base: 0, md: 2, lg: 4 }}
                  onClick={() => router.push("/")}
                >
                  CLICK
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <BottomNav />
      </Flex>
    </>
  );
};

export default Services;
