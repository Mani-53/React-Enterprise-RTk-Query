import React from "react";
import { useGetproductnameQuery } from "./services/products/product";
import { NavLink, Outlet } from "react-router-dom";
function Products() {
    const { data, isLoading } = useGetproductnameQuery()
    return (
        <div className='products'>
            {
                isLoading && (<img src='https://cdnl.iconscout.com/lottie/premium/thumb/loading-circle-7008030-5740009.gif' className="loadingimage"/>)
            }
            {
                data && <ul id="productsul">
                    {
                        data.products.map((p, i) => {
                            return <li key={i}><NavLink to={`productdetails/${p.id}`} className={'productsnavlink'}>{p.title}</NavLink></li>
                        })
                    }
                </ul>
            }
            <Outlet />
        </div>

    )
}
export default Products