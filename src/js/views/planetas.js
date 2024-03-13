import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Planetas = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function fetchData() {
            let resp = await actions.getList("planets", searchParams.get("page"))
            setTotalPages(resp.pages)
        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Planetas</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {store.planets?.map((planet) => (
                        <div key={planet.uid} className="col mb-4">
                            <div className="element-card h-100">
                                <img src={planet.img} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title-section">{planet.name}</h5>
                                   
                                </div>    
                            </div>

                        </div>
                    ))}
                </div>
            </div>

           
        </>
    );
};

export default Planetas;