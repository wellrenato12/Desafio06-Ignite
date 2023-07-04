import Link from "next/link";
import { styled } from "../../../stitches.config";

export const Container = styled('aside', {
  width: 234,
  height: 'calc(100% - 40px)',
  margin: 20,
  background: "$gray700 url('/images/sidebar-bg.png') no-repeat center",
  backgroundSize: 'cover',
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingBottom: 24,

  '.logo': {
    width: 128,
    marginBottom: 64,
  },

  '@media only screen and (max-width: 600px)': {
    width: 120,

    '.logo': {
      width: 90,
      marginBottom: 32,
    }
  },
})

export const LoginButton = styled(Link, {
  textDecoration: 'none',
  color: '$gray200',
  fontWeight: 700,
  fontSize: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$green100',
  },

  '@media only screen and (max-width: 600px)': {
    fontSize: 12
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    cursor: 'pointer',
  },

  p: {
    maxWidth: 100,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '@media only screen and (max-width: 600px)': {
    flexDirection: 'column',
  },
})