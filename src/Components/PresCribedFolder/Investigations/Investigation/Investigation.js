import React, { useState } from 'react';
import InvestigationPopUp from '../InvestigationPopUp/InvestigationPopUp';

const Investigation = () => {

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
            <h3 className='text-xl font-extrabold font-serif'>Investigation,<span>

                <button onClick={handleModalOpen}>+</button>
                
                {
                    isModalOpen && (
                        <InvestigationPopUp onClose={handleModalClose} />
                    )
                }
                </span></h3>
            </div>
        </div>
    );
};

export default Investigation;