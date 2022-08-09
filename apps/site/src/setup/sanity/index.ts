import sanityClient from "@sanity/client";
import {
  SANITY_DATASET,
  SANITY_PROJECT_ID
} from "@setup/environment";

const apiVersion = new Date().toISOString().substring(0, 10);

const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion,
  useCdn: false,
  withCredentials: true
});

export default client;
