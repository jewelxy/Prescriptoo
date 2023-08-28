import React, { useState } from 'react';
import FollowUpPopUp from '../FollowUpPopUp/FollowUpPopUp';


const FollowUp = () => {

    const [isModalOpen,setIsModalOpen] = useState(false);

    const handleModalOpen = () =>{
        setIsModalOpen(true);
    };

    const handleModalClose = () =>{
        setIsModalOpen(false);
    };

    return (
       <div >
            <div className="ml-4 mt-4 inline">
            <h3 className='text-xl font-extrabold font-serif'>Follow UP,<span>
               <button onClick={handleModalOpen}>+</button>
                {
                    isModalOpen && (
                        <FollowUpPopUp onClose={handleModalClose} />
                    )
                }
                </span></h3>

            </div>
        </div>
    );
};

export default FollowUp;