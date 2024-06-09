import React from 'react'
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

function NotPage() {
    return (

        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        Pagina no Encontrada
                    </h3>
                    <p className="text-gray-600">
                        Lo Lamento, esta pagina no esta dentro de nuestra Paginas.
                    </p>
                    <Link to="/" className="text-gray-800 text-4xl font-semibold sm:text-5xl">Regresar</Link>
                </div>
            </div>
        </main>
    )
}

export default NotPage