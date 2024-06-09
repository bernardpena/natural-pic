import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery filtered={'home'} />
    </div>
  );
};

