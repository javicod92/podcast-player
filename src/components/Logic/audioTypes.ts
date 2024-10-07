export type audioTypes = {
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
  duration: number;
  urls: {
    high_mp3: string;
  };
};
