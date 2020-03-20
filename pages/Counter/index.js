import React from 'react';
import { inject, observer } from 'mobx-react';
import styles from './styles'
import { css } from 'aphrodite';

const Counter = inject('countStore')(
    observer(({ countStore }) => {
        return (
            <div>
                <h1 className={css(styles.red)}>{countStore.count}</h1>
                <button onClick={() => countStore.setCount(countStore.count + 1)}>Inc</button>
                <button onClick={() => countStore.setCount(countStore.count - 1)}>Dec</button>
            </div>
        )
    })
);

export default Counter;