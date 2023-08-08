interface Data {
  images: string[];
}

export const getSingleImage = async (id: number): Promise<string | Error> => {
  try {
    const response = await fetch("/items/items.json");
    const data: Data = await response.json();

    if (data.images[id] === undefined) throw new Error("이미지가 없습니다.");

    return data.images[id];
  } catch (error) {
    return new Error(`이미지 수신 오류 : ${error}`);
  }
};
