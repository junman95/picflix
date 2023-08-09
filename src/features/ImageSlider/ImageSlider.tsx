import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import getRandomImages from "../../services/apis/getRandomImages";
import setThrottle from "../../utils/throttle";
import infiniteScroll from "../../utils/infiniteScroll";
import Image from "../../components/Image";

type Image = { id: string; download_url: string };

const ImageSlider = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getRandomImages(page)
      .then((res: Image[]) => {
        setImages([...images, ...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  useEffect(() => {
    const curRef = ref.current as HTMLDivElement;

    const handleScroll = setThrottle(
      () => infiniteScroll(curRef, page, setPage, 100),
      100
    );
    curRef && curRef.addEventListener("scroll", handleScroll);

    return () => {
      curRef && curRef.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  useEffect(() => {
    const curRef = ref.current as HTMLDivElement;

    const handleWheelScroll = (event: WheelEvent) => {
      curRef.scrollLeft += event.deltaY; // Adjust the speed as needed
    };

    curRef && curRef.addEventListener("wheel", handleWheelScroll);

    return () => {
      curRef && curRef.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);

  useEffect(() => {
    const curRef = ref.current as HTMLDivElement;

    const interval = setInterval(() => {
      curRef.scrollLeft = curRef.scrollLeft + 15;

      if (curRef.offsetLeft + curRef.scrollLeft >= curRef.scrollWidth) {
        curRef.scrollLeft = 0;
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container ref={ref}>
      {images.map((image: { id: string; download_url: string }) => (
        <Image size={"300"} key={image.id} image={image.download_url} />
      ))}
    </Container>
  );
};

export default ImageSlider;

const Container = styled.div`
  position: absolute;
  display: flex;
  top: 60%;
  left: 10%;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 80vw;
  scroll-behavior: smooth;
`;
