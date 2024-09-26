import React, {FC} from 'react';

type ButtonType = {
    callBack: () => void;
    name: string;
    disabled?: boolean;
};

// Компонент Button
export const Button: FC<ButtonType> = (props) => {
    const {callBack, name,disabled= false} = props
    return (
        <button onClick={callBack} disabled={disabled}>{name}</button>
    );
};






