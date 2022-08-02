import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <StyledDiv>
      <Header></Header>
      <Content></Content>
      {/* <Footer></Footer> */}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;