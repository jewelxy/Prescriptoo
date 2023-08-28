import React, { useState } from "react";

const RxPopUp = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCategory, setSearchCategory] = useState("medicine");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchCategoryChange = (event) => {
        setSearchCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: handle search submit
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <div className="grid-cols-8 items-center justify-center">
            <form onSubmit={handleSubmit} className="flex items-center">
                <div className="grid-cols-8">
                    <div className="relative mr-2">
                        <select
                            value={searchCategory}
                            onChange={handleSearchCategoryChange}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value="medicine">Medicine</option>
                            <option value="medical-group">Medical Group</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M13.652 14.349a8.5 8.5 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM8.5 15.5a7 7 0 100-14 7 7 0 000 14z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    {searchCategory === "medicine" ? (
                        <input
                            type="text"
                            placeholder="Search Medicine"
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    ) : (
                        <input
                            type="text"
                            placeholder="Search Medical Group"
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Search
                    </button>
                </div>
                <div className="grid-cols-5">
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
                </div>
            </form>
        </div>
    );
};

export default RxPopUp;
