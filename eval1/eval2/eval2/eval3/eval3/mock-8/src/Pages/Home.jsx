import { Box, Button, Image, Heading, Text, Select,SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../Redux/Product/action";
import { Link } from "react-router-dom";
function Home() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("desc");
  const { data, totalPage } = useSelector((data) => data.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdata(page, 12, filter, sort));
  }, [page, filter, sort]);
  const handle = (val) => {
    setPage(val);
  };
  console.log(totalPage);
  return (
    <>
      <Box display={{ md: "flex", base: "grid", lg: "flex" }} gap="10px">
        {" "}
        <Select
          placeholder="filter by category"
          onChange={(e) => setFilter(e.target.value)}
          w="20%"
        >
          <option value={"kids"}>Kids</option>
          <option value={"women"}>Women</option>
          <option value={"men"}>Men</option>

          <option value={"homedecor"}>Homedecor</option>
        </Select>
        <Select
          placeholder="sort by Price"
          onChange={(e) => setSort(e.target.value)}
          w="20%"
        >
          <option value={"asc"}>Low to High</option>
          <option value={"desc"}>High to Low</option>
        </Select>
        <Link to="/orders">
          <Button>ORDERS</Button>
        </Link>
        <Link to="/cart">
          <Button>CART</Button>
        </Link>
      </Box>
      <SimpleGrid columns={[1,2,2,4]} m="auto" gap="10px" mt={"10px"} mb="10px">
        {data &&
          data.map((el) => (
            <Link to={`/product/${el.id}`}>
              <Box w="100%" border={"1px solid gray"} p="10px">
                <Image src={el.image} alt="" w="50%" m={"auto"} border={"1px solid gray"}/>
                <Text>Title:{el.title}</Text>
                <Text>Brand:{el.brand}</Text>
                <Text>Price:{el.price}</Text>
                <Text>Category:{el.category}</Text>
              </Box>
            </Link>
          ))}
      </SimpleGrid>
      <Box display={{ md: "flex", base: "grid", lg: "flex" }} gap="10px" justifyContent={"center"}>
      <Button disabled={page === 1} onClick={() => handle(page - 1)}>
        PREV
      </Button>
      <Button>{page}</Button>
      <Button disabled={page === totalPage} onClick={() => handle(page + 1)}>
        NEXT
      </Button>
      </Box>
    </>
  );
}

export default Home;
