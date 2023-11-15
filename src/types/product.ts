import { Nutrients } from "./food";

export interface Product {
  id: number;
  name: string;
  imageSrc: string;
  barcodeNumber: number;
  largeCategory: string;
  mediumCategory: string;
  smallCategory: string;
  xSmallCategory: string;
}

export interface ProductWithDetails extends Product {
  displayName: string;
  nutrients: Nutrients;
  totalWeight?: number;
}
