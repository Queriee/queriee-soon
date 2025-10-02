// Simplified auth store for Coming Soon page
export const useAuthStore = (selector?: (state: any) => any) => {
  const state = { user: null };
  return selector ? selector(state) : state;
};
