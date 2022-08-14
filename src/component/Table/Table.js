import React from 'react';
import Table from 'react-bootstrap/Table';

//npm install react-bootstrap bootstrap


function Tables({list, colNames, boostrap, width ="auto" , height = "auto" }){
    return(
        <>
            {list.length > 0 && (

                <Table  boostrap >
                    <thead>
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index}>
                                    {headerItem.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {Object.values(list).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2)=>(
                                    <td key={index2}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
}

export default Tables;