import React, { useState } from 'react'

function Th({
    value = "",
    rowid,
    colid
}) {
    const [cellValue, setcellValue] = useState(value);
    return (
        <th>
            <input id={`${rowid}${colid}`} className='cellth' type="text" value={cellValue} onChange={(e) => {
                setcellValue(e.target.value);
            }} />
        </th>
    )
}

export default Th;
