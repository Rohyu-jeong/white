import { sizes } from '@/styles/sizes';
import { TextType } from '@/util/textType';
import { Typography } from '@mui/material';


export type TextProps = {
  text?: TextType;
  size?: keyof typeof sizes.fontSize;
};

const RText = ({ text, size = 'medium' }: TextProps) => {
  return <Typography sx={{ fontSize: sizes.fontSize[size] }}>{text}</Typography>;
};

export default RText;
