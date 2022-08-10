import BlockContentLib from "@sanity/block-content-to-react";

import { SERIALIZERS } from "./consts";
import { BlockContentProps } from "./types";

const BlockContent: React.FC<BlockContentProps> = ({ content }) => (
  <BlockContentLib blocks={content} serializers={SERIALIZERS} />
);

export default BlockContent;
