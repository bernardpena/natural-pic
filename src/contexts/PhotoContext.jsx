import { createContext, useEffect, useState } from "react"

// exportamos el contexto(sin default) y un provider como Componente8por default)
export const PhotoContext = createContext();

//provider y le decimos a nuestros children que valores deben obtener
export default function PhotoProvider({ children }) {

    const [photos, setPhotos] = useState([]);

    //llamado para consumo de la API
    const getPhoto = async () => {
        const response = await fetch("/photos.json")
        const { photos: photosdb } = await response.json()
        setPhotos(photosdb)
    }

    useEffect(() => { getPhoto(); }, [])

    return (
        <PhotoContext.Provider value={{ photos, setPhotos }}>
            {children}
        </PhotoContext.Provider>

    )
}

