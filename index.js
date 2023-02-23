  //Generar arreglo de objetos con 5 inmuebles
  let inmuebles=[
    {idinm:"01",direccion:"calle 1# 5-41",telefono:"12345671",precio:150,estado:true},
    {idinm:"02",direccion:"calle 2# 5-41",telefono:"12345672",precio:250,estado:false},
    {idinm:"03",direccion:"calle 3# 5-41",telefono:"12345673",precio:350,estado:true},
    {idinm:"04",direccion:"calle 4# 5-41",telefono:"12345674",precio:450,estado:false},
    {idinm:"05",direccion:"calle 5# 5-41",telefono:"12345675",precio:550,estado:true}
]

//Referenciar los documentos de html
let alerta = document.getElementById("alerta");
let idinm = document.getElementById("idinm");
let midinm = document.querySelector("#midinm");
let direccion = document.getElementById("direccion");
let mdir = document.getElementById("mdir");
let telefono = document.getElementById("telefono");
let mtel = document.getElementById("mtel");
let precio = document.getElementById("precio");
let mprecio = document.getElementById("mprecio");
let dispo= document.getElementById("dispo");
let nodispo= document.getElementById("nodispo");
let enviar= document.getElementById("enviar");
let buscar = document.getElementById("buscar");
let listar = document.getElementById("listar");
// eventos
idinm.addEventListener("focus",function(){
    midinm.textContent = "Ingrese el id del inmueble";
})
idinm.addEventListener("blur",function(){
    midinm.textContent = "";
})

direccion.addEventListener("focus",function(){
    mdir.textContent = "Ingrese la direccion";
})
direccion.addEventListener("blur",function(){
    mdir.textContent = "";
})


telefono.addEventListener("focus",function(){
    mtel.textContent = "Ingrese el telefono";
})
telefono.addEventListener("blur",function(){
    mtel.textContent = "";
})

precio.addEventListener("focus",function(){
    mprecio.textContent = "Ingrese el precio del inmueble";
})
precio.addEventListener("blur",function(){
    mprecio.textContent = "";
})

//Guardar(Enviar)
enviar.addEventListener("click",()=>{
    //buscar idinm
    let encontrar = inmuebles.find(inmueble => inmueble.idinm == idinm.value)
    if(encontrar == undefined){//no encuentra id inmueble
        //agregar el inmueble al arreglo de objetos
        inmuebles.push({idinm:idinm.value,direccion:direccion.value,telefono:telefono.value,precio:precio.value,estado:dispo.checked})
        alerta.classList.remove("d-none");
        alerta.classList.add("alert-success");
        alerta.textContent = "Inmueble guardado correctamente"
        setTimeout(()=>{
            alerta.classList.remove("alert-success")
            alerta.classList.add("d-none")
        },3000)
    }else{
        alerta.classList.remove("d-none");
        alerta.classList.add("alert-danger");
        alerta.textContent = "Id de inmueble existente..." 
        setTimeout(()=>{
            alerta.classList.remove("alert-danger")
            alerta.classList.add("d-none")
        },3000)
    }
})

buscar.addEventListener("click",()=>{
    let encontrar = inmuebles.find(inmueble => inmueble.idinm == idinm.value) 
    if(encontrar == undefined){
        alerta.classList.remove("d-none");
        alerta.classList.add("alert-danger");
        alerta.textContent = "Id de inmueble no encontrado..." 
        setTimeout(()=>{
            alerta.classList.remove("alert-danger")
            alerta.classList.add("d-none")
        },3000)
    }else{
        direccion.textContent=inmuebles.direccion.value
    }
})