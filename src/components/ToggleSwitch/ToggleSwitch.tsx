'use client';

import styles from "@/components/ToggleSwitch/ToggleSwitch.module.css";
import {useState} from "react";


function ToggleSwitch() {
    const [selectedOption, setSelectedOption] = useState<'single' | 'double'>('single');

    const handleToggle = (option: 'single' | 'double') => {
        setSelectedOption(option);
    }

    const price = selectedOption === 'single' ? '~ 50 мин・от 2 850 ₽' : '~ 1,5 часа・от 4 850 ₽';


    return (
        <div className={styles['switcher_container']}>
            <div className={styles['switcher']}>
                <div className={`${styles['toggleBackground']} ${
                    selectedOption === 'single' ? styles['left'] : styles['right']
                }`}
                />
                <button onClick={() => handleToggle('single')}
                        className={`${styles['optionButton']} ${selectedOption === 'single' ? styles['active'] : ''}`}
                >
                    Для себя
                </button>
                <button onClick={() => handleToggle('double')}
                        className={`${styles['optionButton']} ${selectedOption === 'double' ? styles['active'] : ''}`}
                >
                    Для двоих
                </button>
            </div>
            <div className={styles['price']}>
                {price}
            </div>
        </div>
    )
}

export default ToggleSwitch;