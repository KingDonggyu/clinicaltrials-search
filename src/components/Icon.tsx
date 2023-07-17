import { ImgHTMLAttributes } from 'react';
import searchIconSrc from 'assets/search.svg';

export function SearchIcon({ ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={searchIconSrc} {...props} />;
}
