import { STUDENT_ID } from "../config";

// Ajoute le paramètre de suivi MLSA à chaque lien Microsoft
export const withTracking = (url) => url + (url.includes("?") ? "&" : "?") + "wt.mc_id=" + STUDENT_ID;
