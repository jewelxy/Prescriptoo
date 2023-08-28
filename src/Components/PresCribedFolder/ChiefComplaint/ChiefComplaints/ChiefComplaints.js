import React, { useState } from 'react';
import ChiefComplaintPopUp from '../ChiefComplaintPopUp/ChiefComplaintPopUp';

const ChiefComplaints = () => {

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
            <h3 className='text-xl font-extrabold font-serif'>Chief Complaint,<span>
               <button onClick={handleModalOpen}>+</button>
                {
                    isModalOpen && (
                        <ChiefComplaintPopUp onClose={handleModalClose} />
                    )
                }
                </span></h3>

            </div>
        </div>
    );
};

export default ChiefComplaints;