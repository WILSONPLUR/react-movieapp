import axios from "axios";
import React, {useEffect, useState} from "react";
import {Image, Container, Heading, IconButton, Divider, Box} from "@chakra-ui/react";
import {SmallCloseIcon} from "@chakra-ui/icons";

export default ({movieSelected, onMovieSelected}) => {
    const [info, setInfo] = useState("");
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${movieSelected}&apikey=551870a2`).then(res => setInfo(res.data));
    }, [movieSelected]);
    return (
        <Container maxW="container.lg" className="movie-details-container">
            <Image src={info?.Poster} />
            <Box className="box-details" maxW="700px" style={{marginLeft: "20px"}} mt="5">
                {/*<IconButton onClick={() => onMovieSelected()} icon={<SmallCloseIcon w={8} h={8} color="black" />} />*/}
                <Heading>{info?.Title}</Heading>
                <h2 style={{marginTop: "20px"}}>{info?.Plot}</h2>
                <h2 style={{marginTop: "10px"}} >Year: {info?.Year}</h2>
                <h2 style={{marginTop: "10px"}} >Language: {info?.Language}</h2>
                <h2 style={{marginTop: "10px"}} >Released: {info?.Released}</h2>
                <h2 style={{marginTop: "10px"}} >Runtime: {info?.Runtime}</h2>
                <h2 style={{marginTop: "10px"}} >Genre: {info?.Genre}</h2>
                <h2 style={{marginTop: "10px"}} >Director: {info?.Director}</h2>
                <Heading style={{marginTop: "10px"}} as="h3" size="lg">Rating: {info?.imdbRating}</Heading>

            </Box>
            <button className="close-button" onClick={() => onMovieSelected()} ><SmallCloseIcon w={8} h={8} color="black" /></button>
        </Container>
    )
}
