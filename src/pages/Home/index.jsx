import { FiPlus } from "react-icons/fi"
import { FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
 
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header>
      </Header>

      <Menu>
        <li><ButtonText title="Todos" IsActive/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar por título" icon={FiSearch}/> 
      </Search>

      <Content>

        <Section title="Minhas notas">
          <Note data={{ 
            title: 'React', 
            tags: [
                {id: '1', name: 'react'},
                {id: '2', name: 'nodejs'}
            ]
          }}
          />
        </Section>

      </Content>

      <NewNote>
        < FiPlus />
        Criar nota
      </NewNote>

    </Container>
  );
}