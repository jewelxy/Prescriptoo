import React, { useState } from 'react';
import DiagnosisPopUp from '../DiagnosisPopUp/DiagnosisPopUp';

const Diagnosis = () => {
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
            <h3 className='text-xl font-extrabold font-serif'>Diagnosis,<span>
               <button onClick={handleModalOpen}>+</button>
                {
                    isModalOpen && (
                        <DiagnosisPopUp onClose={handleModalClose} />
                    )
                }
                </span></h3>

            </div>
        </div>
    );
};

export default Diagnosis;