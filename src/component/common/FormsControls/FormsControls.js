import React from 'react';
import styles from './FormsControls.module.css'

function Textarea({input,meta,...props}) {
    return (
        <div className={`${styles.formControl} ${meta.error && meta.touched && styles.error}`}>
            <div>
            <textarea {...input} {...props}/>
            </div>
           {meta.error && meta.touched && <span className={styles.error}> {meta.error} </span>}
        </div>
);
}

export default Textarea;
