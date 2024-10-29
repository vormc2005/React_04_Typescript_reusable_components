// import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return <main>
    {/* <Input id="name" label = "Your name" type="text" />
    <Input id="age" label="Your age" type="number"/> */}
    <p>
      {/* <Button el="button">A Button</Button>       */}
      <Button>A Button</Button>     
    </p>
    <p>
      {/* <Button el="anchor" href="https://google.com">A link</Button> */}
      <Button href="https://google.com">A link</Button>
    </p>

    <Container as={Button} onClick={()=>{}}> Click Me</Container>
  </main>
}

export default App;
