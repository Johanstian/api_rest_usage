import React, { useEffect, useState } from 'react'

export const CatGalleryFetch = () => {

    //Obtener array
    const [cats, setCats] = useState([]);

    //Manejo errores
    const [error, setError] = useState(null);

    //Call api
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');


            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            setCats(data)
            console.log('data del response', data)

        } catch (error) {
            console.log('Error =>', error.message);
            setError(error)
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    if (error) {
        return (
            <div className='alert alert-danger text-center'>
                {error}
            </div>
        )
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center text-white mb-4'>Galería de Gatitos con Fetch</h2>
            <div className='row overflow-auto vh-80' style={{maxHeight: '80vh', overflowY: 'scroll'}}>
                <div className="row">
                    {cats.map((cat, index) => (
                        <div className='col-md-4 mb-4' key={index}>
                            <div className='card h-100 d-flex flex-column'>
                                <img src={cat.url} className='card-img-top img-fluid object-fit-cover' alt="Cat" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Gatito {index + 1}</h5>
                                    <p className='card-tet'>¡Un lindo gatito de nuestra galería!</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
