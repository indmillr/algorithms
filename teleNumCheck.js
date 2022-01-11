function telephoneCheck(str) {
  let ex1 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
  let ex2 = /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;
  let ex3 = /^[(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
  let ex4 = /^[0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/;
  let ex5 = /^[0-9]{10}$/;
  let ex6 = /^[1]{1}[\s][0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/;
  let ex7 = /^[1]{1}[\s][0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
  let ex8 = /^[1]{1}[\s][(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
  let ex9 = /^[1]{1}[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;

  if (
    str.match(ex1) ||
    str.match(ex2) ||
    str.match(ex3) ||
    str.match(ex4) ||
    str.match(ex5) ||
    str.match(ex6) ||
    str.match(ex7) ||
    str.match(ex8) ||
    str.match(ex9)
  ) {
    return true;
  } else {
    return false;
  }
}
