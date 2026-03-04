export interface TabPaginationState {
  page: number;
  totalPages: number;
  totalItems: number;
}

const DEFAULT_TAB_PAGINATION: TabPaginationState = {
  page: 1,
  totalPages: 1,
  totalItems: 0,
};

export const createTabPaginationMap = (
  tabIds: string[],
  seed?: Partial<TabPaginationState>,
): Record<string, TabPaginationState> => {
  const fallbackState: TabPaginationState = {
    ...DEFAULT_TAB_PAGINATION,
    ...seed,
  };

  return tabIds.reduce<Record<string, TabPaginationState>>((acc, tabId) => {
    acc[tabId] = { ...fallbackState };
    return acc;
  }, {});
};

export const ensureTabPaginationState = (
  paginationMap: Record<string, TabPaginationState>,
  tabId: string,
): Record<string, TabPaginationState> => {
  if (paginationMap[tabId]) {
    return paginationMap;
  }

  return {
    ...paginationMap,
    [tabId]: { ...DEFAULT_TAB_PAGINATION },
  };
};
