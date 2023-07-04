import { styled } from "../../../stitches.config";

export const ExploreContainer = styled("section", {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",

  "> header": {
    display: "flex",
    justifyContent: "space-between",

    '@media only screen and (max-width: 875px)': {
      flexDirection: "column",
      gap: 10,
    },
  },
});

export const TagsContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$3",
  marginTop: 40,
  marginBottom: 48,

  '@media only screen and (max-width: 475px)': {
    gap: "$1",
    marginTop: 20,
    marginBottom: 24,
  },
})

export const BooksGrid = styled("div", {
  display: "grid",
  height: "100%",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridAutoRows: 188,
  gap: "$5",
  overflowY: "auto",
  paddingBottom: 40,

  "&::-webkit-scrollbar": {
    display: "none"
  },

  '@media only screen and (max-width: 1285px)': {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  '@media only screen and (max-width: 875px)': {
    gridTemplateColumns: "1fr",
  },
})