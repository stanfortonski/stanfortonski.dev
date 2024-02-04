import { createContext, useContext, ReactNode } from 'react';

export type AppContextType = {
    locale: 'pl' | 'en';
};

export type AppContextProps = AppContextType & { children: ReactNode };

export const AppContext = createContext<AppContextType>({ locale: 'en' });

export const AppContextProvider = ({ locale, children }: AppContextProps) => {
    return <AppContext.Provider value={{ locale }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    return useContext(AppContext);
};
