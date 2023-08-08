import { useEffect } from "react";
import { ImageContainer } from "../../components/ImageContainer";
import useFetchStaticImages from "../../hooks/useFetchStaticImages";
import { Spinner } from "@chakra-ui/react";

// type Props = {};

const RandomImages = () => {
  const { images, error, loading, getNextPage } = useFetchStaticImages();

  useEffect(() => {
    if (error) throw new Error(`에러 발생 : ${error}`);
  }, [error]);

  return (
    <>
      {loading && <Spinner w={"100px"} />}
      <ImageContainer images={images} getNextPage={getNextPage} />
    </>
  );
};

export default RandomImages;
