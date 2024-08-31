import { Checkbox, FormControlLabel } from '@mui/material';
import RText, { TextProps } from './RText';
import { CheckboxTextType } from '@/util/textType';


export type CheckboxProps = {
  isCheck?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textprops?: Omit<TextProps, 'text'> & { text: CheckboxTextType };
};

const ACheckbox = ({ isCheck, onChange, textprops }: CheckboxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={isCheck} onChange={onChange} />}
      label={<RText {...textprops} />}
      sx={{ cursor: 'pointer', userSelect: 'none' }}
    />
  );
};

export default ACheckbox;
