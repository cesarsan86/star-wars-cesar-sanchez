import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { store, actions } = useContext(Context);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function fetchData() {
            let resp = await actions.getList("people", searchParams.get("page"))
            setTotalPages(resp.pages)

        }
        fetchData();

    }, [searchParams.get("page")])


    return (
        <>
            <h1 className="page-title">Personajes</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {store.people?.map((people) => (
                        <div key={people.uid} className="col-mb-4">
                            <div className="element-card h-100">
                                <img src={people.img} alt="" className="card-img-top" />
                                <h5 className="card-title-section">{people.name}</h5>
                               
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        
        </>
    );
};

export default Characters;