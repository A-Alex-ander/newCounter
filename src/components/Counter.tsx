import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import {Input} from "./Input";
import '../styles/styles.css'
// Компонент Counter
const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [startValue, setStartValue] = useState<string>('');
    const [maxValue, setMaxValue] = useState<string>('');
    const [settingsApplied, setSettingsApplied] = useState<boolean>(false)
    const [error,setError] = useState<boolean>(false)

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
        const value = e.currentTarget.value
       setStartValue(value)
        if(+value<0) {
            setError(true)
        }
    }

    // читаем что ввели в инпуте для макс значен
    const maxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setMaxValue(value)
        setError(Number(value) < 0);
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


    // styles
    const maxValueCount = settingsApplied && count === +maxValue ? 'maxValue' : ''
    //
     const incrementDisabled = settingsApplied && count === +maxValue

    return (
        <div>
            <div>
                <Button callBack={increment} name={'increment'} disabled={incrementDisabled}/>
                <span className={`${maxValueCount}  ${error? 'error' : ''}`}>
                   {error ? 'incorrect value!' : count}
                </span>

                <Button callBack={reset} name={'reset'}/>
            </div>
            <div>
                <Input value={startValue}
                       onChange={startValueChangeHandler}
                />
                <Input value={maxValue}
                       onChange={maxValueChangeHandler}/>
                <Button callBack={applySettings} name={'set'}/>
            </div>
        </div>

    );
};


export default Counter;

