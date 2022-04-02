#! node
const { exec } = require("child_process");
const util = require("util");
const execProm = util.promisify(exec);

// Script qui vérifie si tous les exercices de l'épreuve de l'air correct !

// Gestion d'erreur
if (process.argv.length > 2) {
  console.log("Le script n'a pas besoin d'argument pour fonctionner.");
  return;
}

// Function
async function testAir(air, arg, solution) {
  let result;
  try {
    result = await execProm(`node ${air} ${arg}`);
  } catch (error) {
    result = error;
  }
  return result;
}
// Parsing

// Air06
const air06 = "../Air06/air06.js";

const listeJ = "1 7 2 8 2 3 5 4 9 5 6";
const listeK = "15 2 7 56 34 79 20 4 67 12 85 46 38";
const listeL = "125 754 142 246 963 582 762 436 953 412 384 689";

// Résolution du problème

// Air01
async function Air01() {
  const air01 = "../Air01/air01.js";

  const listeA = `1 1 2 5 2 5 4 4 7 6 7 5 5`;
  const listeA_Sol = `"[ '6' ]"`;

  const listeB = "manger dormir boire danser vomir manger danser dormir";
  const listeB_Sol = `"[ 'boire', 'vomir' ]"`;

  const listeC = "+ 2 - 5 a 5 - 7 . 8 g g 9 , 3 - 1 . 5 a k 7 g 8 9 3 2 ";
  const listeC_Sol = `"[ '+', ',', '1', 'k' ]"`;

  let count = 0;

  await testAir(air01, listeA, listeA_Sol).then((res) => {
    let solution = JSON.stringify(
      res.stdout.substring(0, res.stdout.length - 1)
    );
    const result = listeA_Sol;
    if (solution === result) {
      return count++;
    }
  });

  await testAir(air01, listeB, listeB_Sol).then((res) => {
    let solution = JSON.stringify(
      res.stdout.substring(0, res.stdout.length - 1)
    );
    const result = listeB_Sol;
    if (solution === result) {
      return count++;
    }
  });

  await testAir(air01, listeC, listeC_Sol).then((res) => {
    let solution = JSON.stringify(
      res.stdout.substring(0, res.stdout.length - 1)
    );
    const result = listeC_Sol;
    if (solution === result) {
      return count++;
    }
  });

  return console.log(` air01 : ${count} / 3`);
}

// Air02
async function Air02() {
  const air02 = "../Air02/air02.js";

  const phraseA = `"Le     ciel est bleu !!!!"`;
  const phraseA_Sol = `"Le ciel est bleu !"`;

  const phraseB = `"Le matin,,,, j'''aime bien manger     du chou----fleur....."`;
  const phraseB_Sol = `"Le matin, j'aime bien manger du chou-fleur."`;

  const phraseC = `"Quand    c'est    l'''heure,,,     est----il trop tard ????"`;
  const phraseC_Sol = `"Quand c'est l'heure, est-il trop tard ?"`;

  let count = 0;

  await testAir(air02, phraseA, phraseA_Sol).then((res) => {
    let solution = JSON.stringify(
      res.stdout.substring(0, res.stdout.length - 1)
    );
    const result = phraseA_Sol;
    if (solution === result) {
      return count++;
    }
  });

  await testAir(air02, phraseB, phraseB_Sol).then((res) => {
    let solution = JSON.stringify(
      res.stdout.substring(0, res.stdout.length - 1)
    );
    const result = phraseB_Sol;
    if (solution === result) {
      return count++;
    }
  });

  await testAir(air02, phraseC, phraseC_Sol).then((res) => {
    let solution = JSON.stringify(
      res.stdout.substring(0, res.stdout.length - 1)
    );
    const result = phraseC_Sol;
    if (solution === result) {
      return count++;
    }
  });

  return console.log(` air02 : ${count} / 3`);
}

// Air03
async function Air03() {
  const air03 = "../Air03/air03.js";

  const listeD = "1 2 3 5 6 7 8 9 4";
  const listeD_Sol = `"[1,2,3,4,5,6,7,8,9]"`;

  const listeE = "10 20 30 40 60 70 80 90 50";
  const listeE_Sol = `"[10,20,30,40,50,60,70,80,90]"`;

  const listeF = "1 4 13 17 22 29 34 38 46 53 67 88 96 105 127 149 44";
  const listeF_Sol = `"[1,4,13,17,22,29,34,38,44,46,53,67,88,96,105,127,149]"`;

  let count = 0;

  await testAir(air03, listeD, listeD_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeD_Sol;
    if (verification === result) {
      return count++;
    }
  });

  await testAir(air03, listeE, listeE_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeE_Sol;
    if (verification === result) {
      return count++;
    }
  });

  await testAir(air03, listeF, listeF_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeF_Sol;
    if (verification === result) {
      return count++;
    }
  });

  return console.log(` air03 : ${count} / 3`);
}

// Air04
async function Air04() {
  const air04 = "../Air04/air04.js";

  const listeG = "1 3 5 7 fusion 2 4 6 8";
  const listeG_Sol = `"[1,2,3,4,5,6,7,8]"`;

  const listeH = "10 20 30 40 50 fusion 15 25 35 45 55";
  const listeH_Sol = `"[10,15,20,25,30,35,40,45,50,55]"`;

  const listeI = "1 5 13 17 21 25 33 47 55 fusion 2 6 14 18 22 26 32 44 50";
  const listeI_Sol = `"[1,2,5,6,13,14,17,18,21,22,25,26,32,33,44,47,50,55]"`;

  let count = 0;

  await testAir(air04, listeG, listeG_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeG_Sol;
    if (verification === result) {
      return count++;
    }
  });

  await testAir(air04, listeH, listeH_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeH_Sol;
    if (verification === result) {
      return count++;
    }
  });

  await testAir(air04, listeI, listeI_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeI_Sol;
    if (verification === result) {
      return count++;
    }
  });

  return console.log(` air04 : ${count} / 3`);
}

// Air05
async function Air05() {
  const air05 = "../Air05/air05.js";

  const data1 = "= 5";
  const data1_Sol = `"    =\\n   ===\\n  =====\\n =======\\n=========\\n"`;

  const data2 = "@ 7";
  const data2_Sol = `"      @\\n     @@@\\n    @@@@@\\n   @@@@@@@\\n  @@@@@@@@@\\n @@@@@@@@@@@\\n@@@@@@@@@@@@@\\n"`;

  const data3 = "+ 10";
  const data3_Sol = `"         +\\n        +++\\n       +++++\\n      +++++++\\n     +++++++++\\n    +++++++++++\\n   +++++++++++++\\n  +++++++++++++++\\n +++++++++++++++++\\n+++++++++++++++++++\\n"`;

  let count = 0;

  await testAir(air05, data1, data1_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout);
    const result = data1_Sol;
    if (solution === result) {
      return count++;
    }
  });

  await testAir(air05, data2, data2_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout);
    const result = data2_Sol;
    if (solution === result) {
      return count++;
    }
  });

  await testAir(air05, data3, data3_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout);
    const result = data3_Sol;
    if (solution === result) {
      return count++;
    }
  });

  return console.log(` air05 : ${count} / 3`);
}

//Air 06
async function Air06() {
  const air06 = "../Air06/air06.js";

  const listeJ = "1 7 2 8 2 3 5 4 9 5 6";
  const listeJ_Sol = `"[1,2,2,3,4,5,5,6,7,8,9]"`;

  const listeK = "15 2 7 56 34 79 20 4 67 12 85 46 38";
  const listeK_Sol = `"[2,4,7,12,15,20,34,38,46,56,67,79,85]"`;

  const listeL = "125 754 142 246 963 582 762 436 953 412 384 689";
  const listeL_Sol = `"[125,142,246,384,412,436,582,689,754,762,953,963]"`;

  let count = 0;

  await testAir(air06, listeJ, listeJ_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeJ_Sol;
    if (verification === result) {
      return count++;
    }
  });

  await testAir(air06, listeK, listeK_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeK_Sol;
    if (verification === result) {
      return count++;
    }
  });

  await testAir(air06, listeL, listeL_Sol).then((res) => {
    let solution = JSON.stringify(res.stdout.replace(/\n/gi, ""));
    let verification = solution.split(" ").join("");
    const result = listeL_Sol;
    if (verification === result) {
      return count++;
    }
  });

  return console.log(` air06 : ${count} / 3`);
}

Air01();
Air02();
Air03();
Air04();
Air05();
Air06();
