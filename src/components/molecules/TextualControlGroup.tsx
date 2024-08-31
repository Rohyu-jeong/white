import React from 'react';
import RCheckbox, { CheckboxProps } from '../atom/RCheckbox';
import RIcon, { IconProps } from '../atom/RIcon';
import RText, { TextProps } from '../atom/RText';
import { Box } from '@mui/material';

type ComponentType = 'RIcon' | 'RCheckbox';
type PrevProps = CheckboxProps | IconProps;

type TextualControlGroupProps = {
  component?: ComponentType;
  preveprops?: PrevProps;
  textprops?: TextProps;
};

// type TextualControlGroupProps = {
//   component: 'RCheckbox';
//   preveprops: CheckboxProps;
//   textprops: Omit<TextProps, 'text'> & { text: CheckboxTextType };
// } | {
//   component: 'RIcon';
//   preveprops: IconProps;
//   textprops: TextProps;
// };

// 컴포넌트 매핑
const componentsMap = {
  RIcon,
  RCheckbox,
};

const TextualControlGroup = ({ component, preveprops, textprops }: TextualControlGroupProps) => {
  // 선택된 컴포넌트 가져오기
  const Component = component ? componentsMap[component] : null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems:'center', gap: '10px' }}>
      {Component && <Component {...preveprops} />}
      <RText {...textprops} />
    </Box>
  );
};

export default TextualControlGroup;


