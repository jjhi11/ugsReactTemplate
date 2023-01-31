import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Map',
    Board: () => <div></div>,
    environmentProps: {
        canvasWidth: 1043,
        canvasHeight: 638
    }
});
