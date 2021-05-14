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
        
        partidos1=lines[0];
        votos0=lines[1];
        votos1=lines[2];
		votos2=lines[3];
		votos3=lines[4];
		votos4=lines[5];
		votos5=lines[6];
		votos6=lines[7];
		votos7=lines[8];
		votos8=lines[9];
		votos9=lines[10];
		votos10=lines[11];
		votos11=lines[12];
		votos12=lines[13];
		votos13=lines[14];
		votos14=lines[15];
		votos15=lines[16];
		votos16=lines[17];
		votos17=lines[18];
		votos18=lines[19];
		votos19=lines[20];
		votos20=lines[21];
		votos21=lines[22];
		votos22=lines[23];
		votos23=lines[24];
		votos24=lines[25];
		votos25=lines[26];
		votos26=lines[27];
		votos27=lines[28];
		votos28=lines[29];
		votos29=lines[30];
		votos30=lines[31];
		votos31=lines[32];
		votos32=lines[33];
		votos33=lines[34];
		votos34=lines[35];
		votos35=lines[36];
		votos36=lines[37];
		votos37=lines[38];
		votos38=lines[39];
		votos39=lines[40];
		votos40=lines[41];
		votos41=lines[42];
		votos42=lines[43];
		votos43=lines[44];
		votos44=lines[45];
		votos45=lines[46];
		votos46=lines[47];
		votos47=lines[48];
		votos48=lines[49];
		votos49=lines[50];
		votos50=lines[51];
		votos51=lines[52];
		
		
		
		


        sessionStorage.setItem('nombres', JSON.stringify(partidos1));
        sessionStorage.setItem('numero', JSON.stringify(votos0));
        sessionStorage.setItem('numero1', JSON.stringify(votos1));
		sessionStorage.setItem('numero2', JSON.stringify(votos2));
		sessionStorage.setItem('numero3', JSON.stringify(votos3));
		sessionStorage.setItem('numero4', JSON.stringify(votos4));
		sessionStorage.setItem('numero5', JSON.stringify(votos5));
		sessionStorage.setItem('numero6', JSON.stringify(votos6));
		sessionStorage.setItem('numero7', JSON.stringify(votos7));
		sessionStorage.setItem('numero8', JSON.stringify(votos8));
		sessionStorage.setItem('numero9', JSON.stringify(votos9));
		sessionStorage.setItem('numero10', JSON.stringify(votos10));
		sessionStorage.setItem('numero11', JSON.stringify(votos11));
		sessionStorage.setItem('numero12', JSON.stringify(votos12));
		sessionStorage.setItem('numero13', JSON.stringify(votos13));
		sessionStorage.setItem('numero14', JSON.stringify(votos14));
		sessionStorage.setItem('numero15', JSON.stringify(votos15));
		sessionStorage.setItem('numero16', JSON.stringify(votos16));
		sessionStorage.setItem('numero17', JSON.stringify(votos17));
		sessionStorage.setItem('numero18', JSON.stringify(votos18));
		sessionStorage.setItem('numero19', JSON.stringify(votos19));
		sessionStorage.setItem('numero20', JSON.stringify(votos20));
		sessionStorage.setItem('numero21', JSON.stringify(votos21));
		sessionStorage.setItem('numero22', JSON.stringify(votos22));
		sessionStorage.setItem('numero23', JSON.stringify(votos23));
		sessionStorage.setItem('numero24', JSON.stringify(votos24));
		sessionStorage.setItem('numero25', JSON.stringify(votos25));
		sessionStorage.setItem('numero26', JSON.stringify(votos26));
		sessionStorage.setItem('numero27', JSON.stringify(votos27));
		sessionStorage.setItem('numero28', JSON.stringify(votos28));
		sessionStorage.setItem('numero29', JSON.stringify(votos29));
		sessionStorage.setItem('numero30', JSON.stringify(votos30));
		sessionStorage.setItem('numero31', JSON.stringify(votos31));
		sessionStorage.setItem('numero32', JSON.stringify(votos32));
		sessionStorage.setItem('numero33', JSON.stringify(votos33));
		sessionStorage.setItem('numero34', JSON.stringify(votos34));
		sessionStorage.setItem('numero35', JSON.stringify(votos35));
		sessionStorage.setItem('numero36', JSON.stringify(votos36));
		sessionStorage.setItem('numero37', JSON.stringify(votos37));
		sessionStorage.setItem('numero38', JSON.stringify(votos38));
		sessionStorage.setItem('numero39', JSON.stringify(votos39));
		sessionStorage.setItem('numero40', JSON.stringify(votos40));
		sessionStorage.setItem('numero41', JSON.stringify(votos41));
		sessionStorage.setItem('numero42', JSON.stringify(votos42));
		sessionStorage.setItem('numero43', JSON.stringify(votos43));
		sessionStorage.setItem('numero44', JSON.stringify(votos44));
		sessionStorage.setItem('numero45', JSON.stringify(votos45));
		sessionStorage.setItem('numero46', JSON.stringify(votos46));
		sessionStorage.setItem('numero47', JSON.stringify(votos47));
		sessionStorage.setItem('numero48', JSON.stringify(votos48));
		sessionStorage.setItem('numero49', JSON.stringify(votos49));
		sessionStorage.setItem('numero50', JSON.stringify(votos50));
		sessionStorage.setItem('numero51', JSON.stringify(votos51));
		
		
		
		
		
		
		
		
    };
    // Leemos el contenido del archivo seleccionado


    reader.readAsBinaryString(file);
}


document.getElementById('file').addEventListener('change', readFile, false);
