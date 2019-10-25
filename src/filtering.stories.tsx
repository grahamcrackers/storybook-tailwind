import React, { useState, FC, useRef } from 'react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Filtering',
};

const fireAction = action('radio-click');

const FilterCheckbox = ({ ...props }) => {
    const checkboxRef = useRef(null);
    return <input type="checkbox" className="form-checkbox" ref={checkboxRef} {...props} />;
};

export const CheckboxFiltering: FC<{}> = () => {
    // keep the original array as a reference
    const initial = ['a', 'b', 'c', 'd'];
    const [fields, setFields] = useState<string[]>(initial);
    const [excluded, setExcluded] = useState<string[]>([]);

    const removeField = target => {
        // add field to excluded list
        setExcluded([...excluded, target.name]);

        // and remove it from the fields list
        const filteredFields = fields.filter(field => field !== target.name);
        setFields(filteredFields);
    };

    const addField = target => {
        // remove from excluded list
        const filteredExcluded = excluded.filter(field => field !== target.name);
        setExcluded(filteredExcluded);

        // preserve order by using the initial array
        const fieldsAndExcluded = initial.filter(field => !filteredExcluded.includes(field));
        setFields(fieldsAndExcluded);
    };

    const handleChange = e => {
        const target = e.currentTarget;
        if (!target.checked) {
            removeField(target);
        }
        if (target.checked) {
            addField(target);
        }
    };

    return (
        <div className="flex mb-4">
            <div className="w-1/2 bg-gray-400">
                <ul>
                    {fields.map((s, index) => {
                        return <li key={index}>{s}</li>;
                    })}
                </ul>
            </div>
            <div className="w-1/2 bg-gray-500">
                <span className="text-gray-700">Checkboxes</span>
                <div className="mt-2">
                    <ul>
                        {initial.map((value, index) => {
                            return (
                                <li key={index}>
                                    <label className="inline-flex items-center">
                                        <FilterCheckbox
                                            name={value}
                                            defaultChecked={true}
                                            onChange={e => handleChange(e)}
                                        />
                                        <span className="ml-2">{value}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
