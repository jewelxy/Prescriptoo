import React, { useState } from 'react';

const FollowUpPopUp = ({onClose}) => {

    const [followUp, setFollowUP] = useState("");
    const [month, setMonth] = useState("");
    const [date, setDate] = useState("");
  
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
                <label htmlFor="followUp" className="block text-gray-700 font-bold mb-2">
                Select Follw Up
                </label>
                <select
                id="followUp"
                name="followUp"
                className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={followUp}
                onChange={(e) => setFollowUP(e.target.value)}
                >
                <option value="">--Select--</option>
                <option value="follow Up 1">follow Up 1</option>
                <option value="follow Up 2">follow Up 2</option>
                <option value="follow Up 3">follow Up 3</option>
                </select>
            </div>

            <div className="mb-4">
            <label htmlFor="month" className="block text-gray-700 font-bold mb-2">
                Schedule (month, date)
            </label>
            <div className="flex items-center mb-2">
                <input
                type="number"
                id="month"
                name="month"
                placeholder="Month (1-12)"
                className="appearance-none border rounded w-1/2 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                min="1"
                max="12"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                />
                <input
                type="number"
                id="date"
                name="date"
                placeholder="Date (1-31)"
                className="appearance-none border rounded w-1/2 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                min="1"
                max="31"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
            </div>

            <button
                type="submit"
                className="bg-green-700 hover:bg-green-300 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>

            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCancel}
            >
                Cancel
            </button>
        </form>
        </div>
    );
};

export default FollowUpPopUp;