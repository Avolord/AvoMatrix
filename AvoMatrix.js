let Matrix_Class_Error_Message = true;

//Most of the error catches are in the non-static functions [Just a hint]

class Matrix {
  constructor(rows,columns,fill) {
    rows = (Number.isInteger(rows)) ? rows : 3;
    columns = (Number.isInteger(columns)) ? columns : 3;
    fill = (Number.isInteger(fill)) ? fill : 0;
    this.cols = columns;
    this.rows = rows;
    this.data = new Array(this.rows).fill(new Array(this.cols).fill(fill));
  }

  show() {
    console.table(this.data);
  }

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

  static wrong_dim_error_message() {
    if(!Matrix_Class_Error_Message) {return}
    return "Error, wrong dimensions! Amount of columns of A have to be equal to the amount of rows of B."
  }

  static randomInt(min,max) {
    return Math.floor(min + Math.random()*(max+1 - min));
  }

  static diagonal(M1,diagonal_num,filler) {
    if(!(M1 instanceof Matrix)) {
      console.log(Matrix.wrong_type_error_message2());
      return null;
    }
    let M2 = M1.copy();
        M2.diagonal(diagonal_num,filler);
    return M2;
  }

  static random(M1,min,max) {
    if(!(M1 instanceof Matrix)) {
      console.log(Matrix.wrong_type_error_message2());
      return null;
    }
    let M2 = M1.copy();
        M2.random(min,max);
    return M2;
  }

  static map(M1,func) {
    if(!(M1 instanceof Matrix)) {
      console.log(Matrix.wrong_type_error_message2());
      return null;
    }
    let M2 = M1.copy();
        M2.map(func);
        return M2;
  }

  static add(M1,Obj) {
    let M2 = M1.copy();
        M2.add(Obj);
    return M2;
  }

  static sub(M1,Obj) {
    let M2 = M1.copy();
        M2.sub(Obj);
    return M2;
  }

  static mult(M1,Obj) {
    let M2 = M1.copy();
        M2.mult(Obj);
    return M2;
  }

  static div(M1,Obj) {
    let M2 = M1.copy();
        M2.div(Obj);
    return M2;
  }

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

  random(min,max) {
    this.data = this.data.map(row => row.map(col => Matrix.randomInt(min || 0,max || 1)));
  }

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

  map(func) {
    if(typeof func != "function") {
      console.log(Matrix.wrong_type_error_message3());
      return null;
    }
    this.data = this.data.map(rows => rows.map(cols => func(cols)));
  }

  copy() {
    let result = new Matrix(this.rows,this.cols);
        result.data = this.data.slice(0);
    return result;
  }

  unit() {
    this.data = this.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return (sub_index === main_index) ? 1 : 0;
      });
    });
  }

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

  transpose() {
    let result = new Matrix(this.cols,this.rows);
        result.show();
    result.data = result.data.map((rows,main_index) => {
      return rows.map((cols,sub_index) => {
        return this.data[sub_index][main_index];
      });
    });
    return result;
  }

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
