const {
  Flex,
  Text,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} = require("@chakra-ui/react");

const BottomNav = () => {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      width={"100%"}
      marginTop={10}
    >
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        gap={{ base: 1, md: 11, lg: 20 }}
        borderTop={"1px solid gray"}
        paddingTop={8}
        paddingBottom={8}
      >
        <Flex direction={"column"} gap={3}>
          <Flex
            gap={3}
            as={"a"}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <img
              width={30}
              height={30}
              src="/logo.png"
              alt={"Travelsnest official logo of top corporate rental"}
            />
            <Text fontWeight={800} color={"#C29223"}>
              TRAVELSNEST
            </Text>
          </Flex>
          <Text
            fontWeight={600}
            fontSize={{ base: "8pt", md: "11pt", lg: "14pt" }}
          >
            Quick Links
          </Text>
          <Link href="/" fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}>
            HOME
          </Link>
          <Menu>
            <MenuButton
              // onMouseEnter={() => setIsMenuOpen(true)}
              // onMouseLeave={() => setIsMenuOpen(false)}
              fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
              color={"#000"}
            >
              PROPERTIES
            </MenuButton>
            <MenuList
              // ref={menuListRef}
              // isOpen={isMenuOpen}
              placement="bottom-end"
              // onMouseEnter={() => setIsMenuOpen(true)}
              // onMouseLeave={() => setIsMenuOpen(false)}
            >
              <MenuItem
                fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
                color={"#000"}
              >
                San Francisco
              </MenuItem>
            </MenuList>
          </Menu>
          <Link
            href="/videos"
            fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
          >
            VIDEOS
          </Link>
          <Link
            href="/services"
            fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
          >
            CONTACT
          </Link>
        </Flex>
        <Flex direction={"column"} gap={3}>
          <Text
            fontWeight={600}
            fontSize={{ base: "8pt", md: "11pt", lg: "14pt" }}
          >
            Contact Us
          </Text>
          <Link
            fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
            target={"_blank"}
            href={
              "https://mail.google.com/mail/u/0/#inbox/FMfcgzGslkpLqHzNNnpLzHpWQSFDmNnF?compose=GTvVlcRzDRDVSnzRTFvPqQnxPjpLgLMwjlGjrlVLztcPWqbMXMhMGxMrZTTlcPlrhZFJhwXzFMnNx"
            }
          >
            host@travelsnest.com
          </Link>
          <Text fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}>
            San Francisco, California
          </Text>
          <Text fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}>
            650-249-9917
          </Text>
        </Flex>
        <Flex direction={"column"} gap={3}>
          <Text
            fontSize={{ base: "8pt", md: "11pt", lg: "14pt" }}
            fontWeight={600}
          >
            Follow Us
          </Text>
          <Link fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}>
            Facebook
          </Link>
          <Link fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}>
            Instagram
          </Link>
          <Link fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}>Twitter</Link>
          <Link fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}>TikTok</Link>
          <Link fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}>Youtube</Link>
        </Flex>
        <Flex direction={"column"} gap={3}>
          <Text
            fontWeight={600}
            textAlign={"center"}
            fontSize={{ base: "8pt", md: "11pt", lg: "14pt" }}
          >
            Interested in Partnering
            <br />
            With Us? Click Below
          </Text>
          <Button
            color={"white"}
            backgroundColor={"orange.300"}
            borderRadius={0}
            paddingLeft={4}
            paddingRight={4}
            colorScheme={"transparent"}
            fontSize={{ base: "6pt", md: "9pt", lg: "12pt" }}
          >
            Book a Call
          </Button>
        </Flex>
      </Flex>
      <br />
      <Text
        fontSize={{ base: "4pt", md: "6.5pt", lg: "9pt" }}
        marginBottom={10}
      >
        © 2023 TravelsNest- All Rights Reserved.
      </Text>
    </Flex>
  );
};

export default BottomNav;
