import React from "react";
import ProjectController from "./projectController.js";
import {
  BlockDisplay,
  BlockType,
  BlockSize,
} from "../../sharedComponents/Block";

export default () => {
  return (
    <div>
      <BlockDisplay
        blocks={[
          {
            size: BlockSize.small,
            content: <ProjectController></ProjectController>,
            title: "Projects",
            type: BlockType.plain,
          },
        ]}
      />
    </div>
  );
};
