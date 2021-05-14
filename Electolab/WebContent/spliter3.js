function parseCSV(text) {
    // Obtenemos las lineas del texto
    let lines = text.replace(/\r/g, '').split('\n');
    return lines.map(line => {
        // Por cada linea obtenemos los valores
        let values = line.split(';');
        return values;
    });
}
function readFile(evt) {
    let file = evt.target.files[0];
    let reader = new FileReader();

        reader.onload = (e) => {
        // Cuando el archivo se terminó de cargar
        let lines = parseCSV(e.target.result);
        //let output = reverseMatrix(lines);
        partidos1=lines[0];
            votos1=lines[1];
        console.log(partidos1);
        console.log(votos1);

        sessionStorage.setItem('nombres', JSON.stringify(partidos1));
        sessionStorage.setItem('numero', JSON.stringify(votos1));
    };
    // Leemos el contenido del archivo seleccionado


    reader.readAsBinaryString(file);
}


document.getElementById('file').addEventListener('change', readFile, false);
