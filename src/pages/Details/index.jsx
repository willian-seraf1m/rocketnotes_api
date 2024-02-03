import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

export function Details() { 
  return(
    <Container>
      <Header></Header>

      <main>
        <Content>
          <ButtonText title="Excluir a nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nesciunt beatae at? Tempora veniam et iusto nobis nostrum vero odio porro sint dolores dignissimos expedita soluta iste, provident quas odit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum ea accusantium, veniam eligendi quia inventore sunt magnam similique blanditiis. Ipsum debitis omnis consequatur explicabo quis aliquid labore nesciunt consectetur.</p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://rocketeseat.com</a></li>
              <li><a href="#">https://rocketeseat.com</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}