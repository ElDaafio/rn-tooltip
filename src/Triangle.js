//  @flow

import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  style: any,
  isDown: boolean
};

const Triangle = ({ style, isDown, pointerBorderColor }: Props) => {
  return (
    <Fragment>
      <View style={[styles.triangle, style, isDown ? styles.down : {}]} />
      <View style={[styles.triangleBorder, style, pointerBorderColor ? { borderBottomColor: pointerBorderColor} : {}, isDown ? styles.down : {}]} />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  down: {
    transform: [{ rotate: "180deg" }]
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 15,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white"
  }
  triangleBorder: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 17,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: pointerBorderColor,
  }
});

export default Triangle;
