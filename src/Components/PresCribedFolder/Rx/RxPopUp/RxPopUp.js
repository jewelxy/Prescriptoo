import React, { useState } from "react";

const RxPopUp = () => {

    return (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 inset-0 overflow-y-auto flex items-center justify-center'>
           
            <div className="container bg-blue-50 h-1/2 w-1/2 grid grid-cols-4 border border-black-600">
                    <div className="col-span-full text-center">
                        <h1>Search</h1>
                    </div>
                            
                     <div className="col-span-2 text-center">
                          <h1>Medicine</h1>
                    </div>

                    <div className="col-span-2 text-center">
                         <h1>Medicine Group</h1>
                    </div>

                    <div className="col-span-full text-center">
                         <h1>Div</h1>
                    </div>        
            </div>
        </div>
    );
};

export default RxPopUp;