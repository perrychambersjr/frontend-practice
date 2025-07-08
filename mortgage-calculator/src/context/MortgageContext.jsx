import { createContext, useContext, useMemo, useState } from 'react';

export const MortgageContext = createContext();

export const useMortgageContext = () => {
    const context = useContext(MortgageContext);
    if(!context) {
        throw new Error('useMortgageContext must be used within a MortgageContextProvider');
    }
    return context;
}

export const MortgageContextProvider = ({children}) => {
    const [formData, setFormData] = useState({});
    const [results, setResults] = useState({});

    return (
        <MortgageContext.Provider
            value={{ 
                formData, 
                setFormData,
                results
            }}
        >
            {children}
        </MortgageContext.Provider>
    )
}