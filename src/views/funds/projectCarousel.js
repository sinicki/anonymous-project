import * as React from "react";
import Typography from "@material-ui/core/Typography";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export function ProjectCarousel({ title, items, ItemComponent }) {
  const [index, setIndex] = React.useState(0);
  const shownItems = items.slice(index, index + 3);
  while (shownItems.length < 3){ shownItems.push(null)}

  return (
    <React.Fragment>
      <Typography align={"center"} variant="h4" gutterBottom>
        {title}
      </Typography>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowBackIosIcon
          onClick={() => {
            if (index - 1 >= 0) {
              setIndex(index - 1);
            }
          }}
        />
        <div  style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        }}>
          {shownItems.map((itemProps) => (
            <ItemComponent {...itemProps} />
          ))}
        </div>
        <ArrowForwardIosIcon
          onClick={() => {
            if (index + 1 >= items.length - 3) {
              setIndex(index + 1);
            }
          }}
        />
      </div>
    </React.Fragment>
  );
}
