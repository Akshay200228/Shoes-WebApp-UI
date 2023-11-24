import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

    const updateCursorPosition = (x, y) => {
        setCursorPosition({ x, y });
    };

    return (
        <CursorContext.Provider value={{ cursorPosition, updateCursorPosition }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => {
    return useContext(CursorContext);
};
