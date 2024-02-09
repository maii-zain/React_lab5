// YourApiComponent.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from './LanguageContext';

const YourApiComponent = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Call your API with the updated language query
    const apiUrl = `https://api.example.com/data?lang=${language}`;

    axios.get(apiUrl)
      .then((response) => {
        // Handle the API response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, [language]);

  return (
    // Your component JSX
    <div>
      {/* Your component content */}
    </div>
  );
};

export default YourApiComponent;
