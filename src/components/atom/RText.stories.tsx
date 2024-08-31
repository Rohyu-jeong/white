import RText from './RText';

const meta = {
  title: 'atom/RText',
  component: RText,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: {
        type: 'select',
        options: [
          '종합세척',
          '일반세척',
          '할인적용',
          '벽걸이',
          '원웨이',
          '포웨이',
          '스탠드',
          '투인원',
          '원형 360',
          '파세코 창문형',
          '사각 덕트',
          '원형 덕트',
          '메인 덕트',
          '일반 실외기',
          '대형 실외기',
          '통돌이',
          '드럼',
          '건조기',
          '트윈워시',
          '통돌이형 아기사랑 세탁기',
          '드럼형 아기사랑 세탁기',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      },
    },
  },
};

export default meta;

export const Primary = {
  args: {
    text: '종합세척', // 기본 텍스트 값
    size: 'medium',  // 기본 크기 값
  },
};
