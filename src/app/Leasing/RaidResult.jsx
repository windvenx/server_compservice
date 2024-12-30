import React from "react";
import styles from "../styles/Leasing.module.scss";

const RaidResult = () => {
  return (
    <div className={styles.raidresult}>
      <h4>Результат расчета</h4>
      <div className={styles.raid__res__item}>
        <p>Общий объем:</p>
        <div className={styles.total__volume__res}>
          <p>0.06 TB /</p>
          <p>0.06 TB</p>
        </div>
      </div>
      <div className={styles.raid__res__item}>
        <div className={styles.raid__res__left}>
          <p>Эффективный объем:</p>
          <span>Объем, видимый файловой системой</span>
        </div>
        <div className={styles.total__volume__res}>
          <p>0.06 TB /</p>
          <p>0.06 TB</p>
        </div>
      </div>
      <div className={styles.raid__res__item}>
        <p>Эффективность использования дискового пространства: </p>
        <div className={styles.total__volume__res}>
          <p>100%</p>
        </div>
      </div>
      <div className={styles.raid__res__item}>
        <div className={styles.raid__res__left}>
          <p>Отказоустойчивость:</p>
          <span>Допустимое количество дисков для RAID 0, которое может одновременно выйти из строя без потери данных.</span>
        </div>
          <p>0 дисков</p>
      </div>
    </div>
  );
};

export default RaidResult;
