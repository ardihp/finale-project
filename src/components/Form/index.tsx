import React from "react";
import { Flex, Grid, Box, Text, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useTrack } from "../../hooks/useTrack";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { createPlaylist } from "../../util/spotifyServices";

const Index = () => {
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors }
  } = useForm();
  const { selected } = useTrack();
  const { user, token } = useAuth();

  const onSubmit = () => {
    const title = getValues("title");
    const desc = getValues("desc");
    if (selected.length > 0) {
      createPlaylist(title, desc, user, token, selected).then(() =>
        toast.success("You made it (UwU)")
      );
    } else {
      toast.error("Pwease atweast choose one song");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        border="2px solid #F4EEFF"
        background="#FAF8FF"
        borderRadius="lg"
        direction="column"
        p={4}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontFamily="Spartan" fontWeight="700" color="#A6B1E1">
            Form Create Playlist
          </Text>
          <Button
            type="submit"
            textAlign="center"
            color="#A6B1E1"
            fontSize="12px"
            fontWeight="600"
            py={2}
            px={3}
            fontFamily="Poppins"
            size="sm"
            background="#F4EEFF"
          >
            Submit
          </Button>
        </Flex>
        <Grid mt={3} templateColumns="1fr 1fr" columnGap={4}>
          <Box>
            <Input
              borderRadius="md"
              border="2px"
              background="#FAF8FF"
              borderColor="#F4EEFF"
              placeholder="Title..."
              fontFamily="Poppins"
              fontSize="14px"
              type="text"
              size="sm"
              mr={2}
              _hover={{}}
              _focus={{}}
              {...register("title", { minLength: 10, required: true })}
            />
            {errors.title && (
              <Text
                color="#FF9E9E"
                fontFamily="Poppins"
                fontWeight="600"
                fontSize="12px"
                mt={2}
              >
                Title need atweast 10 letter
              </Text>
            )}
          </Box>
          <Box>
            <Input
              borderRadius="md"
              border="2px"
              background="#FAF8FF"
              borderColor="#F4EEFF"
              placeholder="Description..."
              fontFamily="Poppins"
              fontSize="14px"
              type="text"
              size="sm"
              mr={2}
              _hover={{}}
              _focus={{}}
              {...register("desc", { minLength: 20, required: true })}
            />
            {errors.desc && (
              <Text
                color="#FF9E9E"
                fontFamily="Poppins"
                fontWeight="600"
                fontSize="12px"
                mt={2}
              >
                Description need atweast 20 letter
              </Text>
            )}
          </Box>
        </Grid>
      </Flex>
    </form>
  );
};

export default Index;
