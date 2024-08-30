export interface SearchParamsType {
    q?: string;

  }

export const asValue = <T>(v: T | T[]) => (Array.isArray(v) ? v[0] : v);

export const emptyToUndefined = <T>(v: T) => (!v || v === "" ? undefined : v);

export const parseSearchParams = (
    searchParams: Record<string, string | string[] | undefined>
  ): SearchParamsType => {
    return {
      
      q: emptyToUndefined(asValue(searchParams.q)),
    };
  };