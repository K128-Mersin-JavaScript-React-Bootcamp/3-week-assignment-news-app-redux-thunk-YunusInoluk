import React from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router";

export default function NewsDetails() {
  let { details } = useParams();
  const location = useLocation();
  console.log(details);
  return <div>NewsDetails</div>;
}
