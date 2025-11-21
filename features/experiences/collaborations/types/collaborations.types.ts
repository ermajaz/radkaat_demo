export interface CollaborationBrand {
  id: string;
  image: string;
  bg: string;
}

export interface CollaborationsData {
  title: string;
  shape: string;
  arrow: string;
  brands: CollaborationBrand[];
}
