import { ListingCardData } from 'types/Listing';

export const listings_data: ListingCardData[] = [
  {
    listingId: 1,
    listingTitle: 'Westfield Sydney',
    listingCategoryId: 1,
    listingUserId: 1,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=1',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/13398530/pexels-photo-13398530.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Full Kitchen',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Full Kitchen',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Bedroom',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 7,
        listingImageName: 'Bedroom',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 8,
        listingImageName: 'Bedroom',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$90',
    listingMinPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: '188 Pitt St, Sydney NSW 2000, Australia',
        longName: 'Sydney',
      },
      {
        lat: 59.855413,
        lng: 31.337844,
        address: '189 Pitt St, Sydney NSW 2000, Australia',
        longName: 'Sydney',
      },
      {
        lat: 59.905413,
        lng: 32.337844,
        address: '190 Pitt St, Sydney NSW 2000, Australia',
        longName: 'Sydney',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: true,
    listingAds: false,
    listingLocationId: 1,
    listingTemplate: 1,
  },
  {
    listingId: 2,
    listingTitle: 'The Lounge & Bar',
    listingCategoryId: 2,
    listingUserId: 4,
    listingRatingScore: 6.5,
    listingLink: '/detail/id=2',
    isInWishlist: true,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/8729211/pexels-photo-8729211.jpeg?cs=srgb&dl=pexels-katya-wolf-8729211.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.995413,
        lng: 30.317844,
        address: 'The Ritz-Carlton, Hong Kong, West Kowloon,…',
        longName: 'Hong Kong',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: true,
    listingLocationId: 2,
    listingTemplate: 2,
  },
  {
    listingId: 3,
    listingTitle: 'Bakery Babies',
    listingCategoryId: 3,
    listingUserId: 2,
    listingRatingScore: 4.1,
    listingLink: '/detail/id=3',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/1001780/pexels-photo-1001780.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1001780.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.995413,
        lng: 30.397844,
        address: 'Manchester City Hall, 1 City Hall Plz, Manches…',
        longName: 'Brooklyn',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 1,
    listingTemplate: 2,
  },
  {
    listingId: 4,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingCategoryId: 3,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=4',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1098365.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 61.955413,
        lng: 32.337844,
        address: 'The Savoy, Strand, London, UK',
        longName: 'London',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 1,
    listingTemplate: 3,
  },
  {
    listingId: 5,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=5',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1047051.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 40.955413,
        lng: 35.337844,
        address: 'The Savoy, Strand, London, UK',
        longName: 'London',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 1,
    listingTemplate: 1,
  },
  {
    listingId: 6,
    listingTitle: 'Westfield Sydney',

    listingCategoryId: 1,
    listingUserId: 1,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=6',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-fox-1595385.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: '188 Pitt St, Sydney NSW 2000, Australia',
        longName: 'Sydney',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 2,
    listingTemplate: 3,
  },
  {
    listingId: 7,
    listingTitle: 'The Lounge & Bar',
    listingCategoryId: 2,
    listingUserId: 4,
    listingRatingScore: 6.5,
    listingLink: '/detail/id=7',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?cs=srgb&dl=pexels-matheus-bertelli-573238.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: 'The Ritz-Carlton, Hong Kong, West Kowloon,…',
        longName: 'Hong Kong',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 2,
    listingTemplate: 4,
  },
  {
    listingId: 8,
    listingTitle: 'Bakery Babies',

    listingCategoryId: 3,
    listingUserId: 2,
    listingRatingScore: 4.1,
    listingLink: '/detail/id=8',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/8728516/pexels-photo-8728516.jpeg?cs=srgb&dl=pexels-katya-wolf-8728516.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: 'Manchester City Hall, 1 City Hall Plz, Manches…',
        longName: 'Kings',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 3,
    listingTemplate: 1,
  },
  {
    listingId: 9,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=9',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/7936367/pexels-photo-7936367.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7936367.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: 'The Savoy, Strand, London, UK',
        longName: 'London',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 3,
    listingTemplate: 2,
  },
  {
    listingId: 10,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=10',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?cs=srgb&dl=pexels-kaique-rocha-109919.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: 'The Savoy, Strand, London, UK',
        longName: 'London',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 4,
    listingTemplate: 1,
  },

  {
    listingId: 11,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=11',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1047051.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 40.955413,
        lng: 35.337844,
        address: 'The Savoy, Strand, London, UK',
        longName: 'New York',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 1,
    listingTemplate: 3,
  },
  {
    listingId: 12,
    listingTitle: 'Westfield Sydney',

    listingCategoryId: 1,
    listingUserId: 1,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=12',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-fox-1595385.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: '188 Pitt St, New York NSW 2000, Australia',
        longName: 'New York',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 2,
    listingTemplate: 3,
  },
  {
    listingId: 13,
    listingTitle: 'The Lounge & Bar',
    listingCategoryId: 2,
    listingUserId: 4,
    listingRatingScore: 6.5,
    listingLink: '/detail/id=13',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?cs=srgb&dl=pexels-matheus-bertelli-573238.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: 'The Ritz-Carlton, Paris, West Kowloon,…',
        longName: 'Paris',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 2,
    listingTemplate: 1,
  },
  {
    listingId: 14,
    listingTitle: 'Bakery Babies',
    listingCategoryId: 3,
    listingUserId: 2,
    listingRatingScore: 4.1,
    listingLink: '/detail/id=14',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/8728516/pexels-photo-8728516.jpeg?cs=srgb&dl=pexels-katya-wolf-8728516.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: 'Manchester City Hall, 1 San Francisco, Manches…',
        longName: 'San Francisco',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 3,
    listingTemplate: 1,
  },
  {
    listingId: 15,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=15',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl:
          'https://images.pexels.com/photos/7936367/pexels-photo-7936367.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7936367.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: 'The Savoy, Strand, Egypt, UK',
        longName: 'Egypt',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 3,
    listingTemplate: 4,
  },
  {
    listingId: 16,
    listingTitle: 'Protea Hotel Port Elizabeth Marine',
    listingCategoryId: 4,
    listingUserId: 3,
    listingRatingScore: 9.5,
    listingLink: '/detail/id=16',
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    listingGallery: [
      {
        listingImageId: 1,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?cs=srgb&dl=pexels-kaique-rocha-109919.jpg&w=500&fm=jpg',
      },
      {
        listingImageId: 2,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 3,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 4,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        listingImageId: 5,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        listingImageId: 6,
        listingImageName: 'Living Room',
        listingImageUrl: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    listingOpenStatus: [
      {
        listingDayId: 1,
        listingDate: 'Mon',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 2,
        listingDate: 'Tue',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 3,
        listingDate: 'Wed',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 4,
        listingDate: 'Thu',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 5,
        listingDate: 'Fri',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 6,
        listingDate: 'Sat',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: true,
      },
      {
        listingDayId: 0,
        listingDate: 'Sun',
        listingDateTime: [
          {
            start: '11:00',
            end: '21:00',
          },
        ],
        listingOpenStatus: false,
      },
    ],
    listingMaxPrice: '$30',
    listingReviewsIds: [1, 2, 3],
    listingMinPrice: '$90',
    listingLocations: [
      {
        lat: 59.955413,
        lng: 30.337844,
        address: 'The Savoy, Strand, Greek, UK',
        longName: 'Greek',
      },
    ],
    listingEmail: 'wiloke@gmail.com',
    listingPhone: '0123456789',
    listingSocials: [
      {
        name: 'facebook',
        value: 'https://facebook.com',
      },
      {
        name: 'switter',
        value: 'https://switter.com',
      },
      {
        name: 'tumblr',
        value: 'https://tumblr.com',
      },
      {
        name: 'flickr',
        value: 'https://flickr.com',
      },
    ],
    listingVerify: false,
    listingAds: false,
    listingLocationId: 4,
    listingTemplate: 1,
  },
];
