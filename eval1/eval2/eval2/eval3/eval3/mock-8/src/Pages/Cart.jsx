import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Heading, Box, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { ordreproduct, removed, updatequantity } from "../Redux/Cart/action";
import { useToast } from "@chakra-ui/react";
function Cart() {
  const toast = useToast();

  const dispatch = useDispatch();
  const { cart } = useSelector((data) => data.cart);
  console.log(cart);
  function total(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity * cart[i].price;
    }
    return sum;
  }
  const ordered = (data) => {
    console.log(data);
    dispatch(ordreproduct(data));
    return toast({
      title: "ORDER PLACED.",
      description: "You will get your order with 24 hours",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <Heading>50/- DELIVERY CHARGE</Heading>
      <Text>
        TOTAL-PRICE :- {total(cart) === 0 ? 0 : total(cart) + 50} deliver
        charge( 50/- )
      </Text>
      <SimpleGrid columns={[1,2,2,4]} m="auto" gap="10px" mt={"10px"} mb="10px">
        {cart &&
          cart.map((el) => (
            <Box w="100%" border={"1px solid gray"} p="10px" m={"auto"}>
              <Image src={el.image} alt="" w="50%" m="auto"/>
              <Heading>Title:{el.title}</Heading>
              <Text>Brand:{el.brand}</Text>
              <Text>Price:{el.price}</Text>
              <Text>Category:{el.category}</Text>
              <Box display={{ md: "flex", base: "grid", lg: "flex" }} gap="10px">
              <Button
                disabled={el.quantity === 1}
                onClick={() => dispatch(updatequantity(el.id, el.quantity - 1))}
              >
                -
              </Button>
              <Button>{el.quantity}</Button>
              <Button
                onClick={() => dispatch(updatequantity(el.id, el.quantity + 1))}
              >
                +
              </Button>
              <Button onClick={() => dispatch(removed(el.id))}>REMOVE</Button></Box>
            </Box>
          ))}
      </SimpleGrid>
      <Button onClick={() => ordered(cart)}>PLACE ORDER</Button>
    </>
  );
}

export default Cart;
