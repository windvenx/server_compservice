'use client';
import proc from '../../../public/processor-icon.svg'
import styles from '../styles/Configuration/Configuration.module.scss'
import React, { useState } from 'react';
import Image from 'next/image';


const processor = () => {
    
    const [selectedProcessor, setSelectedProcessor] = useState('Intel Xeon Scalable');
    const [selectedSubsection, setSelectedSubsection] = useState(null); 
  
    const handleSelectChange = (event) => {
      setSelectedProcessor(event.target.value);
      setSelectedSubsection(null); 
    };
  
    const handleSubsectionChange = (event) => {
      setSelectedSubsection(event.target.value);
    };

    return (
        <>
            <div className={styles.configutator_block}>
            <Image src={proc} width={65} height={65} alt='proc'/>
            <div className={styles.proc_block__right}>
                
      <div className={styles.proc_block__right__left}>
      <h4>Процессор :</h4>
                
                <select name="processor" id="proc" value={selectedProcessor} onChange={handleSelectChange}>
                  <option value="Intel Xeon Scalable">Intel Xeon Scalable</option>
                  <option value="Intel Xeon E-2200">Intel Xeon E-2200</option>
                </select>
      </div>

      <div className={styles.processor__right}>
      {selectedProcessor === 'Intel Xeon Scalable' && (
        <div className={styles.models}>
          <h3>Подразделы для Intel Xeon Scalable</h3>
          <div>
            <label>
              <input
                type="radio"
                name="subsection" 
                value="subsection1"
                checked={selectedSubsection === 'subsection1'}
                onChange={handleSubsectionChange}
              />
              Xeon Bronze 3204 1.9/1.9 GHz, 6C/6T, 8.25 MB, DDR4-2133, 9.6 GT/s
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection2"
                checked={selectedSubsection === 'subsection2'}
                onChange={handleSubsectionChange}
              />
              Xeon Bronze 3206R 1.9/1.9 GHz, 8C/8T, 11.00 MB, DDR4-2133, 9.6GT/s
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection3"
                checked={selectedSubsection === 'subsection3'}
                onChange={handleSubsectionChange}
              />
              Xeon Silver 4208 2.1/3.2 GHz, 8C/16T, 11.00 MB, DDR4-2400, 9.6GT/s
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection3"
                checked={selectedSubsection === 'subsection3'}
                onChange={handleSubsectionChange}
              />
              Xeon Silver 4208 2.1/3.2 GHz, 8C/16T, 11.00 MB, DDR4-2400, 9.6GT/s
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection3"
                checked={selectedSubsection === 'subsection3'}
                onChange={handleSubsectionChange}
              />
              Xeon Silver 4208 2.1/3.2 GHz, 8C/16T, 11.00 MB, DDR4-2400, 9.6GT/s
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection3"
                checked={selectedSubsection === 'subsection3'}
                onChange={handleSubsectionChange}
              />
              Xeon Silver 4208 2.1/3.2 GHz, 8C/16T, 11.00 MB, DDR4-2400, 9.6GT/s
            </label>
          </div>
        </div>
      )}

      {selectedProcessor === 'Intel Xeon E-2200' && (
        <div>
          <h3>Подразделы для Intel Xeon E-2200</h3>
          <div>
            <label>
              <input
                type="radio"
                name="subsection" // Группировка радиокнопок
                value="subsection1"
                checked={selectedSubsection === 'subsection1'}
                onChange={handleSubsectionChange}
              />
              1: 1
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection2"
                checked={selectedSubsection === 'subsection2'}
                onChange={handleSubsectionChange}
              />
               2: 2
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection3"
                checked={selectedSubsection === 'subsection3'}
                onChange={handleSubsectionChange}
              />
              3:3
            </label>
          </div>
        </div>
      )}
      </div>
            </div>
          </div>
        </>
    );
};

export default processor;