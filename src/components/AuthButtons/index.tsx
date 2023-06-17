import { AuthButton, Container } from './styles'

export const AuthButtons = () => {
  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="Google logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/github.svg" alt="Github logo" />
        Entrar com Github
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="Rocket Icon" />
        Entrar com visitante
      </AuthButton>
    </Container>
  )
}
