import { useEffect, useState } from "react";
import { FetchGamesResponse, Game } from "./useGames";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genres{
    id:number;
    name:string;
}

interface  FetchGenresResponse{
     count:number;
     results: Genres[];
}

const useGenres=()=>{
    const [genres, setGernes] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
        const controller= new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres",{signal: controller.signal})
        .then((res) => {setGernes(res.data.results)
           setLoading(false)})
        .catch((err) => {
            if( err instanceof CanceledError )return ;
               setError(err.message)
              setLoading(false)});
     return ()=> controller.abort();   
    },[]);

    return { genres, error ,isLoading};
}

export default useGenres;