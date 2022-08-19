import { Container, ContainerContent, ContainerHeader, Title, ContainerInput } from "./styles/styleHome";

import logo from "./assets/logo.png"

import { FiSearch } from 'react-icons/fi';

function App() {
  return (
      <Container>
        <ContainerContent>
          <ContainerHeader>
            <img src={logo} alt="" />
            <Title>
              <h1>Weather</h1>
              <h1>Today</h1>
            </Title>
          </ContainerHeader>
          <ContainerInput>
            <input 
            type="text" 
            placeholder="Digite a cidade que deseja buscar..."
            />

            <button >
              <FiSearch size={25} color='white' />
            </button>
          </ContainerInput>
        </ContainerContent>
      </Container>
  );
}

export default App;
