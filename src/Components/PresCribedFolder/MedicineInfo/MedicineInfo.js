import React from 'react';
import Advice from '../Advices/Advice/Advice';
import FollowUp from '../FollowUp/FollowUp/FollowUp';
import Rx from '../Rx/Rx/Rx';

const MedicineInfo = () => {
    return (
        <div className="col-span-4 border-r-4 mt-4">
            <div className="float-left ml-4">
            <Rx />


             {/* Advices and Follow up */}
                <div className="mt-6">
                        <Advice />
                        <FollowUp />
                </div>
            </div>
        </div>
    );
};

export default MedicineInfo;