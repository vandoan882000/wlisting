export interface ListingCardData {
  listing_id: number;
  listing_title: string;
  listing_address: string;
  listing_image: string;
  listing_category_id: number;
  listing_user_id: number;
  listing_rating_score: number;
  listing_link: string;
  isOpen: boolean;
  isInWishlist: boolean;
  listingDescription: string;
  listingAmenitiesIds: number[];
}

export const listings_data: ListingCardData[] = [
  {
    listing_id: 1,
    listing_title: 'Westfield Sydney',
    listing_address: '188 Pitt St, Sydney NSW 2000, Australia',
    listing_image: 'https://images.pexels.com/photos/8729211/pexels-photo-8729211.jpeg?cs=srgb&dl=pexels-katya-wolf-8729211.jpg&w=500&fm=jpg',
    listing_category_id: 1,
    listing_user_id: 1,
    listing_rating_score: 9.5,
    listing_link: '/listing',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 2,
    listing_title: 'The Lounge & Bar',
    listing_address: 'The Ritz-Carlton, Hong Kong, West Kowloon,…',
    listing_image: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=pexels-sebastian-voortman-214574.jpg&w=500&fm=jpg',
    listing_category_id: 2,
    listing_user_id: 4,
    listing_rating_score: 6.5,
    listing_link: '#',
    isOpen: false,
    isInWishlist: true,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 3,
    listing_title: 'Bakery Babies',
    listing_address: 'Manchester City Hall, 1 City Hall Plz, Manches…',
    listing_image:
      'https://images.pexels.com/photos/1001780/pexels-photo-1001780.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1001780.jpg&w=500&fm=jpg',
    listing_category_id: 3,
    listing_user_id: 2,
    listing_rating_score: 4.1,
    listing_link: '#',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 4,
    listing_title: 'Protea Hotel Port Elizabeth Marine',
    listing_address: 'The Savoy, Strand, London, UK',
    listing_image:
      'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1098365.jpg&w=500&fm=jpg',
    listing_category_id: 4,
    listing_user_id: 3,
    listing_rating_score: 9.5,
    listing_link: '#',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 5,
    listing_title: 'Protea Hotel Port Elizabeth Marine',
    listing_address: 'The Savoy, Strand, London, UK',
    listing_image:
      'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1047051.jpg&w=500&fm=jpg',
    listing_category_id: 4,
    listing_user_id: 3,
    listing_rating_score: 9.5,
    listing_link: '#',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 6,
    listing_title: 'Westfield Sydney',
    listing_address: '188 Pitt St, Sydney NSW 2000, Australia',
    listing_image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-fox-1595385.jpg&w=500&fm=jpg',
    listing_category_id: 1,
    listing_user_id: 1,
    listing_rating_score: 9.5,
    listing_link: '#',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 7,
    listing_title: 'The Lounge & Bar',
    listing_address: 'The Ritz-Carlton, Hong Kong, West Kowloon,…',
    listing_image: 'https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?cs=srgb&dl=pexels-matheus-bertelli-573238.jpg&w=500&fm=jpg',
    listing_category_id: 2,
    listing_user_id: 4,
    listing_rating_score: 6.5,
    listing_link: '#',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 8,
    listing_title: 'Bakery Babies',
    listing_address: 'Manchester City Hall, 1 City Hall Plz, Manches…',
    listing_image: 'https://images.pexels.com/photos/8728516/pexels-photo-8728516.jpeg?cs=srgb&dl=pexels-katya-wolf-8728516.jpg&w=500&fm=jpg',
    listing_category_id: 3,
    listing_user_id: 2,
    listing_rating_score: 4.1,
    listing_link: '#',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 9,
    listing_title: 'Protea Hotel Port Elizabeth Marine',
    listing_address: 'The Savoy, Strand, London, UK',
    listing_image:
      'https://images.pexels.com/photos/7936367/pexels-photo-7936367.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7936367.jpg&w=500&fm=jpg',
    listing_category_id: 4,
    listing_user_id: 3,
    listing_rating_score: 9.5,
    listing_link: '#',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
  {
    listing_id: 10,
    listing_title: 'Protea Hotel Port Elizabeth Marine',
    listing_address: 'The Savoy, Strand, London, UK',
    listing_image: 'https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?cs=srgb&dl=pexels-kaique-rocha-109919.jpg&w=500&fm=jpg',
    listing_category_id: 4,
    listing_user_id: 3,
    listing_rating_score: 9.5,
    listing_link: '#',
    isOpen: true,
    isInWishlist: false,
    listingDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    listingAmenitiesIds: [1, 2],
  },
];
