import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
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

            </Content>
            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )
}