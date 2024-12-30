"use client";

import React, { useState } from "react";
import styles from "../../styles/Leasing.module.scss";

const DiskCapasity = () => {
  const [raidLevel, setRaidLevel] = useState("SSD 2.5");
  const [diskCount, setDiskCount] = useState(2);
  const [raidType, setraidType] = useState(
    "RAID 0 — массив дисков с чередованием."
  );

  const handleRaidLevelChange = (level) => {
    setRaidLevel(level);

    

    // if (level === "0") {
    //   setDiskCount(2);
    //   setraidType("RAID 0 — массив дисков с чередованием.");
    // } else if (level === "1") {
    //   setDiskCount(2);
    //   setraidType("RAID 1 — зеркалированный массив дисков.");
    // } else if (level === "5") {
    //   setDiskCount(3);
    //   setraidType(
    //     "RAID 5 — массив дисков с поблочным чередованием с одним диском четности."
    //   );
    // } else if (level === "6") {
    //   setDiskCount(4);
    //   setraidType(
    //     "RAID 6 — массив дисков с поблочным чередованием с двумя дисками четности."
    //   );
    // } else if (level === "10") {
    //   setDiskCount(4);
    //   setraidType("RAID 10 — массив дисков с зеркалированием и чередованием.");
    // } else if (level === "50") {
    //   setDiskCount(4);
    //   setraidType(
    //     "RAID 50 — массив дисков, состоящий из чередования массивов RAID 5."
    //   );
    // } else if (level === "60") {
    //   setDiskCount(4);
    //   setraidType(
    //     "RAID 60 — массив дисков, состоящий из чередования массивов RAID 6."
    //   );
    // }
  };

  return (
    <div className={`${styles.lc__term} ${styles.DiskCapasity}`}>
      <p>Выберите объем диска</p>

      <div className={styles.raidLevels}>
        {["SSD 2.5", "SAS 2.5", "NL SAS / SATA 3.5"].map((level) => (
          <button
            key={level}
            className={`${styles.raidButton} ${styles.DiskCapasity} ${
              raidLevel === level ? styles.active : ""
            }`}
            onClick={() => handleRaidLevelChange(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className={styles.diskSize}>
        <p>8000 GB</p>
        <input type="range" />
      </div>
    </div>
  );
};

export default DiskCapasity;
