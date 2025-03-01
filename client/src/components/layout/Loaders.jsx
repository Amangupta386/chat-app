import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

function LayoutLoader() {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
      <Grid
        item
        sm={4}
        md={3}
        sx={{ display: { xs: "none", sm: "block" } }}
        height={"100%"}
      >
        <Skeleton variant="rounded" height={"100%"} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <Stack spacing={"1rem"}>
        {Array.from({ length: 10 }, (v, index) => (
          <Skeleton key={index} variant="rounded" height={"5rem"} />
        ))}
        </Stack>
      </Grid>
      <Grid
        item
        sm={4}
        md={3}
        sx={{ display: { xs: "none", sm: "block" }, padding: "2rem" }}
        height={"100%"}
      >
        <Skeleton variant="rounded" height={"100vh"} />
      </Grid>
    </Grid>
  );
}

export default LayoutLoader;
