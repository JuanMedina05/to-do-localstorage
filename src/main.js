// imports

import { dbTareas } from "./db/db";
import { mostrarTareas, rellenarLocalStorage } from "./helpers/tareas";

const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

// Incio de la aplicación
rellenarLocalStorage(dbTareas,TEXT_KEY);
mostrarTareas(TEXT_KEY);