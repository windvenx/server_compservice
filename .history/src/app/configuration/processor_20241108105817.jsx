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
                
      <div className="proc_block__right__left">
      <h4>Процессор :</h4>
                
                <select name="processor" id="proc" value={selectedProcessor} onChange={handleSelectChange}>
                  <option value="Intel Xeon Scalable">Intel Xeon Scalable</option>
                  <option value="Intel Xeon E-2200">Intel Xeon E-2200</option>
                </select>
      </div>

      <div className={styles.processor__right}>
      {selectedProcessor === 'Intel Xeon Scalable' && (
        <div>
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
              2:2
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