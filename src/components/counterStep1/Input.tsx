import React, {ChangeEvent, FC} from 'react';

type InputType = {
    value: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}
// Компонент Input
    export const Input: FC<InputType> = (props) => {
 const {value,onChange} = props
    return (
        <input type="text" value={value} onChange={onChange} />
    );
};






















// import React, { FC, ChangeEvent } from 'react';
//
// type InputType = {
//     value: string;
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void;
//     placeholder?: string;
// };
//
// const Input: FC<InputType> = ({ value, onChange, placeholder }) => {
//     return (
//         <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
//     );
// };
//
// export default Input;