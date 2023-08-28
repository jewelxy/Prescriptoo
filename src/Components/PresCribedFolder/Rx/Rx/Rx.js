import React, { useState } from 'react';
import RxPopUp from '../RxPopUp/RxPopUp';
const Rx = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () =>{
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
           <div >
            <div className="ml-4 mt-4 inline">
            <h3 className='text-xl font-extrabold font-serif'>Rx,<span>

                <button onClick={handleModalOpen}>+</button>
                
                {
                    isModalOpen && (
                        <RxPopUp onClose={handleModalClose} />
                    )
                }
                </span></h3>
            </div>
        </div>
    );
};

export default Rx;