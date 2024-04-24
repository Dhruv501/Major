import Inventory from "../Components/Inventory";
import SideMenu from "../Components/SideMenu";
import AddFolder from "../Components/AddFolder";
import Folder from "../Components/Folder";
import React, { useState } from 'react';
import Products from "../Components/Products";

function Dashboard() {

    
    return ( 
        <>
            <div className="flex h-full w-full">
                <div className="w-full basis-1/4 ">
                    <SideMenu />
                </div>
                <div className=" w-full basis-100">
                    <Inventory />
                    <Folder />
                </div>
            </div>
        </>
     );
}

export default Dashboard;