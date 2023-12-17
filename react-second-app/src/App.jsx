import CardList from "./components/cardList/CardList";
import GalleryList from "./components/galleryList/GalleryList";
import Hero from "./components/hero";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer.jsx";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];
  const imgGalleryList = [
    {
      id: 1,
      img: "https://picsum.photos/250/200?10",
      title: "Image gallery",
    },
    {
      id: 2,
      img: "https://picsum.photos/250/200?21",
      title: "Image gallery",
    },
    {
      id: 3,
      img: "https://picsum.photos/250/200?31",
      title: "Image gallery",
    },
    {
      id: 4,
      img: "https://picsum.photos/250/200?41",
      title: "Image gallery",
    },
  ];

  return (
    <div className="App">
      {/* <button>Ciao</button> */}
      {/* <Button textContent="cliccami!" color="white" />
      <Button textContent="Accetta!" />
      <Button textContent="Annulla!" /> */}
      <NavBar />
      <Hero />
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      <GalleryList
        galleryListObj={{ title: "Gallery", list: imgGalleryList }}
      />
      <Footer />
      {/* <CardList cardListObj={{ title: "Sci-Fi" }} />
      <CardList cardListObj={{ title: "Adventure" }} /> */}
    </div>
  );
}

export default App;
