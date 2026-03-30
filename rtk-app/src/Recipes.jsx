import React from "react";
import { useGetrecipenameQuery } from "./services/recipes/recipes";
import { NavLink, Outlet } from "react-router-dom";
function Recipes() {
    const { data, isLoading } = useGetrecipenameQuery()
    console.log(data)
    return (
        <div className="recipes">
            {
                isLoading && <div>
                    <img src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-circle-7008030-5740009.gif" alt="" className="loadingimage"/>
                </div>
            }
            {
                data &&
                <ul id="recipesul">
                    {
                        data.recipes.map((r, i) => {
                            return <li key={i}><NavLink to={`recipesdetails/${r.id}`} className={'recipesnavlink'}>{r.name}</NavLink></li>
                        })
                    }
                </ul>
            }
            <Outlet />
        </div>
    )
}
export default Recipes