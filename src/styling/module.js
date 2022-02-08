import React from "react";
import './appStyle.css'
import styles from './appStyle.module.css'

function Module () {
    return <div>
        <h1 className={'error'}>This is using regular styling</h1>
        <h1 className={styles.success}>This is using module styling</h1>
    </div>
}

export default Module;