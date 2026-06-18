export const get5x5Code = (letter: string) => {
  const code = [];

  switch (letter) {
    case "0":
      code[0] = 0b01110;
      code[1] = 0b10001;
      code[2] = 0b10101;
      code[3] = 0b10001;
      code[4] = 0b01110;
      break;
    case "1":
      code[0] = 0b00100;
      code[1] = 0b01100;
      code[2] = 0b00100;
      code[3] = 0b00100;
      code[4] = 0b01110;
      break;
    case "2":
      code[0] = 0b01110;
      code[1] = 0b10001;
      code[2] = 0b00110;
      code[3] = 0b01000;
      code[4] = 0b11111;
      break;
    case "3":
      code[0] = 0b11110;
      code[1] = 0b00001;
      code[2] = 0b00110;
      code[3] = 0b10001;
      code[4] = 0b01110;
      break;
    case "4":
      code[0] = 0b10001;
      code[1] = 0b10001;
      code[2] = 0b01111;
      code[3] = 0b00001;
      code[4] = 0b00001;
      break;
    case "5":
      code[0] = 0b11111;
      code[1] = 0b10000;
      code[2] = 0b11110;
      code[3] = 0b00001;
      code[4] = 0b11110;
      break;
    case "6":
      code[0] = 0b01110;
      code[1] = 0b10000;
      code[2] = 0b11110;
      code[3] = 0b10001;
      code[4] = 0b01110;
      break;
    case "7":
      code[0] = 0b11111;
      code[1] = 0b00001;
      code[2] = 0b00010;
      code[3] = 0b00100;
      code[4] = 0b00100;
      break;
    case "8":
      code[0] = 0b01110;
      code[1] = 0b10001;
      code[2] = 0b01110;
      code[3] = 0b10001;
      code[4] = 0b01110;
      break;
    case "9":
      code[0] = 0b01110;
      code[1] = 0b10001;
      code[2] = 0b01111;
      code[3] = 0b00001;
      code[4] = 0b01110;
      break;
    case "A":
      code[0] = 0b01110;
      code[1] = 0b10001;
      code[2] = 0b11111;
      code[3] = 0b10001;
      code[4] = 0b10001;
      break;
    case "B":
      code[0] = 0b11110;
      code[1] = 0b10001;
      code[2] = 0b11110;
      code[3] = 0b10001;
      code[4] = 0b11110;
      break;
    case "C":
      code[0] = 0b01111;
      code[1] = 0b10000;
      code[2] = 0b10000;
      code[3] = 0b10000;
      code[4] = 0b01111;
      break;
    case "D":
      code[0] = 0b11110;
      code[1] = 0b10001;
      code[2] = 0b10001;
      code[3] = 0b10001;
      code[4] = 0b11110;
      break;
    case "E":
      code[0] = 0b11111;
      code[1] = 0b10000;
      code[2] = 0b11110;
      code[3] = 0b10000;
      code[4] = 0b11111;
      break;
    case "F":
      code[0] = 0b11111;
      code[1] = 0b10000;
      code[2] = 0b11110;
      code[3] = 0b10000;
      code[4] = 0b10000;
      break;
    case "G":
      code[0] = 0b01111;
      code[1] = 0b10000;
      code[2] = 0b10011;
      code[3] = 0b10001;
      code[4] = 0b01111;
      break;
    case "H":
      code[0] = 0b10001;
      code[1] = 0b10001;
      code[2] = 0b11111;
      code[3] = 0b10001;
      code[4] = 0b10001;
      break;
    case "I":
      code[0] = 0b01110;
      code[1] = 0b00100;
      code[2] = 0b00100;
      code[3] = 0b00100;
      code[4] = 0b01110;
      break;
    case "J":
      code[0] = 0b01111;
      code[1] = 0b00001;
      code[2] = 0b00001;
      code[3] = 0b10001;
      code[4] = 0b01110;
      break;
    case "K":
      code[0] = 0b10001;
      code[1] = 0b10110;
      code[2] = 0b11000;
      code[3] = 0b10110;
      code[4] = 0b10001;
      break;
    case "L":
      code[0] = 0b01000;
      code[1] = 0b01000;
      code[2] = 0b01000;
      code[3] = 0b01000;
      code[4] = 0b01111;
      break;
    case "M":
      code[0] = 0b10001;
      code[1] = 0b11011;
      code[2] = 0b10101;
      code[3] = 0b10001;
      code[4] = 0b10001;
      break;
    case "N":
      code[0] = 0b10001;
      code[1] = 0b11001;
      code[2] = 0b10101;
      code[3] = 0b10011;
      code[4] = 0b10001;
      break;
    case "O":
      code[0] = 0b01110;
      code[1] = 0b10001;
      code[2] = 0b10001;
      code[3] = 0b10001;
      code[4] = 0b01110;
      break;
    case "P":
      code[0] = 0b11111;
      code[1] = 0b10001;
      code[2] = 0b11111;
      code[3] = 0b10000;
      code[4] = 0b10000;
      break;
    case "Q":
      code[0] = 0b01110;
      code[1] = 0b10001;
      code[2] = 0b10001;
      code[3] = 0b10010;
      code[4] = 0b01111;
      break;
    case "R":
      code[0] = 0b11111;
      code[1] = 0b10001;
      code[2] = 0b11110;
      code[3] = 0b10011;
      code[4] = 0b10001;
      break;
    case "S":
      code[0] = 0b01111;
      code[1] = 0b10000;
      code[2] = 0b01110;
      code[3] = 0b00001;
      code[4] = 0b11110;
      break;
    case "T":
      code[0] = 0b11111;
      code[1] = 0b00100;
      code[2] = 0b00100;
      code[3] = 0b00100;
      code[4] = 0b00100;
      break;
    case "U":
      code[0] = 0b10001;
      code[1] = 0b10001;
      code[2] = 0b10001;
      code[3] = 0b10001;
      code[4] = 0b01110;
      break;
    case "V":
      code[0] = 0b10001;
      code[1] = 0b10001;
      code[2] = 0b01010;
      code[3] = 0b01010;
      code[4] = 0b00100;
      break;
    case "W":
      code[0] = 0b10001;
      code[1] = 0b10001;
      code[2] = 0b10101;
      code[3] = 0b11011;
      code[4] = 0b10001;
      break;
    case "X":
      code[0] = 0b10001;
      code[1] = 0b01010;
      code[2] = 0b00100;
      code[3] = 0b01010;
      code[4] = 0b10001;
      break;
    case "Y":
      code[0] = 0b10001;
      code[1] = 0b10001;
      code[2] = 0b01110;
      code[3] = 0b00100;
      code[4] = 0b00100;
      break;
    case "Z":
      code[0] = 0b11111;
      code[1] = 0b00010;
      code[2] = 0b00100;
      code[3] = 0b01000;
      code[4] = 0b11111;
      break;
    case "%":
      code[0] = 0b11001;
      code[1] = 0b10010;
      code[2] = 0b00100;
      code[3] = 0b01001;
      code[4] = 0b10011;
      break;
    case "-":
      code[0] = 0b00000;
      code[1] = 0b00000;
      code[2] = 0b11110;
      code[3] = 0b00000;
      code[4] = 0b00000;
      break;
    case ":":
      code[0] = 0b00000;
      code[1] = 0b01100;
      code[2] = 0b00000;
      code[3] = 0b01100;
      code[4] = 0b00000;
      break;
    case "/":
      code[0] = 0b00010;
      code[1] = 0b00010;
      code[2] = 0b00100;
      code[3] = 0b01000;
      code[4] = 0b01000;
      break;

    /** SYMBOLS, use lowercase letters for id **/
    case "a":
      // bluetooth
      code[0] = 0b00110;
      code[1] = 0b10101;
      code[2] = 0b01110;
      code[3] = 0b10101;
      code[4] = 0b00110;
      break;
    case "b":
      // bluetooth connected
      code[0] = 0b00100;
      code[1] = 0b00010;
      code[2] = 0b01010;
      code[3] = 0b00010;
      code[4] = 0b00100;
      break;
    case "c":
      // bluetooth disconnected
      code[0] = 0b00000;
      code[1] = 0b10010;
      code[2] = 0b01100;
      code[3] = 0b10010;
      code[4] = 0b00000;
      break;
    default:
      return null;
  }

  return code;
};
