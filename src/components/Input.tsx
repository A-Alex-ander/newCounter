import React, {ChangeEvent, FC, useState} from 'react';

type InputType = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
// Компонент Input
export const Input: FC<InputType> = (props) => {
    const {value, onChange} = props


    return (
        <input type="number" value={value} onChange={onChange}/>
    );
};
















