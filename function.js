/*************************************************************
 * pluriel
 * -----------------------------------------------------------
 * Accord d'un texte en fonction d'un nombre
 *
 * Paramètre texte : exemple {n}date{s}
 * {n} inclus le nombre
 * {s} inclus un 's' si pluriel
 *
 * Paramètre texte option : exemple {n}chevaux
 * texte spécific pour le pluriel
 * {n} inclus le nombre
 *
 * Paramètre nombre
 * Détermine si accord au pluriel
 *
 * ===========================================================
 * Révision 3
 *  - Suppression de critère
 *  - détection du critère en fonction du type de colonne
 *  - nombre : type Primitive
 *  - nombre : utilisation de colonne nombre, text, boolean
 *  - nombre : convertion de boolean en 1,0
 *  - nombre : détection de chiffre dans une colonne texte
 *
 * Révision 2
 *  - ajout d'un paramètre option texte pluriel
 *
 * Révision 0
 *  - création
 ************************************************************/
window.function = function (txt, pluriel, nombre) {
  txt = txt.value ?? "";
  pluriel = pluriel.value ?? "";
  nombre = nombre.value ?? 0;

  let critere = 1;
  if (typeof nombre == "boolean") {
    critere = 0;
    // Convertion true,false en 1,0
    nombre = nombre ? 1 : 0;
  }

  if (nombre > critere) {
    if (pluriel) {
      txt = pluriel;
    }
    txt = txt.replace(/{s}/g, "s");
  } else txt = txt.replace(/{s}/g, "");

  // Inclus nombre
  txt = txt.replace(/{n}/g, nombre.toString() + " ");

  return txt;
};
