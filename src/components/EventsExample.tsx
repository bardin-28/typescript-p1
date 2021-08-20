import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log('Drop')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} placeholder="First" type="text"/>
            <button onClick={clickHandler}>logo</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: "red"}}></div>
            <div
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 50}}
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
            >
             </div>
        </div>
    );
};

export default EventsExample;