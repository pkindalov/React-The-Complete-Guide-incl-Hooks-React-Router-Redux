import React from 'react';
import styles from './WarningWindow.module.css';

const WarningWindow = (props) => {
    return (
        <div id={styles.warningWindow}>
            <div className={styles.warningHeading}>Invalid Input</div>
            <div className={styles.warningMsg}>Please enter a valid name and age.(non-empty valyes).</div>
            <div className={styles.buttonOkCont}>
                <button onClick={props.clickOkBtn}>Okay</button>
            </div>
        </div>
    );
};

export default WarningWindow;
