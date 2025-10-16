import axios from "axios";
import { useEffect, useState } from "react";

export default function CharactersPage() {

    const [characters, setCharacters] = useState([])
    const [pagination, setPagination] = useState({})

    function fetchData() {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(
                res => {
                    console.log(res.data);
                    setCharacters(res.data.results)
                    setPagination(res.data.info)
                })
            .catch(err => (err.message)
            )
    }

    function handlePagination(e) {
        const direction = pagination[e.target.dataset.pagination]
        axios.get(direction)
            .then(
                res => {
                    console.log(res.data);
                    setCharacters(res.data.results)
                    setPagination(res.data.info)
                })
            .catch(err => (err.message)
            )
    }

    useEffect(fetchData, [])

    return (
        <>


            <main className="container mb-4 p-2">

                <section id="characters">
                    <div className="container">
                        <div className="row g-3">

                            {characters.map(char => (
                                <div key={char.id} className="col-12 col-sm-6 col-md-3">
                                    <div className="card h-100 " data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                                        <img src={char.image} className="card-img-top" alt={char.name}></img>
                                        <div className="card-body h-100">
                                            <h3 className="card-title">{char.name}</h3>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="">Species: <span className="badge text-bg-primary">{char.species}</span> </p>
                                                <p className="badge text-bg-danger">{char.status}</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                        {characters.length ?
                            <div className="d-flex justify-content-center gap-4 mt-4">
                                {pagination.prev && <button className="btn btn-secondary" data-pagination='prev' onClick={handlePagination}> Precedente</button>}

                                {pagination.next && <button className="btn btn-primary" data-pagination='next' onClick={handlePagination}>Successivo </button>}

                            </div>
                            : <p>Nessun Personaggio caricato</p>

                        }
                    </div>
                </section>

            </main>

        </>
    )
}