export interface ListingCardData {
  listingId: number;
  listingTitle: string;
  listingAddress: string;
  listingCategoryId: number;
  listingUserId: number;
  listingRatingScore: number;
  listingLink: string;
  isInWishlist: boolean;
  listingDescription: string;
  listingAmenitiesIds: number[];
  listingGallery: ListingImage[];
  listingOpenStatus: ListingDateStatus[];
  listingMaxPrice: string;
  listingMinPrice: string;
  listingReviewsIds: number[];
}
export interface ListingImage {
  listingImageName: string;
  listingImageUrl: string;
}
export type ListingDate = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
export interface ListingDateStatus {
  listingDayId: number;
  listingDate: ListingDate;
  listingOpenTime: string;
  listingCloseTime: string;
  listingOpenStatus: boolean;
}
export const listings_data: ListingCardData[] = [
  {
    listingId: 1,
    listingTitle: 'Westfield Sydney',
    listingAddress: '188 Pitt St, Sydney NSW 2000, Australia',
    listingCategoryId: 1,
    listingUserId: 1,
    listingRatingScore: 9.5,
    listingLink: '/listing/1',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/8729211/pexels-photo-8729211.jpeg?cs=srgb&dl=pexels-katya-wolf-8729211.jpg&w=500&fm=jpg',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$90',
    listingMinPrice: '$30',
    listingReviewsIds: [1, 2, 3],
  },
  {
    listingId: 2,
    listingTitle: 'The Lounge & Bar',
    listingAddress: 'The Ritz-Carlton, Hong Kong, West Kowloon,…',
    listingCategoryId: 2,
    listingUserId: 4,
    listingRatingScore: 6.5,
    listingLink: '/listing/2',
    isInWishlist: true,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/8729211/pexels-photo-8729211.jpeg?cs=srgb&dl=pexels-katya-wolf-8729211.jpg&w=500&fm=jpg',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
  {
    listingId: 3,
    listingTitle: 'Bakery Babies',
    listingAddress: 'Manchester City Hall, 1 City Hall Plz, Manches…',
    listingCategoryId: 3,
    listingUserId: 2,
    listingRatingScore: 4.1,
    listingLink: '/listing/3',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/1001780/pexels-photo-1001780.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1001780.jpg&w=500&fm=jpg',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
  {
    listingId: 4,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingAddress: 'The Savoy, Strand, London, UK',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '/listing/4',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1098365.jpg&w=500&fm=jpg',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
  {
    listingId: 5,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingAddress: 'The Savoy, Strand, London, UK',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '#',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1047051.jpg&w=500&fm=jpg',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
  {
    listingId: 6,
    listingTitle: 'Westfield Sydney',
    listingAddress: '188 Pitt St, Sydney NSW 2000, Australia',
    listingCategoryId: 1,
    listingUserId: 1,
    listingRatingScore: 9.5,
    listingLink: '#',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-fox-1595385.jpg&w=500&fm=jpg',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
  {
    listingId: 7,
    listingTitle: 'The Lounge & Bar',
    listingAddress: 'The Ritz-Carlton, Hong Kong, West Kowloon,…',
    listingCategoryId: 2,
    listingUserId: 4,
    listingRatingScore: 6.5,
    listingLink: '#',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?cs=srgb&dl=pexels-matheus-bertelli-573238.jpg&w=500&fm=jpg',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
  {
    listingId: 8,
    listingTitle: 'Bakery Babies',
    listingAddress: 'Manchester City Hall, 1 City Hall Plz, Manches…',
    listingCategoryId: 3,
    listingUserId: 2,
    listingRatingScore: 4.1,
    listingLink: '#',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/8728516/pexels-photo-8728516.jpeg?cs=srgb&dl=pexels-katya-wolf-8728516.jpg&w=500&fm=jpg',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
  {
    listingId: 9,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingAddress: 'The Savoy, Strand, London, UK',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '#',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/7936367/pexels-photo-7936367.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7936367.jpg&w=500&fm=jpg',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
  {
    listingId: 10,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingAddress: 'The Savoy, Strand, London, UK',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '#',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
    listingGallery: [
      {
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?cs=srgb&dl=pexels-kaique-rocha-109919.jpg&w=500&fm=jpg',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingOpenTime: '11:00',
        listingCloseTime: '21:00',
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
  },
];
