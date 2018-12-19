/**
 * @name hello.node
 * @desc Juste pour les algorithmes
 * @author Aélion - Déc.2018
 * @version 1.0.0
 */

//Je rajoute de la merde

/**retourne la valeur maximum entre deux valeurs
 * @param {*} currentMax Valeur maximum courant
 * @param {*} currentValue valeur lue dans le tableau
 * @return number la valeur la plus élevée entre currentValue et value
 */

const tablo = [25, 50, 256, 312, 3, 22, 8];

// Boucle de parcours du tableau
    let total = 0;
    let maximum = tablo[0];
    let minimum = tablo[0];
    let isMax = tablo[0];
    let isMin = tablo[0];

function max(currentMax, value) {
    console.log('Compare :' + currentMax + ' a ' + value);
    if (value > currentMax) {
        return value;
    } else {
        return currentMax;
    }
}

/**retourne la valeur minimum entre deux valeurs
 * @param {*} 
 */
function min(currentMin, value) {
    if (value < currentMin) {
        return value;  
    }
    else return currentMin;
}

function minOrMax(current, value, wantMax = true) {
    if (wantMax) {
        return max(current, value);
    }
    return min(current, value);
}
// Trie à bulles
let iteration = tablo.length;
let begin = 0;
    while (iteration > 0) {
        for (let i = 0; i <iteration; i++) {
            let currentValue = tablo[i];
            let nextValue = tablo[i+1];
        }
            if (currentValue > nextValue) {

            }
    }
    console.log(tablo)


// Classement des valeurs dans tableau
    while (tablo.length>0) {
        for (i=0; i <= tablo.length; i++){
            if (tablo[i]<isMin) {
                isMin = tablo[i];
                indice = i;
              } 
         }
    }



// Création d'une variable de type tableau
/**
 * @var array
 * Tableau de nombres entiers
 */

        for (let i = 0; i < tablo.length; i++) {
            total = total + tablo[0];
            
            if (maximum < tablo[i]) {
                maximum = tablo[i];
            }
                
        if (i>0) {
            maxIs = minOrMax(maxIs, tablo[i]);
            minIs = minOrMax(minIs, tablo[i]);
        }
    
    }
  
    console.log(' total ' + total);
    console.log(' maximum ' + maximum);
   
    
    


