export enum ITEM_TYPES {
  EXERCISE,
  PROBLEM,
  THEOREM,
  REMARK,
}

export interface Item {
  tex: string;
  type: number;
  id: string;
}
