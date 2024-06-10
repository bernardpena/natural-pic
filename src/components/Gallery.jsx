import { useContext } from "react";
import { Context } from "../contexts/PhotoContext";
import IconHeart from "../components/IconHeart";

import { Col, Card } from 'react-bootstrap';

export default function Gallery({ filtered = 'home' }) {

  // hook useContext y le decimos context que usar y que valores queremos recuperar
  const { photos } = useContext(Context);

  return (
    <>
      {photos
        .filter((photos) => (filtered === 'favoritos' ? photos.liked === true : true))
        .map((photos) => (
          <Col key={photos.id}>
            <Card className="text-white fs-6">
              <Card.Img src={photos.src.tiny} alt={photos.alt} />
              <Card.ImgOverlay>
                <Card.Text className="text-end">
                  <IconHeart id={photos.id} />
                </Card.Text>
                <Card.Text>{photos.alt}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
    </>
  );
}



