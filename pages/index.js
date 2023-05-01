import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BottomNav from "./components/bottomnav";
import Nav from "./components/nav";

export default function Home() {
  /*
   * IMPORT MESSAGE
   * DON'T EDIT ANYTHING ABOVE ONLY EDIT ANYTHING BELOW UNTIL THE COMMENT
   */
  //max houses = 4 but you can do less if you wan (including 0 just do [] for houses)
  //homes array: img 1, name of the rental thing, link
  // const houses = [
  //   ["/garage.jpeg", "Sky Lanterns", "https://www.stayhikaru.com/"],
  //   ["/garage.jpeg", "Sky Lanterns", "https://www.stayhikaru.com/"],
  //   ["/garage.jpeg", "Sky Lanterns", "https://www.stayhikaru.com/"],
  //   ["/garage.jpeg", "Sky Lanterns", "https://www.stayhikaru.com/"],
  // ];
  const houses = [];

  //all the style variables are below, change accordingly
  const [firstStyle, setFirstStyle] = useState("Impeccable Style");
  const [secondStyle, setSecondStyle] = useState("Professionally Cleaned");
  const [thirdStyle, setThirdStyle] = useState("Exceptional Service");

  //all the images variables are below, style accordingly
  let img1 = "/des2.webp";
  let img2 = "/des.webp";
  let img3 = "/serv.jpeg";
  //only 3 quotes allowed for now
  const quotes = [
    [
      "This was by far the best rental I've been in. Check-in was incredibly simple, the location is great, the apartment is beautifully appointed, and impeccably clean. No question - I would definitely rent another TravelsNest property. This should be the gold standard.",
      "-Terry",
    ],
    [
      "The customer service at TravelsNest is next level. The owner responds in a quickly and timely manner, and if there are any problems they are resolved rapidly.",
      "—Michael",
    ],
    [
      "The house quality is magnificent to say the least. My children really enjoyed staying at our house in SF, and we greatly recommend others TravelsNest.",
      "-Riley",
    ],
  ];

  /*
   * IMPORT MESSAGE
   * DON'T EDIT ANYTHING BELOW ONLY EDIT ABOVE
   */

  const router = useRouter();
  const [quoteNum, setQuoteNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (quoteNum == 0) {
        setQuoteNum(1);
      } else if (quoteNum == 1) {
        setQuoteNum(2);
      } else if (quoteNum == 2) {
        setQuoteNum(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Head>
        <title>Home - Travelsnest Refurbished Rental</title>
        <meta
          name="description"
          content="Travelsnest is a refurbished rental company located in the heart of Silicon Valley that offers a unique and exclusive service for people who are looking for a comfortable and enjoyable stay. The company provides a range of beautifully furnished and fully-equipped rental properties that have been carefully refurbished to meet the highest standards of comfort and style.

Travelsnest is committed to providing a superior level of service to its guests, with a team of experienced and dedicated professionals who are always on hand to help with any request or need. From the moment you arrive, you'll be greeted with warm hospitality and personal attention, ensuring that your stay is as comfortable and enjoyable as possible.

Whether you're looking for a short-term rental or a longer stay, Travelsnest has a range of options to suit your needs, from stylish studios to spacious apartments. All properties are located in convenient and desirable locations, offering easy access to local attractions, restaurants, and businesses.

With Travelsnest, you can relax and settle into your new home away from home, knowing that everything has been taken care of for you. So why not experience the ultimate in comfort and convenience with Travelsnest, and enjoy your stay in the heart of Silicon Valley like never before."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        overflowX={"scroll"}
        width={"100%"}
        alignItems={"center"}
        direction={"column"}
        gap={20}
      >
        <Flex direction={"column"} alignItems={"center"} width={"100%"}>
          <Nav />
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundImage={"url('/home.jpg')"}
            width={"100%"}
            height={{ base: 300, md: 400, lg: 500 }}
            backgroundSize={"100% 100%"}
            objectFit={"cover"}
          >
            <Text
              fontSize={{ base: "35pt", md: "55pt", lg: "75pt" }}
              color={"#AD8221"}
              fontWeight={600}
            >
              TRAVELS NEST
            </Text>
            <Text
              color={"black"}
              fontSize={{ base: "14pt", md: "21pt", lg: "27pt" }}
            >
              Polished Corporate Stays
            </Text>
          </Flex>
        </Flex>
        <Flex direction={"column"} alignItems={"center"} gap={10} width={"95%"}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={houses.length >= 1 ? "space-between" : "center"}
            width={"80%"}
          >
            {houses.length >= 1 ? (
              <Flex
                _hover={{
                  opacity: 0.8,
                  cursor: "pointer",
                }}
                direction={"column"}
                justifyContent={"flex-end"}
                alignItems={"flex-start"}
                width={"49%"}
                backgroundImage={"url('" + houses[0][0] + "')"}
                backgroundSize={"100% 100%"}
                onClick={() => router.push(houses[0][2])}
                height={{ base: 200, md: 280, lg: 350 }}
              >
                <Flex
                  backgroundColor={"#000"}
                  paddingLeft={3}
                  paddingRight={3}
                  width={"100%"}
                  paddingTop={2}
                  paddingBottom={2}
                >
                  <Text
                    fontWeight={700}
                    fontSize={{ base: "7pt", md: "9.5pt", lg: "12pt" }}
                    color={"#fff"}
                  >
                    Click to book "{houses[0][1]}"
                  </Text>
                </Flex>
              </Flex>
            ) : (
              <Text
                fontSize={{ base: "30pt", md: "40pt", lg: "50pt" }}
                fontWeight={300}
                textAlign={"center"}
              >
                Coming Soon!
              </Text>
            )}
            {houses.length >= 2 ? (
              <Flex
                _hover={{
                  opacity: 0.8,
                  cursor: "pointer",
                }}
                direction={"column"}
                justifyContent={"flex-end"}
                alignItems={"flex-start"}
                width={"49%"}
                backgroundImage={"url('" + houses[1][0] + "')"}
                backgroundSize={"100% 100%"}
                onClick={() => router.push(houses[1][2])}
                as={"a"}
                height={{ base: 200, md: 280, lg: 350 }}
              >
                <Flex
                  backgroundColor={"#000"}
                  paddingLeft={3}
                  paddingRight={3}
                  width={"100%"}
                  paddingTop={2}
                  paddingBottom={2}
                >
                  <Text
                    fontWeight={700}
                    fontSize={{ base: "7pt", md: "9.5pt", lg: "12pt" }}
                    color={"#fff"}
                  >
                    Click to book "{houses[1][1]}"
                  </Text>
                </Flex>
              </Flex>
            ) : null}
          </Flex>

          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"80%"}
          >
            {houses.length >= 3 ? (
              <Flex
                _hover={{
                  opacity: 0.8,
                  cursor: "pointer",
                }}
                direction={"column"}
                justifyContent={"flex-end"}
                alignItems={"flex-start"}
                width={"49%"}
                backgroundImage={"url('" + houses[2][0] + "')"}
                backgroundSize={"100% 100%"}
                onClick={() => router.push(houses[2][2])}
                height={{ base: 200, md: 280, lg: 350 }}
              >
                <Flex
                  backgroundColor={"#000"}
                  paddingLeft={3}
                  paddingRight={3}
                  width={"100%"}
                  paddingTop={2}
                  paddingBottom={2}
                >
                  <Text
                    fontWeight={700}
                    fontSize={{ base: "7pt", md: "9.5pt", lg: "12pt" }}
                    color={"#fff"}
                  >
                    Click to book "{houses[2][1]}"
                  </Text>
                </Flex>
              </Flex>
            ) : null}
            {houses.length >= 4 ? (
              <Flex
                _hover={{
                  opacity: 0.8,
                  cursor: "pointer",
                }}
                direction={"column"}
                justifyContent={"flex-end"}
                alignItems={"flex-start"}
                width={"49%"}
                backgroundImage={"url('" + houses[3][0] + "')"}
                backgroundSize={"100% 100%"}
                onClick={() => router.push(houses[3][2])}
                as={"a"}
                height={{ base: 200, md: 280, lg: 350 }}
              >
                <Flex
                  backgroundColor={"#000"}
                  paddingLeft={3}
                  paddingRight={3}
                  width={"100%"}
                  paddingTop={2}
                  paddingBottom={2}
                >
                  <Text
                    fontWeight={700}
                    fontSize={{ base: "7pt", md: "9.5pt", lg: "12pt" }}
                    color={"#fff"}
                  >
                    Click to book "{houses[3][1]}"
                  </Text>
                </Flex>
              </Flex>
            ) : null}
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"90%"}
          //marginTop={20}
          gap={10}
        >
          <Text fontSize={{ base: "15pt", md: "20pt", lg: "25pt" }}>
            Why Travelsnest
          </Text>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={15}
          >
            <Flex
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={3}
              maxWidth={"32%"}
            >
              <Image
                src={img1}
                width={"20vw"}
                height={"25vh"}
                alt={"TravelsNest is top rated for corporate rental"}
              />
              <Text fontSize={{ base: "15pt", md: "18pt", lg: "21pt" }}>
                {firstStyle}
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={3}
              maxWidth={"32%"}
            >
              <Image
                src={img2}
                width={"20vw"}
                height={"25vh"}
                alt={"TravelsNest is top rated for corporate rental"}
              />
              <Text fontSize={{ base: "15pt", md: "18pt", lg: "21pt" }}>
                {secondStyle}
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={3}
              maxWidth={"32%"}
            >
              <Image
                src={img3}
                width={"20vw"}
                height={"25vh"}
                alt={"TravelsNest is top rated for corporate rental"}
              />
              <Text fontSize={{ base: "15pt", md: "18pt", lg: "21pt" }}>
                {thirdStyle}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <Text
            fontSize={{ base: "16pt", md: "19pt", lg: "22pt" }}
            fontWeight={400}
          >
            What Guests are Saying
          </Text>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            width={"80%"}
            gap={10}
          >
            <Button
              onClick={() => {
                if (quoteNum == 0) {
                  setQuoteNum(2);
                } else if (quoteNum == 1) {
                  setQuoteNum(0);
                } else if (quoteNum == 2) {
                  setQuoteNum(1);
                }
              }}
              colorScheme={"transparent"}
              width={{ base: 65, md: 75, lg: 90 }}
              height={{ base: 65, md: 75, lg: 90 }}
            >
              <Image src="/left.png" alt={"Left Arrow"} />
            </Button>
            <Flex
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              backgroundColor={"#C29223"}
              width={{ base: 300, md: 500, lg: 700 }}
              padding={5}
              gap={10}
            >
              <Text
                fontSize={{ base: "8pt", md: "13pt", lg: "18pt" }}
                color={"white"}
              >
                {quotes[quoteNum][0]}
              </Text>
              <Text
                fontSize={{ base: "6pt", md: "10pt", lg: "14pt" }}
                color={"white"}
                as={"i"}
              >
                {quotes[quoteNum][1]}
              </Text>
            </Flex>
            <Button
              onClick={() => {
                if (quoteNum == 0) {
                  setQuoteNum(1);
                } else if (quoteNum == 1) {
                  setQuoteNum(2);
                } else if (quoteNum == 2) {
                  setQuoteNum(0);
                }
              }}
              colorScheme={"transparent"}
              width={{ base: 65, md: 75, lg: 90 }}
              height={{ base: 65, md: 75, lg: 90 }}
            >
              <Image src="/right.png" alt={"Right Arrow"} />
            </Button>
          </Flex>
        </Flex>
        <BottomNav />
      </Flex>
    </>
  );
}
