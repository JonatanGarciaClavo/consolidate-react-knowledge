// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reactLogo: require("../assets/reactLogo.svg"),
  list: require("../assets/list.png"),
  card: require("../assets/card.png")
};

preloader(images);

const bgColor = "#222222";

const theme = createTheme({
  primary: "#F49E00",
  secundary: "white"
}, {
  primary: "labmedium",
  secundary: "montserratbold",
  tertiary: "montserratregular"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={bgColor}>
            <Image width="35%" src={images.reactLogo}/>
            <Heading fit caps textColor="primary">
              Consolidate React Knowledge
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Summary
            </Heading>
            <List>
              <ListItem textFont="secundary" textColor="primary">Create first web app</ListItem>
              <ListItem textFont="secundary" textColor="primary">Work with UI component library</ListItem>
              <ListItem textFont="secundary" textColor="primary">Play with state and props</ListItem>
              <ListItem textFont="secundary" textColor="primary">Play with events</ListItem>
              <ListItem textFont="secundary" textColor="primary">Play with lifecycle</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Initialize project
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/initialize.sh")}
              margin="20px auto"
              textSize="0.7em"
            />
            <Text textSize="1.2em" caps={false} textColor="primary" textFont="tertiary" textAlign="left">Open index.html and override head tag with:</Text>
            <CodePane
              lang="html"
              source={require("raw!../assets/css.html")}
              margin="20px auto"
              textSize="0.4em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Exercise
            </Heading>
            <Text textSize="1.2em" caps={false} textColor="secundary" textFont="tertiary" textAlign="left">Create web app to manage movies library. This app should display list of all films and when user click in one item list, it shoulds display movie card with all info related. List of movies available could be found in following example, meanwhile data it is downloaded user should see loader.</Text>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/fetch.example")}
              margin="20px auto"
              textSize="0.6em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Wireframes
            </Heading>
            <Image width="75%" src={images.list.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Wireframes
            </Heading>
            <Image width="75%" src={images.card.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading caps textColor="primary">
              Demo
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/demo.sh")}
              margin="20px auto"
              textSize="0.7em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={1} caps textColor="primary">
              Thanks
            </Heading>
            <Link href="https://github.com/JonatanGarciaClavo/consolidate-react-knowledge">
              <Text padding="100px 0 0 0" italic textSize="x-large" textFont="tertiary" textColor="white">Docs and examples: https://github.com/JonatanGarciaClavo/consolidate-react-knowledge</Text>
            </Link>
            <Link href="https://github.com/JonatanGarciaClavo/MoviesApp">
              <Text padding="50px 0 0 0" italic textSize="x-large" textFont="tertiary" textColor="white">Exercise resolved: https://github.com/JonatanGarciaClavo/MoviesApp</Text>
            </Link>
            <Link href="mailto:jonatan.garcia@mobgen.com">
              <Text padding="50px 0 0 0" italic textFont="tertiary" textColor="white">Email: jonatan.garcia@mobgen.com</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
