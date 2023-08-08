import { ListItem } from "@chakra-ui/react";
import styled from "@emotion/styled";

type Props = {
  image: string;
};

const Image = ({ image }: Props) => {
  return (
    <CenteredListItem>
      <img width={"100%"} src={image} alt={image} />
    </CenteredListItem>
  );
};

export default Image;

const CenteredListItem = styled(ListItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  width: 100px;
  height: 100px;
`;
