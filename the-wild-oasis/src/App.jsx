import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellowgreen;
`;

const StyledApp = styled.div`
  background: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Wild Oasis</H1>
        <Button onClick={() => alert("Checked in")}>Check in</Button>
        <Button onClick={() => alert("Checked out")}>Check out</Button>

        <Input type="number" placeholder="Number of Guests" />
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
