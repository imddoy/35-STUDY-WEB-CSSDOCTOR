export interface Recommendation {
  id: string;
  name: string;
  img: React.ReactNode;
  mutualFollowers: number;
  isPublic: boolean;
}

export const recommendationLists: Recommendation[] = [
  {
    id: "se0yuna",
    name: "__parang",
    img: <img src="https://via.placeholder.com/150?text=Profile+1" alt="Profile 1" />,
    mutualFollowers: 17,
    isPublic: false,
  },
  {
    id: "dontcry_candy",
    name: "geeenius_",
    img: <img src="https://via.placeholder.com/150?text=Profile+2" alt="Profile 2" />,
    mutualFollowers: 24,
    isPublic: true,
  },
  {
    id: "yeunever_",
    name: "gwagjiug",
    img: <img src="https://via.placeholder.com/150?text=Profile+3" alt="Profile 3" />,
    mutualFollowers: 12,
    isPublic: false,
  },
  {
    id: "weayo35thiosboomup",
    name: "0_115y",
    img: <img src="https://via.placeholder.com/150?text=Profile+4" alt="Profile 4" />,
    mutualFollowers: 13,
    isPublic: true,
  },
  {
    id: "and.__.roid",
    name: "hyobeen_0926",
    img: <img src="https://via.placeholder.com/150?text=Profile+5" alt="Profile 5" />,
    mutualFollowers: 16,
    isPublic: false,
  },
];
