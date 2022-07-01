import React from 'react'
import Tr from './Tr'


function Table({
    table
}) {
    return (
        <div className='tablediv'>
            {table &&
                <table className='table'>
                    <thead>
                        <Tr row={table[0]} type="th" id={0} />
                    </thead>
                    <tbody>
                        {
                            table.slice(1).map((row, id) => {
                                return (
                                    <Tr row={row} id={id} key={id} />
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Table;
