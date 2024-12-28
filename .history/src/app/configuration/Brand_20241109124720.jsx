import React,{useState} from 'react';
import styles from '../styles/'

const Brand = () => {

    const [selected, setSelected] = useState(null);

    const handlePlatformChange = (event) => {
      setSelected(event.target.value); 
    };

    return (
        <>
            <div className={styles.configutator_block}>
            
            <div className="configutator_block__wrapper">
            <h4>Какую платформу предпочитаете:</h4>
            <div className={styles.brand}>
              <div className={styles.brand__inp}>
                <Image src={hp} alt="hp" width={50} height={50} />
                <input
                  type="radio"
                  id="option1"
                  name="platform"
                  value="option1"
                  checked={selected === 'option1'}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="option1">HP</label>
              </div>
              <div className={styles.brand__inp}>
                <Image src={dell} alt="dell" width={80} height={50}  />
                <input
                  type="radio"
                  id="option2"
                  name="platform"
                  value="option2"
                  checked={selected === 'option2'}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="option2">Dell</label>
              </div>
            </div>
            </div>
          </div>
        </>
    );
};

export default Brand;