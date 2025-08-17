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
import ThemeProvider from '../../components/Context';

export const metadata: Metadata = {
  title: 'REACTQ32025',
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
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="light">
      <body>
        <NextIntlClientProvider>
          <div className="wrapper-app" data-testid="wrapper-app">
            <StoreProvider>
              <ThemeProvider>
                <header className={s.header}>
                  <div className={s.wrapper}>
                    <nav className={s.wrapper}>
                      <NavigationLinks />
                    </nav>
                    <ThemeButton />
                    <LanguageButton />
                  </div>
                </header>
                {character}
                {/* <React.Fragment key={'character'}>{character}</React.Fragment> */}
                {/* <React.Fragment key={'children'}>{children}</React.Fragment> */}
                {children}
              </ThemeProvider>
            </StoreProvider>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
