

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


function FormularioHondt(formul) {
	//ESCAnOS POR PROVINCIA
let Almeria=6;
let Cadiz=9;
let Cordoba=6;
let Granada=7;
let Huelva=5;
let Jaen=5;
let Malaga=11;
let Sevilla=12;
let Huesca=3;
let Teruel=3;
let Zaragoza=7;
let Asturias=7;
let IslasBaleares=8;
let Palmas=8;
let Tenerife=7;
let Cantabria=5;
let Albacete=4;
let CiudadReal=5;
let Cuenca=3;
let Guadalajara=3;
let Toledo=6;
let Avila=3;
let Burgos=4;
let Leon=4;
let Palencia=3;
let Salamanca=4;
let Segovia=3;
let Soria=2;
let Valladolid=5;
let Zamora=3;
let Barcelona=32;
let Gerona=6;
let Lerida=4;
let Tarragona=6;
let Badajoz=6;
let Caceres=4;
let Coruna=8;
let Lugo=4;
let Orense=4;
let Pontevedra=7;
let Madrid=37;
let Navarra=5;
let Alava=4;
let Guipuzcoa=6;
let Vizcaya=8;
let Murcia=10;
let LaRioja=4;
let Alicante=12;
let Castellon=5;
let Valencia=15;
let Ceuta=1;
let Melilla=1;



    var nombres = sessionStorage.getItem('nombres');
    nombres = JSON.parse(nombres);
    //por provincia
    var votos0= sessionStorage.getItem('numero');
    votos0 = JSON.parse(votos0);
    for (var i = 0; i < votos0.length; i++) votos0[i] = parseInt(votos0[i], 10);

    var votos1 = sessionStorage.getItem('numero1');
    votos1 = JSON.parse(votos1);
    for (var i = 0; i < votos1.length; i++) votos1[i] = parseInt(votos1[i], 10);
	
	var votos2 = sessionStorage.getItem('numero2');
    votos2 = JSON.parse(votos2);
    for (var i = 0; i < votos2.length; i++) votos2[i] = parseInt(votos2[i], 10);
	
	var votos3 = sessionStorage.getItem('numero3');
    votos3 = JSON.parse(votos3);
    for (var i = 0; i < votos3.length; i++) votos3[i] = parseInt(votos3[i], 10);
	
	var votos4 = sessionStorage.getItem('numero4');
    votos4 = JSON.parse(votos4);
    for (var i = 0; i < votos4.length; i++) votos4[i] = parseInt(votos4[i], 10);
	
	var votos5 = sessionStorage.getItem('numero5');
    votos5 = JSON.parse(votos5);
    for (var i = 0; i < votos5.length; i++) votos5[i] = parseInt(votos5[i], 10);
	
	var votos6 = sessionStorage.getItem('numero6');
    votos6 = JSON.parse(votos6);
    for (var i = 0; i < votos6.length; i++) votos6[i] = parseInt(votos6[i], 10);
	
	var votos7 = sessionStorage.getItem('numero7');
    votos7 = JSON.parse(votos7);
    for (var i = 0; i < votos7.length; i++) votos7[i] = parseInt(votos7[i], 10);
	
	var votos8 = sessionStorage.getItem('numero8');
    votos8 = JSON.parse(votos8);
    for (var i = 0; i < votos8.length; i++) votos8[i] = parseInt(votos8[i], 10);
	
	var votos9 = sessionStorage.getItem('numero9');
    votos9 = JSON.parse(votos9);
    for (var i = 0; i < votos9.length; i++) votos9[i] = parseInt(votos9[i], 10);
	
	var votos10 = sessionStorage.getItem('numero10');
    votos10 = JSON.parse(votos10);
    for (var i = 0; i < votos10.length; i++) votos10[i] = parseInt(votos10[i], 10);
	
	var votos11 = sessionStorage.getItem('numero11');
    votos11 = JSON.parse(votos11);
    for (var i = 0; i < votos11.length; i++) votos11[i] = parseInt(votos11[i], 10);
	
	var votos12 = sessionStorage.getItem('numero12');
    votos12 = JSON.parse(votos12);
    for (var i = 0; i < votos12.length; i++) votos12[i] = parseInt(votos12[i], 10);
	
	var votos13 = sessionStorage.getItem('numero13');
    votos13 = JSON.parse(votos13);
    for (var i = 0; i < votos13.length; i++) votos13[i] = parseInt(votos13[i], 10);
	
	var votos14 = sessionStorage.getItem('numero14');
    votos14 = JSON.parse(votos14);
    for (var i = 0; i < votos14.length; i++) votos14[i] = parseInt(votos14[i], 10);
	
	var votos15 = sessionStorage.getItem('numero15');
    votos15 = JSON.parse(votos15);
    for (var i = 0; i < votos15.length; i++) votos15[i] = parseInt(votos15[i], 10);
	
	var votos16 = sessionStorage.getItem('numero16');
    votos16 = JSON.parse(votos16);
    for (var i = 0; i < votos16.length; i++) votos16[i] = parseInt(votos16[i], 10);
	
	var votos17 = sessionStorage.getItem('numero17');
    votos17 = JSON.parse(votos17);
    for (var i = 0; i < votos17.length; i++) votos17[i] = parseInt(votos17[i], 10);
	
	var votos18 = sessionStorage.getItem('numero18');
    votos18 = JSON.parse(votos18);
    for (var i = 0; i < votos18.length; i++) votos18[i] = parseInt(votos18[i], 10);
	
	var votos19 = sessionStorage.getItem('numero19');
    votos19 = JSON.parse(votos19);
    for (var i = 0; i < votos19.length; i++) votos19[i] = parseInt(votos19[i], 10);
	
	var votos20 = sessionStorage.getItem('numero20');
    votos20 = JSON.parse(votos20);
    for (var i = 0; i < votos20.length; i++) votos20[i] = parseInt(votos20[i], 10);
	
	var votos21 = sessionStorage.getItem('numero21');
    votos21 = JSON.parse(votos21);
    for (var i = 0; i < votos21.length; i++) votos21[i] = parseInt(votos21[i], 10);
	
	var votos22 = sessionStorage.getItem('numero22');
    votos22 = JSON.parse(votos22);
    for (var i = 0; i < votos22.length; i++) votos22[i] = parseInt(votos22[i], 10);
	
	var votos23 = sessionStorage.getItem('numero23');
    votos23 = JSON.parse(votos23);
    for (var i = 0; i < votos23.length; i++) votos23[i] = parseInt(votos23[i], 10);
	
	var votos24 = sessionStorage.getItem('numero24');
    votos24 = JSON.parse(votos24);
    for (var i = 0; i < votos24.length; i++) votos24[i] = parseInt(votos24[i], 10);
	
	var votos25 = sessionStorage.getItem('numero25');
    votos25 = JSON.parse(votos25);
    for (var i = 0; i < votos25.length; i++) votos25[i] = parseInt(votos25[i], 10);
	
	var votos26 = sessionStorage.getItem('numero26');
    votos26 = JSON.parse(votos26);
    for (var i = 0; i < votos26.length; i++) votos26[i] = parseInt(votos26[i], 10);
	
	var votos27 = sessionStorage.getItem('numero27');
    votos27 = JSON.parse(votos27);
    for (var i = 0; i < votos27.length; i++) votos27[i] = parseInt(votos27[i], 10);
	
	var votos28 = sessionStorage.getItem('numero28');
    votos28 = JSON.parse(votos28);
    for (var i = 0; i < votos28.length; i++) votos28[i] = parseInt(votos28[i], 10);
	
	var votos29 = sessionStorage.getItem('numero29');
    votos29 = JSON.parse(votos29);
    for (var i = 0; i < votos29.length; i++) votos29[i] = parseInt(votos29[i], 10);
	
	var votos30 = sessionStorage.getItem('numero30');
    votos30 = JSON.parse(votos30);
    for (var i = 0; i < votos30.length; i++) votos30[i] = parseInt(votos30[i], 10);
	
	var votos31 = sessionStorage.getItem('numero31');
    votos31 = JSON.parse(votos31);
    for (var i = 0; i < votos31.length; i++) votos31[i] = parseInt(votos31[i], 10);
	
	var votos32 = sessionStorage.getItem('numero32');
    votos32 = JSON.parse(votos32);
    for (var i = 0; i < votos32.length; i++) votos32[i] = parseInt(votos32[i], 10);
	
	var votos33 = sessionStorage.getItem('numero33');
    votos33 = JSON.parse(votos33);
    for (var i = 0; i < votos33.length; i++) votos33[i] = parseInt(votos33[i], 10);
	
	var votos34 = sessionStorage.getItem('numero34');
    votos34 = JSON.parse(votos34);
    for (var i = 0; i < votos34.length; i++) votos34[i] = parseInt(votos34[i], 10);
	
	var votos35 = sessionStorage.getItem('numero35');
    votos35 = JSON.parse(votos35);
    for (var i = 0; i < votos35.length; i++) votos35[i] = parseInt(votos35[i], 10);
	
	var votos36 = sessionStorage.getItem('numero36');
    votos36 = JSON.parse(votos36);
    for (var i = 0; i < votos36.length; i++) votos36[i] = parseInt(votos36[i], 10);
	
	var votos37 = sessionStorage.getItem('numero37');
    votos37 = JSON.parse(votos37);
    for (var i = 0; i < votos37.length; i++) votos37[i] = parseInt(votos37[i], 10);
	
	var votos38 = sessionStorage.getItem('numero38');
    votos38 = JSON.parse(votos38);
    for (var i = 0; i < votos38.length; i++) votos38[i] = parseInt(votos38[i], 10);
	
    var votos39 = sessionStorage.getItem('numero39');
    votos39 = JSON.parse(votos39);
    for (var i = 0; i < votos39.length; i++) votos39[i] = parseInt(votos39[i], 10);
	
	var votos40 = sessionStorage.getItem('numero40');
    votos40 = JSON.parse(votos40);
    for (var i = 0; i < votos40.length; i++) votos40[i] = parseInt(votos40[i], 10);
	
	var votos41 = sessionStorage.getItem('numero41');
    votos41 = JSON.parse(votos41);
    for (var i = 0; i < votos41.length; i++) votos41[i] = parseInt(votos41[i], 10);
	
	var votos42 = sessionStorage.getItem('numero42');
    votos42 = JSON.parse(votos42);
    for (var i = 0; i < votos42.length; i++) votos42[i] = parseInt(votos42[i], 10);
	
	var votos43 = sessionStorage.getItem('numero43');
    votos43 = JSON.parse(votos43);
    for (var i = 0; i < votos43.length; i++) votos43[i] = parseInt(votos43[i], 10);
	
	var votos44 = sessionStorage.getItem('numero44');
    votos44 = JSON.parse(votos44);
    for (var i = 0; i < votos44.length; i++) votos44[i] = parseInt(votos44[i], 10);
	
	var votos45 = sessionStorage.getItem('numero45');
    votos45 = JSON.parse(votos45);
    for (var i = 0; i < votos45.length; i++) votos45[i] = parseInt(votos45[i], 10);
	
	var votos46 = sessionStorage.getItem('numero46');
    votos46 = JSON.parse(votos46);
    for (var i = 0; i < votos46.length; i++) votos46[i] = parseInt(votos46[i], 10);
	
	var votos47 = sessionStorage.getItem('numero47');
    votos47 = JSON.parse(votos47);
    for (var i = 0; i < votos47.length; i++) votos47[i] = parseInt(votos47[i], 10);
	
	var votos48 = sessionStorage.getItem('numero48');
    votos48 = JSON.parse(votos48);
    for (var i = 0; i < votos48.length; i++) votos48[i] = parseInt(votos48[i], 10);
	
	var votos49 = sessionStorage.getItem('numero49');
    votos49 = JSON.parse(votos49);
    for (var i = 0; i < votos49.length; i++) votos49[i] = parseInt(votos49[i], 10);
	
	var votos50 = sessionStorage.getItem('numero50');
    votos50 = JSON.parse(votos50);
    for (var i = 0; i < votos50.length; i++) votos50[i] = parseInt(votos50[i], 10);
	
	var votos51 = sessionStorage.getItem('numero51');
    votos51 = JSON.parse(votos51);
    for (var i = 0; i < votos51.length; i++) votos51[i] = parseInt(votos51[i], 10);
	
	
	



    var numpartidos = Number(formul.numpartidos.value);
    var ct; //contador
    var i;
    var numvotos = Number(formul.votblan.value);

    var def = new Array();

    var resultado; //Cadena con el resultado


    resultado = "<b>Resultados:</b><br /><br />";

    for (ct = 0; ct < numpartidos; ct++) numvotos = votos0[ct] + votos1[ct] + votos2[ct] + votos3[ct] + votos4[ct] + votos5[ct] + votos6[ct] + votos7[ct] + votos8[ct] + votos9[ct] + votos10[ct] 
	                                                + votos11[ct] + votos12[ct] + votos13[ct] + votos14[ct] + votos15[ct] + votos16[ct] + votos17[ct] + votos18[ct] + votos19[ct] + votos20[ct]
													 + votos21[ct] + votos22[ct] + votos23[ct] + votos24[ct] + votos25[ct] + votos26[ct] + votos27[ct] + votos28[ct] + votos29[ct] + votos30[ct]
													  + votos31[ct] + votos32[ct] + votos33[ct] + votos34[ct] + votos35[ct] + votos36[ct] + votos37[ct] + votos38[ct] + votos39[ct] + votos40[ct]
													   + votos41[ct] + votos42[ct] + votos43[ct] + votos44[ct] + votos45[ct] + votos46[ct] + votos47[ct] + votos48[ct] + votos49[ct] + votos50[ct] 
													    + votos51[ct]+ numvotos;

    resultado = resultado + "N&uacute;mero de votos recogidos : <b>" + numvotos + "</b><br /><br />";



            
            var esc0 = new Array();
			var numescs0 = Almeria;
            for (ct = 0; ct < numpartidos; ct++) esc0[ct] = 0;
            for (ct = 0; ct < numescs0; ct++) esc0[nuevo_escanyo(votos0, esc0, numpartidos)]++;

            var esc1 = new Array();
            var numescs1 = Cadiz;
            for (ct = 0; ct < numpartidos; ct++) esc1[ct] = 0;
            for (ct = 0; ct < numescs1; ct++) esc1[nuevo_escanyo(votos1, esc1, numpartidos)]++;
			
			var esc2 = new Array();
            var numescs2 = Cordoba;
            for (ct = 0; ct < numpartidos; ct++) esc2[ct] = 0;
            for (ct = 0; ct < numescs2; ct++) esc2[nuevo_escanyo(votos2, esc2, numpartidos)]++;
			
			var esc3 = new Array();
            var numescs3 = Granada;
            for (ct = 0; ct < numpartidos; ct++) esc3[ct] = 0;
            for (ct = 0; ct < numescs3; ct++) esc3[nuevo_escanyo(votos3, esc3, numpartidos)]++;
			
			var esc4 = new Array();
            var numescs4 = Huelva;
            for (ct = 0; ct < numpartidos; ct++) esc4[ct] = 0;
            for (ct = 0; ct < numescs4; ct++) esc4[nuevo_escanyo(votos4, esc4, numpartidos)]++;
			
			var esc5 = new Array();
            var numescs5 = Jaen;
            for (ct = 0; ct < numpartidos; ct++) esc5[ct] = 0;
            for (ct = 0; ct < numescs5; ct++) esc5[nuevo_escanyo(votos5, esc5, numpartidos)]++;
			
			var esc6 = new Array();
            var numescs6 = Malaga;
            for (ct = 0; ct < numpartidos; ct++) esc6[ct] = 0;
            for (ct = 0; ct < numescs6; ct++) esc6[nuevo_escanyo(votos6, esc6, numpartidos)]++;
			
			var esc7 = new Array();
            var numescs7 = Sevilla;
            for (ct = 0; ct < numpartidos; ct++) esc7[ct] = 0;
            for (ct = 0; ct < numescs7; ct++) esc7[nuevo_escanyo(votos7, esc7, numpartidos)]++;
			
			var esc8 = new Array();
            var numescs8 = Huesca;
            for (ct = 0; ct < numpartidos; ct++) esc8[ct] = 0;
            for (ct = 0; ct < numescs8; ct++) esc8[nuevo_escanyo(votos8, esc8, numpartidos)]++;
			
			var esc9 = new Array();
            var numescs9 = Teruel;
            for (ct = 0; ct < numpartidos; ct++) esc9[ct] = 0;
            for (ct = 0; ct < numescs9; ct++) esc9[nuevo_escanyo(votos9, esc9, numpartidos)]++;
			
			var esc10 = new Array();
            var numescs10= Zaragoza;
            for (ct = 0; ct < numpartidos; ct++) esc10[ct] = 0;
            for (ct = 0; ct < numescs10; ct++) esc10[nuevo_escanyo(votos10, esc10, numpartidos)]++;
			
			var esc11 = new Array();
            var numescs11 = Asturias;
            for (ct = 0; ct < numpartidos; ct++) esc11[ct] = 0;
            for (ct = 0; ct < numescs11; ct++) esc11[nuevo_escanyo(votos11, esc11, numpartidos)]++;
			
			var esc12 = new Array();
            var numescs12 = IslasBaleares;
            for (ct = 0; ct < numpartidos; ct++) esc12[ct] = 0;
            for (ct = 0; ct < numescs12; ct++) esc12[nuevo_escanyo(votos12, esc12, numpartidos)]++;
			
			var esc13 = new Array();
            var numescs13 = Palmas;
            for (ct = 0; ct < numpartidos; ct++) esc13[ct] = 0;
            for (ct = 0; ct < numescs13; ct++) esc13[nuevo_escanyo(votos13, esc13, numpartidos)]++;
			
			var esc14 = new Array();
            var numescs14 = Tenerife;
            for (ct = 0; ct < numpartidos; ct++) esc14[ct] = 0;
            for (ct = 0; ct < numescs14; ct++) esc14[nuevo_escanyo(votos14, esc14, numpartidos)]++;
			
			var esc15 = new Array();
            var numescs15 = Cantabria;
            for (ct = 0; ct < numpartidos; ct++) esc15[ct] = 0;
            for (ct = 0; ct < numescs15; ct++) esc15[nuevo_escanyo(votos15, esc15, numpartidos)]++;
			
			var esc16 = new Array();
            var numescs16 = Albacete;
            for (ct = 0; ct < numpartidos; ct++) esc16[ct] = 0;
            for (ct = 0; ct < numescs16; ct++) esc16[nuevo_escanyo(votos16, esc16, numpartidos)]++;
			
			var esc17 = new Array();
            var numescs17 = CiudadReal;
            for (ct = 0; ct < numpartidos; ct++) esc17[ct] = 0;
            for (ct = 0; ct < numescs17; ct++) esc17[nuevo_escanyo(votos17, esc17, numpartidos)]++;
			
			var esc18 = new Array();
            var numescs18 = Cuenca;
            for (ct = 0; ct < numpartidos; ct++) esc18[ct] = 0;
            for (ct = 0; ct < numescs18; ct++) esc18[nuevo_escanyo(votos18, esc18, numpartidos)]++;
			
			var esc19 = new Array();
            var numescs19 = Guadalajara;
            for (ct = 0; ct < numpartidos; ct++) esc19[ct] = 0;
            for (ct = 0; ct < numescs19; ct++) esc19[nuevo_escanyo(votos19, esc19, numpartidos)]++;
			
			var esc20 = new Array();
            var numescs20 = Toledo;
            for (ct = 0; ct < numpartidos; ct++) esc20[ct] = 0;
            for (ct = 0; ct < numescs20; ct++) esc20[nuevo_escanyo(votos20, esc20, numpartidos)]++;
			
			var esc21 = new Array();
            var numescs21 = Avila;
            for (ct = 0; ct < numpartidos; ct++) esc21[ct] = 0;
            for (ct = 0; ct < numescs21; ct++) esc21[nuevo_escanyo(votos21, esc21, numpartidos)]++;
			
			var esc22 = new Array();
            var numescs22 = Burgos;
            for (ct = 0; ct < numpartidos; ct++) esc22[ct] = 0;
            for (ct = 0; ct < numescs22; ct++) esc22[nuevo_escanyo(votos22, esc22, numpartidos)]++;
			
			var esc23 = new Array();
            var numescs23 = Leon;
            for (ct = 0; ct < numpartidos; ct++) esc23[ct] = 0;
            for (ct = 0; ct < numescs23; ct++) esc23[nuevo_escanyo(votos23, esc23, numpartidos)]++;
			
			var esc24 = new Array();
            var numescs24 = Palencia;
            for (ct = 0; ct < numpartidos; ct++) esc24[ct] = 0;
            for (ct = 0; ct < numescs24; ct++) esc24[nuevo_escanyo(votos24, esc24, numpartidos)]++;
			
			var esc25 = new Array();
            var numescs25 = Salamanca;
            for (ct = 0; ct < numpartidos; ct++) esc25[ct] = 0;
            for (ct = 0; ct < numescs25; ct++) esc25[nuevo_escanyo(votos25, esc25, numpartidos)]++;
			
			var esc26 = new Array();
            var numescs26 = Segovia;
            for (ct = 0; ct < numpartidos; ct++) esc26[ct] = 0;
            for (ct = 0; ct < numescs26; ct++) esc26[nuevo_escanyo(votos26, esc26, numpartidos)]++;
			
			var esc27 = new Array();
            var numescs27 = Soria;
            for (ct = 0; ct < numpartidos; ct++) esc27[ct] = 0;
            for (ct = 0; ct < numescs27; ct++) esc27[nuevo_escanyo(votos27, esc27, numpartidos)]++;
			
			var esc28 = new Array();
            var numescs28 = Valladolid;
            for (ct = 0; ct < numpartidos; ct++) esc28[ct] = 0;
            for (ct = 0; ct < numescs28; ct++) esc28[nuevo_escanyo(votos28, esc28, numpartidos)]++;
			
			var esc29 = new Array();
            var numescs29 = Zamora;
            for (ct = 0; ct < numpartidos; ct++) esc29[ct] = 0;
            for (ct = 0; ct < numescs29; ct++) esc29[nuevo_escanyo(votos29, esc29, numpartidos)]++;
			
			var esc30 = new Array();
            var numescs30 = Barcelona;
            for (ct = 0; ct < numpartidos; ct++) esc30[ct] = 0;
            for (ct = 0; ct < numescs30; ct++) esc30[nuevo_escanyo(votos30, esc30, numpartidos)]++;
			
			var esc31 = new Array();
            var numescs31 = Gerona;
            for (ct = 0; ct < numpartidos; ct++) esc31[ct] = 0;
            for (ct = 0; ct < numescs31; ct++) esc31[nuevo_escanyo(votos31, esc31, numpartidos)]++;
			
			var esc32 = new Array();
            var numescs32 = Lerida;
            for (ct = 0; ct < numpartidos; ct++) esc32[ct] = 0;
            for (ct = 0; ct < numescs32; ct++) esc32[nuevo_escanyo(votos32, esc32, numpartidos)]++;
			
			var esc33 = new Array();
            var numescs33 = Tarragona;
            for (ct = 0; ct < numpartidos; ct++) esc33[ct] = 0;
            for (ct = 0; ct < numescs33; ct++) esc33[nuevo_escanyo(votos33, esc33, numpartidos)]++;
			
			var esc34 = new Array();
            var numescs34 = Badajoz;
            for (ct = 0; ct < numpartidos; ct++) esc34[ct] = 0;
            for (ct = 0; ct < numescs34; ct++) esc34[nuevo_escanyo(votos34, esc34, numpartidos)]++;
			
			var esc35 = new Array();
            var numescs35 = Caceres;
            for (ct = 0; ct < numpartidos; ct++) esc35[ct] = 0;
            for (ct = 0; ct < numescs35; ct++) esc35[nuevo_escanyo(votos35, esc35, numpartidos)]++;
			
			var esc36 = new Array();
            var numescs36 = Coruna;
            for (ct = 0; ct < numpartidos; ct++) esc36[ct] = 0;
            for (ct = 0; ct < numescs36; ct++) esc36[nuevo_escanyo(votos36, esc36, numpartidos)]++;
			
			var esc37 = new Array();
            var numescs37 = Lugo;
            for (ct = 0; ct < numpartidos; ct++) esc37[ct] = 0;
            for (ct = 0; ct < numescs37; ct++) esc37[nuevo_escanyo(votos37, esc37, numpartidos)]++;
			
			var esc38 = new Array();
            var numescs38 = Orense;
            for (ct = 0; ct < numpartidos; ct++) esc38[ct] = 0;
            for (ct = 0; ct < numescs38; ct++) esc38[nuevo_escanyo(votos38, esc38, numpartidos)]++;
			
			var esc39 = new Array();
            var numescs39 = Pontevedra;
            for (ct = 0; ct < numpartidos; ct++) esc39[ct] = 0;
            for (ct = 0; ct < numescs39; ct++) esc39[nuevo_escanyo(votos39, esc39, numpartidos)]++;
			
			var esc40 = new Array();
            var numescs40 = Madrid;
            for (ct = 0; ct < numpartidos; ct++) esc40[ct] = 0;
            for (ct = 0; ct < numescs40; ct++) esc40[nuevo_escanyo(votos40, esc40, numpartidos)]++;
			
			var esc41 = new Array();
            var numescs41 = Navarra;
            for (ct = 0; ct < numpartidos; ct++) esc41[ct] = 0;
            for (ct = 0; ct < numescs41; ct++) esc41[nuevo_escanyo(votos41, esc41, numpartidos)]++;
			
			var esc42 = new Array();
            var numescs42 = Alava;
            for (ct = 0; ct < numpartidos; ct++) esc42[ct] = 0;
            for (ct = 0; ct < numescs42; ct++) esc42[nuevo_escanyo(votos42, esc42, numpartidos)]++;
			
			var esc43 = new Array();
            var numescs43 = Guipuzcoa;
            for (ct = 0; ct < numpartidos; ct++) esc43[ct] = 0;
            for (ct = 0; ct < numescs43; ct++) esc43[nuevo_escanyo(votos43, esc43, numpartidos)]++;
			
			var esc44 = new Array();
            var numescs44 = Vizcaya;
            for (ct = 0; ct < numpartidos; ct++) esc44[ct] = 0;
            for (ct = 0; ct < numescs44; ct++) esc44[nuevo_escanyo(votos44, esc44, numpartidos)]++;
			
			var esc45 = new Array();
            var numescs45 = Murcia;
            for (ct = 0; ct < numpartidos; ct++) esc45[ct] = 0;
            for (ct = 0; ct < numescs45; ct++) esc45[nuevo_escanyo(votos45, esc45, numpartidos)]++;
			
			var esc46 = new Array();
            var numescs46 = LaRioja;
            for (ct = 0; ct < numpartidos; ct++) esc46[ct] = 0;
            for (ct = 0; ct < numescs46; ct++) esc46[nuevo_escanyo(votos46, esc46, numpartidos)]++;
			
			var esc47 = new Array();
            var numescs47 = Alicante;
            for (ct = 0; ct < numpartidos; ct++) esc47[ct] = 0;
            for (ct = 0; ct < numescs47; ct++) esc47[nuevo_escanyo(votos47, esc47, numpartidos)]++;
			
			var esc48 = new Array();
            var numescs48 = Castellon;
            for (ct = 0; ct < numpartidos; ct++) esc48[ct] = 0;
            for (ct = 0; ct < numescs48; ct++) esc48[nuevo_escanyo(votos48, esc48, numpartidos)]++;
			
			var esc49 = new Array();
            var numescs49 = Valencia;
            for (ct = 0; ct < numpartidos; ct++) esc49[ct] = 0;
            for (ct = 0; ct < numescs49; ct++) esc49[nuevo_escanyo(votos49, esc49, numpartidos)]++;
			
			var esc50 = new Array();
            var numescs50 = Ceuta;
            for (ct = 0; ct < numpartidos; ct++) esc50[ct] = 0;
            for (ct = 0; ct < numescs50; ct++) esc50[nuevo_escanyo(votos50, esc50, numpartidos)]++;
			
			var esc51 = new Array();
            var numescs51 = Melilla;
            for (ct = 0; ct < numpartidos; ct++) esc51[ct] = 0;
            for (ct = 0; ct < numescs51; ct++) esc51[nuevo_escanyo(votos51, esc51, numpartidos)]++;




    for(i = 0; i < esc0.length; i++){
        def[i] =esc0[i]+esc1[i]+esc2[i]+esc3[i]+esc4[i]+esc5[i]+esc6[i]+esc7[i]+esc8[i]+esc9[i]
		        +esc10[i]+esc11[i]+esc12[i]+esc13[i]+esc14[i]+esc15[i]+esc16[i]+esc17[i]+esc18[i]+esc19[i]
				+esc20[i]+esc21[i]+esc22[i]+esc23[i]+esc24[i]+esc25[i]+esc26[i]+esc27[i]+esc28[i]+esc29[i]
				+esc30[i]+esc31[i]+esc32[i]+esc33[i]+esc34[i]+esc35[i]+esc36[i]+esc37[i]+esc38[i]+esc39[i]
				+esc40[i]+esc41[i]+esc42[i]+esc43[i]+esc44[i]+esc45[i]+esc46[i]+esc47[i]+esc48[i]+esc49[i]
				+esc50[i]+esc51[i];
    }




    for (ct = 0; ct < numpartidos; ct++)
        resultado = resultado + "El partido <b>" + nombres[ct] + "</b> obtiene " + def[ct] + " esca&ntilde;os.<br />";



    

    document.getElementById("resultados").innerHTML = resultado;

}

