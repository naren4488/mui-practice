import { Typography } from "@mui/material";
import React from "react";

export default function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">heading h1</Typography>
      <Typography variant="h2" gutterBottom>
        heading h2
      </Typography>
      <Typography variant="h3" gutterBottom>
        heading h3
      </Typography>
      <Typography variant="h4" component="h1">
        heading h4
      </Typography>
      <Typography variant="h5">heading h5</Typography>
      <Typography variant="h6">heading h6</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        minima tempore. Saepe rerum laboriosam, eaque adipisci omnis repellendus
        provident officia eos eligendi laudantium unde recusandae atque,
        possimus ab? Vel, accusamus.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum
        quibusdam corporis id veritatis assumenda modi hic accusantium nisi
        mollitia quasi quo accusamus perferendis ducimus veniam labore
        similique, laborum consequatur.
      </Typography>
    </div>
  );
}
