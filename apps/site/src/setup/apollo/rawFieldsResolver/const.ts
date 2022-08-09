export const BASE_FIELDS = ["_id", "slug", "_ref"];

export const REFERENCE_FIELDS_MAP = ((
  map: Record<string, string[]>
): Record<string, string[]> =>
  Object.entries(map).reduce(
    (acc, [type, fields]) => ({
      ...acc,
      [type]: [...BASE_FIELDS, ...fields]
    }),
    {}
  ))({
  "sanity.imageAsset": ["metadata.lqip", "metadata.dimensions", "url"]
});
