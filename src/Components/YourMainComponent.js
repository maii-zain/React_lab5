// YourMainComponent.js
import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import YourApiComponent from './YourApiComponent';

const YourMainComponent = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    // Call your API with the new language query
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('es')}>Spanish</button>

      {/* Your other components */}
      <YourApiComponent />
    </div>
  );
};

export default YourMainComponent;
