import React, { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { useTrack } from "../../hooks/useTrack";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../store/hooks";
import { storeTrack } from "../../store/trackSlice";

const Index: React.FC = () => {
  const { token } = useAuth();
  const { getTrackData } = useTrack();
  const [Query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent<any, Event>) => {
    e.preventDefault();
    if (Query.length >= 3) {
      getTrackData(Query, token).then(res =>
        dispatch(storeTrack(res.tracks.items))
      );
    } else {
      toast.error("Pwease atweast input 3 letter!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <Input
          border="2px"
          background="#FAF8FF"
          borderColor="#F4EEFF"
          placeholder="Search song..."
          name="query"
          fontFamily="Poppins"
          fontSize="14px"
          mr={2}
          _hover={{}}
          _focus={{}}
          onChange={e => setQuery(e.target.value)}
        />
        <Button background="#A6B1E1" color="white" type="submit">
          <i className="fas fa-search"></i>
        </Button>
      </Flex>
    </form>
  );
};

export default Index;
