import {BrowserView, MobileView, isBrowser} from 'react-device-detect';
import {
  Box,
  Link,
  IconButton
} from "@chakra-ui/react";
import {
  AiFillHome
} from "react-icons/ai";
import { routeHome } from '../../utils/router';

export default function Kali() {
  const home = () => {
    routeHome();
    console.log("click")
  }
  return(
    <>
    {isBrowser==true ?
    <Box
      as="h1"
      letterSpacing="wide"
      fontWeight="extrabold"
      fontSize="4xl"
      bgGradient="linear(to-br, kali.900, kali.600)"
      bgClip="text"
      textShadow="2.4px 0.4px kali.900"
      ml={2}
    >
      <Link onClick={home}>KaliDAO</Link>
    </Box>
    :
      <Box>
        <IconButton aria-label='home' icon={<AiFillHome />} onClick={home} />
      </Box>
    }
    </>
  )
}
