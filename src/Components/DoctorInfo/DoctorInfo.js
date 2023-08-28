import React from 'react';
import DoctorInfoBangla from '../DoctorInfoBangla/DoctorInfoBangla';
import DoctorInfoEnglish from '../DoctorInfoEnglish/DoctorInfoEnglish';

const DoctorInfo = () => {
    return (
        <div className="grid grid-cols-5 gap-4 h-48">
               <DoctorInfoEnglish />
               <DoctorInfoBangla />
        </div>
    );
};

export default DoctorInfo;