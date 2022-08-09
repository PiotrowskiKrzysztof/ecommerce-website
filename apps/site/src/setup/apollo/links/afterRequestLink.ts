/* eslint-disable no-async-promise-executor */
import { ApolloLink, fromPromise } from "@apollo/client";
import replaceTopLevelDrafts from "@utils/replaceTopLevelDrafts";

const afterRequestLink = new ApolloLink((operation, forward) =>
  forward(operation).flatMap((queryResponseBody) =>
    fromPromise(
      new Promise(async (resolve) => {
        const data = queryResponseBody.data ?? {};

        replaceTopLevelDrafts(data);

        resolve(data);
      })
    )
  )
);

export default afterRequestLink;
