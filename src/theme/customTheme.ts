import Heading from "./HeadingCustomization";
import Text from "./TextCustomization";
import Button from "./ButtonCustomization";
import Modal from "./ModalCustomization";

const theme = {
  fonts: {
    heading: `"Crimson Pro", serif`,
    body: `"Inter", sans-serif`,
  },
  components: {
    Text,
    Heading,
    Button,
    Modal,
  },
  sizes: {
    "4xs": "10rem",
  },
  colors: {
    primary: {
      300: "rgba(252, 218, 130, 1)", // gold
      400: "rgba(221, 198, 146, 1)", // gold light
      500: "rgba(198, 161, 91, 1)", // gold dark
    },
    secondary: {
      50: "#F9F9F9", // gris
      400: "rgba(162, 155, 142, 1)", // light beige
      500: "rgba(57, 40, 33, 1)", // brown
      600: "rgba(59, 66, 74, 1)", // gris claro
      700: "rgba(37, 37, 39, 1)", // dark gray
      800: "rgba(4, 2, 16, 1)", // gris claro
      900: "rgba(0, 0, 0, 1)", // black
      red: "rgba(186, 49, 61, 1)",
    },
  },
  radii: {
    button: "5.625rem",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export default theme;
