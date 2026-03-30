import React from "react";
import { useGetproductbyidQuery } from "./services/products/product";
import { useParams } from "react-router-dom";
function Productdetails() {
    const { id } = useParams();
    const { data, isLoading } = useGetproductbyidQuery(id);
    console.log(data)
    return (
        <div className="productdetails">
            <h1 style={{position:"relative",bottom:"40px"}}>Productdetails</h1>
            {
                isLoading && (<img src='https://cdnl.iconscout.com/lottie/premium/thumb/loading-circle-7008030-5740009.gif' className="loadingimage"/>)
            }
            {
                data && <div>
                    <img src={data.thumbnail} alt={data.title} id="productdetailsimage" />
                    <h2>{data.title}</h2>
                </div>
            }
        </div>
    )
}
export default Productdetails