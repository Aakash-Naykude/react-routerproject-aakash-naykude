import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Cart() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://localhost:3001/bag")
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  console.log(list);
  const Div = styled.div`
    display: grid;
    width: 88%;
    margin-left: 8%;
    grid-template-columns: auto auto auto auto;
    div {
      width: 300px;
      margin-top: 3%;
      height: 360px;
      color: gray.400;
    }
    div img {
      width: 100%;
      height: 250px;
    }
    div h5 {
      height: 80px;
    }
    div p {
      margin-left: 40%;
    }
    div button {
      margin-left: 30%;
    }
  `;
  return (
    <div>
      <Div>
        {list.map((e) => (
          <div key={e.product_id}>
            <Box boxShadow="dark-lg" p="2" rounded="md" bg="white">
              <img src={e.thumbnail} alt="imgs" />
              <h5>{e.title}</h5>
              <p>{e.price}</p>
            </Box>
          </div>
        ))}
      </Div>
    </div>
  );
}

export default Cart;
