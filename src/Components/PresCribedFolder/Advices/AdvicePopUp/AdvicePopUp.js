import React, { useState } from "react";

const AdvicePopUp = ({ onClose }) => {
    const [advice, setAdvice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
    };

    const handleCancel = () => {
        onClose();
    };


    return (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 inset-0 overflow-y-auto flex items-center justify-center'>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-3xl bg-stone-100 border-neutral-950 p-8">
            <div className="mb-4">
                <label htmlFor="investigation" className="block text-gray-700 font-bold mb-2">
                    Select Advice
                </label>
                <select
                    id="advice"
                    name="advice"
                    className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={advice}
                    onChange={(e) => setAdvice(e.target.value)}
                >
                    <option value="">--Select--</option>
                    <option value="advice 1">Advice 1</option>
                    <option value="advice 2">Advice 2</option>
                    <option value="advice 3">Advice 3</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>

            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCancel}
            >
                Cancel
            </button>
        </form>
        </div>
    );
};

export default AdvicePopUp;