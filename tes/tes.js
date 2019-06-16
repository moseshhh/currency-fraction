function hitung(number) {
  let fraksi = [100000, 50000, 10000, 5000, 1000, 500, 100];
  let hasil = {};
  let sisa = number;
  for (i = 0; fraksi.length; i++) {
    if (number / fraksi[i] >= 1) {
      hitung = parseInt(sisa / fraksi[i]);
      hasil[String(fraksi[i])] = hitung;
      sisa = sisa % fraksi[i];
    }
  }
  return hasil;
}

console.log(hitung(48000));
