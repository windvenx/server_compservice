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
            <div className="configutator_block__right">
                <h4>Процессор :</h4>
                
      <select name="processor" id="proc" value={selectedProcessor} onChange={handleSelectChange}>
        <option value="Intel Xeon Scalable">Intel Xeon Scalable</option>
        <option value="Intel Xeon E-2200">Intel Xeon E-2200</option>
      </select>

      .processor__
            </div>
          </div>
        </>
    );
};

export default processor;