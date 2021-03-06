import React from "react";
import { Input, Card } from "@material-ui/core";
import Register from "./register";
import {
  BlockDisplay,
  BlockType,
  BlockSize,
} from "../../sharedComponents/Block";

export default () => {
  return (
    <BlockDisplay
      blocks={[
        {
          type: BlockType.plain,
          size: BlockSize.full,
          content: (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ maxWidth: "720px", minWidth: "320px" }}>
                <Card>
                  <Register />
                </Card>
              </div>
            </div>
          ),
          title: "Register your business",
        },
      ]}
    />
  );
};
