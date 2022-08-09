import { TransformObjectFields } from "@graphql-tools/wrap";
import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";

import { BASE_FIELDS } from "./const";
import { resolveBlockContentReferences } from "./utils";

export default new TransformObjectFields(
  (_, fieldName, fieldConfig) => {
    if (
      !fieldName.endsWith("Raw") ||
      fieldConfig.type.toJSON() !== "JSON"
    ) {
      return [fieldName, fieldConfig];
    }

    const originalResolve = fieldConfig.resolve;
    const resolve: typeof originalResolve = async (
      source,
      args,
      context,
      info
    ) => {
      const result = await originalResolve?.(
        source,
        args,
        context,
        info
      );
      const { maxDepth, fields } = args;

      if (maxDepth < 0) {
        throw new Error("maxDepth must be greater or equal to 0");
      }

      return resolveBlockContentReferences(result, maxDepth, fields);
    };

    return [
      fieldName,
      {
        ...fieldConfig,
        resolve,
        args: {
          maxDepth: {
            type: GraphQLInt,
            defaultValue: 1
          },
          fields: {
            type: new GraphQLList(GraphQLString),
            defaultValue: BASE_FIELDS
          }
        }
      }
    ];
  }
);
