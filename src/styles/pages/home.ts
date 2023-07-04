import { styled } from "../../../stitches.config";

export const HomeContainer = styled('section', {
  display: 'grid',
  height: '100%',
  gridTemplateColumns: '1fr 308px',
  gap: 64,
  overflow: 'hidden',

  '@media only screen and (max-width: 1150px)': {
    gridTemplateColumns: '300px 250px',
  },

  '@media screen and (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 270px',
    gap: 10,
  },
})