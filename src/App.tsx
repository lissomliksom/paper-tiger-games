import React from 'react';

import LogoSection from './components/LogoSection';
import ContentSection from './components/ContentSection';

const App = () => {
  return (
    <main className="flex h-screen">
      <LogoSection />
      <ContentSection />
    </main>
  );
}

export default App;
