import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../components/Header'
import { Note } from '../components/Note'
import { Input } from '../components/Input'
import { Section } from '../components/Section'
import { ButtonText } from '../components/ButtonText'

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li>
                    <ButtonText title="Todos" isActive="true"/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
                <li>
                    <ButtonText title="Nodejs"/>
                </li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
            <Content>
                <Section title="Minhas notas">
                    <Note
                        data={{
                            title: 'React Modal',
                            tags: [
                                {id: '1', name: 'react'},
                                {id: '2', name: 'rokcetseat'}
                            ]
                        }}
                    />
                    <Note
                        data={{
                            title: 'Exemplo de Middleware',
                            tags: [
                                {id: '1', name: 'express'},
                                {id: '2', name: 'node.js'}
                            ]
                        }}
                    />
                </Section>
            </Content>
            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )
}