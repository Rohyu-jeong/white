import { Button } from '@mui/material';

export type ButtonProps = {
  content?: React.ReactNode;  // Icon + Text를 받을 수 있도록 ReactNode로 타입 설정
  sx?: object;  // 추가적인 스타일을 위한 sx prop
};

const RButtonC = ({ content, sx }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: '55px',
        minWidth: '150px',
        width: 'auto',
        maxWidth: 'fit-content',
        textTransform: 'none',
        whiteSpace: 'nowrap',
      }}
    >{content}</Button>
  );
};

export default RButtonC;
