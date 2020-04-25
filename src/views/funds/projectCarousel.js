import * as React from "react";
import Typography from "@material-ui/core/Typography";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";

export function ProjectCarousel({ title, items, ItemComponent }) {
  const [index, setIndex] = React.useState(0);
  const shownItems = items

    .map((x) => ({ ...x, id: x.name }));
  while (shownItems.length < 3) {
    shownItems.push({ id: shownItems.length });
  }

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
        <IconButton
          disabled={index <= 0}
          onClick={() => {
            if (index - 1 > -1) {
              setIndex(index - 1);
            }
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <div
          style={{
            display: "flex",
            width: "100%",

            minWidth: 540,
            maxWidth: 540,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {shownItems.map((itemProps, i) => (
            <div
              key={itemProps.id}
              style={{
                position: "relative",
                left: -180 * index,
                transitionDuration: "0.3s",
              }}
            >
              <ItemComponent {...itemProps} key={itemProps.id} />
            </div>
          ))}
        </div>
        <IconButton
          disabled={index + 3 >= items.length}
          onClick={() => {
            if (index + 1 <= items.length - 3) {
              setIndex(index + 1);
            }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </React.Fragment>
  );
}
