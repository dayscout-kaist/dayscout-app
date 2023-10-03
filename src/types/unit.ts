/**
 * 100g당
 */
export interface AbsoluteUnit {
  type: "absolute";
}

/**
 * 총 내용량 당
 */
export interface TotalUnit {
  type: "total";
  totalWeight: number;
}

/**
 * 단위 섭취량 당
 */
export interface SingleUnit {
  type: "single";
  /**
   * 단위의 이름
   * 조각, 컵 등
   */
  unitName: string;
  /**
   * 단위 당 무게
   */
  unitWeight: number;
}

export type Unit = AbsoluteUnit | TotalUnit | SingleUnit;
