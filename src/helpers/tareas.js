// importaciones
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

// aqui van las funciones para las tareas

export const rellenarLocalStorage = (arrayTareas, tareas="Tareas") => {
    // Guardar en el localStorage en la clave
    localStorage.setItem(tareas, JSON.stringify(arrayTareas))
}


// 1.- Función mostrarTareas que me pase como parametro una clave y me muestre a través de la consola la clave
//     usar console.table
export const mostrarTareas = (clave) => {
    console.table(JSON.parse(localStorage.getItem(clave)));
}

// 2.- descompletarTarea(id) Busca la tarea por su id y cambia su propiedad completada 
//     a false. Actualiza el localStorage.
/*export const descompletarTarea = (id, tareas="Tareas") => {
    localStorage.setItem(tareas,
        JSON.parse(localStorage.getItem(tareas)).map(v=>v.id).map(t=>tarea.id === id)
    );
}*/

export const descompletarTarea = (id,tareas="Tareas")=>{
    JSON.parse(localStorage.getItem(tareas)).find(v=>v.id==id)
}

function safeJSONParse(text){
    try{
        if(typeof text!="string"){throw new Error(`Error, la data ${text} no es un string`);
        };
        return JSON.parse(text)
    }catch(error){
        throw new Error("Error al parsear la data")
    }
}

export function saveTareas(arrayTareas=[]){
    try{
        if(!Array.isArray(arrayTareas)){
            throw new Error("Error, el array de tareas no es válido");
        }
        // serializar --> convierto a string.
        const json = JSON.stringify(arrayTareas);
        //guardo en localStorage
        localStorage.setItem(TEXT_KEY,json);
        console.info("Array guardado correctamente");
    }catch(error){
        console.error("Error");
    }
}

const getTareas=()=>{
    //traer data
    const dataSinParsear = localStorage.getItem(TEXT_KEY);
    const dataParseada = safeJSONParse(dataSinParsear);
    if(!Array.isArray(dataParseada)){
        console.Error("Error en la data");
        return [];
    }
    return dataParseada;
}


export const addTarea = (nombreTarea) => {
    const nombre= String(nombreTarea ?? "").trim();
    try {
        const nuevaTarea={
            id: uid(),
            nombre,
            fechaCreacion: new Date().toISOString(),
            completada: false
        }
        
    } catch (error) {
        
    }
}