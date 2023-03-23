import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addtocart } from "../Redux/Cart/action";
import { productdetail } from "../Redux/Product/action";

function Singleproduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((data) => data.product);
  const { cart } = useSelector((data) => data.cart);
  function checkalready(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        return true;
      }
      return false;
    }
  }
  console.log(id);
  useEffect(() => {
    dispatch(productdetail(id));
  }, []);
  return (
    <Box  w="50%" border={"1px solid gray"} p="10px" m={"auto"} mt="10px">
      <Image src={product.image} alt="" w="20%" m={"auto"} />
      <Heading>Title:{product.title}</Heading>
      <Text>Brand:{product.brand}</Text>
      <Text>Price:{product.price}</Text>
      <Text>Category:{product.category}</Text>
      <Button
        onClick={() => dispatch(addtocart(product.id))}
        disabled={checkalready(product.id)}
      >
        Add to Cart
      </Button>
    </Box>
  );
}

export default Singleproduct;
