import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

interface IconFontProps {
  type: string;
  className?: string;
}

const XIcon: React.SFC<IconFontProps> = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2024452_02tul6sizoy9.js',
});

export default XIcon;
