import React, { FC } from 'react';

interface AuthorInfoMiniProps {
  name: string;
  avatar: string;
  comment?: string;
  size: number;
  fontSize: number;
  detail?: boolean;
}
export const AuthorInfoMini: FC<AuthorInfoMiniProps> = ({ name, avatar, comment, size, detail = false, fontSize }) => {
  return (
    <div className="flex">
      <div className="relative bg-cover bg-center rounded-1/2 mr-12" style={{ width: `${size}px`, height: `${size}px` }}>
        <img className="absolute inset-0 w-100% h-100% top-0 left-0 object-cover rounded-1/2" src={avatar} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="font-medium text-gray8" style={{ fontSize: `${fontSize}px` }}>
            {name}
          </div>
          {comment && <div className="text-13 text-gray5 font-normal">{comment} </div>}
        </div>
        {detail && (
          <div className="flex items-center">
            <div className="text-14 font-normal text-gray6 mr-5">1203 Reviews</div>
            <i className="fas fa-circle text-gray6 text-3"></i>
            <div className="text-14 font-normal text-gray6 ml-5">12 Photos</div>
          </div>
        )}
      </div>
    </div>
  );
};
