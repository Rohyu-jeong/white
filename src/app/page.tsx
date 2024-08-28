'use client';

import RButtonC from '@/components/atom/RButtonC';
import RCheckbox from '@/components/atom/RCheckbox';
import RIcon from '@/components/atom/RIcon';
import RInputText from '@/components/atom/RInputText';
import RText from '@/components/atom/RText';
import TextualControlGroup from '@/components/molecules/TextualControlGroup';
import { ShoppingCart } from '@mui/icons-material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col p-3 gap-10">
      <RText text="가나다라" />
      <RCheckbox />
      <RIcon component={LocalShippingIcon} />
      <RInputText />
      <RButtonC content="임시" />

      {/* Checkbox with text */}
      <TextualControlGroup
        component="RCheckbox"
        controlprops={{ isCheck: false, onChange: () => alert('Checkbox clicked!') }}
        textprops={{ text: 'Accept Terms' }}
      />

      {/* Icon with text */}
      <TextualControlGroup
        component="RIcon"
        controlprops={{ component: ShoppingCart }}
        textprops={{ text: 'Add to Cart' }}
      />
  {/* <TextualControlGroup
  textprops={{ text: 'Just Text' }}
/> */}

    </main>
  );
};

export default Home;
