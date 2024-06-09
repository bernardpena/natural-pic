import { useContext } from "react";
import { Context } from "../contexts/PhotoContext";
import { IconHeart } from "../components/IconHeart";

import { Col, Card } from 'react-bootstrap';

export default function Gallery({ filtered = 'home' }) {

  // hook useContext y le decimos context que usar y que valores queremos recuperar
  const { photos } = useContext(Context);

  return (
    <>
      console.log("nada")
      {photos
        .filter((photo) => (filtered === 'favoritos' ? photo.liked === true : true))
        .map((photo) => (
          <Col key={photo.id}>
            <Card className="gallery grid-columns-5 p-3" />
            <Card.ImgOverlay>
              <Card.Text className="text-end">
                <IconHeart id={photo.id} />
              </Card.Text>
              <Card.Text>{photo.alt}</Card.Text>
            </Card.ImgOverlay>
          </Col>
        ))}
    </>
  );
}




// <div className="gallery grid-columns-5 p-3">
//   {photos.map((element, index) => (
//     <div
//       className="photo"
//       style={{ backgroundImage: `url(${element.src.tiny})` }}
//       key={index}
//     >
//       <IconHeart filled={element.liked} onClick={handleClick} />
//       <span>{element.alt}</span>
//     </div>
//   ))}
// </div>


