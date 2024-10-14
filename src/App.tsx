import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
function App() {
  const [selectesGenres, setSelecteGenres] = useState<Genres | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={selectesGenres}
            onSelectGenre={(genre) => setSelecteGenres(genre)}
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector></PlatformSelector>
        <GameGrid selectedGenres={selectesGenres} />
      </GridItem>
    </Grid>
  );
}

export default App;
