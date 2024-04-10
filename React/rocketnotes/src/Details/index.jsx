import { Container, Links } from "./styles"
import { Header } from "../components/Header"
import { Button } from "../components/Button"
import { Section } from "../components/Section"
import { ButtonText } from "../components/ButtonText"
import { Tag } from "../components/Tag"

export function Details() {
    return (
        <Container>
            <Header/>
            <ButtonText title="Excluir nota"/>
            <Section title="Links úteis">
                <Links>
                    <li><a href="#">https://www.rocketseat.com.br</a></li>
                    <li><a href="#">https://www.rocketseat.com.br</a></li>
                </Links>
            </Section>
            <Section title="Marcadores">
                <Tag title="express"/>
                <Tag title="nodejs"/>
            </Section>
            <Button title="Voltar"/>
        </Container>
    )
}