import {
  HStack,
  List,
  ListItem,
  Text,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
