import React, { useState } from 'react'

function Td({
    value = "",
    rowid,
    colid
}) {

    const [cellValue, setcellValue] = useState(value);
    return (
        <td>
            <input id={`${rowid}${colid}`} className='celltd' type="text" value={cellValue === "untitled" ? "  " : cellValue} onChange={(e) => {
                setcellValue(e.target.value);
            }} />
        </td>
    )
}

export default Td;
