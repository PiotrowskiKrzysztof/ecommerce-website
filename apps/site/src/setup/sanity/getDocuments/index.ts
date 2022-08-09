import { SANITY_DATASET } from "@setup/environment";
import client from "..";

import type { SanityDocument } from "@sanity/client";

const url = client.getUrl(`/data/export/${SANITY_DATASET}`);

const fetchDocuments =
  async (): Promise<Array<SanityDocument> | null> => {
    try {
      const response = await fetch(url);
      const responseNdJson = await response.text();

      return JSON.parse(
        `[${responseNdJson.split("\n").filter(Boolean).join(",")}]`
      );
    } catch (error) {
      return null;
    }
  };

const getDocuments =
  async (): Promise<Array<SanityDocument> | null> => fetchDocuments();

export default getDocuments;
