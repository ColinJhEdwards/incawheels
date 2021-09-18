export const destinations = () => {
  const APIKEY = process.env.REACT_APP_APIKEY;
  return [
    {
      id: 1,
      name: "Blanca Lake",
      url: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJURuzIWDCmlQRBr11SQlZ1rk&key=${APIKEY}`,
      desc: "Visit one of the most striking lakes in the Henry M. Jackson wilderness. The vibrant blue of the glacier-fed lake provides the perfect rest stop for hikers who have braved the thirty-odd, steep switchbacks that lead to the lake.",
    },
    {
      id: 2,
      name: "Lake of The Angels",
      url: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvZy7-nzXkVQReNdWEWP1so8&key=${APIKEY}`,
      desc: "Tucked high in the mountains of the Olympic Peninsula, in the appropriately named Valley of Heaven is a breathtaking lake -- the Lake of the Angels. The heavenly goal is accessed by a trail built for more mortal interests.",
    },
    {
      id: 3,
      name: "Shi Shi Beach",
      url: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ27FMnyGWjlQRW1xqlADIw68&key=${APIKEY}`,
      desc: "When it comes to picturesque views of the wild and rugged Olympic Coast, Shi Shi tops the list.",
    },
  ];
};