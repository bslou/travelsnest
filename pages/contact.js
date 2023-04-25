import {
  Button,
  Flex,
  Input,
  Text,
  Link,
  Image,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import BottomNav from "./components/bottomnav";
import Nav from "./components/nav";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Travelsnest Refurbished Rental</title>
        <meta
          name="description"
          content="Contact us through this page, whether you have questions on a property or are just seeking help, contact us on this page."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        overflowX={"scroll"}
        direction={"column"}
        alignItems={"center"}
        width={"100%"}
        gap={10}
      >
        <Flex direction={"column"} width={"100%"} alignItems={"center"}>
          <Nav />
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundImage={"url('/gold.jpeg')"}
            width={"100%"}
            height={{ base: 300, md: 400, lg: 500 }}
            backgroundSize={"100% 100%"}
            objectFit={"cover"}
          >
            <Text
              fontSize={{ base: "30pt", md: "40pt", lg: "50pt" }}
              color={"#000"}
              fontWeight={400}
            >
              Contact Us
            </Text>
          </Flex>
        </Flex>
        <Flex
          alignItems={"flex-start"}
          justifyContent={"center"}
          width={{ base: "99%", md: "96.5%", lg: "92.5%" }}
          gap={{ base: 4, md: 12, lg: 20 }}
          //marginTop={10}
        >
          <form>
            <Flex
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              width={{ base: "45vw", md: "37.5vw", lg: "30vw" }}
              gap={3}
            >
              <Input
                required
                placeholder="Your Name"
                name="name"
                fontSize={"14pt"}
                //as={"i"}
                paddingTop={6}
                paddingBottom={6}
                paddingLeft={3}
                paddingRight={3}
                borderRadius={0}
                fontFamily={"sans-serif"}
                border={"1px solid black"}
                color="black"
              />
              <Input
                required
                placeholder="Email"
                name="eml"
                fontSize={"14pt"}
                //as={"i"}
                paddingTop={6}
                paddingBottom={6}
                paddingLeft={3}
                paddingRight={3}
                fontFamily={"sans-serif"}
                border={"1px solid black"}
                borderRadius={0}
                color="black"
              />
              <Input
                required
                placeholder="Phone"
                name="phone"
                fontSize={"14pt"}
                //as={"i"}
                paddingTop={6}
                paddingBottom={6}
                paddingLeft={3}
                paddingRight={3}
                fontFamily={"sans-serif"}
                border={"1px solid black"}
                borderRadius={0}
                color="black"
              />
              <Textarea
                maxHeight={200}
                required
                placeholder="Type your message here..."
                name="msg"
                fontSize={"14pt"}
                fontFamily={"sans-serif"}
                //as={"i"}
                paddingLeft={3}
                paddingRight={3}
                border={"1px solid black"}
                borderRadius={0}
                color="black"
              />
              <Flex
                width={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button
                  backgroundColor="red"
                  color={"white"}
                  paddingLeft={4}
                  paddingRight={4}
                  borderRadius={0}
                >
                  Submit
                </Button>
              </Flex>
            </Flex>
          </form>
          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Flex gap={3}>
              <Image
                width={30}
                height={30}
                src="/logo.png"
                alt={"Travelsnest official logo of top corporate rental"}
              />
              <Text fontWeight={800} color={"#C29223"}>
                TRAVELSNEST
              </Text>
            </Flex>
            <Link
              fontSize={{ base: "10pt", md: "13pt", lg: "16pt" }}
              marginTop={7}
              target={"_blank"}
              href={
                "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJTBqRSmBSWNCJMXvmCVDDGRkqMtLhlZZxXcMGnbvBzxMdczsjPzsWWMPzGjBddtSwMg"
              }
            >
              host@travelsnest.com
            </Link>
            <Text fontSize={{ base: "10pt", md: "13pt", lg: "16pt" }}>
              650-249-9917
            </Text>
          </Flex>
        </Flex>
        <BottomNav />
      </Flex>
    </>
  );
};
export default Contact;
