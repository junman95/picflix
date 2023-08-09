import picsumInstance from "./instance";

const getRandomImages = async (page: number) => {
  try {
    const response = await picsumInstance.get(`/v2/list?page=${page}&limit=10`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getRandomImages;
