import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { useTrack } from "../../hooks/useTrack";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../store/hooks";
import { storeTrack } from "../../store/trackSlice";
import { useForm } from "react-hook-form";

const Index: React.FC = () => {
  const { register, handleSubmit, getValues, reset } = useForm();
  const { token } = useAuth();
  const { getTrackData, filterData, selected } = useTrack();
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const query = getValues("query");
    if (query.length >= 3) {
      getTrackData(query, token).then(res =>
        selected.length > 0
          ? dispatch(storeTrack(filterData(res.tracks.items, selected)))
          : dispatch(storeTrack(res.tracks.items))
      );
      reset();
    } else {
      toast.error("Pwease atweast input 3 letter!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex>
        <Input
          border="2px"
          background="#FAF8FF"
          borderColor="#F4EEFF"
          placeholder="Search song..."
          fontFamily="Poppins"
          fontSize="14px"
          type="text"
          mr={2}
          _hover={{}}
          _focus={{}}
          {...register("query")}
        />
        <Button background="#A6B1E1" color="white" type="submit">
          <i className="fas fa-search"></i>
        </Button>
      </Flex>
    </form>
  );
};

export default Index;
