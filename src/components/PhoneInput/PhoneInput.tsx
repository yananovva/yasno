import {useState} from "react";
import styles from '@/components/PhoneInput/PhoneInput.module.css';

function PhoneInput(){
    const [phone, setPhone] = useState<string>('');

    return (
        <form>
            <label htmlFor='phone'
                   className={styles['phone_input']}>
                Введите номер</label>
            <PhoneInput
            />
        </form>
    );
}

export default PhoneInput;