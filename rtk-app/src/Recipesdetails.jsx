import React from "react";
import { useGetrecipebyidQuery } from "./services/recipes/recipes";
import { useParams } from "react-router-dom";
function Recipesdetails() {
    const { id } = useParams()
    const { data, isLoading } = useGetrecipebyidQuery(id)
    console.log(data)
    return (
        <div className="recipedetails">
            <h1 style={{position:"relative",bottom:"40px"}}>Recipesdetails</h1>
            {
                isLoading && (<img src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-circle-7008030-5740009.gif" className="loadingimage" />)
            }
            {
                data && (
                    <div>
                        <img src={data.image} alt="" style={{ height: "200px", width: "200px",objectFit:"cover",borderRadius:"10px" }} />
                        <h2>{data.name}</h2>
                    </div>
                )
            }
        </div>
    )
}
export default Recipesdetails