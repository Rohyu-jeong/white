import { Checkbox } from '@mui/material';
import { TextProps } from './RText';
import { CheckboxTextType } from '@/util/textType';

export type CheckboxProps = {
  isCheck?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RCheckbox = ({ isCheck, onChange }: CheckboxProps) => {
  return <Checkbox checked={isCheck} onChange={onChange} sx={{ padding: "0" }} />;
};

export default RCheckbox;
