import s from '../../pages/Layout/Layout.module.scss';
import '../../styles/main.scss';
import { NavigationLinks } from '../../components/NavigationLinks';
import ThemeButton from '../../components/ThemeButton';
import React from 'react';
import StoreProvider from './StoreProvider';
import { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import LanguageButton from '../../components/LanguageButton';

export const metadata: Metadata = {
  title: 'REACTQ32025',
  description: 'My App is a...',
};

export default async function Layout({
  children,
  character,
  params,
}: {
  children: React.ReactNode;
  character: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // const theme = useTheme();
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <div className={`wrapper-app ${'light'}`} data-testid="wrapper-app">
            <StoreProvider>
              {/* <ThemeProvider> */}
              <header className={s.header}>
                <div className={s.wrapper}>
                  <nav className={s.wrapper}>
                    <NavigationLinks />
                  </nav>
                  <ThemeButton />
                  <LanguageButton />
                </div>
              </header>

              <React.Fragment key={'character'}>{character}</React.Fragment>
              <React.Fragment key={'children'}>{children}</React.Fragment>

              {/* </ThemeProvider> */}
            </StoreProvider>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
