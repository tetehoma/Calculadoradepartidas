console.log("Ranked match calculator")

let nivel = ""
let rankedBalance = calculateRanking(30,49)

function calculateRanking(gain, loss) {
    result = gain-loss
    return result
}
if (rankedBalance <= 10) {
    nivel = "Ferro";
} else if (rankedBalance > 10 && rankedBalance <= 20) {
    nivel = "Bronze";
} else if (rankedBalance > 20 && rankedBalance <= 50) {
    nivel = "Prata";
} else if (rankedBalance > 50 && rankedBalance <= 80) {
    nivel = "Ouro";
} else if (rankedBalance > 80 && rankedBalance <= 90) {
    nivel = "Diamante";
} else if (rankedBalance > 90 && rankedBalance <= 100) {
    nivel = "Lendário";
} else if (rankedBalance >= 101) {
    nivel = "Imortal";
}

console.log("O Herói tem de saldo de " +rankedBalance+" vitórias e está no nível de " + nivel)