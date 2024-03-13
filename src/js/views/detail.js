import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import DetailPersonas from "./detailPersonas"
import DetailPlanetas from "./detailPlanetas";
import DetailNaves from "./detailNaves";
import DetailVehiculos from "./detailVehiculos";
import DetailPelis from "./detailPelis";

const Detail = () => {
    const { element, id } = useParams();
    const { store, actions } = useContext(Context);
    const [elementData, setElementData] = useState(null);
    const imageCard = `https://starwars-visualguide.com/assets/img/${element == "people" ? "characters" : element
        }/${id}.jpg`

    useEffect(() => {
        async function getData() {
            setElementData(await actions.getDetail(element, id));
        }
        getData();
    }, [id]);

    function renderDetail(type) {
        if (elementData == null) return "";
        switch (type) {
            case "personas":
                return <DetailPersonas element={elementData} />
                break;
            case "vehiculos":
                return <DetailVehiculos element={elementData} />
                break;
            case "pelis":
                return <DetailPelis element={elementData} />
                break;
            case "naves":
                return <DetailNaves element={elementData} />
                break;
            case "planetas":
                return <DetailPlanetas element={elementData} />
                break;
            default:
                break;
        }
    }

    return elementData == null ? <h2> No se encontro el {element}</h2> :
        <div className="card card-detail">
            <img className="card-img-top" src={imageCard} alt="Star Wars" style={{ width: 300 }} />
            <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <div className="card-text card-info">{renderDetail(element)}</div>
            </div>
        </div >
};

export default Detail;