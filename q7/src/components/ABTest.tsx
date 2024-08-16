import  VariantA  from './VariantA';
import  VariantB  from './VariantB';

import React from 'react'

export default function ABTest() {
    const random = Math.random() < 0.5;

    return (
        <div>
            { random ? <VariantA /> : <VariantB />}
        </div>
    );
}
