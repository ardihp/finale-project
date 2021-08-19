import React, { useState, useEffect } from "react";
import {Text} from "@chakra-ui/react";

const Index = () => {
  const [greetings, setGreerings] = useState("");

  useEffect(() => {
    let data = new Date().getHours();
    if (data >= 19) {
      setGreerings("Good night");
    } else if (data <= 4) {
      setGreerings("Good night");
    } else if (data > 4 && data < 11) {
      setGreerings("Good morning");
    } else if (data >= 11 && data < 17) {
      setGreerings("Good afternoon");
    } else if (data >= 17 && data < 19) {
      setGreerings("Good evening");
    }
  }, []);
  return (
    <Text fontSize="24px" fontFamily="Spartan" fontWeight="700">
      {greetings}
    </Text>
  );
};

export default Index;
