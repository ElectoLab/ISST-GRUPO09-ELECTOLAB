

function nuevo_escanyo( votos, esc, num_par)
{
    var imax=0, ct;
    var max=0;

    for( ct=0; ct<num_par; ++ct) {
        if( max<(votos[ct]/(esc[ct]+1)) ) {
            max=votos[ct]/(esc[ct]+1);
            imax=ct;
        }
    }
    return imax;
}


function FormularioHondt(formul)
{

   var partidos = sessionStorage.getItem('nombres');
    partidos=JSON.parse(partidos);
    var numeros1 = sessionStorage.getItem('numero');
    numeros1=JSON.parse(numeros1);
    

    console.log(partidos[0]);
    console.log(numeros1[0]);

    for(var i=0; i<numeros1.length;i++) numeros1[i] = parseInt(numeros1[i], 10);

    var numpartidos=Number(formul.numpartidos.value);
    var ct; //contador
    var numvotos=Number(formul.votblan.value);
    var numescs=Number(formul.numesc.value);
    var liston=Number(formul.liston.value);
    var nombres=partidos;
    var votos=numeros1;
    var esc=new Array();
    var num_min_votos;
    var resultado; //Cadena con el resultado
    var numpartidosok=0;
    var votosok=new Array();
    var nombresok=new Array();

    resultado="<b>Resultados:</b><br /><br />";

    for (ct=0;ct<numpartidos;ct++) numvotos=votos[ct]+numvotos;

    resultado=resultado+"N&uacute;mero de votos recogidos : <b>"+numvotos+"</b><br /><br />";

    num_min_votos=Math.ceil(numvotos*liston/100);

    resultado=resultado+"El n&uacute;mero de votos m&iacute;nimo para obtener esca&ntilde;o queda en: "+num_min_votos+" <br /><br />";

    for (ct=0;ct<numpartidos;ct++)
        if (votos[ct]<num_min_votos){
            resultado=resultado+"El partido <b>"+nombres[ct]+"</b> queda fuera por no llegar al list&oacute;n electoral.<br />";
        } else {
            votosok[numpartidosok]=votos[ct];  // En votosok y nombresok ponemos los partidos que han superado el liston
            nombresok[numpartidosok]=nombres[ct];
            numpartidosok++;
        }

    resultado=resultado+"<br />";

    for (ct=0; ct<numpartidosok; ct++) esc[ct]=0;
    for (ct=0; ct<numescs; ct++) esc[nuevo_escanyo(votosok, esc, numpartidosok)]++;

    for (ct=0; ct<numpartidosok; ct++)
        resultado=resultado+"El partido <b>"+nombresok[ct]+"</b> obtiene "+esc[ct]+" esca&ntilde;os.<br />";

    //PARTIDOS
    partido0= nombres[0];
    partido1= nombres[1];
    partido2= nombres[2];
    partido3= nombres[3];
    partido4= nombres[4];
    partido5= nombres[5];
    partido6= nombres[6];
    partido7= nombres[7];
    partido8= nombres[8];



    sessionStorage.setItem('nombres0', JSON.stringify(partido0));
    sessionStorage.setItem('nombres1', JSON.stringify(partido1));
    sessionStorage.setItem('nombres2', JSON.stringify(partido2));
    sessionStorage.setItem('nombres3', JSON.stringify(partido3));
    sessionStorage.setItem('nombres4', JSON.stringify(partido4));
    sessionStorage.setItem('nombres5', JSON.stringify(partido5));
    sessionStorage.setItem('nombres6', JSON.stringify(partido6));
    sessionStorage.setItem('nombres7', JSON.stringify(partido7));
    sessionStorage.setItem('nombres8', JSON.stringify(partido8));




    //ESCAnOS
    escano0= esc[0];
    escano1= esc[1];
    escano2= esc[2];
    escano3= esc[3];
    escano4= esc[4];
    escano5= esc[5];




    sessionStorage.setItem('numeroesc', JSON.stringify(numescs));
    sessionStorage.setItem('escano0', JSON.stringify(escano0));
    sessionStorage.setItem('escano1', JSON.stringify(escano1));
    sessionStorage.setItem('escano2', JSON.stringify(escano2));
    sessionStorage.setItem('escano3', JSON.stringify(escano3));
    sessionStorage.setItem('escano4', JSON.stringify(escano4));
    sessionStorage.setItem('escano5', JSON.stringify(escano5));







    document.getElementById("resultados").innerHTML = resultado;

    google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {

 //Partidos
 var partidos0 = sessionStorage.getItem('nombres0');
 partidos0 = JSON.parse(partidos0);

 var partidos1 = sessionStorage.getItem('nombres1');
 partidos1 = JSON.parse(partidos1);

 var partidos2 = sessionStorage.getItem('nombres2');
 partidos2 = JSON.parse(partidos2);

 var partidos3 = sessionStorage.getItem('nombres3');
 partidos3 = JSON.parse(partidos3);

 var partidos4 = sessionStorage.getItem('nombres4');
 partidos4 = JSON.parse(partidos4);

 var partidos5 = sessionStorage.getItem('nombres5');
 partidos5 = JSON.parse(partidos5);

 var partidos6 = sessionStorage.getItem('nombres6');
 partidos6 = JSON.parse(partidos6);

 var partidos7 = sessionStorage.getItem('nombres7');
 partidos7= JSON.parse(partidos7);

 var partidos8 = sessionStorage.getItem('nombres8');
 partidos8 = JSON.parse(partidos8);








 //Escanos

 var numescs = sessionStorage.getItem('numeroesc');
 numescs = parseInt(JSON.parse(numescs));

 var escano0 = sessionStorage.getItem('escano0');
 escano0 = parseInt(JSON.parse(escano0));

 var escano1 = sessionStorage.getItem('escano1');
 escano1 = parseInt(JSON.parse(escano1));

 var escano2 = sessionStorage.getItem('escano2');
 escano2 = parseInt(JSON.parse(escano2));

 var escano3 = sessionStorage.getItem('escano3');
 escano3 = parseInt(JSON.parse(escano3));

 var escano4 = sessionStorage.getItem('escano4');
 escano4 = parseInt(JSON.parse(escano4));

 var escano5 = sessionStorage.getItem('escano5');
 escano5 = parseInt(JSON.parse(escano5));











 var data = google.visualization.arrayToDataTable([
  ['Elecciones', 'Escanos'],
  ['', numescs],
  [partidos0, escano0],
  [partidos1, escano1],
  [partidos2, escano2],
  [partidos3, escano3],
  [partidos4, escano4],
  [partidos5, escano5]
 ]);

 var PSOE = 'red';
 var PP = 'blue';
 var VOX = '#18EC11';
 var PODEMOS = '#990099';
 var CS = 'orange';
 var MASPAIS = '#00FFCC';




 var options = {
  pieHole: 0.4,
  pieStartAngle: 90,
  backgroundColor: { fill: "#F0F8FF", stroke:"#F0F8FF" },
  tooltip:  {text: 'value', textStyle: {color: '#FF0000'}, showColorCode: true},
  pieSliceText: 'label',
  pieSliceBorderColor: "#F0F8FF",

  slices: {
   0: { color: 'transparent' },
   1: { color: PSOE },
   2: { color: PP },
   3: { color: CS },
   4: { color: MASPAIS },
   5: { color: VOX },
   6: { color: PODEMOS },

  }

 };

 var chart = new google.visualization.PieChart(document.getElementById('pacman'));
 chart.draw(data, options);

}