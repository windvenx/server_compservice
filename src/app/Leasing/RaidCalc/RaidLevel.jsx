"use client";

import React, { useState } from "react";
import styles from "../../styles/Leasing.module.scss";

const RaidCalc = () => {
  const [raidLevel, setRaidLevel] = useState("0");
  const [diskQuantity, setDiskQuantity] = useState('Для построения RAID 0 требуется не менее 2 дисков.');
  const [raidType, setRaidType] = useState(
    "RAID 0 — массив дисков с чередованием."
  );

  const handleRaidLevelChange = (level) => {
    setRaidLevel(level);

    if (level === "0") {
      setDiskQuantity('Для построения RAID 0 требуется не менее 2 дисков.'); 
      setRaidType("RAID 0 — массив дисков с чередованием."); 
    } else if (level === "1") {
      setDiskQuantity('Для построения RAID 1 требуется не менее 2 дисков.'); 
      setRaidType("RAID 1 — зеркалированный массив дисков."); 
    } else if (level === "5") {
      setDiskQuantity('Для построения RAID 5 требуется не менее 3 дисков.'); 
      setRaidType(
        "RAID 5 — массив дисков с поблочным чередованием с одним диском четности."
      ); 
    } else if (level === "6") {
      setDiskQuantity('Для построения RAID 6 требуется не менее 4 дисков.'); 
      setRaidType(
        "RAID 6 — массив дисков с поблочным чередованием с двумя дисками четности."
      ); 
    } else if (level === "10") {
      setDiskQuantity('Для построения RAID 10 требуется не менее 4 дисков и количество дисков должно быть четным.'); 
      setRaidType("RAID 10 — массив дисков с зеркалированием и чередованием."); 
    } else if (level === "50") {
      setDiskQuantity('Для построения RAID 50 требуется не менее 6 дисков и количество дисков должно быть четным.'); 
      setRaidType(
        "RAID 50 — массив дисков, состоящий из чередования массивов RAID 5."
      ); 
    } else if (level === "60") {
      setDiskQuantity('Для построения RAID 60 требуется не менее 8 дисков и количество дисков должно быть четным.'); 
      setRaidType(
        "RAID 60 — массив дисков, состоящий из чередования массивов RAID 6."
      ); 
    }
  };

  return (
    <div className={styles.lc__term}>
      <p>Выберите уровень RAID</p>

      <div className={styles.raidLevels}>
        {["0", "1", "5", "6", "10", "50", "60"].map((level) => (
          <button
            key={level}
            className={`${styles.raidButton} ${
              raidLevel === level ? styles.active : ""
            }`}
            onClick={() => handleRaidLevelChange(level)}
          >
            {level}
          </button>
        ))}
      </div>
      <span>{raidType}</span>
    </div>

    
  );
};

export default RaidCalc;
