import React, {FC} from 'react';

type ButtonType = {
    callBack: () => void;
    name: string;
};

// Компонент Button
export const Button: FC<ButtonType> = (props) => {
    const {callBack, name} = props
    return (
        <button onClick={callBack}>{name}</button>
    );
};





























// import React, { FC } from 'react';
//
// type ButtonType = {
//     callBack: () => void;
//     name: string;
// };
//
// export const Button: FC<ButtonType> = ({ callBack, name }) => {
//     return (
//         <button onClick={callBack}>{name}</button>
//     );
// };
//
// export default Button;