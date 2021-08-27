import { Container, Input, Alert, AlertIcon } from "@chakra-ui/react"
import React, {useState} from "react";
import axios from "axios";
import MovieItem from "./components/MovieItem";
import MovieDetails from "./components/MovieDetails";

function App() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState();
    const [timeoutid, setTimeoutid] = useState("");


    const fetchMovies = async(search) => {
        const res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=551870a2`);
        setMovies(res.data.Search);
        console.log(res.data.Search);
    };
    const handleInput = (e) => {
        clearTimeout(timeoutid);
        setSearch(e.target.value);
        const timeout = setTimeout(() => fetchMovies(e.target.value), 500);
        setTimeoutid(timeout);
    };
  return (
      <div>
          <Container maxW="container.xl">
              <div className="header">
                  <Input value={search} onChange={handleInput} placeholder="Search movie: " size="lg" />
              </div>
          </Container>
          {selectedMovie && <MovieDetails movieSelected={selectedMovie} onMovieSelected={setSelectedMovie} />}
          <Container maxW="container.xl" centerContent>
              <main className="main">
                  {movies?.length ? movies.map((movie, index) => {
                      return <MovieItem movie={movie} key={index} onMovieSelected={setSelectedMovie} />
                  }) : <Alert status="warning">
                      <AlertIcon />
                      Empty
                  </Alert>}
              </main>
          </Container>


      </div>

  );
}

export default App;
