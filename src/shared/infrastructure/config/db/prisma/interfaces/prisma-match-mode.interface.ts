export enum MatchModeStringType {
  EQUALS = 'equals',
  CONTAINS = 'contains',
  STARTS_WITH = 'startsWith',
  ENDS_WITH = 'endsWith',
  NOT_CONTAINS = 'notContains',
  NOT_EQUALS = 'notEquals',
  IN = 'in',
}

export enum MatchModeNumberType {
  EQUALS = 'equals',
  LT = 'lt',
  GT = 'gt',
  LTE = 'lte',
  GTE = 'gte',
  NOT_EQUALS = 'notEquals',
  IN = 'in',
}

export enum MatchModeDateType {
  EQUALS = 'equals',
  LT = 'lt',
  GT = 'gt',
  LT_GT = 'ltGt',
  LTE = 'lte',
  GTE = 'gte',
  LTE_GTE = 'lteGte',
  NOT_EQUALS = 'notEquals',
  IN = 'in',
}

export enum MatchModeBooleanType {
  EQUALS = 'equals',
  NOT_EQUALS = 'notEquals',
}

export enum MatchModeEnumType {
  EQUALS = 'equals',
  NOT_EQUALS = 'notEquals',
  IN = 'in',
}

export type FiledSearchType = {
  field: string;
  type: 'string' | 'number' | 'boolean' | 'Date' | 'enum';
  callback?: (value: string) => string | undefined;
};
