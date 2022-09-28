/* Ecrivez une fonction nommée isTooLong qui :
prend une chaîne de caractères comme argument
renvoie vrai si la longueur de la chaîne dépasse 10 caractères
renvoie faux dans les autres cas */

const isTooLong = (str, maxLength) => {
   // si maxLength n'est pas un nombre entier 
   if(typeof(str) != "string" || !Number.isInteger(maxLength)) return undefined;

   return str.length > maxLength?true:false;
   /*
   if(str.length > 10){
      return true;
   }
   return false;
   */
}
// console.log("Is too Long : ", isTooLong(1, "test"));

/*Créez une fonction nommée aprec qui :
prend une note sur 20 en argument
renvoie Aie aie si la note est entre 0 et 7 exclus
renvoie Pas foufou si la note entre 7 et 10 exclus
renvoie Propre si la note entre 10 et 15 exclus
renvoie Super ! si la note entre 15 et 20 inclus
renvoie BUG si la note n'est pas correcte*/

const aprec = (note) => {
   if(typeof(note) != "number" || note > 20 || note < 0 )
   return "BUG";

   if(note <7) return "aïe aïe";
   if(note <10) return "Pas foufou";
   if(note <15) return "Propre";
   return "Super !";
}