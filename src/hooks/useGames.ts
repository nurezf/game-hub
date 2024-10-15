
import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
  }
  

const useGames = (selectedGenres:Genres |null,selectedPlatform: Platform |null)=>useData<Game>(
  '/games',{
  params:{
          genres:selectedGenres?.id,
          platform: selectedPlatform?.id
         }
},
[
  selectedGenres?.id,
  selectedPlatform?.id
]);

export default useGames;
