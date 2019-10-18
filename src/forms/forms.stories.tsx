import React from 'react';

export default {
    title: 'Forms',
};
export const exampleForm = () => {
    return (
        <>
            <label className="block">
                <span className="text-gray-700">Name</span>
                <input className="form-input mt-1 block w-full" placeholder="Jane Doe" />
            </label>

            <div className="mt-4">
                <span className="text-gray-700">Account Type</span>
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="accountType" value="personal" />
                        <span className="ml-2">Personal</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                        <span className="ml-2">Business</span>
                    </label>
                </div>
            </div>

            <label className="block mt-4">
                <span className="text-gray-700">Requested Limit</span>
                <select className="form-select mt-1 block w-full">
                    <option>$1,000</option>
                    <option>$5,000</option>
                    <option>$10,000</option>
                    <option>$25,000</option>
                </select>
            </label>

            <div className="flex mt-6">
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">
                        I agree to the <span className="underline">privacy policy</span>
                    </span>
                </label>
            </div>
        </>
    );
};

export const textInput = () => {
    return (
        <label className="block">
            <span className="text-gray-700">Input</span>
            <input type="email" className="form-input mt-1 block w-full" placeholder="john@example.com" />
        </label>
    );
};

export const textArea = () => {
    return (
        <label className="block">
            <span className="text-gray-700">Textarea</span>
            <textarea
                className="form-textarea mt-1 block w-full"
                rows={3}
                placeholder="Enter some long form content."
            ></textarea>
        </label>
    );
};

export const basicSelect = () => {
    return (
        <label className="block">
            <span className="text-gray-700">Select</span>
            <select className="form-select block w-full mt-1">
                <option>Option 1</option>
                <option>Option 2</option>
            </select>
        </label>
    );
};

export const multiSelect = () => {
    return (
        <label className="block">
            <span className="text-gray-700">Multiselect</span>
            <select className="form-multiselect block w-full mt-1" multiple>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
            </select>
        </label>
    );
};

export const checkbox = () => {
    return (
        <div className="block">
            <span className="text-gray-700">Checkboxes</span>
            <div className="mt-2">
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked />
                        <span className="ml-2">Option 1</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Option 2</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Option 3</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export const checkboxColors = () => {
    return (
        <div className="block">
            <span className="text-gray-700">Checkboxes</span>
            <div className="mt-2">
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox text-indigo-600" checked />
                        <span className="ml-2">Option 1</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox text-green-500" checked />
                        <span className="ml-2">Option 2</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox text-pink-600" checked />
                        <span className="ml-2">Option 3</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export const checkboxSizes = () => {
    return (
        <div className="block">
            <span className="text-gray-700">Checkboxes</span>
            <div className="mt-2">
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4" checked />
                        <span className="ml-2">Option 1</span>
                    </label>
                </div>
                <div className="mt-1">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-6 w-6" />
                        <span className="ml-3 text-lg">Option 2</span>
                    </label>
                </div>
                <div className="mt-1">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-8 w-8" />
                        <span className="ml-4 text-xl">Option 3</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export const radio = () => {
    return (
        <div className="block">
            <span className="text-gray-700">Radio Buttons</span>
            <div className="mt-2">
                <div>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="radio" value="1" checked />
                        <span className="ml-2">Option 1</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="radio" value="2" />
                        <span className="ml-2">Option 2</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="radio" value="3" />
                        <span className="ml-2">Option 3</span>
                    </label>
                </div>
            </div>
        </div>
    );
};
