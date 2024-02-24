import React from 'react';
import { Button, Stack } from '@mui/material';
import IntroImage from '../../assets/images/divDoc.jpeg';
import Image from 'next/image';

const Intro = () => (
  <Stack className="w-full h-full row gap-4 p-5 bg-slate-900">
    <div className="h-3/5 flex justify-center">
      <Image src={IntroImage} alt="intro" width={300} height={300} />
    </div>
    <Button
      variant="contained"
      style={{
        backgroundColor: 'black',
        padding: '0.5rem',
        margin: '0 1rem',
      }}
    >
      시작하기
    </Button>
    <Button
      variant="outlined"
      style={{
        color: 'black',
        borderColor: 'black',
        padding: '0.5rem',
        margin: '0 1rem',
      }}
    >
      친구 MBTI 보기
    </Button>
  </Stack>
);

export default Intro;
