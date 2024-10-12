import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContaine from "./GAmeCardContaine";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
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
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skleton) => (
            <GameCardContaine>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContaine>
          ))}
        {games.map((games) => (
          <GameCardContaine>
            <GameCard key={games.id} game={games}></GameCard>
          </GameCardContaine>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
