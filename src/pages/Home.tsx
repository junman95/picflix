import { Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ImageSlider from "../features/ImageSlider/ImageSlider";

const Home = () => {
  return (
    <Container>
      <Stack>
        <Link to="/myflix">MyFlix</Link>
        <Link to="/hi">Hi</Link>
      </Stack>
      <ImageSlider />
      <image path="https://picsum.photos/id/0/5000/3333" />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
`;
