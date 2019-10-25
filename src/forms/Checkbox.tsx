import React, { FC, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

export const Checkbox: FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
    className,
    ...props
}) => {
    const initialState = { checked: false };
    const [state, setState] = useState({ checked: true, value: 'eh' });

    return <input type="checkbox" className={`form-checkbox ${className}`} checked={false} {...props} />;
};
