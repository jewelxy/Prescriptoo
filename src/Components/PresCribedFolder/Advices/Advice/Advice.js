import React, { useState } from 'react';
import AdvicePopUp from '../AdvicePopUp/AdvicePopUp';

const Advice = () => {

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
            <h3 className='text-xl font-extrabold font-serif'>Advice,<span>

                <button onClick={handleModalOpen}>+</button>
                
                {
                    isModalOpen && (
                        <AdvicePopUp onClose={handleModalClose} />
                    )
                }
                </span></h3>
            </div>
        </div>
    );
};

export default Advice;