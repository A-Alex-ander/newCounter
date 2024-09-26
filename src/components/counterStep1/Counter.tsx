import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import {Input} from "./Input";
// Компонент Counter
const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [startValue, setStartValue] = useState<string>('');
    const [maxValue, setMaxValue] = useState<string>('');
    const [settingsApplied, setSettingsApplied] = useState<boolean>(false)

        // прибавление +1
    const increment = () => {
        if (!settingsApplied) {
            setCount(prevCount => prevCount + 1)
        } else if (settingsApplied && count < +maxValue) {
            setCount(prevCount => prevCount + 1)
        }
    }

    // обнуления счётчика
    const reset = () => {
        if(settingsApplied) {
            setCount(Number(startValue))
        } else (setCount(0))// почему тут нельзя написать else if почему условие никогда не выполнится(undefined)
    }

    // читаем что ввели в инпуте для стартового значения
    const startValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
    }

    // читаем что ввели в инпуте для макс значен
    const maxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    // функция которая активирует нстройки счётчика
    const applySettings = ()=>{
        const start = Number(startValue)
        const max = Number(maxValue)
        // проверка на не число
        if(!isNaN(start) && !isNaN(max)){
            setCount(start)
            setSettingsApplied(true)
        } else (setSettingsApplied(false))


    }

    // второй метод проверки натсроек счётчика через true catch
    // const applySettings = () => {
    //     try {
    //         const start = Number(startValue);
    //         const max = Number(maxValue);
    //
    //         if (!isNaN(start) && !isNaN(max) && start < max) {
    //             setCount(start);
    //             setSettingsApplied(true);
    //         } else {
    //             setSettingsApplied(false);
    //         }
    //     } catch (error) {
    //         setSettingsApplied(false);
    //     }
    // };


    return (
        <div>
            <div>
                <Button callBack={increment} name={'increment'}/>
                <span>{count}</span>
                <Button callBack={reset} name={'reset'}/>
            </div>
            <div>
                <Input value={startValue}
                       onChange={startValueChangeHandler}/>
                <Input value={maxValue}
                       onChange={maxValueChangeHandler}/>
                <Button callBack={applySettings} name={'set'}/>
            </div>
        </div>

    );
};


export default Counter;


// import React, { useState, ChangeEvent } from 'react';
// import Button from "./Button";
// import Input from "./Input";
//
// export const Counter = () => {
//     const [count, setCount] = useState(0);
//     const [startValue, setStartValue] = useState('');
//     const [maxValue, setMaxValue] = useState('');
//     const [error, setError] = useState('');
//     const [settingsApplied, setSettingsApplied] = useState(false); // Добавляем состояние для отслеживания применения настроек
//
//     const increment = () => {
//         if (!settingsApplied || count < Number(maxValue)) { // Проверяем, применены ли настройки и не превышает ли текущее значение максимальное значение
//             setCount(prevCount => prevCount + 1);
//         }
//     };
//
//     const reset = () => setCount(0);
//
//     const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setStartValue(e.currentTarget.value);
//     };
//
//     const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setMaxValue(e.currentTarget.value);
//     };
//
//     const applySettings = () => {
//         const start = Number(startValue);
//         const max = Number(maxValue);
//
//         if (isNaN(start) || isNaN(max)) {
//             setError('Both start value and max value must be valid numbers');
//             return;
//         }
//
//         if (max < start) {
//             setError('Max value must be greater than or equal to start value');
//             return;
//         }
//
//         setCount(start);
//         setSettingsApplied(true); // Устанавливаем флаг, что настройки применены
//         setError('');
//     };
//
//     return (
//         <div>
//             <div>
//                 <Button callBack={increment} name={'increment'} />
//                 <span>{count}</span>
//                 <Button callBack={reset} name={'reset'} />
//             </div>
//
//             <div>
//                 <Input value={startValue} onChange={handleStartValueChange} placeholder="Start Value" />
//                 <Input value={maxValue} onChange={handleMaxValueChange} placeholder="Max Value" />
//                 <Button callBack={applySettings} name={'set'} />
//             </div>
//
//             {error && <div>{error}</div>}
//         </div>
//     );
// };
//
// export default Counter;