export interface ReviewData {
  reviewId: number;
  reviewAuthorId: number;
  reviewContent: string;
  reviewRating: number;
  reviewDate: string;
  reviewGallery: string[];
  reviewReact: Record<ReactType, number>;
}
type ReactType = 'useful' | 'funny' | 'cool';
export const review_data: ReviewData[] = [
  {
    reviewId: 1,
    reviewAuthorId: 1,
    reviewContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus porttitor nisl, sit amet finibus libero ultricies tincidunt. Sed fringilla, felis id sollicitudin finibus, nisi mauris accumsan orci, eu blandit eros velit quis diam. Integer eget eros id ipsum aliquam vestibulum.',
    reviewRating: 5.5,
    reviewDate: 'April 24, 2020 12:06 am',
    reviewGallery: ['https://picsum.photos/id/1/200/200', 'https://picsum.photos/id/2/200/200'],
    reviewReact: {
      useful: 1,
      funny: 3,
      cool: 2,
    },
  },
  {
    reviewId: 2,
    reviewAuthorId: 2,
    reviewContent:
      'Sed1 fringilla, felis id sollicitudin finibus, nisi mauris accumsan orci, eu blandit eros velit quis diam. Integer eget eros id ipsum aliquam vestibulum.',
    reviewRating: 5.5,
    reviewDate: 'April 24, 2020 12:06 am',
    reviewGallery: ['https://picsum.photos/id/1/200/200', 'https://picsum.photos/id/2/200/200'],
    reviewReact: {
      useful: 1,
      funny: 1,
      cool: 2,
    },
  },
  {
    reviewId: 3,
    reviewAuthorId: 3,
    reviewContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta, nisl nisi consectetur nisi, euismod consectetur nisi nisi eget nisi. Nunc euismod, nisi eget consectetur porta',
    reviewRating: 5.5,
    reviewDate: 'April 24, 2020 12:06 am',
    reviewGallery: ['https://picsum.photos/id/1/200/200', 'https://picsum.photos/id/2/200/200'],
    reviewReact: {
      useful: 1,
      funny: 3,
      cool: 2,
    },
  },
];
