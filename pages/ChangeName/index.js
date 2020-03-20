import React from 'react';
import { css } from 'aphrodite';
import { inject, observer } from 'mobx-react';

import styles from './styles'

const Counter = inject('nameStore')(
    observer(({ nameStore }) => {
        return (
            <div>
                <h1 className={css(styles.blue)}>{nameStore.name}</h1>
                <input type="text" onChange={(e) => nameStore.setName(e.target.value)} />
            </div>
        )
    })
);

export default Counter;