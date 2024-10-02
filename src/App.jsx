import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import content from "./Content";

// defining the theme here makes using the values easy and accessible
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile:" 768px",
};

function App() {
  return (
    // On this calling setting themeProvider to the object 'theme' certifies that the values created by me will be the ones used as main settings
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />

        <Container>{/**Iterate over the "fake API" looping through them offers optimization rather than writing each card multiple times */}
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
