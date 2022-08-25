import { Content2 } from 'components/Content2/Content2';
import { ImageInputFile } from 'components/ImageInputFile/ImageInputFile';
import { PopUp } from 'components/PopUp/PopUp';
import { Rate1 } from 'components/Rate1/Rate1';
import { Rate2 } from 'components/Rate2/Rate2';
import { Rating } from 'components/Rating/Rating';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';

export const ReviewPage = () => {
  const handleApply = () => {
    console.log('apply');
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <ReviewCard reviewId={1} />
          <ReviewCard reviewId={1} />
          <ReviewCard reviewId={1} />
        </div>
        <div className="col-lg-3">
          <Content2>
            <div className="flex items-center">
              <Rate1>7.5</Rate1>
              <div className="ml-5 text-gray6 font-normal text-18">120 Reviews</div>
            </div>
            <Rate2 title={'Check-in'} score={6.1} />
            <Rate2 title={'Accuracy'} score={8.2} />
            <Rate2 title={'Cleanliness'} score={4.4} />
            <Rate2 title={'Location'} score={5.5} />
          </Content2>
          <PopUp
            onApply={handleApply}
            toggleEl={
              <div className="w-100% py-11 flex justify-center items-center rounded-6 bg-primary text-light text-16 font-medium mt-20 cursor-pointer">
                Write a review
              </div>
            }
            title={'Write a review'}
          >
            <PopUp.Content>
              <div className="p-15">
                <Rating>Check-in</Rating>
                <Rating>Accuracy</Rating>
                <Rating>Cleanliness</Rating>
                <Rating>Location</Rating>
                <div className="text-14 text-gray8 font-medium">Message</div>
                <textarea className="w-100% rounded-4 border-1 border-gray4 h-95 mt-7" name="" id=""></textarea>
                <div className="text-14 text-gray8 font-medium mb-7">Image</div>
                <ImageInputFile />
              </div>
            </PopUp.Content>
          </PopUp>
        </div>
      </div>
    </div>
  );
};
