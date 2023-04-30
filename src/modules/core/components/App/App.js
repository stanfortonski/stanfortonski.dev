import React, { createContext, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';

import messages from '../../../../lang/messages';
import '../../styles/global.css';

const AppContext = createContext();

export const App = ({ locale, children }) => {
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <AppContext.Provider values={{ locale }}>
                {children}
                <ToastContainer />
            </AppContext.Provider>
        </IntlProvider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
