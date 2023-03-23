import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

function Order() {
  const { order } = useSelector((data) => data.cart);
  console.log(order);
  return (
    <SimpleGrid columns={[1,2,2,4]} m="auto" gap="10px" mt={"10px"} mb="10px">
        {order &&
          order.map((el) => (
           
           
              <Box w="100%" border={"1px solid gray"} p="10px">
                <Image src={el.image} alt="" w="50%" m={"auto"} border={"1px solid gray"}/>
                <Text>Title:{el.title}</Text>
                <Text>Brand:{el.brand}</Text>
                <Text>Price:{el.price}</Text>
                <Text>Category:{el.category}</Text>
              </Box>
           
           
          ))}
      </SimpleGrid>
  );
}

export default Order;
