import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Pelis = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function fetchData() {
            await actions.getList("films", searchParams.get("page"))
        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Pelis</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {store.films?.map((films) => (
                        <div key={films.uid} className="col mb-4">
                            <div className="element-card h-100">
                                <img src={films.img} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title-section">{films.name}</h5>
                                   
                                </div>    
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            
        </>
    );
};

export default Pelis;