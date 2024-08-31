import HomeIcon from '@mui/icons-material/Home';
import TextualControlGroup from './TextualControlGroup';

const meta = {
  title: 'molecules/TextualControlGroup',
  component: TextualControlGroup,
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: {
        type: 'select',
        options: ['RIcon', 'RCheckbox'],
      },
    },
    preveprops: {
      control: 'object',
    },
    textprops: {
      control: 'object',
    },
  },
};

export default meta;

export const Primary = {
  args: {
    component: 'RIcon',
    preveprops: {
      icon: <HomeIcon />,
    },
    textprops: { text: 'Sample Text' },
  },
};

export const TextOnly = {
  args: {
    component: undefined,  // Component를 설정하지 않음
    preveprops: undefined,  // prevProps도 설정하지 않음
    textprops: { text: 'Text Only' },  // 텍스트만 설정
  },
};
