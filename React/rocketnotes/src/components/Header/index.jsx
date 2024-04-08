import { Container, Profile } from "./styles"

export function Header() {
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/LuizHeenriquee.png"
                    alt="Foto do Usuário"
                />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Luiz Henrique</strong>
                </div>
            </Profile>
        </Container>
    )
}