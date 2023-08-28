import React, { useState } from "react";

const OnExaminationPopUp = ({ onClose }) => {
  const [examinations, setExaminations] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 inset-0 overflow-y-auto flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='mx-auto mt-8 max-w-3xl bg-stone-100 border-neutral-950 p-8'>
        <div className="mb-4">
          <label htmlFor="examinations" className="block text-gray-700 font-bold mb-2">
            Select examinations
          </label>
          <select
            id="examinations"
            name="examinations"
            className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={examinations}
            onChange={(e) => setExaminations(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="examinations 1">Examinations 1</option>
            <option value="examinations 2">Examinations 2</option>
            <option value="examinations 3">Examinations 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="remarks" className="block text-gray-700 font-bold mb-2">
            Remarks
          </label>
          <textarea
            id="remarks"
            name="remarks"
            className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-500 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>

        <button
          type="button"
          className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleCancel}
        >
          Cancel
        </button>

      </form>
    </div>
  );
};

export default OnExaminationPopUp;