
import React, { useState } from 'react';
import HistoryPopUp from '../HistoryPopUp/HistoryPopUp';

const Histories = () => {

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
            <h3 className='text-xl font-extrabold font-serif'>History,<span>

                <button onClick={handleModalOpen}>+</button>
                
                {
                    isModalOpen && (
                        <HistoryPopUp onClose={handleModalClose} />
                    )
                }
                </span></h3>
            </div>
        </div>
    );
};

export default Histories;
