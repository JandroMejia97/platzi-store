import { GiphyImage } from "./giphy-image.model";

export class Giphy {
  id: string;
  url: string;
  username: string;
  title: string;
  images: {
    downsized: GiphyImage
  };
}
