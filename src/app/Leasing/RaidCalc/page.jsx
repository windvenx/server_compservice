"use client";

import React, { useState } from "react";
import styles from "../../styles/Leasing.module.scss";
import RaidLevel from "./RaidLevel";
import DiskCapasity from "./DiskCapasity";

const RaidCalc = () => {
  return (
    <div className={styles.raidcalc}>
      <RaidLevel />
      <DiskCapasity />
      <div className={styles.diskquantity}>
        <p>Выберите количество дисков</p>

        <div className={`${styles.diskSize} ${styles.diskquantity}`}>
          <p>11 ШТ.</p>
          <input type="range" />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default RaidCalc;
