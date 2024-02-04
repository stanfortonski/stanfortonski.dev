import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';

import { type AppContextProps, AppContextProvider } from '@/modules/core/contexts/AppContext';
import { messages } from '@/lang/messages';

import '@/modules/ui/styles/global.css';

export const App = ({ locale, children }: AppContextProps) => {
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <AppContextProvider locale={locale}>
                {children}
                <ToastContainer />
            </AppContextProvider>
        </IntlProvider>
    );
};
