import { Button, Card, CardBody, List } from "@chakra-ui/react";
import Image from "../Image";
import styled from "@emotion/styled";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

type Props = {
  images: string[];
  getNextPage: () => void;
};

const ImageContainer = ({ images, getNextPage }: Props) => {
  return (
    <ContainerCard>
      <CardBody>
        <Button>
          <ArrowUpIcon />
        </Button>
      </CardBody>
      <CardBody>
        <FlexList>
          {images.map((image) => (
            <Image key={image} image={image} />
          ))}
        </FlexList>
      </CardBody>
      <CardBody>
        <Button
          onClick={() => {
            getNextPage();
          }}
        >
          <ArrowDownIcon />
        </Button>
      </CardBody>
    </ContainerCard>
  );
};

export default ImageContainer;

const ContainerCard = styled(Card)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80%;
  max-width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  padding: 1rem;
`;

const FlexList = styled(List)`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  margin: 0;
  overflow: scroll;
`;
