import { useState, useEffect } from "react";

type fetchTypes = {
  id: number;
  title: string;
  description: string;
  user: {
    urls: {
      profile_image: {
        original: string;
      };
    };
  };
  channel: {
    urls: {
      logo_image: {
        original: string;
      };
    };
  };
  urls: {
    high_mp3: string;
  };
};

//Data fetch whith page numeration
export default function useFetchData(url: string, page: number) {
  //States used for the data fetching and resolution of the promises
  const [data, setData] = useState<fetchTypes[]>([]);
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
