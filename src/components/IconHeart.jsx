import { useContext } from "react";
import { Context } from "../contexts/PhotoContext"


export default function IconHeart({ id }) {
  const { photos, setPhotos } = useContext(Context);
  const fotoElegida = photos.find((photo) => photos.id === id);


  function handleClick() {
    fotoElegida.liked = !fotoElegida.liked;
    const newPhotos = [...photos];
    setPhotos(newPhotos);
  }

  const color = fotoElegida.liked ? 'red' : 'white';

  return (
    <span className="IconHeart" onClick={handleClick}>
      <svg
        width="40px"
        viewBox="0 0 24 24"
        fill={color}
      >
        <path
          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
        />
      </svg>
    </span>
  );
};

