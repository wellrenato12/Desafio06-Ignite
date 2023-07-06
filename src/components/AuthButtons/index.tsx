import { signIn } from 'next-auth/react'
import { AuthButton, Container } from './styles'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

type AuthButtonsProps = {
  canGuest?: boolean
  callbackUrl?: string
}

export const AuthButtons = ({ canGuest, callbackUrl = '/' }: AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if(!provider) {
      router.push(callbackUrl)
      return
    }

    signIn(provider, {
      callbackUrl
    })
  }

  return (
    <Container>
      <AuthButton onClick={(e) => {
        e.preventDefault()
        handleSignIn('google')
      }}>
        <img src="/images/icons/google.svg" alt="Google logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={(e) => {
        e.preventDefault()
        handleSignIn('github')
      }}>
        <img src="/images/icons/github.svg" alt="Github logo" />
        Entrar com Github
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <img src="/images/icons/rocket.svg" alt="Rocket Icon" />
          Entrar com visitante
        </AuthButton>
      )}
    </Container>
  )
}
