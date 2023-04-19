export function validateIIN(iin) {
  let new_iin = iin?.replace(/[^+\d]/g, '') || null,
    res = true,
    month = '',
    day = '',
    gender = '',
    sum = 0,
    j = 1;

  if (new_iin?.length == 12) {
    month = new_iin.substr(2, 2);
    day = new_iin.substr(4, 2);
    gender = new_iin.substr(6, 1);

    if (gender < 0 || gender > 9) {
      res = false;
    }

    if (month < 1 || month > 12) {
      res = false;
    }

    if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (day < 1 || day > 30) {
        res = false;
      }
    } else if (month == 2) {
      if (day < 1 || day > 29) {
        res = false;
      }
    } else {
      if (day < 1 || day > 31) {
        res = false;
      }
    }

    for (let i = 0; i < new_iin.length - 1; i++) {
      sum += new_iin[i] * j;
      j += 1;
    }

    if (sum % 11 == 10) {
      sum = 0;
      j = 3;
      for (let i = 0; i < new_iin.length - 1; i++) {
        sum += new_iin[i] * j;
        j += 1;
        if (j == 12) {
          j = 1;
        }
      }
    }

    if (sum % 11 != new_iin[11]) {
      res = false;
    }
  }

  return res;
}
