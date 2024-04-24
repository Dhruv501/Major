import Inventory from "../Components/Inventory";
import SideMenu from "../Components/SideMenu";
import AddFolder from "../Components/AddFolder";
import Folder from "../Components/Folder";
import React, { useState } from 'react';
import Products from "../Components/Products";
import { Link } from "react-router-dom";


function ProductDashBoard() {

    return ( 
        <>
            <div className="flex h-full w-full">
                <div className="w-full basis-1/4 ">
                    <SideMenu />
                </div>
                <div className=" w-full basis-100">
                    <div className=" sm:flex sm:justify-around flex w-auto h-20 border-b-2 border-zinc-300 shadow-md">
                    <div className="h-full flex justify-center items-center text-3xl text-slate-800 font-semibold">
                        Inventory Items
                    </div>
                    <div className="h-full w-1/2 text-white font-semibold  flex sm:justify-end items-center">
                        <Link  to="/addproduct" className="flex  justify-center items-center text-white font-medium text-md bg-red-500 w-1/3 rounded-md h-12 ">
                            ADD ITEM
                        </Link>
                    </div>
                 </div>
                    <Products />
                </div>
            </div>
        </>
     );
}

export default ProductDashBoard;