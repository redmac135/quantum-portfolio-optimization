// expands the coefficients into a matrix
// input: [a,b,c,...]
// output: [[a^2, ab, ac, ...], [ab, b^2, bc, ...], [ac, bc, c^2, ...], ...

export function expandPolynomialToMatrix(coefficients: number[]): number[][] {
  const n = coefficients.length;
  const expandedMatrix: number[][] = Array.from({ length: n }, () =>
    Array(n).fill(0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      expandedMatrix[i][j] = coefficients[i] * coefficients[j];
    }
  }

  return expandedMatrix;
}

export function matrixToHumanReadable(matrix: number[][]): string {
  return matrix.map((row) => "[" + row.join(", ") + "]").join(",\n");
}

export function matrixToPolynomialHumanReadable(matrix: number[][]): string {
  // first term is always x_0^2
  let output: string = `${matrix[0][0]} * x_0^2`;

  // just iterate through the bottom right triangle of the matrix
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (i == j) {
        output += ` + ${matrix[i][j]} * x_${i}^2`;
      } else {
        output += ` + ${2 * matrix[i][j]} * x_${i} * x_${j}`;
      }
    }
  }
  return output;
}

// conputes the value given the matrix and the input vector
// human readable:
//  using the matrix of coefficients and (x_1, x_2, x_3, ...)
//  compute the value of the polynomial
export function computeMatrixResult(matrix: number[][], inputVector: number[]) {
  try {
    const n = inputVector.length;
    let result: number = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        result += matrix[i][j] * inputVector[i] * inputVector[j];
      }
    }

    return result;
  } catch (e) {
    return "Error";
  }
}
