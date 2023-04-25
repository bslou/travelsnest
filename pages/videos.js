import { Flex, Spinner, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import BottomNav from "./components/bottomnav";
import Nav from "./components/nav";

const Vids = () => {
  /*
   * IMPORT MESSAGE
   * DON'T EDIT ANYTHING ABOVE ONLY EDIT ANYTHING BELOW UNTIL THE COMMENT
   */
  //max two vids per interior array, include url of image and the title, you can put as many videos in as you want!
  const videos = [
    // [
    //   ["r8fCwUiOtiQ", "Title of the Video"],
    //   ["r8fCwUiOtiQ", "Title of the Video"],
    //   ["r8fCwUiOtiQ", "Title of the Video"],
    // ],
    // [
    //   ["r8fCwUiOtiQ", "Title of the Video"],
    //   ["r8fCwUiOtiQ", "Title of the Video"],
    //   ["r8fCwUiOtiQ", "Title of the Video"],
    // ],
    // [["r8fCwUiOtiQ", "Title of the Video"]],
  ];
  /*
   * IMPORT MESSAGE
   * DON'T EDIT ANYTHING BELOW ONLY EDIT ABOVE
   */
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows([]);
    videos.forEach((val, ind) => {
      if (typeof videos[ind][1] === "undefined") {
        setRows((prevRo) => [
          ...prevRo,
          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={{ base: 4, md: 12, lg: 20 }}
          >
            <Flex
              width={{ base: "32%", md: "30%", lg: "25%" }}
              height={{ base: "240", md: "300", lg: "360" }}
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={2}
            >
              <iframe
                width="100%"
                height="340"
                src={`https://www.youtube.com/embed/${videos[ind][0][0]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <Text fontSize={"15pt"} fontWeight={600}>
                {videos[ind][0][1]}
              </Text>
            </Flex>
          </Flex>,
        ]);
      } else if (typeof videos[ind][2] === "undefined") {
        setRows((prevRo) => [
          ...prevRo,
          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={{ base: 4, md: 12, lg: 20 }}
          >
            <Flex
              width="25%"
              height="360"
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={2}
            >
              <iframe
                width="100%"
                height="340"
                src={`https://www.youtube.com/embed/${videos[ind][0][0]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <Text fontSize={"15pt"} fontWeight={600}>
                {videos[ind][0][1]}
              </Text>
            </Flex>
            <Flex
              width="25%"
              height="360"
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={2}
            >
              <iframe
                width="100%"
                height="340"
                src={`https://www.youtube.com/embed/${videos[ind][1][0]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <Text fontSize={"15pt"} fontWeight={600}>
                {videos[ind][1][1]}
              </Text>
            </Flex>
          </Flex>,
        ]);
      } else {
        setRows((prevRo) => [
          ...prevRo,
          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={{ base: 4, md: 12, lg: 20 }}
          >
            <Flex
              width={{ base: "32%", md: "30%", lg: "25%" }}
              height={{ base: "240", md: "300", lg: "360" }}
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={2}
            >
              <iframe
                width="100%"
                height="340"
                src={`https://www.youtube.com/embed/${videos[ind][0][0]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <Text fontSize={"15pt"} fontWeight={600}>
                {videos[ind][0][1]}
              </Text>
            </Flex>
            <Flex
              width={{ base: "32%", md: "30%", lg: "25%" }}
              height={{ base: "240", md: "300", lg: "360" }}
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={2}
            >
              <iframe
                width="100%"
                height="340"
                src={`https://www.youtube.com/embed/${videos[ind][1][0]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <Text fontSize={"15pt"} fontWeight={600}>
                {videos[ind][1][1]}
              </Text>
            </Flex>
            <Flex
              width={{ base: "32%", md: "30%", lg: "25%" }}
              height={{ base: "240", md: "300", lg: "360" }}
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={2}
            >
              <iframe
                width="100%"
                height="340"
                src={`https://www.youtube.com/embed/${videos[ind][2][0]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <Text fontSize={"15pt"} fontWeight={600}>
                {videos[ind][2][1]}
              </Text>
            </Flex>
          </Flex>,
        ]);
      }
    });
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title>Videos - Travelsnest Refurbished Rental</title>
        <meta
          name="description"
          content="These are videos of the rental homes that Travelsnest provides."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={"column"} alignItems={"center"} width={"100%"}>
        <Nav />
        {loading ? (
          <Spinner size={"lg"} />
        ) : (
          <Flex
            direction={"column"}
            width={{ base: "99%", md: "97%", lg: "95%" }}
            alignItems={"space-between"}
            gap={{ base: 6, md: 8, lg: 10 }}
          >
            {rows.length <= 0 ? (
              <Flex
                width={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={20}
                marginBottom={20}
              >
                <Text fontSize={{ lg: "50pt" }}>Videos Coming Soon!</Text>
              </Flex>
            ) : (
              rows
            )}
          </Flex>
        )}
        <BottomNav />
      </Flex>
    </>
  );
};

export default Vids;
