export interface ListingCardData {
  /**
   * Listing card id
   */
  listingId: number;
  /**
   * Listing card title
   */
  listingTitle: string;
  /**
   * listing card category id
   */
  listingCategoryId: number;
  /**
   * listing card user id
   */
  listingUserId: number;
  /**
   * listing card point rating
   */
  listingRatingScore: number;
  /**
   * listing card link view
   */
  listingLink: string;
  /**
   * listing cart is in wish list
   */
  isInWishlist: boolean;
  /**
   * listing card description
   */
  listingDescription: string;
  /**
   * array amenities id in listing
   */
  listingAmenitiesIds: number[];
  /**
   * listing gallery image
   */
  listingGallery: ListingImage[];
  /**
   * listing time open
   */
  listingOpenStatus: ListingDateStatus[];
  /**
   * listing max price
   */
  listingMaxPrice: string;
  /**
   * listing min price
   */
  listingMinPrice: string;
  /**
   * array review id
   */
  listingReviewsIds: number[];
  listingSocials: ListingSocial[];
  listingEmail: string;
  listingPhone: string;
  listingLocations: ListingLocation[];
  listingVerify: boolean;
  listingAds: boolean;
  listingLocationId: number;
  listingTemplate: number;
}

export interface ListingLocation {
  lat: number;
  lng: number;
  address: string;
  longName: string;
}

type Social = 'facebook' | 'switter' | 'tumblr' | 'flickr';
export interface ListingSocial {
  name: Social;
  value: string;
}
export interface ListingImage {
  /**
   * listing image id
   */
  listingImageId: number;
  /**
   * listing image name
   */
  listingImageName: string;
  /**
   * listing image url
   */
  listingImageUrl: string;
}
/**
 * Date in a week
 */
export type ListingDate = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
/**
 * Listing Date Status
 */
export interface Time {
  start: string;
  end: string;
}
export interface ListingDateStatus {
  /**
   * Day id
   */
  listingDayId: number;
  /**
   * listing Date
   */
  listingDate: ListingDate;
  listingDateTime: Time[];
  /**
   * open status
   */
  listingOpenStatus: boolean;
}
