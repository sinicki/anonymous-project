import React from "react";
import ProjectController from "./projectController.js";
import { BlockDisplay, BlockType } from "../../sharedComponents/Block";

export default () => {
  return (
    <div>
      <BlockDisplay
        blocks={[
          {
            content: <ProjectController></ProjectController>,
            title: "Projects",
            type: BlockType.plainSmall,
          },
        ]}
      />
    </div>
  );
};
