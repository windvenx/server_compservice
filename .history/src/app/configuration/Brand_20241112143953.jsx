  import React,{useState} from 'react';
  import styles from '../styles/Configuration/Brand.module.scss'
  import dell from '../../../public/Dell.svg';
  import hp from '../../../public/hp.svg';
  import Image from 'next/image';


  const Brand = () => {

      const [selected1, setSelected2] = useState(null);

      const handlePlatformChange1 = (event) => {
        setSelected2(event.target.value); 
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
                    id="option3"
                    name="platform"
                    value="option3"
                    checked={selected1 === 'option3'}
                    onChange={handlePlatformChange1}
                  />
                  <label htmlFor="option3">HP</label>
                </div>
                <div className={styles.brand__inp}>
                  <Image src={dell} alt="dell" width={80} height={50}  />
                  <input
                    type="radio"
                    id="option4"
                    name="platform"
                    value="option4"
                    checked={selected1 === 'option4'}
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="option4">Dell</label>
                </div>
              </div>
              </div>
            </div>
          </>
      );
  };

  export default Brand;