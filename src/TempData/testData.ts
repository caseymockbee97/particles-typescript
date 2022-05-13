import Image1x1 from "./TempAssets/LifeAquatic1x1.jpg";
import Image16x9 from "./TempAssets/LifeAquatic16x9.jpeg";
export const Data = {
  posts: [
    {
      id: 1,
      title: "HowdyThereNeighbor",
      image: Image16x9,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim enim sit amet. In nulla posuere sollicitudin aliquam. Dui ut ornare lectus sit. Sed vulputate odio ut enim blandit volutpat.",
    },
    {
      id: 2,
      title: "Howdy there Neighbor",
      image: Image1x1,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim enim sit amet. In nulla posuere sollicitudin aliquam. Dui ut ornare lectus sit. Sed vulputate odio ut enim blandit volutpat.",
    },
    {
      id: 3,
      title: "Howdy there Neighbor",
      image: null,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim enim sit amet. In nulla posuere sollicitudin aliquam. Dui ut ornare lectus sit. Sed vulputate odio ut enim blandit volutpat.",
    },
  ],
};

export interface Post {
  id: number;
  title: string;
  image: any;
  body: string;
}
