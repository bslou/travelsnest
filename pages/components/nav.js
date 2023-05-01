import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const {
  Flex,
  Image,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} = require("@chakra-ui/react");

const Nav = () => {
  const toast = useToast();
  const router = useRouter();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuRef = useRef();
  // const menuListRef = useRef();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Flex
      direction={"row"}
      alignItems={"center"}
      width={"100vw"}
      justifyContent={"center"}
      paddingTop={{ base: 4, md: 6, lg: 8 }}
      paddingBottom={{ base: 4, md: 6, lg: 8 }}
      paddingLeft={{ base: 4, md: 6, lg: 8 }}
      paddingRight={{ base: 4, md: 6, lg: 8 }}
    >
      {windowSize.width >= 900 ? (
        <Flex
          position={"absolute"}
          left={8}
          gap={3}
          as={"a"}
          _hover={{
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        >
          <Image width={30} height={30} src="/logo.png" alt={"Logo"} />
          <Text fontWeight={800} color={"#C29223"}>
            TRAVELSNEST
          </Text>
        </Flex>
      ) : null}
      <Flex direction={"row"} alignItems={"center"} gap={7}>
        <Link
          onClick={() => router.push("/")}
          fontSize={{ base: "8pt", md: "9.5pt", lg: "11pt" }}
          fontWeight={800}
          color={"#AD8221"}
          _hover={{
            color: "#C29223",
          }}
        >
          HOME
        </Link>
        <Menu>
          <MenuButton
            // onMouseEnter={() => setIsMenuOpen(true)}
            // onMouseLeave={() => setIsMenuOpen(false)}
            fontSize={{ base: "8pt", md: "9.5pt", lg: "11pt" }}
            fontWeight={800}
            color={"#AD8221"}
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
              fontSize={{ base: "8pt", md: "9.5pt", lg: "11pt" }}
              fontWeight={800}
              color={"#AD8221"}
              onClick={() =>
                toast({
                  title: "No properties yet...",
                  duration: 3000,
                  status: "info",
                  isClosable: true,
                })
              }
            >
              San Francisco
            </MenuItem>
          </MenuList>
        </Menu>
        <Link
          fontSize={{ base: "8pt", md: "9.5pt", lg: "11pt" }}
          fontWeight={800}
          color={"#AD8221"}
          _hover={{
            color: "#C29223",
          }}
          onClick={() => router.push("/videos")}
        >
          VIDEOS
        </Link>
        <Link
          fontSize={{ base: "8pt", md: "9.5pt", lg: "11pt" }}
          fontWeight={800}
          color={"#AD8221"}
          _hover={{
            color: "#C29223",
          }}
          onClick={() => router.push("/partners")}
        >
          PARTNERS
        </Link>
        {/* <Link
          fontSize={"11pt"}
          fontWeight={800}
          color={"#AD8221"}
          _hover={{
            color: "#C29223",
          }}
        >
          PARTNERS
        </Link> */}
        <Link
          fontSize={{ base: "8pt", md: "9.5pt", lg: "11pt" }}
          fontWeight={800}
          color={"#AD8221"}
          onClick={() => router.push("/services")}
          _hover={{
            color: "#C29223",
          }}
        >
          SERVICES
        </Link>
        {/* <Link
          fontSize={"11pt"}
          fontWeight={800}
          color={"#AD8221"}
          _hover={{
            color: "#C29223",
          }}
        >
          BLOG
        </Link> */}
        <Link
          fontSize={{ base: "8pt", md: "9.5pt", lg: "11pt" }}
          fontWeight={800}
          color={"#AD8221"}
          _hover={{
            color: "#C29223",
          }}
          onClick={() => router.push("/contact")}
        >
          CONTACT
        </Link>
      </Flex>
    </Flex>
  );
};

export default Nav;
