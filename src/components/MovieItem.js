import { Container} from "@chakra-ui/react"
import {Heading, Wrap, WrapItem, Text, Image, Box, Flex } from "@chakra-ui/react"
export default ({movie, onMovieSelected}) => {
    return (
        <Box className="card" onClick={() => onMovieSelected(movie?.imdbID)} ml="6" mt="3" mb="3" w="200px" borderWidth="1px" borderRadius="lg" overflow="hidden">

            <Box p="1">

                <Box
                    mt="3"
                    fontWeight="semibold"
                    as="div"
                >
                   <Image height={300} width={200} src={movie?.Poster} />
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                    <Box as="h1" color="gray.600" fontSize="xl">
                        <h1>{movie?.Title}</h1>
                    </Box>
                </Box>
                <Box mt="3" mb="0" d="flex" flexDirection="row" alignItems="center">
                    <Box as="p" color="black" fontSize="sm">
                       Type: {movie?.Type}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
