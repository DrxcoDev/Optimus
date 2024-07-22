function GetProof() {
    console.log("Succes API")
}

let 

function createTable(headers, rows, quant=1, continer) {
    console.log("API Create Table succes:", quant*headers, quant*rows)

    const tableinfo = document.querySelector(`#${continer}`);
    tableinfo.innerHTML = (
        `<table>
            <thead>
                <tr>${headers}</tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>`
    );
        
    
}

// function createServer(port, route) {
//     const express = require('express')
//     const app = express()
//     const portid = port

//     app.get(route, (req, res) => {
//         res.send('Hello World!')
//     })

//     app.listen(portid, () => {
//         console.log(`Example app listening on port ${port}`)
//     })
// }