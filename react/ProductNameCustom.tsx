import React, { useEffect, useRef, useState, ReactChildren } from "react";
// import { createPortal } from "react-dom";
import { canUseDOM } from "vtex.render-runtime";

import styles from "./styles.css";

interface ProductNameCustomProps {

}

const ProductNameCustom: StorefrontFunctionComponent<ProductNameCustomProps> = ({ }) => {


  return <>Hello World.</>;
}

ProductNameCustom.schema = {
  title: "Store Banner",
  type: "object",
  properties: {}
}

export default ProductNameCustom;