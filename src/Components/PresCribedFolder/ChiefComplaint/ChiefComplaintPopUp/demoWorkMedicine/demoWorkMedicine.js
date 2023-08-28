import React, { useState } from 'react';

const ChiefComplaintPopUp = ({onClose}) => {
    const [medicine, setMedicine] = useState("");
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [month, setMonth] = useState("");
    const [date, setDate] = useState("")
    const [remarks, setRemarks] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle form submission here
    };
  
    const handleCancel = () => {
      onClose();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-8'>
            <div className="mb-4">
                <label htmlFor="medicine" className="block text-gray-700 font-bold mb-2">
                Select medicine
                </label>
                <select
                id="medicine"
                name="medicine"
                className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
                >
                <option value="">--Select--</option>
                <option value="Medicine 1">Medicine 1</option>
                <option value="Medicine 2">Medicine 2</option>
                <option value="Medicine 3">Medicine 3</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="hour" className="block text-gray-700 font-bold mb-2">
                Schedule (hour, minute, second)
                </label>
                <div className="flex items-center">
                <input
                    type="text"
                    id="hour"
                    name="hour"
                    placeholder="Hour"
                    className="appearance-none border rounded w-1/3 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                />
                <input
                    type="text"
                    id="minute"
                    name="minute"
                    placeholder="Minute"
                    className="appearance-none border rounded w-1/3 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                />
                <input
                    type="text"
                    id="second"
                    name="second"
                    placeholder="Second"
                    className="appearance-none border rounded w-1/3 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                />
                </div>
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
                className="appearance-none border rounded w-1/5 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
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
                className="appearance-none border rounded w-1/5 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                min="1"
                max="31"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>

            <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCancel}
            >
                Cancel
            </button>

            </form>
        </div>
    );
};

export default ChiefComplaintPopUp;