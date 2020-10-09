const APIBaseURL =
  "http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/";

export enum CategoryType {
  ALL = "shop_all",
  BRACELETS = "bracelets",
  PENDANTS = "pendants",
  EARRINGS = "earrings",
  ENGAGEMENT = "engagement",
  RINGS = "rings",
  STAKINGSET = "stacking-sets",
  NECKLACES = "necklaces",
  PINNED = "pinned",
}

//Manual mapping
export const ProductListDataSource: Record<CategoryType, string> = {
  [CategoryType.BRACELETS]: `${APIBaseURL}${CategoryType.BRACELETS}.json`,
  [CategoryType.NECKLACES]: `${APIBaseURL}${CategoryType.PENDANTS}.json`,
  [CategoryType.EARRINGS]: `${APIBaseURL}${CategoryType.EARRINGS}.json`,
  [CategoryType.ENGAGEMENT]: `${APIBaseURL}${CategoryType.ENGAGEMENT}.json`,
  [CategoryType.PENDANTS]: `${APIBaseURL}${CategoryType.PENDANTS}.json`,
  [CategoryType.RINGS]: `${APIBaseURL}${CategoryType.RINGS}.json`,
  [CategoryType.STAKINGSET]: `${APIBaseURL}${CategoryType.STAKINGSET}.json`,
  [CategoryType.ALL]: `${APIBaseURL}${CategoryType.ALL}.json`,
  [CategoryType.PINNED]: `API endpoint should be here in the real app`,
};

export const ProductList = Object.values(CategoryType);
