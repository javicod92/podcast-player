import { useState, useEffect } from "react";
import { audioTypes } from "../components/Logic/audioTypes";

//Data fetch whith page numeration
export default function useFetchData(url: string, page: number) {
  //States used for the data fetching and resolution of the promises
  const [data, setData] = useState<audioTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(url + "?page=" + `${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.body.audio_clips);
      })
      .catch(() => {
        setError("Hubo un error de datos");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
