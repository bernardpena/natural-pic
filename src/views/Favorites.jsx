import Gallery from "../components/Gallery";

export default function Favorites() {

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        <Gallery filtered={'favoritos'} />
      </div>
    </div>
  );
}

