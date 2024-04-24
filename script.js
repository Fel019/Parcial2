function Calcular() {

    var valor1 = document.getElementById("Valor1").value;
    var valor2 = document.getElementById("Valor2").value;

    if (valor1 !== "" && valor2 !== "" && !isNaN(valor1) && !isNaN(valor2)) {
    var Divisores1 = SumarDivisores(valor1);
    var Divisores2 = SumarDivisores(valor2);

    if (Divisores1 == valor2 && Divisores2 == valor1 ){
        Swal.fire({
            
            icon: "success",
            title: "Los numeros son amigos",
            showConfirmButton: false
            
          });

          
    }
    else {

            
        Swal.fire({
            
            icon: "warning",
            title: "Los numeros no son amigos",
            showConfirmButton: false
            
          });
    }




}
  else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los valores ingresados son incorrectos",
      });


  }
}


function SumarDivisores(valor) {
    var total = 0

   
    for (var i = 1; i < valor; i++) {
     
        if (valor % i === 0) {
       
            total = i + total;
        }
    }
    return total;

} 
