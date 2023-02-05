import cities from "./cities";

const descriptors = [
  "Forest",
  "Ancient",
  "Petrified",
  "Roaring",
  "Cascade",
  "Tumbling",
  "Silent",
  "Redwood",
  "Bullfrog",
  "Maple",
  "Misty",
  "Elk",
  "Grizzly",
  "Ocean",
  "Sea",
  "Sky",
  "Dusty",
  "Diamond",
];

const places = [
  "Flats",
  "Village",
  "Canyon",
  "Pond",
  "Group Camp",
  "Horse Camp",
  "Ghost Town",
  "Camp",
  "Dispersed Camp",
  "Backcountry",
  "River",
  "Creek",
  "Creekside",
  "Bay",
  "Spring",
  "Bayshore",
  "Sands",
  "Mule Camp",
  "Hunting Camp",
  "Cliffs",
  "Hollow",
];

const sample = (array: typeof descriptors | typeof places) =>
  array[Math.floor(Math.random() * array.length)];
export const seedDB = () => {
  const camps = [];
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;

    camps.push({
      camp_id: i,
      author: "5f5c330c2cd79d538f2c66d9",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
      price,
      url: `https://source.unsplash.com/collection/48325${i}`,
    });
  }

  return camps;
};
