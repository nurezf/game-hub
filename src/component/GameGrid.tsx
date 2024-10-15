import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContaine from "./GameCardContaine";
import { Genres } from "../hooks/useGenres";

interface Props {
  selectedGenres: Genres | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenres, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenres, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error} </Text>}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skleton) => (
            <GameCardContaine key={skleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContaine>
          ))}
        {data.map((games) => (
          <GameCardContaine key={games.id}>
            <GameCard game={games}></GameCard>
          </GameCardContaine>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
