//Ejercicio de parcial
//  SISTEMA DE RESERVACIONES DE RESTAURANTE
//Creo una 
// FUNCION TIPADA
// Busca una reservacion por ID
// Funcion que busca una reservacion segun el ID recibido
function buscarReservacion(
// Arreglo donde se encuentran todas las reservaciones
reservaciones, 
// ID que se desea buscar
id
// La funcion no devuelve ningun valor, solo muestra informacion
) {
    // Busca dentro del arreglo la primera reservacion
    // cuyo ID sea igual al ID recibido
    const encontrada = reservaciones.find(reservacion => reservacion.id === id);
    // Verifica si la reservacion fue encontrada
    if (encontrada) {
        // Muestra un mensaje indicando que si existe
        console.log("Reservación encontrada:");
        // Muestra todos los datos de la reservacion encontrada
        console.log(encontrada);
    }
    else {
        // Si no se encontro ninguna coincidencia,
        // muestra un mensaje indicando que no existe
        console.log(`No existe una reservación con ID ${id}`);
    }
}
// Creo un ARREGLO TIPADO
let reservaciones = [
    {
        id: 1,
        cliente: "Ana López",
        personas: 6,
        zona: "Terraza"
    },
    {
        id: 2,
        cliente: "Carlos Pérez",
        personas: 4,
        zona: "Interior"
    },
    {
        id: 3,
        cliente: "María Gómez",
        personas: 7,
        zona: "Terraza"
    },
    {
        id: 4,
        cliente: "Luis Martínez",
        personas: 3,
        zona: "Interior"
    }
];
// Tenemos la CANTIDAD ANTES DE FILTRAR
const cantidadAntesFiltro = reservaciones.length; //con.length verifico cuanto es la cantidad
// 2. REGISTRAR NUEVAS RESERVACIONES
// Reservacion normal al final
reservaciones.push({
    id: 5,
    cliente: "Pedro Ruiz",
    personas: 5,
    zona: "Interior"
});
// Reservacion prioritaria al inicio
reservaciones.unshift({
    id: 6,
    cliente: "Sofía Hernández",
    personas: 8,
    zona: "Terraza"
});
console.log("=== LISTA ANTES DE ATENDER ===");
console.log(reservaciones);
// 3. ATENDER RESERVACION
// shift() elimina la primera reservación de la lista
// y la guarda en la variable "atendida"
const atendida = reservaciones.shift();
console.log("=== RESERVACIÓN ATENDIDA ===");
// Vemos si realmente se obtuvo una reservacion
if (atendida) {
    // nombre del cliente atendido
    console.log(`Cliente: ${atendida.cliente}`);
    // cantidad de personas de la reservacion atendida
    console.log(`Personas: ${atendida.personas}`);
}
else {
    // Este mensaje aparece si la lista estaba vacia
    // y no habia reservaciones por atender
    console.log("No hay reservaciones pendientes.");
}
// 4. BUSCAR Y CONSULTAR
// Ejecuto la funcion dos veces
// Buscamos la reservación con ID 3
console.log("=== BUSQUEDA EXISTENTE ===");
buscarReservacion(reservaciones, 3);
console.log("=== BUSQUEDA INEXISTENTE ===");
// Busca la reservacion con ID 99
// Como no existe, la funcion mostrara un mensaje de error
buscarReservacion(reservaciones, 99);
// Filtro
// Cro un nuevo arreglo con las reservaciones que cumplan
// las condiciones indicadas en el filtro
const reservacionesTerraza = reservaciones.filter(
// Recorre cada reservacion del arreglo
reservacion => 
// Primera condicion: la zona debe ser "Terraza"
reservacion.zona === "Terraza" && //"&&" significa "y ademas" las dos condiciones deben cumplirse al mismo tiempo
    // Segunda condicion:la cantidad de personas debe ser 5 o mas
    reservacion.personas >= 5);
//utilize filter() para obtener onicamente las
//reservaciones pendientes cuya zona sea 'Terraza' y cuya cantidad 
//de personas sea mayor o igual a 5. El resultado se almacena en un nuevo
//arreglo sin modificar el arreglo original." 
console.log("=== RESERVACIONES DE TERRAZA (5 O MÁS PERSONAS) ===");
// vemos si el filtro encontro al menos una coincidencia
if (reservacionesTerraza.length > 0) {
    // Si existen coincidencias, muestra el arreglo filtrado
    console.log(reservacionesTerraza);
}
else {
    // Si el arreglo esta vacio, nos dice un mensaje indicando
    // que ninguna reservacion cumplio las condiciones
    console.log("No existen coincidencias.");
}
// Hago una prueba de funcion con arreglo vacio
// para  comprobar como funciona la busqueda cuando
// no existen reservaciones registradas
let vacio = [];
console.log("=== PRUEBA CON ARREGLO VACÍO ===");
// Se llama a la funcion de busqueda utilizando
// el arreglo vacio y el ID 1 como el arreglo no contiene elementos,
// la funcion mostrara que la reservacion no existe
buscarReservacion(vacio, 1);
// 6. ESTADO FINAL
// Guardamos la cantidad de reservaciones despues de aplicar el filtro
// para comprobar que el arreglo original no fue modificado
const cantidadDespuesFiltro = reservaciones.length;
console.log("=== RESERVACIONES PENDIENTES ===");
console.log(reservaciones);
console.log(`Cantidad pendiente: ${reservaciones.length}`);
// Muestramos cuantas reservaciones cumplieron las condiciones establecidas en el filtro
console.log(`Coincidencias del filtro: ${reservacionesTerraza.length}`);
// Mostramos la cantidad de reservaciones que tenia el arreglo  antes de aplicar el filtro
console.log(`Cantidad antes del filtro: ${cantidadAntesFiltro}`);
console.log(`Cantidad después del filtro: ${cantidadDespuesFiltro}`);
export {};
