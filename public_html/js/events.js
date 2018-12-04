/* global M */

/**
Autores:
Maya Rocha Emmanuel
Silva Rojas Karla

Grupo: 3CM3
Algoritmos
 **/

/**
 * returns a string abc...z
 */

let newStr = "";
let newCol = "";

function buildAlphabet() {
    let alphabet = "";
    const a = 'a'.charCodeAt(0), b = 'z'.charCodeAt(0);
    for (let i = a; i <= b; ++i) {
        alphabet += String.fromCharCode(i);
    }
    return alphabet;
}

/**
 * Given the objective function and an alphabet this will infer the amount of variables used. 
 * @param {strin} strFun 
 * @param {string} alphabet 
 */
function inferNumberVariables(strFun, alphabet) {
    let count = 0;
    let vars = strFun;
    for (let char of vars) if (alphabet.includes(char)) ++count;
    return count;
}
 
 
/**
 * Esta funcion crea las filas, es decir, requiere llamar a la funcion para agregar los valores "en horizontal" (filas)de la tabla
 */
function createHTMLRows(vars, varCount, dp_table, cols, t_FuncHor, lcsMatrix) {
    const template = '<tr><td  style="text-align:center" id="row-X"> var </td>';
    //<td  style="text-align:center" id="cellX-0"> 0 </td> 
    // newStr += "<td  style='text-align:center' id='cell0-X'> 0 </td> ";
    let mainBody = dp_table.getElementsByTagName("table")[0]
                            .getElementsByTagName("tbody")[0];
  mainBody.innerHTML = newStr;
}

function createHTMLCols(vars, varCount, dp_table, lcsMatrix) {
    const template = '<th id="col-X"> var </th>';
    let mainBody = dp_table.getElementsByTagName("table")[0]
                            .getElementsByTagName("thead")[0];
    newCol = "<th> - </th> \
				  <th> - </th>";
    for (let i = 0; i < varCount; ++i) {
        let buff = template.replace("X", i);
        newCol += buff.replace("X", i).replace("var", vars[i]);
    }
    mainBody.innerHTML = newCol;
}

function ResetStep() {
        const Instantes = document.querySelectorAll('.tooltipped');
        Instantes.forEach((Instante) => {
            M.Tooltip.getInstance(Instante).destroy()
        });
        //this.setState({VerticalIndex: 0, HorizontalIndex: 0, Count: 0});
    }
    
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


/**
 * @param {string[]} set1
 * @param {string[]} set2
 * @return {string[]}  **/
 
 function longestCommonSubsequence(set1, set2, dp_table, nHor, nVer) {
  // Init LCS matrix.
  const lcsMatrix = new Array(nVer + 1).fill(null).map(() => Array(nHor + 1).fill(null));

  // Fill first row with zeros.
  for (let columnIndex = 0; columnIndex <= nHor; columnIndex += 1) {
    lcsMatrix[0][columnIndex] = 0;   
  }
  // Fill first column with zeros.
  for (let rowIndex = 1; rowIndex <= nVer; rowIndex += 1) {
    lcsMatrix[rowIndex][0] = 0;
  }

  // Fill rest of the column that correspond to each of two strings.
  for (let rowIndex = 1; rowIndex <= nVer; rowIndex += 1) {

    for (let columnIndex = 1; columnIndex <= nHor; columnIndex += 1) {
      if (set1[columnIndex - 1] === set2[rowIndex - 1]) {  
        lcsMatrix[rowIndex][columnIndex] = lcsMatrix[rowIndex - 1][columnIndex - 1] + 1;
      } else {
        lcsMatrix[rowIndex][columnIndex] = Math.max(
          lcsMatrix[rowIndex - 1][columnIndex],
          lcsMatrix[rowIndex][columnIndex - 1],
        );
      }
    }
  }
return lcsMatrix;
}

function render (lcsMatrix, set1, set2, dp_table, nHor, nVer) {
    
  if( (nHor<=0 || nVer<=0) || (nHor>9 || nVer>9) )
    return false  //Terminamos el algoritmo al no cumplir lo establecido en las restricciones
    
  const template = '<td  style="text-align:center" id="row-X"> var </td>';
  let mainBody = dp_table.getElementsByTagName("table")[0]
                           .getElementsByTagName("tbody")[0];
  let buff = template.replace("X", 10);
  
   newStr = "<tr height='30px'> <td  style='text-align:center'> - </td>";
      
   alert("Colocamos una fila de ceros");    

  for (let columnIndex = 0; columnIndex <= nHor; columnIndex += 1) { 
    setTimeout(function() { newStr += "<td  style='text-align:center'> 0 </td>"; mainBody.innerHTML = newStr }, 1000);
    }
  
  // Fill rest of the column that correspond to each of two strings.
  for (let rowIndex = 1; rowIndex <= nVer; rowIndex += 1) {
      
                   
    setTimeout(function() { 
        
      document.getElementById('cond3_cod').style.color = '#000000';   document.getElementById('res3_cod').style.color = '#000000'; document.getElementById('cond2_cod').style.color = '#000000';   document.getElementById('res2_cod').style.color = '#000000';
      newStr += '</tr>'
      
      let buff = template.replace("X", rowIndex);
      newStr += buff.replace("X", rowIndex).replace("var", set2[rowIndex-1]);  //Colocando la letra de cada fila
      
      alert("Colocamos un cero al inicio de la fila")    
      newStr += "<td  style='text-align:center'> 0 </td>" 
      mainBody.innerHTML = newStr
          
     for (let columnIndex = 1; columnIndex <= nHor; columnIndex += 1) {
         
         document.getElementById('cond3_cod').style.color = '#000000';   document.getElementById('res3_cod').style.color = '#000000'; document.getElementById('cond2_cod').style.color = '#000000';   document.getElementById('res2_cod').style.color = '#000000';
      
         setTimeout(function() {
             
           document.getElementById('cond2_cod').style.color = '#FF0000'; //Con este tipo de instrucciones cambiamos el color del pseudocodigo
           document.getElementById('cond3_cod').style.color = '#000000';   document.getElementById('res3_cod').style.color = '#000000';
           document.getElementById('res2_cod').style.color = '#FF7514'; 
           
           if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
               
           newStr += buff.replace("X", 10).replace("var", lcsMatrix[rowIndex][columnIndex]);
           
           setTimeout(function() {alert( "Tenemos que " + set1[columnIndex - 1] + " y " + set2[rowIndex - 1] + " son iguales, colocamos " + lcsMatrix[rowIndex-1][columnIndex-1] + " (valor de celda noroeste) + 1, es decir: " + lcsMatrix[rowIndex][columnIndex] )}  , 50);
           }

           else {
             let aux = Math.max(
             lcsMatrix[rowIndex - 1][columnIndex],
             lcsMatrix[rowIndex][columnIndex - 1],
             );
             
            document.getElementById('cond3_cod').style.color = '#FF0000'; //Con este tipo de instrucciones cambiamos el color del pseudocodigo
            document.getElementById('cond2_cod').style.color = '#000000';   document.getElementById('res2_cod').style.color = '#000000';
            document.getElementById('res3_cod').style.color = '#FF7514';
                 newStr += buff.replace("X", 10).replace("var", aux); //Usamos un auxiliar que guarda el maximo para nuestro caso donde no son iguales las letras, y lo mandamos a mostrarse en pantalla
            
            setTimeout(function() { alert( "Ahora " + set1[columnIndex - 1] + " y " + set2[rowIndex - 1] +  " son diferentes, calculamos el maximo de la celda de arriba y de la izquierda y colocamos el valor.  En este caso el maximo es: " + aux)}  , 50);
            } 
            
            if(columnIndex == nHor && rowIndex == nVer) {
              setTimeout(function() {  
                  document.getElementById('cond3_cod').style.color = '#000000';   document.getElementById('res3_cod').style.color = '#000000'; document.getElementById('cond2_cod').style.color = '#000000';   document.getElementById('res2_cod').style.color = '#000000';
                  alert( "Hemos terminado, la LCS es de tamaño " + lcsMatrix[rowIndex][columnIndex] )
              }  , 50);
            }
            mainBody.innerHTML = newStr
          } , 200*columnIndex);            
     }
     
   }, 2000*rowIndex); //Recordar que setTimeout nos permite esperar n milisegundos para realizar la funcion o sentencias dentro de ella.
 }
           
}



/**
 * Main function which executes everything from this document.
 * 
 * Basically, here we must obtain the objective function, infer the number of variables
 * used and with this number create dinamically the restrictions for each one and then 
 * we pass all the parameters to the functionOptimization.js source.
 */
function execEvents() {

    let dp_Table = document.getElementById("dp_table");
    let btn_Sig = document.getElementById("btn_Sig");
	let btn_Begin = document.getElementById("btn_begin");
        let btn_Ins = document.getElementById("btn_Ins");
	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	let t_FuncHor = document.getElementById("cad1");
	let t_FuncVer = document.getElementById("cad2");

    let nHor = 0;
    let nVer = 0;

    btn_Sig.addEventListener("click", function(e) {
        
        $(document).ready(function(){ $("#btn_Sig").attr("disabled", true); }); //sentencia para deshabilitar el boton al darle clic
       
        nVer = inferNumberVariables(t_FuncVer.value, alphabet);
	nHor = inferNumberVariables(t_FuncHor.value, alphabet);
        let lcsMatrix = longestCommonSubsequence(t_FuncHor.value, t_FuncVer.value, dp_Table, nHor, nVer);  //Esta variable guarda nuestra matriz, con todos los valores calculados
	
        //alert(rend.next());
        createHTMLCols(t_FuncHor.value, nHor, dp_Table, lcsMatrix);
        createHTMLRows(t_FuncVer.value, nVer, dp_Table, nHor, t_FuncHor.value, lcsMatrix);  
        render(lcsMatrix, t_FuncHor.value, t_FuncVer.value, dp_Table, nHor, nVer );  //Esta funcion pega en pantalla todo lo que se ha creado
    });
	
    btn_Begin.addEventListener("click", function(e) {
        ResetStep();
	location.reload(true);
    });
    
    btn_Ins.addEventListener("click", function(e) {
        M.toast({html: 'Dale clic al botón reiniciar para comenzar desde cero y al botón siguiente para ejecutar el algoritmo paso a paso.'});
    });
                
}