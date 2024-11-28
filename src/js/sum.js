const numbers = [2,3,4,1,6,4.5,0.5];

const sum = (numbers) => {
    let suma = 0;
    for (let partNumber of numbers) {
      suma = suma + partNumber;
    }
    return suma;
  }

  console.log(sum(numbers))