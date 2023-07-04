import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: 40,

  '@media screen and (max-width: 900px)': {
    overflow: 'scroll',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  "> section": {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  }
})