'use client';

import { useState } from 'react';
import { usePathname, useRouter } from '../../i18n/navigation';
import { useLocale } from 'next-intl';
import React from 'react';

const LanguageButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [locale, setLocale] = useState(currentLocale);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;

    if (language !== locale) {
      setLocale(language);
      router.push(pathname, { locale: language });
    }
  };

  return (
    <select
      className="button light-btn"
      value={locale}
      onChange={handleChange}
      onMouseDown={(e) => e.stopPropagation()}
      name="select"
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
};

export default LanguageButton;
