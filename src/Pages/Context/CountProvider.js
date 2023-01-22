import React, { createContext, useState } from 'react';


export const CounterContext = createContext();

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const value = {
        count, setCount
    }
    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    );
};

export default CountProvider;