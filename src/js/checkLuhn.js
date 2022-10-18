export default function luhnAlgorithm(value) {
  value.replace(/\D/g, '');

  let nCheck = 0;
  let bEven = false;

  for (let n = value.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(value.charAt(n), 10);

    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) === 0;
}
