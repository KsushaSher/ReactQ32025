import '../../styles/main.scss';
import React from 'react';
import StoreProvider from './StoreProvider';
import { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import ThemeProvider from '../../components/Context';
import Header from '../../components/Header';

export const metadata: Metadata = {
  title: 'REACTQ32025',
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
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
          <StoreProvider>
            <ThemeProvider>
              <div className="wrapper-app" data-testid="wrapper-app">
                <Header />
                {children}
              </div>
            </ThemeProvider>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
