export type PricingType = 'basic' | 'professional' | 'bussiness';

export interface PricingDatas {
  type: PricingType;
  price: string;
  description: string;
  activeOption: string[];
  deactiveOption: string[];
}
