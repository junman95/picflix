import { useEffect, useState } from "react";
import { getSingleImage } from "../services/apis/getSingleImage";

const useFetchStaticImages = () => {
  const [call, setCall] = useState<boolean>(true);
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(1);
  useEffect(() => {
    if (call === false) return;
    setLoading(true);
    const getImages = async () => {
      const newImages = [];
      for (let i = currentId; i < 6 + currentId; i++) {
        const res = await getSingleImage(i);

        if (res instanceof Error) {
          setError(res);
          setLoading(false);
          return;
        }
        const imageUrl = res;
        newImages.push(imageUrl);
      }
      setImages(newImages);
      setLoading(false);
    };
    getImages();
    setCurrentId(currentId + 6);
    setCall(false);
    return () => {
      console.log("erase");
      setImages([]);
    };
  }, [call]);

  const getNextPage = () => {
    setCall(true);
  };

  return { images, error, loading, getNextPage };
};

export default useFetchStaticImages;
