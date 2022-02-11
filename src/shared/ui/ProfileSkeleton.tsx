import { Skeleton } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import React, { FC } from "react";

const ProfileSkeleton: FC = function () {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Skeleton variant="rectangular" width={window.innerWidth} height={60} />

      <Skeleton variant="circular" width="13em" height="13em" />

      <Skeleton className="m-2" variant="rectangular" width="5em" height={20} />

      <Skeleton variant="rectangular" width="35em" height={120} />

      <Skeleton
        className="m-2"
        variant="rectangular"
        width="20em"
        height={100}
      />

      {["SR-15-1", "SR-15-2"].map((key) => (
        <Skeleton
          key={key}
          className="m-2"
          variant="rectangular"
          width="15em"
          height={20}
        />
      ))}

      <Row className="mt-5">
        {["SR-20-1", "SR-20-2", "SR-20-3"].map((number) => (
          <Col key={number}>
            <Skeleton
              className="mx-2"
              variant="rectangular"
              width="20em"
              height="20em"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfileSkeleton;
