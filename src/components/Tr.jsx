import React from 'react'
import Th from './Th';
import Td from './Td';

function Tr({
    type = "td",
    id,
    row
}) {
    return (
        <tr>
            {type === "th" &&
                row.map((cellValue, colid) => {
                    return (<Th value={cellValue} key={colid} rowid={id} colid={colid} />)
                })
            }
            {type === "td" &&
                row.map((cellValue, colid) => {
                    return (<Td value={cellValue} key={colid} rowid={id + 1} colid={colid} />)
                })
            }
        </tr>
    )
}

export default Tr;
