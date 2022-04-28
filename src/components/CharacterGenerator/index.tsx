import React from "react";
import Image from "next/image";

export const CharacterGenerator = () => (
  <div
    style={{
      border: "1px solid black",
      borderRadius: "6px",
    }}
  >
    <Image src="/searcher.jpg" layout="responsive" width="3024" height="4032" />
  </div>
);
