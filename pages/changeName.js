import React from 'react';
import { inject, observer } from 'mobx-react';

const Counter = inject('nameStore')(
    observer(({ nameStore }) => {
        return (
            <div>
                <h1>{nameStore.name}</h1>
                <input type="text" onChange={(e) => nameStore.setName(e.target.value)} />
            </div>
        )
    })
);

export default Counter;