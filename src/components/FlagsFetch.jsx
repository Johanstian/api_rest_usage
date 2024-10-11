import React, { useEffect, useState } from 'react'

export const FlagsFetch = () => {

    const [flags, setWines] = useState([]);

    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {

            const response = await fetch('https://api.sampleapis.com/countries/countries');
            const data = await response.json();
            setWines(data);
            console.log(data)
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return (
            <div className='alert alert-danger text-center'>
                Error
            </div>
        )
    }

    return (
        <div className='container mt-4'>
            <h2 className='text-center text-white'>Flags</h2>
            <div className='row' style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
                <div className='row justify-content-center'>
                    {flags.map((flag, index) => (
                        <div className='col-md-3 m-2' key={index}>
                            <div className='card h-100 d-flex flex-column'>
                                <img className='card-img-top' src={flag.media.flag} alt="Flag" style={{height: '180px', objectFit: 'cover', width: '100%'}}/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{flag.abbreviation} {index + 1}</h5>
                                    <p className='card-tet'>{flag.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
