import { Button, Flex, Input, Text, Link, Image } from "@chakra-ui/react";
import Head from "next/head";
import BottomNav from "./components/bottomnav";
import Nav from "./components/nav";

const Contact = () => {
  /*
   * IMPORT MESSAGE
   * DON'T EDIT ANYTHING ABOVE ONLY EDIT ANYTHING BELOW UNTIL THE COMMENT
   */
  //cange all three texts below because I copied from HK
  const txt1 = [
    "Make Your Stay Convenient",
    "Hikaru's spaces come fully furnished. Our furnished homes and apartments all have kitchens that are stocked with dishes, flatware, and pots and pans. Bedrooms and baths include quality linens. Our living quarters are also set up with TV, cable, and Internet. Many of our homes include washer and dryer inside or on-site. Our Corporate Housing experts select properties that are near your worksite and offer the comforts of a home away from home.",
  ];
  const txt2 = [
    "Stay Within Your Budget",
    "Hikaru has saved some of the nation’s top tech, consulting and construction companies thousands of dollars by creating temporary lodging solutions to accommodate individuals or crews for half the cost of typical hotel stays. We realize the importance of meeting financial demands and customize temporary living arrangements to stay within the budget for your short-term housing needs across the country.",
  ];
  const txt3 = [
    "Corporate Housing Expertise",
    "Hikaru has many years of combined experience in the Corporate Housing industry, and our expertise is at your disposal! We have significant experience working with some of the nation’s top construction companies, and are ready to help you find the perfect place to stay!",
  ];
  /*
   * IMPORT MESSAGE
   * DON'T EDIT ANYTHING BELOW ONLY EDIT ABOVE
   */

  return (
    <>
      <Head>
        <title>Corporate Housing - Travelsnest Refurbished Rental</title>
        <meta
          name="description"
          content="This is a description of the corporate housing service that Travelsnest provides to its clients."
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
            height={300}
            backgroundSize={"100% 100%"}
            objectFit={"cover"}
          >
            <Text
              fontSize={"50pt"}
              color={"#000"}
              fontWeight={400}
              textAlign={"center"}
            >
              Corporate Housing
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            width={"80%"}
            gap={8}
            marginTop={5}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              width={"100%"}
              gap={1}
            >
              <Text
                color={"black"}
                fontSize={"13pt"}
                fontWeight={600}
                textAlign={"center"}
              >
                {txt1[0]}
              </Text>
              <Text fontSize={"14pt"} textAlign={"center"}>
                {txt1[1]}
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              alignItems={"center"}
              width={"100%"}
              gap={1}
            >
              <Text
                color={"black"}
                fontSize={"13pt"}
                fontWeight={600}
                textAlign={"center"}
              >
                {txt2[0]}
              </Text>
              <Text fontSize={"14pt"} textAlign={"center"}>
                {txt2[1]}
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              alignItems={"center"}
              width={"100%"}
              gap={1}
            >
              <Text
                color={"black"}
                fontSize={"13pt"}
                fontWeight={600}
                textAlign={"center"}
              >
                {txt3[0]}
              </Text>
              <Text fontSize={"14pt"} textAlign={"center"}>
                {txt3[1]}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <BottomNav />
      </Flex>
    </>
  );
};
export default Contact;
