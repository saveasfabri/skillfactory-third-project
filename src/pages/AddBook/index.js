import {
  FormControl,
  Input,
  Button,
  Box,
  Center,
  Flex,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addBook } from "../../features/books/booksSlice";
import { v4 as uuid } from "uuid";

const AddBook = () => {

  const [books, setBook] = useState({
    title: "",
    author: "",
    year:"",
    category:"",
    image:"",
    description: "",
});  

const handleChange = e => {
    setBook({
        ...books,
        [e.target.name] : e.target.value,    })
        
}

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
        ...books,
        id: uuid(),              
    }))
    
}
console.log(books)
const dispatch = useDispatch()

  return (
    <Flex w="100%" justify="center" align="center">
      <Flex
        position="relative"
        w={{ base: "100%", sm: "60%", lg: "40%" }}
        borderWidth={2}
        borderColor="orange.100"
        borderRadius={10}
        flexDir="column"
        justify="center"
        align="center"
        wrap="wrap"
        gap={5}
        py={9}
        my={5}
      >
        <Center color="yellow.100" fontSize="22px" fontWeight="700" zIndex={1}>
          Add new book
        </Center>

        <Box w="90%">
          <form onSubmit={handleSubmit}>
            <FormControl align="center" w="100%" zIndex={1}>
              <VStack
                w="80%"
                dispay="flex"
                flexDirection="column"
                justify="center"
                align="center"
                gap={4}
              >
                <Input
                  id="title"
                  name="title"
                  type="text"
                  color="beige.100"
                  bgColor="maroon.op"
                  focusBorderColor="beige.100"
                  borderColor="orange.100"
                  _placeholder={{ color: "yellow.100" }}
                  placeholder="Title"
                  onChange={handleChange}
                  value={books.title}
                />
                <Input
                  id="author"
                  name="author"
                  type="text"
                  color="beige.100"
                  bgColor="maroon.op"
                  focusBorderColor="beige.100"
                  borderColor="orange.100"
                  _placeholder={{ color: "yellow.100" }}
                  placeholder="Author"
                  onChange={handleChange}
                  value={books.author}
                />
                <Input
                  id="year"
                  name="year"
                  type="number"
                  color="beige.100"
                  bgColor="maroon.op"
                  focusBorderColor="beige.100"
                  borderColor="orange.100"
                  _placeholder={{ color: "yellow.100" }}
                  placeholder="Year it was published"
                  onChange={handleChange}
                  value={books.year}
                />
                <Input
                  id="category"
                  name="category"
                  type="text"
                  color="beige.100"
                  bgColor="maroon.op"
                  focusBorderColor="beige.100"
                  borderColor="orange.100"
                  _placeholder={{ color: "yellow.100" }}
                  placeholder="Category"
                  onChange={handleChange}
                  value={books.category}
                />
                <Input
                  id="image"
                  name="image"
                  type="url"
                  color="beige.100"
                  bgColor="maroon.op"
                  focusBorderColor="beige.100"
                  borderColor="orange.100"
                  _placeholder={{ color: "yellow.100" }}
                  placeholder="Cover's URL"
                  onChange={handleChange}
                  value={books.image}
                />
                <Textarea
                  id="description"
                  name="description"
                  color="beige.100"
                  bgColor="maroon.op"
                  focusBorderColor="beige.100"
                  borderColor="orange.100"
                  _placeholder={{ color: "yellow.100" }}
                  placeholder="Brief description of the book"
                  onChange={handleChange}
                  value={books.description}
                ></Textarea>
                <Button
                  type="submit"
                  w={{ base: "80%", sm: "80%", md: "80%", lg: "90%" }}
                  fontSize="lg"
                  colorScheme="yellow"
                >
                  Submit
                </Button>
              </VStack>
            </FormControl>
          </form>
        </Box>

        <Box
          w="100%"
          h="100%"
          bg="maroon.op"
          borderRadius={10}
          position="absolute"
          zIndex={0}
        ></Box>
      </Flex>
    </Flex>
  );
}


export default AddBook;