import React from 'react';
import {
  BsStarFill,
  BsStar,
} from 'react-icons/bs';

export function RenderStarsComponent({ rating, size }) {
  switch (rating) {
    case 5:
      return (
        <div>
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
        </div>
      );

    case 4:
      return (
        <div>
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
        </div>
      );

    case 3:
      return (
        <div>
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
        </div>
      );
    case 2:
      return (
        <div>
          <BsStarFill color="#f2be17" size={size} />
          <BsStarFill color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
        </div>
      );

    case 1:
      return (
        <div>
          <BsStarFill color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
        </div>
      );

    default:
      return (
        <div>
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
          <BsStar color="#f2be17" size={size} />
        </div>
      );
  }
}
