import React, { useState } from 'react';
import OnExaminationPopUp from '../OnExaminationPopUp/OnExaminationPopUp';

const OnExaminations = () => {

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
            <h3 className='text-xl font-extrabold font-serif'>On Examinations,<span>

                <button onClick={handleModalOpen}>+</button>
                
                {
                    isModalOpen && (
                        <OnExaminationPopUp onClose={handleModalClose} />
                    )
                }
                </span></h3>
            </div>
        </div>
    );
};

export default OnExaminations;