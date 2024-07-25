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

