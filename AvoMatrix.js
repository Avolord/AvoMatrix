let Matrix_Class_Error_Message = true;

//Most of the error catches are in the non-static functions [Just a hint]

class Matrix {
  constructor(rows,columns,fill) {
    rows = (Number.isInteger(rows)) ? rows : 3;
    columns = (Number.isInteger(columns)) ? columns : 3;
    fill = (fill instanceof Number) ? fill : 0;
    this.cols = columns;
    this.rows = rows;
    this.data = new Array(this.rows).fill(new Array(this.cols).fill(fill));
  }

  //displayes the matrix in the console [in a table].
  show() {
    console.table(this.data);
  }

  //Activate or deactivate error messages.
  static Error_Message() {
    Matrix_Class_Error_Message = (Matrix_Class_Error_Message) ? false : true;
    switch(Matrix_Class_Error_Message) {
      case true:
      console.log("Error messages are now displayed!");
      break;
      case false:
      console.log("Error messages are now hidden!");
    }
  }

  //Error messages if a wrong argument is used
  static wrong_type_error_message() {
    if(!Matrix_Class_Error_Message) {return}
    return "Error, wrong object! The object has to be a matrix or a number."
  }

  static wrong_type_error_message2() {
    if(!Matrix_Class_Error_Message) {return}
    return "Error, wrong object! The object has to be a matrix."
  }

  static wrong_type_error_message3() {
    if(!Matrix_Class_Error_Message) {return}
    return "Error, wrong object! The object has to be a function."
  }

  static wrong_type_error_message4() {
    if(!Matrix_Class_Error_Message) {return}
    return "Error, wrong object! The object has to be an array."
  }

  static wrong_dim_error_message() {
    if(!Matrix_Class_Error_Message) {return}
    return "Error, wrong dimensions! Amount of columns of A has to be equal to the amount of rows of B."
  }

  static wrong_array_dim_error_message() {
    if(!Matrix_Class_Error_Message) {return}
    return "Error, wrong dimensions! Sub arrays have to have the same length."
  }

  //A function that returns a random integer from a given Interval [min;max] {for standalone purposes}
  static randomInt(min,max) {
    return Math.floor(min + Math.random()*(max+1 - min));
  }

  //returns a matrix object from an array as a input (can be double or single layered).
  static fromArray(array) {
    if(!(array instanceof Array)) {
      console.log(Matrix.wrong_type_error_message4());
      return null;
    }
    let columns = 1;
    if(array[0] instanceof Array) {
      if(!array.every(x => x.length == array[0].length)) {
        console.log(Matrix.wrong_array_dim_error_message());
        return null;
      } else {
        columns = array[0].length;
      }
    }
    let result = new Matrix(array.length,columns);
        result.data = result.data.map((x,i) => {
          return array[i];
        });
        return result;
  }

  //returns a matrix where the diagonal line is filled with the "diagonal num" and the rest with the "filler [num]".
  static diagonal(M1,diagonal_num,filler) {
    if(!(M1 instanceof Matrix)) {
      console.log(Matrix.wrong_type_error_message2());
      return null;
    }
    let M2 = M1.copy();
        M2.diagonal(diagonal_num,filler);
    return M2;
  }

  //returns a randomly filled matrix with numbers from a given intervall.
  static random(M1,min,max) {
    if(!(M1 instanceof Matrix)) {
      console.log(Matrix.wrong_type_error_message2());
      return null;
    }
    let M2 = M1.copy();
        M2.random(min,max);
    return M2;
  }

  //returns a matrix that has been mapped with a given function {more information at the non-static map function}
  static map(M1,func) {
    if(!(M1 instanceof Matrix)) {
      console.log(Matrix.wrong_type_error_message2());
      return null;
    }
    let M2 = M1.copy();
        M2.map(func);
        return M2;
  }

  //adds a [matrix or number] to another matrix and returns the result
  static add(M1,Obj) {
    let M2 = M1.copy();
        M2.add(Obj);
    return M2;
  }

  //subtracts a [matrix or number] from another matrix and returns the result
  static sub(M1,Obj) {
    let M2 = M1.copy();
        M2.sub(Obj);
    return M2;
  }

  //multiplies a [matrix or number] with another matrix and returns the result
  static mult(M1,Obj) {
    let M2 = M1.copy();
        M2.mult(Obj);
    return M2;
  }

  //divides a [matrix or number] from another matrix and returns the result
  static div(M1,Obj) {
    let M2 = M1.copy();
        M2.div(Obj);
    return M2;
  }

  //[WIP] returns the matrix product of two matrices
  static prod(M1,M2) {
    if(!(M1 instanceof Matrix) || !(M2 instanceof Matrix)) {
      console.log(Matrix.wrong_type_error_message2());
      return null;
    }
    if(M1.cols != M2.rows) {
      console.log(Matrix.wrong_dim_error_message());
      return null;
    }

  }
  //returns a matrix where every number is inverted
  static invert(M1) {
    if(!(M1 instanceof Matrix)) {
      console.log(Matrix.wrong_type_error_message2());
      return null;
    }
    let M2 = M1.copy();
        M2.invert();
    return M2;
  }

  //--/\/\=Most of the non-static functions change the data of the matrix object used as input=/\/\--\\

  //makes the input-matrix a random matrix with number from a given intervall
  random(min,max) {
    this.data = this.data.map(row => row.map(col => Matrix.randomInt(min || 0,max || 1)));
  }

  //retuns the data of a matrix as an array-object.
  toArray() {
    let result = new Array(this.rows);
        result = this.data.splice(0);
        return result;
  }

  //returns the data of a matrix as a string.
  toString() {
    return this.data.toString();
  }

  //returns the sum of every number of a matrix added up
  reduce() {
    if(Array.flatten) {
    return this.data.flatten().reduce();
  } else {
    let result = 0;
    this.data.forEach(row => {
      row.forEach(col => {
        result+=col;
      });
    });
    return result;
  }
  }

  //maps a function to every element of a matrix
  map(func) {
    if(typeof func != "function") {
      console.log(Matrix.wrong_type_error_message3());
      return null;
    }
    this.data = this.data.map(rows => rows.map(cols => func(cols)));
  }

  //retuns a copy of the matrix
  copy() {
    let result = new Matrix(this.rows,this.cols);
        result.data = this.data.slice(0);
    return result;
  }

  //makes it a unit matrix
  unit() {
    this.data = this.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return (sub_index === main_index) ? 1 : 0;
      });
    });
  }

  //makes it a diagonal matrix with "diagonal_num[bers]" for the diagonal line and "filler [numbers]" for the rest.
  diagonal(diagonal_num,filler) {
    if((diagonal_num != undefined && typeof diagonal_num != "number") || (filler != undefined && typeof filler != "number")) {
      console.log(Matrix.wrong_type_error_message());
      return null;
    }
    this.data = this.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return (sub_index === main_index) ? (diagonal_num || 1) : (filler || 0);
      });
    });
  }

  //transposes a matrix
  transpose() {
    let result = new Matrix(this.cols,this.rows);
    result.data = result.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return this.data[sub_index][main_index];
      });
    });
    return result;
  }

  //inverts every number of the matrix
  invert() {
    this.data = this.data.map(rows => rows.map(cols => cols*-1));
  }

  //adds a [matrix or number] to this matrix.
  add(Obj) {
    if(Obj instanceof Matrix)
    this.data = this.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return cols+(Obj.data[main_index][sub_index] || 0);
      });
    });
    else if(typeof Obj == "number")
    this.data = this.data.map(rows => rows.map(cols => cols+(Obj || 0)));
    else
    console.log(Matrix.wrong_type_error_message());
  }

  //subtracts a [matrix or number] from this matrix.
  sub(Obj) {
    if(Obj instanceof Matrix)
    this.data = this.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return cols-(Obj.data[main_index][sub_index] || 0);
      });
    });
    else if(typeof Obj == "number")
    this.data = this.data.map(rows => rows.map(cols => cols-(Obj || 0)));
    else
    console.log(Matrix.wrong_type_error_message());
  }

  //multiplies a [matrix or number] with this matrix.
  mult(Obj) {
    if(Obj instanceof Matrix)
    this.data = this.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return cols*(Obj.data[main_index][sub_index] || 1);
      });
    });
    else if(typeof Obj == "number")
    this.data = this.data.map(rows => rows.map(cols => cols*(Obj || 1)));
    else
    console.log(Matrix.wrong_type_error_message());
  }

  //divides a [matrix or number] from this matrix.
  div(Obj) {
    if(Obj instanceof Matrix)
    this.data = this.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return cols/(Obj.data[main_index][sub_index] || 1);
      });
    });
    else if(typeof Obj == "number")
    this.data = this.data.map(rows => rows.map(cols => cols/(Obj || 1)));
    else
    console.log(Matrix.wrong_type_error_message());
  }

}
