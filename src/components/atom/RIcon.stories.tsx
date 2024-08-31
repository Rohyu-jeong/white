import HomeIcon from '@mui/icons-material/Home';
import RIcon from "./RIcon";

const meta = {
  title: 'atom/RIcon',
  component: RIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'object',
    },
  },
};

export default meta;

export const Primary = {
  args: {
    icon: <HomeIcon />,
  },
};
