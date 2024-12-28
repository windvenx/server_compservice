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
                value="subsection4"
                checked={selectedSubsection === 'subsection4'}
                onChange={handleSubsectionChange}
              />
              Xeon Silver 4210 2.2/3.2 GHz, 10C/20T, 13.75MB, DDR4-2400, 9.6GT/s
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection5"
                checked={selectedSubsection === 'subsection5'}
                onChange={handleSubsectionChange}
              />
              Xeon Silver 4210R 2.4/3.2 GHz, 10C/20T, 13.75MB, DDR4-2400, 9.6GT/s
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection6"
                checked={selectedSubsection === 'subsection6'}
                onChange={handleSubsectionChange}
              />
              Xeon Silver 4214 2.2/3.2 GHz, 12C/24T, 16.50MB, DDR4-2400, 9.6GT/s
            </label>
          </div>
        </div>
      )}

      {selectedProcessor === 'Intel Xeon E-2200' && (
        <div className={styles.models}>
          <h3>Подразделы для Intel Xeon E-2200</h3>
          <div>
            <label>
              <input
                type="radio"
                name="subsection" 
                value="subsection1"
                checked={selectedSubsection === 'subsection1'}
                onChange={handleSubsectionChange}
              />
              Xeon E-2224, 3.4/4.6 GHz, 4C/4T, 8MB, DDR4-2666, 71W
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
               Xeon E-2224G, 3.5/4.7 GHz, 4C/4T, 8MB, DDR4-2666, UHD P630
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
              Xeon E-2234, 3.6/4.8 GHz, 4C/8T, 8MB, DDR4-2666
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection4"
                checked={selectedSubsection === 'subsection4'}
                onChange={handleSubsectionChange}
              />
              Xeon E-2236, 3.4/4.8 GHz, 6C/12T, 12MB, DDR4-2666
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection5"
                checked={selectedSubsection === 'subsection5'}
                onChange={handleSubsectionChange}
              />
              Xeon E-2288G, 3.7/5.0 GHz, 8C/16T, 16MB, DDR4-2666, UHD P630
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection6"
                checked={selectedSubsection === 'subsection3'}
                onChange={handleSubsectionChange}
              />
              Xeon E-2244G, 3.8/4.8 GHz, 4C/8T, 8MB, DDR4-2666, UHD P630
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