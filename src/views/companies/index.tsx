import React from "react";
import ProjectController from "./projectController.js";
import DonateController from "./donateController.js";
import {
  BlockDisplay,
  BlockSize,
  BlockType,
} from "../../sharedComponents/Block";

export default () => {
  let fundName = "restaurants";

  return (
    <div>
      <DonateController fundName={fundName}></DonateController>
      <BlockDisplay
        blocks={[
          {
            size: BlockSize.small,
            content: (
              <ProjectController fundName={fundName}></ProjectController>
            ),
            title: "Projects",
            type: BlockType.plain,
          },
        ]}
      />
    </div>
  );
};
