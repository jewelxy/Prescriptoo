import React from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import TimeSection from '../TimeSection/TimeSection';
import PrescribedSection from '../PrescribedSection/PrescribedSection';
import Developer from '../Developer/Developer';

const Root = () => {
    return (
        <div className="mt-6 mr-6 mb-6 ml-6">
                <DoctorInfo />
                <TimeSection />
                <PrescribedSection />
                <Developer />
        </div>
    );
};

export default Root;