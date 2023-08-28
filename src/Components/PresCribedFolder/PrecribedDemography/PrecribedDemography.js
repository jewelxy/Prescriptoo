import Histories from '../History/Histories/Histories';
import ChiefComplaints from '../ChiefComplaint/ChiefComplaints/ChiefComplaints';
import OnExaminations from '../OnExamination/OnExaminations/OnExaminations';
import Diagnosis from '../Diagnosis/Diagnosis/Diagnosis';
import Investigation from '../Investigations/Investigation/Investigation';
const PrecribedDemography = () => {
    return (
        <div className="col-span-4 float-left">
            <Histories />
            <ChiefComplaints />
            <OnExaminations />
            <Diagnosis />
            <Investigation />
        </div>
    );
};

export default PrecribedDemography;