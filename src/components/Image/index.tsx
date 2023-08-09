import styled from "@emotion/styled";

type Props = {
  image: string;
  size?: string;
};

const Image = ({ image, size }: Props) => {
  return (
    <CenteredListItem size={size}>
      <img width={"100%"} src={image} alt={image} />
    </CenteredListItem>
  );
};

export default Image;

const CenteredListItem = styled.div<{ size?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0.5rem;
  width: ${({ size }) => (size ? `${size}px` : "100px")};
  height: ${({ size }) => (size ? `${size}px` : "100px")};
  min-width: ${({ size }) => (size ? `${size}px` : "100px")};
`;
