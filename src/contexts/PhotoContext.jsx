import { createContext, useEffect, useState } from "react"

// exportamos el contexto(sin default) y un provider como Componente8por default)
export const Context = createContext();

//provider y le decimos a nuestros children que valores deben obtener
export function PhotoProvider({ children }) {
    const [photos, setPhotos] = useState([]);

    //llamado para consumo de la API
    const getPhoto = async () => {
        const response = await fetch("/photos.json")
        const { photos: photosdb } = await response.json()
        setPhotos(photosdb)

        photos.map((photos) => {
            return {
                id: photos.id,
                src: photos.src.tiny,
                alt: photos.alt,
                liked: false,
            };

        });
        // setPhotos(photosdb)
        console.log(photos)
    };

    useEffect(() => {
        getPhoto();
    }, [])

    const globalState = { photos, setPhotos };

    return <Context.Provider value={globalState}> {children} </Context.Provider>;
}

