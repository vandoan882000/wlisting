import { Avatar } from 'components/Avatar/Avatar';
import { Popover } from 'components/Popover/Popover';
import { Rate1 } from 'components/Rate1/Rate1';
import { ReviewGallery } from 'components/ReviewGallery/ReviewGallery';
import { StatusButton } from 'components/StatusButton/StatusButton';
import { review_data, ReviewData } from 'data/review_data';
import { users_data } from 'data/users_data';
import { FC } from 'react';
import { User } from 'types/User';

interface ReviewCardProps {
  listingId: number;
  listingTitle: string;
  reviewId: number;
}
export const ReviewCard: FC<ReviewCardProps> = ({ reviewId, listingId, listingTitle }) => {
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
    <div className="flex flex-col py-22">
      <div className="flex justify-between items-center flex-wrap">
        <Avatar
          name={authorInfo.userName}
          avatar={authorInfo.userAvatar}
          variant="variant2"
          size={50}
          fontSize={13}
          detail={true}
          userQuantityReviews={authorInfo.userQuantityReviews}
          userQuantityPhotos={authorInfo.userQuantityPhotos}
        />
        <div className="flex flex-wrap">
          <div className="flex flex-col">
            <span>
              <Rate1>{review.reviewRating.toFixed(1)}</Rate1>
            </span>
            <span className="text-gray6 text-13 font-normal">{review.reviewDate}</span>
          </div>
          <div className="flex">
            <Popover title="" variant="variant2" placement="bottom-end">
              <Popover.Toggle>
                <div className="px-10 pb-5">
                  <i className="far fa-ellipsis-v"></i>
                </div>
              </Popover.Toggle>
              <Popover.Content>
                <div className="flex flex-col rounded-10 py-9 bg-light z-100">
                  <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                    <span className="flex items-center w-26">
                      <i className="far fa-pen text-12 text-gray5"></i>
                    </span>
                    <span className="text-13 font-normal text-gray8 whitespace-nowrap">Edit</span>
                  </div>
                  <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                    <span className="flex items-center w-26">
                      <i className="far fa-star text-12 text-gray5"></i>
                    </span>
                    <span className="text-13 font-normal text-gray8 whitespace-nowrap">Write a review</span>
                  </div>
                  <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                    <span className="flex items-center w-26">
                      <i className="far fa-trash-alt text-12 text-gray5"></i>
                    </span>
                    <span className="text-13 font-normal text-gray8 whitespace-nowrap">Delete</span>
                  </div>
                  <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                    <span className="flex items-center w-26">
                      <i className="far fa-flag text-12 text-gray5"></i>
                    </span>
                    <span className="text-13 font-normal text-gray8 whitespace-nowrap">Report</span>
                  </div>
                </div>
              </Popover.Content>
            </Popover>
          </div>
        </div>
      </div>
      <div className="text-14 font-normal text-gray6 mt-10 line-clamp-3">{review.reviewContent}</div>
      <ReviewGallery gallery={review.reviewGallery} listingId={listingId} listingTitle={listingTitle} />
      <div className="flex flex-wrap">
        <StatusButton text="Useful" quantity={review.reviewReact.useful}>
          <img className="min-w-20" src="/assets/useful.png" alt="" />
        </StatusButton>
        <StatusButton text="Funny" quantity={review.reviewReact.funny}>
          <img className="min-w" src="/assets/funny.png" alt="" />
        </StatusButton>
        <StatusButton text="Cool" quantity={review.reviewReact.cool}>
          <img className="min-w-20" src="/assets/cool.png" alt="" />
        </StatusButton>
      </div>
    </div>
  );
};
