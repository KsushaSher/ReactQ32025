'use client';
// import type { Metadata } from 'next';
import s from '../pages/Layout/Layout.module.scss';
import '../styles/main.scss';
import { NavigationLinks } from '../components/NavigationLinks';
import ThemeButton from '../components/ThemeButton';
// import { App } from './page';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import React from 'react';
// import ThemeProvider from '../components/Context';

// export const metadata: Metadata = {
//   title: 'REACTQ32025',
//   description: 'My App is a...',
// };

const Layout = /* async */ ({
  children,
  character,

  ...rest
}: {
  children: React.ReactNode;
  character: React.ReactNode;
}) => {
  // const theme = useTheme();
  console.log({ children, character, rest });

  return (
    <html>
      <body>
        <div className={`wrapper-app ${'light'}`} data-testid="wrapper-app">
          <Provider store={store}>
            {/* <ThemeProvider> */}
            <header className={s.header}>
              <div className={s.wrapper}>
                <nav className={s.wrapper}>
                  <NavigationLinks />
                </nav>
                <ThemeButton />
              </div>
            </header>

            <React.Fragment key={'character'}>{character}</React.Fragment>
            <React.Fragment key={'children'}>{children}</React.Fragment>

            {/* </ThemeProvider> */}
          </Provider>
        </div>
      </body>
    </html>
  );
};

export default Layout;
