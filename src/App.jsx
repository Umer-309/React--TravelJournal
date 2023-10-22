import React from "react";
import Header from "./Header";
import Destination from "./Destination";

const destinationData = [
  {
    key: 0,
    src: "https://source.unsplash.com/WLxQvbMyfas",
    country: "JAPAN",
    place: "Mount Fuji",
    date: "12 Jan, 2021 - 24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    googleMap: "https://maps.app.goo.gl/5vjS6arRG8s6mnYC9",
  },
  {
    key: 1,
    src: "https://source.unsplash.com/JmuyB_LibRo",
    country: "AUSTRALIA",
    place: "Sydney Opera House",
    date: "27 May, 2021 - 8 Jun, 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    googleMap: "https://maps.app.goo.gl/YrgahRJDBJ4uXGQh8",
  },
  {
    key: 2,
    src: "https://source.unsplash.com/3PeSjpLVtLg",
    country: "NORWAY",
    place: "Geirangerfjord",
    date: "01 Oct, 2021 - 18 Nov, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    googleMap: "https://maps.app.goo.gl/zaoC5mYx6JEHkCNQ7",
  },
];
function App() {
  const elementMount = destinationData.map((data) => {
    return (
      <Destination
        key={data.key}
        src={data.src}
        country={data.country}
        place={data.place}
        date={data.date}
        description={data.description}
        googleMap={data.googleMap}
      />
    );
  });
  return (
    <div className="container">
      <Header />
      {elementMount}
    </div>
  );
}

export default App;
