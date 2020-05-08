import React from 'react';
import styles from './FormsControls.module.css'


const FormsControl = ({TypeField,input,meta,...props}) => {
    return (
        <div className={`${styles.formControl} ${meta.error && meta.touched && styles.error}`}>
            <div>
                <TypeField {...input} {...props}/>
            </div>
            {meta.error && meta.touched && <span className={styles.error}> {meta.error} </span>}
        </div>
    )
};

export function Textarea(props) {
    return <FormsControl {...props}/>
}
// export function Textarea({input,meta,...props}) {
//     return (
//         <div className={`${styles.formControl} ${meta.error && meta.touched && styles.error}`}>
//             <div>
//             <textarea {...input} {...props}/>
//             </div>
//            {meta.error && meta.touched && <span className={styles.error}> {meta.error} </span>}
//         </div>
// );
// }

export function Input(props) {
    return <FormsControl {...props}/>
}

