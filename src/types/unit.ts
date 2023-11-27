/**
 * 100g당
 * @deprecated
 */
export interface AbsoluteUnit {
  type: "absolute";
}

/**
 * 총 내용량 당
 * @deprecated
 */
export interface TotalUnit {
  type: "total";
}

/**
 * 단위 섭취량 당
 * @deprecated
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

/**
 * @deprecated
 */
export type Unit = AbsoluteUnit | TotalUnit | SingleUnit;
