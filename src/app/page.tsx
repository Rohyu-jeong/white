'use client';

import ACheckbox from '@/components/atom/ACheckbox';
import RText from '@/components/atom/RText';
import TextualControlGroup from '@/components/molecules/TextualControlGroup';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <main className="flex min-h-screen flex-col p-3 gap-10">
      <div>
        <RText text="할인적용" size="large" />
        <ACheckbox textprops={{ text: '일반세척', size: 'large' }} />
      </div>
      <TextualControlGroup
        component="RIcon"
        preveprops={{ icon: <HomeIcon /> }}
        textprops={{ text: '할인적용', size: 'medium' }}
      />
      <TextualControlGroup
        component="RCheckbox"
        preveprops={{ isCheck: isChecked, onChange: () => setIsChecked(!isChecked) }}
        textprops={{ text: '특이사항', size: 'medium' }}
      />
      <TextualControlGroup textprops={{ text: '건조기', size: 'large' }} />
    </main>
  );
};

export default Home;
