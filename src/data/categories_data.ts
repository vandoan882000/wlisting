export interface CategoryData {
  category_id: number;
  category_name: string;
  category_icon: string;
  category_count: number;
  category_color: string;
  category_link: string;
}
export const categories_data: CategoryData[] = [
  {
    category_id: 1,
    category_name: 'Restaurant',
    category_icon: 'fas fa-utensils-alt',
    category_count: 20,
    category_color: '#f95476',
    category_link: '#',
  },
  {
    category_id: 2,
    category_name: 'Destination',
    category_icon: 'far fa-map-marker-alt',
    category_count: 20,
    category_color: '#2dde98',
    category_link: '#',
  },
  {
    category_id: 3,
    category_name: 'Hotel',
    category_icon: 'far fa-bed-alt',
    category_count: 20,
    category_color: '#5353c5',
    category_link: '#',
  },
  {
    category_id: 4,
    category_name: 'Shopping',
    category_icon: 'far fa-shopping-cart',
    category_count: 20,
    category_color: '#ffc20e',
    category_link: '#',
  },
];
