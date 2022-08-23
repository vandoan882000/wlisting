import { AuthorInfoMini } from 'components/AuthorInfoMini/AuthorInfoMini';
import { DropDownItem } from 'components/DropDownItem/DropDownItem';
import { Rate1 } from 'components/Rate1/Rate1';
import { StatusButton } from 'components/StatusButton/StatusButton';
import { review_data, ReviewData } from 'data/review_data';
import { User, users_data } from 'data/users_data';
import React, { FC } from 'react';

interface ReviewCardProps {
  reviewId: number;
}
export const ReviewCard: FC<ReviewCardProps> = ({ reviewId }) => {
  const getReview = (reviewId: number) => {
    const review = review_data.find((review: ReviewData) => review.reviewId === reviewId);
    return review ? review : review_data[0];
  };
  const review = getReview(reviewId);
  const getAuthor = (userId: number) => {
    const user = users_data.find((user: User) => user.userId === userId);
    return user ? user : users_data[0];
  };
  const authorInfo = getAuthor(review.reviewAuthorId);
  return (
    <div className="flex flex-col py-22 border-b-1 border-gray3">
      <div className="flex justify-between items-center">
        <AuthorInfoMini name={authorInfo.userName} avatar={authorInfo.userAvatar} size={50} fontSize={13} detail={true} />
        <div className="flex">
          <div className="flex flex-col">
            <Rate1>{review.reviewRating}</Rate1>
            <div className="text-gray6 text-13 font-normal">{review.reviewDate}</div>
          </div>
          <div className="flex">
            <DropDownItem>
              <div className="px-10 pt-2">
                <i className="far fa-ellipsis-v"></i>
              </div>
            </DropDownItem>
          </div>
        </div>
      </div>
      <div className="text-14 font-normal text-gray6 mt-10">{review.reviewContent}</div>
      <div className="flex justify-start">
        <StatusButton text="Useful">
          <i className="fal fa-thumbs-up"></i>
        </StatusButton>
        <StatusButton text="Useful">
          <i className="fal fa-thumbs-up"></i>
        </StatusButton>
        <StatusButton text="Useful">
          <i className="fal fa-thumbs-up"></i>
        </StatusButton>
      </div>
    </div>
  );
};
