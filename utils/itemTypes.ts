export enum ITEM_TYPES {
  EXERCISE = "Exercitiu",
  PROBLEM = "Problema",
  THEOREM = "Teorema",
  REMARK = "Remarca",
}

export interface Item {
  tex: string;
  type: ITEM_TYPES;
  id: number;
  isActive: boolean;
}
