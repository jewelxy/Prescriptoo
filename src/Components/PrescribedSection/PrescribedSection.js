import React from 'react';
import PatientInfo from '../PresCribedFolder/PatientInfo/PatientInfo';
import MedicineInfo from '../PresCribedFolder/MedicineInfo/MedicineInfo';
import PrecribedDemography from '../PresCribedFolder/PrecribedDemography/PrecribedDemography';

const PrescribedSection = () => {
    return (
        <div className="grid grid-cols-12 gap-4 h-96">
                <PatientInfo />
                <MedicineInfo />
                <PrecribedDemography />
        </div>
    );
};

export default PrescribedSection;