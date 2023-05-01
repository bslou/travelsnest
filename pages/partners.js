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
import { useRouter } from "next/router";

const Partners = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Partnership (Work With Us) - Travelsnest Refurbished Rental
        </title>
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
            gap={4}
          >
            <Text
              fontSize={{ base: "30pt", md: "40pt", lg: "50pt" }}
              color={"#000"}
              fontWeight={400}
            >
              Work With Us
            </Text>
            <Button
              color={"white"}
              backgroundColor={"#EAA301"}
              borderRadius={0}
              paddingLeft={7}
              paddingRight={7}
              colorScheme={"transparent"}
              fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
              onClick={() => router.push("https://calendly.com/tnhost")}
            >
              Free Consultation
            </Button>
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"50%"}
        >
          <Text
            textAlign={"center"}
            fontSize={{ base: "13pt", md: "15pt", lg: "17pt" }}
          >
            Let us help you scale your real estate empire and fill in your
            vacancies.
            <br />
            Whether you have 1 or 100 units, we can help you fulfill your
            occupancy and income goals. We work with our partners in two ways:
            <br />
            1) Management of your property via corporate housing and STR
            <br />
            2) Being your perfect corporate tenant with guaranteed rental income
          </Text>
        </Flex>
        <br />
        <br />
        <Flex direction={"column"} alignItems={"center"} gap={2} width={"50%"}>
          <Text
            textAlign={"center"}
            fontSize={{ base: "11pt", md: "16pt", lg: "21pt" }}
          >
            FAQs
          </Text>
          <Flex direction={"column"} alignItems={"center"}>
            <Text
              textAlign={"center"}
              fontSize={{ base: "13pt", md: "15pt", lg: "17pt" }}
            >
              WHO WOULD BE STAYING IN MY PROPERTY?
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{ base: "8pt", md: "11pt", lg: "14pt" }}
            >
              Our clients are typically business travelers. All reservations are
              screened for identification and criminal background. See the deck
              below for details about the TravelsNest 3-Step Compliance process
              to ensure the safety of the community.
            </Text>
          </Flex>
          <br />
          <Flex direction={"column"} alignItems={"center"}>
            <Text
              textAlign={"center"}
              fontSize={{ base: "13pt", md: "15pt", lg: "17pt" }}
            >
              IS THERE ANY CHARGE FOR WORKING WITH YOU?
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{ base: "8pt", md: "11pt", lg: "14pt" }}
            >
              TravelsNest can manage your property for a 25% commission, sign a
              12+ month lease on your property or provide you the best CoC
              return branded real estate investments for your portfolio.
            </Text>
          </Flex>
          <br />
          <Flex direction={"column"} alignItems={"center"}>
            <Text
              textAlign={"center"}
              fontSize={{ base: "13pt", md: "15pt", lg: "17pt" }}
            >
              WHAT ARE SOME ADVANTAGES TO WORKING WITH TRAVELSNEST?
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{ base: "8pt", md: "11pt", lg: "14pt" }}
            >
              First, we offer free keyless entry so that only property owners
              have a key to their property. This also ensures that guests have
              access only for the nights they’re booked to stay. Secondly, after
              every guest, your property is cleaned to the highest standards by
              a professional cleaning company. Third, talk to us about a
              profit-share opportunity for more cashflow.
            </Text>
          </Flex>
        </Flex>
        <Button
          color={"white"}
          backgroundColor={"#EAA301"}
          borderRadius={0}
          paddingLeft={7}
          paddingRight={7}
          colorScheme={"transparent"}
          fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
          onClick={() => router.push("https://calendly.com/tnhost")}
        >
          Free Consultation
        </Button>

        <BottomNav />
      </Flex>
    </>
  );
};
export default Partners;
