# <a name="introduction"></a>Introduction
<p>
<code>AvoMatrix.js</code>
is a standalone JavaScript library that can perform basic matrix math. <br>
It can be used for a variety of projects like storing image- and map data for games <br>
or to design a very basic neural network. <br>

This library can be used by everyone for every purpose, though I would strongly <br>
appreciate sending me a message if you decide to use it.

**Almost all matrix-operations can be performed static and non-static!**
</p>

# <a name="usage"></a>Usage

<p>
Download the <code>AvoMatrix.js</code> file and <br>
import it in your JavaScript projects by adding <br>
a <code>< script src="" > tag</code> to your <code>index.html</code> <br>
file and changing 
the source to the location of the <br>
<code>AvoMatrix.js</code> file.
</p>
   
**You can find the JSDoc Documentation [here](https://Avolord.github.io/AvoMatrix/AvoMatrix.html)<br>

**Meta**

-   **version**: 1.0.0
-   **author**: AvoLord

## Classes

<dl>
<dt><a href="#Matrix">Matrix</a></dt>
<dd><p>Creates a new matrix-object with given rows, columns and fill</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#Matrix_Class_Error_Message">Matrix_Class_Error_Message</a></dt>
<dd><p>Sets the Error-messages and the state</p>
</dd>
</dl>

<a name="Matrix"></a>

## Matrix
Creates a new matrix-object with given rows, columns and fill

**Kind**: global class

* [Matrix](#Matrix)
    * [new Matrix(rows, columns, fill)](#new_Matrix_new)
    * _instance_
        * [.show()](#Matrix+show)
        * [.dim()](#Matrix+dim) ⇒ <code>Array</code>
        * [.random(min, max)](#Matrix+random)
        * [.toArray()](#Matrix+toArray) ⇒
        * [.toArray_flat()](#Matrix+toArray_flat) ⇒
        * [.toString()](#Matrix+toString) ⇒
        * [.serialize()](#Matrix+serialize) ⇒
        * [.reduce()](#Matrix+reduce) ⇒
        * [.map(func)](#Matrix+map)
        * [.row_map(row, func)](#Matrix+row_map)
        * [.col_map(col, func)](#Matrix+col_map)
        * [.copy()](#Matrix+copy) ⇒
        * [.unit()](#Matrix+unit)
        * [.diagonal(diagonal_num, filler)](#Matrix+diagonal)
        * [.fill(filler)](#Matrix+fill)
        * [.transpose()](#Matrix+transpose) ⇒
        * [.invert()](#Matrix+invert)
        * [.add(Obj)](#Matrix+add)
        * [.sub(Obj)](#Matrix+sub)
        * [.mult(Obj)](#Matrix+mult)
        * [.div(Obj)](#Matrix+div)
        * [.triangle(above, below)](#Matrix+triangle)
        * [.isTriangle()](#Matrix+isTriangle) ⇒ <code>Boolean</code>
        * [.hasEmpty()](#Matrix+hasEmpty) ⇒ <code>Boolean</code>
        * [.determinant(iterations)](#Matrix+determinant) ⇒ <code>Number</code>
        * [.solveLGS(iterations)](#Matrix+solveLGS) ⇒ <code>Array</code>
    * _static_
        * [.Error_Message()](#Matrix.Error_Message)
        * [.randomInt(min, max)](#Matrix.randomInt) ⇒ <code>Number</code>
        * [.array_mult(a1, a2)](#Matrix.array_mult) ⇒ <code>Object</code>
        * [.fromArray(array)](#Matrix.fromArray) ⇒ <code>Object</code>
        * [.diagonal(M1, diagnonal_num, filler)](#Matrix.diagonal) ⇒ <code>Object</code>
        * [.random(M1, min, max)](#Matrix.random) ⇒ <code>Object</code>
        * [.map(M1, func)](#Matrix.map) ⇒ <code>Object</code>
        * [.add(M1, Obj)](#Matrix.add) ⇒ <code>Object</code>
        * [.sub(M1, Obj)](#Matrix.sub) ⇒ <code>Object</code>
        * [.mult(M1, Obj)](#Matrix.mult) ⇒ <code>Object</code>
        * [.div(M1, Obj)](#Matrix.div) ⇒ <code>Object</code>
        * [.prod(M1, M2)](#Matrix.prod) ⇒ <code>Object</code>
        * [.invert(M1)](#Matrix.invert) ⇒ <code>Object</code>
        * [.deserialize(data)](#Matrix.deserialize) ⇒

<a name="new_Matrix_new"></a>

### new Matrix(rows, columns, fill)

| Param | Type | Description |
| --- | --- | --- |
| rows | <code>Number</code> | The amount of rows of the matrix |
| columns | <code>Number</code> | The amount of columns of the matrix |
| fill | <code>Number</code> | The number with wich the matrix will be filled |

<a name="Matrix+show"></a>

### matrix.show()
Shows the contents of the matrix in the console

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
<a name="Matrix+dim"></a>

### matrix.dim() ⇒ <code>Array</code>
Returns the dimensions of the matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Array</code> - - Dimensions [rows, columns]
<a name="Matrix+random"></a>

### matrix.random(min, max)
Randomizes the elements of a matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum random number |
| max | <code>Number</code> | The maximum random number |

<a name="Matrix+toArray"></a>

### matrix.toArray() ⇒
Represents a matrix as a two-dimensional array

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: An array with the elements of the input-matrix
<a name="Matrix+toArray_flat"></a>

### matrix.toArray_flat() ⇒
Represents a matrix as a one-dimensional array

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: An array with the elements of the input-matrix
<a name="Matrix+toString"></a>

### matrix.toString() ⇒
Represents a matrix as a string

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: A string with the elements of the input-matrix
<a name="Matrix+serialize"></a>

### matrix.serialize() ⇒
Represents a matrix-object as a JSON-file

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: A JSON-file with the elements of the input-matrix-object
<a name="Matrix+reduce"></a>

### matrix.reduce() ⇒
Creates the sum of all elements of the matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: The sum of all the elements of the input-matrix
<a name="Matrix+map"></a>

### matrix.map(func)
Maps a function to all elements of the matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function that will be mapped to the matrix elements |

<a name="Matrix+row_map"></a>

### matrix.row_map(row, func)
Maps a function to a specific row of elements of the matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | The targeted row |
| func | <code>function</code> | The function that will be mapped to the matrix elements |

<a name="Matrix+col_map"></a>

### matrix.col_map(col, func)
Maps a function to a specific collumn of elements of the matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| col | <code>Number</code> | The targeted collumn |
| func | <code>function</code> | The function that will be mapped to the matrix elements |

<a name="Matrix+copy"></a>

### matrix.copy() ⇒
Creates a copy of a matrix-object

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: A copy of the input-matrix
<a name="Matrix+unit"></a>

### matrix.unit()
Converts the matrix to a unit-matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
<a name="Matrix+diagonal"></a>

### matrix.diagonal(diagonal_num, filler)
Converts the matrix to a diagonal matrix with custom infill

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| diagonal_num | <code>Number</code> | The value of the diagonal line |
| filler | <code>Number</code> | The value that the other elements will have |

<a name="Matrix+fill"></a>

### matrix.fill(filler)
Fills the matrix with a specified number

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| filler | <code>Number</code> | the number with wich the matrix will be filled |

<a name="Matrix+transpose"></a>

### matrix.transpose() ⇒
Creates the transposed version of a matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: The transposed matrix
<a name="Matrix+invert"></a>

### matrix.invert()
Inverts the elements of a matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
<a name="Matrix+add"></a>

### matrix.add(Obj)
Adds elements of another matrix or a number to the initial matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| Obj | <code>Number</code> | The number that will be added to all elements of the initial matrix |
| Obj | <code>Object</code> | The matrix whose elements are added to the elements of the initial matrix |

<a name="Matrix+sub"></a>

### matrix.sub(Obj)
Subtracts elements of another matrix or a number from the initial matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| Obj | <code>Number</code> | The number that will be subtracted from all elements of the initial matrix |
| Obj | <code>Object</code> | The matrix whose elements are subtracted from the elements of the initial matrix |

<a name="Matrix+mult"></a>

### matrix.mult(Obj)
Multiplies elements of another matrix or a number with the initial matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| Obj | <code>Number</code> | The number that will multiply all elements of the initial matrix |
| Obj | <code>Object</code> | The matrix whose elements multiply the elements of the initial matrix |

<a name="Matrix+div"></a>

### matrix.div(Obj)
Divides elements of the initial matrix by the elements of another matrix or number

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| Obj | <code>Number</code> | The number that will divide added to all elements of the initial matrix |
| Obj | <code>Object</code> | The matrix whose elements divide the elements of the initial matrix |

<a name="Matrix+triangle"></a>

### matrix.triangle(above, below)
Transforms a matrix to a "triangle-form"

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| above | <code>Boolean</code> | <code>true</code> | Converts the upper-right corner |
| below | <code>Boolean</code> | <code>false</code> | Converts the lower-left corner |

<a name="Matrix+isTriangle"></a>

### matrix.isTriangle() ⇒ <code>Boolean</code>
Checks if a matrix is in a "triangle-form"

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Boolean</code> - - Matrix is in triangle-form
<a name="Matrix+hasEmpty"></a>

### matrix.hasEmpty() ⇒ <code>Boolean</code>
Checks if a matrix has empty rows or collumns

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Boolean</code> - - Matrix has empty rows or collumns
<a name="Matrix+determinant"></a>

### matrix.determinant(iterations) ⇒ <code>Number</code>
Calculates the determinant of a matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Number</code> - the determinant of the matrix
**Warning**: Do not enter the perameter <code>iterations</code> because that is just for recursion purposes!

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| iterations | <code>Number</code> | <code>0</code> | The amount of recursion that occurred |

<a name="Matrix+solveLGS"></a>

### matrix.solveLGS(iterations) ⇒ <code>Array</code>
Solves a system of linear equations represented as a matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Array</code> - The solved variables
**Warning**: WARNING: Work In Progress
**Warning**: Do not enter the parameter <code>iterations</code> because that is just for recursion purposes!

| Param | Type | Description |
| --- | --- | --- |
| iterations | <code>Number</code> | The amount of recursion that occurred |

<a name="Matrix.Error_Message"></a>

### Matrix.Error_Message()
Toggels if Error messages are displayed

**Kind**: static method of [<code>Matrix</code>](#Matrix)
<a name="Matrix.randomInt"></a>

### Matrix.randomInt(min, max) ⇒ <code>Number</code>
Creates a random Integer

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Number</code> - - A random number between min and max

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum random number |
| max | <code>Number</code> | The maximum random number |

<a name="Matrix.array_mult"></a>

### Matrix.array_mult(a1, a2) ⇒ <code>Object</code>
The scalar-multiplication of two arrays seen as vectors

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - The scalar-product of two "vectors"

| Param | Type | Description |
| --- | --- | --- |
| a1 | <code>Object</code> | The first  array / vector |
| a2 | <code>Object</code> | The second array / vector |

<a name="Matrix.fromArray"></a>

### Matrix.fromArray(array) ⇒ <code>Object</code>
Creates matrix-object from a two-dimensional array

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new matrix-object with the values form the array

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Object</code> | The array that will be converted to a matrix |

<a name="Matrix.diagonal"></a>

### Matrix.diagonal(M1, diagnonal_num, filler) ⇒ <code>Object</code>
Creates a diagnonal matrix-object

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new matrix with the same dimensions as the input-matrix but with a new set of numbers

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The matrix that will be cloned and converted |
| diagnonal_num | <code>Number</code> | The number that will fill the diagonal line |
| filler | <code>Number</code> | The number that will fill the result |

<a name="Matrix.random"></a>

### Matrix.random(M1, min, max) ⇒ <code>Object</code>
Creates a matrix-object with random numbers

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new matrix with the same dimensions as the input-matrix but with random numbers randing form min to max

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The matrix that will be cloned and converted |
| min | <code>Number</code> | The minimum random number |
| max | <code>Number</code> | The maximum random number |

<a name="Matrix.map"></a>

### Matrix.map(M1, func) ⇒ <code>Object</code>
Creates a matrix on which a function has been mapped to

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new matrix with the same dimensions as the input-matrix but with a new set of numbers

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The Matrix that will be cloned and converted |
| func | <code>function</code> | The function that will alter the elements of the matrix |

<a name="Matrix.add"></a>

### Matrix.add(M1, Obj) ⇒ <code>Object</code>
Creates a new matrix from the sum of the elements of two matrices or a matrix and a number

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new Matrix with the same dimensions as the input Matrix but with a new set of numbers

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The matrix that will be cloned and converted |
| Obj | <code>Number</code> | The number that will be added to all elements of the matrix |
| Obj | <code>Object</code> | The matrix whose elements will be added to the elements of M1 |

<a name="Matrix.sub"></a>

### Matrix.sub(M1, Obj) ⇒ <code>Object</code>
Creates a new matrix from the difference of the elements of two matrices or a matrix and a number

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new Matrix with the same dimensions as the input Matrix but with a new set of numbers

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The matrix that will be cloned and converted |
| Obj | <code>Number</code> | The number that will be subtracted from all elements of the matrix |
| Obj | <code>Object</code> | The matrix whose elements will be subtracted from the elements of M1 |

<a name="Matrix.mult"></a>

### Matrix.mult(M1, Obj) ⇒ <code>Object</code>
Creates a new matrix from the product of the elements of two matrices or a matrix and a number

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new Matrix with the same dimensions as the input Matrix but with a new set of numbers

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The matrix that will be cloned and converted |
| Obj | <code>Number</code> | The number that will be multiplied with all elements of the matrix |
| Obj | <code>Object</code> | The matrix whose elements will be multiplied by the elements of M1 |

<a name="Matrix.div"></a>

### Matrix.div(M1, Obj) ⇒ <code>Object</code>
Creates a new matrix from the division of the elements of two matrices or a matrix and a number

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new Matrix with the same dimensions as the input Matrix but with a new set of numbers

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The matrix that will be cloned and converted |
| Obj | <code>Number</code> | The number that will be divided from all elements of the matrix |
| Obj | <code>Object</code> | The matrix whose elements will be divided by the elements of M1 |

<a name="Matrix.prod"></a>

### Matrix.prod(M1, M2) ⇒ <code>Object</code>
Creates a new matrix from the multiplication of two matrices

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - The Product of the matrix multiplication

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The first matrix |
| M2 | <code>Object</code> | The second matrix that will be multiplied with the first |

<a name="Matrix.invert"></a>

### Matrix.invert(M1) ⇒ <code>Object</code>
Creates a new matrix whose values are inverted

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Object</code> - A new matrix with the same dimensions as the input-matrix but with an inverted set of numbers

| Param | Type | Description |
| --- | --- | --- |
| M1 | <code>Object</code> | The matrix that will be cloned and converted |

<a name="Matrix.deserialize"></a>

### Matrix.deserialize(data) ⇒
Creates a new matrix-object from a JSON-file

**Kind**: static method of [<code>Matrix</code>](#Matrix)
**Returns**: A new matrix-objet with the information of the JSON-file

| Param | Description |
| --- | --- |
| data | The JSON-file that contains all the necessary information of a matrix-object |

<a name="Matrix_Class_Error_Message"></a>

## Matrix_Class_Error_Message
Sets the Error-messages and the state

**Kind**: global variable
