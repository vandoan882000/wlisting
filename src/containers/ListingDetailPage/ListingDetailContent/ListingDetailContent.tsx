import { MiniCategory } from 'components/MiniCategory/MiniCategory';

import { AmenitiesCards } from '../AmenitiesCards/AmenitiesCards';

export default function ListingDetailContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 pb-30">
          <MiniCategory category_color="#000000" category_icon="far fa-heart" category_link="#" textColor="#000000" category_name="Home" />
          <div className="text-gray8 text-28 font-medium">Explore Downtown New York from a Hip Apartment</div>
          <div className="text-gray6 text-16 font-normal">Rego Park Queens, NY, USA</div>
          <div className="text-22 font-medium text-gray8">Description</div>
          <div className="text-14 font-normal text-gray6">
            Praesent pellentesque fringilla ante. Sed id nibh a sem facilisis semper. Nullam in tristique tellus, pretium dignissim mauris. Duis
            tincidunt, massa vel tempus accumsan, justo lorem vestibulum dui, quis interdum dolor libero sed justo. Vestibulum in ante eu libero
            volutpat auctor et ac tellus. Fusce semper, orci a egestas porttitor, dolor augue porta risus, consectetur sollicitudin velit mauris eget
            metus. Phasellus varius ultrices risus.
          </div>
          <div className="text-22 font-medium text-gray8">Amenities</div>
          <AmenitiesCards />
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}
