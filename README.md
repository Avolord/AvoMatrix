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

### Table of Contents

-   [Matrix_Class_Error_Message][1]
-   [Matrix_Class_Error_Message][2]
-   [Matrix][3]
    -   [Parameters][4]
    -   [show][5]
    -   [dim][6]
    -   [random][7]
        -   [Parameters][8]
    -   [toArray][9]
    -   [toArray_flat][10]
    -   [toString][11]
    -   [serialize][12]
    -   [reduce][13]
    -   [map][14]
        -   [Parameters][15]
    -   [row_map][16]
        -   [Parameters][17]
    -   [col_map][18]
        -   [Parameters][19]
    -   [copy][20]
    -   [unit][21]
    -   [diagonal][22]
        -   [Parameters][23]
    -   [fill][24]
        -   [Parameters][25]
    -   [transpose][26]
    -   [invert][27]
    -   [add][28]
        -   [Parameters][29]
    -   [sub][30]
        -   [Parameters][31]
    -   [mult][32]
        -   [Parameters][33]
    -   [div][34]
        -   [Parameters][35]
    -   [triangle][36]
        -   [Parameters][37]
    -   [isTriangle][38]
    -   [hasEmpty][39]
    -   [determinant][40]
        -   [Parameters][41]
    -   [solveLGS][42]
        -   [Parameters][43]
    -   [Error_Message][44]
    -   [randomInt][45]
        -   [Parameters][46]
    -   [array_mult][47]
        -   [Parameters][48]
    -   [fromArray][49]
        -   [Parameters][50]
    -   [diagonal][51]
        -   [Parameters][52]
    -   [random][53]
        -   [Parameters][54]
    -   [map][55]
        -   [Parameters][56]
    -   [add][57]
        -   [Parameters][58]
    -   [sub][59]
        -   [Parameters][60]
    -   [mult][61]
        -   [Parameters][62]
    -   [div][63]
        -   [Parameters][64]
    -   [prod][65]
        -   [Parameters][66]
    -   [invert][67]
        -   [Parameters][68]
    -   [deserialize][69]
        -   [Parameters][70]

## Matrix_Class_Error_Message

Performs simple matrix math

**Meta**

-   **version**: 1.0.0
-   **author**: AvoLord

## Matrix_Class_Error_Message

Sets the Error-messages and the state

## Matrix

Creates a new matrix-object with given rows, columns and fill

### Parameters

-   `rows` **[Number][71]** The amount of rows of the matrix
-   `columns` **[Number][71]** The amount of columns of the matrix
-   `fill` **[Number][71]** The number with wich the matrix will be filled

### show

Shows the contents of the matrix in the console

### dim

Returns the dimensions of the matrix

Returns **[Array][72]** Dimensions [rows, columns]

### random

Randomizes the elements of a matrix

#### Parameters

-   `min` **[Number][71]** The minimum random number
-   `max` **[Number][71]** The maximum random number

### toArray

Represents a matrix as a two-dimensional array

Returns **any** An array with the elements of the input-matrix

### toArray_flat

Represents a matrix as a one-dimensional array

Returns **any** An array with the elements of the input-matrix

### toString

Represents a matrix as a string

Returns **any** A string with the elements of the input-matrix

### serialize

Represents a matrix-object as a JSON-file

Returns **any** A JSON-file with the elements of the input-matrix-object

### reduce

Creates the sum of all elements of the matrix

Returns **any** The sum of all the elements of the input-matrix

### map

Maps a function to all elements of the matrix

#### Parameters

-   `func` **[function][73]** The function that will be mapped to the matrix elements

### row_map

Maps a function to a specific row of elements of the matrix

#### Parameters

-   `row` **[Number][71]** The targeted row
-   `func` **[function][73]** The function that will be mapped to the matrix elements

### col_map

Maps a function to a specific collumn of elements of the matrix

#### Parameters

-   `col` **[Number][71]** The targeted collumn
-   `func` **[function][73]** The function that will be mapped to the matrix elements

### copy

Creates a copy of a matrix-object

Returns **any** A copy of the input-matrix

### unit

Converts the matrix to a unit-matrix

### diagonal

Converts the matrix to a diagonal matrix with custom infill

#### Parameters

-   `diagonal_num` **[Number][71]** The value of the diagonal line
-   `filler` **[Number][71]** The value that the other elements will have

### fill

Fills the matrix with a specified number

#### Parameters

-   `filler` **[Number][71]** the number with wich the matrix will be filled

### transpose

Creates the transposed version of a matrix

Returns **any** The transposed matrix

### invert

Inverts the elements of a matrix

### add

Adds elements of another matrix or a number to the initial matrix

#### Parameters

-   `Obj` **[Object][74]** The matrix whose elements are added to the elements of the initial matrix

### sub

Subtracts elements of another matrix or a number from the initial matrix

#### Parameters

-   `Obj` **[Object][74]** The matrix whose elements are subtracted from the elements of the initial matrix

### mult

Multiplies elements of another matrix or a number with the initial matrix

#### Parameters

-   `Obj` **[Object][74]** The matrix whose elements multiply the elements of the initial matrix

### div

Divides elements of the initial matrix by the elements of another matrix or number

#### Parameters

-   `Obj` **[Object][74]** The matrix whose elements divide the elements of the initial matrix

### triangle

Transforms a matrix to a "triangle-form"

#### Parameters

-   `above` **[Boolean][75]** Converts the upper-right corner (optional, default `true`)
-   `below` **[Boolean][75]** Converts the lower-left corner (optional, default `false`)

### isTriangle

Checks if a matrix is in a "triangle-form"

Returns **[Boolean][75]** Matrix is in triangle-form

### hasEmpty

Checks if a matrix has empty rows or collumns

Returns **[Boolean][75]** Matrix has empty rows or collumns

### determinant

Calculates the determinant of a matrix

#### Parameters

-   `iterations` **[Number][71]** The amount of recursion that occurred (optional, default `0`)

Returns **[Number][71]** the determinant of the matrix

### solveLGS

Solves a system of linear equations represented as a matrix

#### Parameters

-   `iterations` **[Number][71]** The amount of recursion that occurred

Returns **[Array][72]** The solved variables

### Error_Message

Toggels if Error messages are displayed

### randomInt

Creates a random Integer

#### Parameters

-   `min` **[Number][71]** The minimum random number
-   `max` **[Number][71]** The maximum random number

Returns **[Number][71]** A random number between min and max

### array_mult

The scalar-multiplication of two arrays seen as vectors

#### Parameters

-   `a1` **[Object][74]** The first  array / vector
-   `a2` **[Object][74]** The second array / vector

Returns **[Object][74]** The scalar-product of two "vectors"

### fromArray

Creates matrix-object from a two-dimensional array

#### Parameters

-   `array` **[Object][74]** The array that will be converted to a matrix

Returns **[Object][74]** A new matrix-object with the values form the array

### diagonal

Creates a diagnonal matrix-object

#### Parameters

-   `M1` **[Object][74]** The matrix that will be cloned and converted
-   `diagonal_num`
-   `filler` **[Number][71]** The number that will fill the result
-   `diagnonal_num` **[Number][71]** The number that will fill the diagonal line

Returns **[Object][74]** A new matrix with the same dimensions as the input-matrix but with a new set of numbers

### random

Creates a matrix-object with random numbers

#### Parameters

-   `M1` **[Object][74]** The matrix that will be cloned and converted
-   `min` **[Number][71]** The minimum random number
-   `max` **[Number][71]** The maximum random number

Returns **[Object][74]** A new matrix with the same dimensions as the input-matrix but with random numbers randing form min to max

### map

Creates a matrix on which a function has been mapped to

#### Parameters

-   `M1` **[Object][74]** The Matrix that will be cloned and converted
-   `func` **[function][73]** The function that will alter the elements of the matrix

Returns **[Object][74]** A new matrix with the same dimensions as the input-matrix but with a new set of numbers

### add

Creates a new matrix from the sum of the elements of two matrices or a matrix and a number

#### Parameters

-   `M1` **[Object][74]** The matrix that will be cloned and converted
-   `Obj` **[Object][74]** The matrix whose elements will be added to the elements of M1

Returns **[Object][74]** A new Matrix with the same dimensions as the input Matrix but with a new set of numbers

### sub

Creates a new matrix from the difference of the elements of two matrices or a matrix and a number

#### Parameters

-   `M1` **[Object][74]** The matrix that will be cloned and converted
-   `Obj` **[Object][74]** The matrix whose elements will be subtracted from the elements of M1

Returns **[Object][74]** A new Matrix with the same dimensions as the input Matrix but with a new set of numbers

### mult

Creates a new matrix from the product of the elements of two matrices or a matrix and a number

#### Parameters

-   `M1` **[Object][74]** The matrix that will be cloned and converted
-   `Obj` **[Object][74]** The matrix whose elements will be multiplied by the elements of M1

Returns **[Object][74]** A new Matrix with the same dimensions as the input Matrix but with a new set of numbers

### div

Creates a new matrix from the division of the elements of two matrices or a matrix and a number

#### Parameters

-   `M1` **[Object][74]** The matrix that will be cloned and converted
-   `Obj` **[Object][74]** The matrix whose elements will be divided by the elements of M1

Returns **[Object][74]** A new Matrix with the same dimensions as the input Matrix but with a new set of numbers

### prod

Creates a new matrix from the multiplication of two matrices

#### Parameters

-   `M1` **[Object][74]** The first matrix
-   `M2` **[Object][74]** The second matrix that will be multiplied with the first

Returns **[Object][74]** The Product of the matrix multiplication

### invert

Creates a new matrix whose values are inverted

#### Parameters

-   `M1` **[Object][74]** The matrix that will be cloned and converted

Returns **[Object][74]** A new matrix with the same dimensions as the input-matrix but with an inverted set of numbers

### deserialize

Creates a new matrix-object from a JSON-file

#### Parameters

-   `data`  The JSON-file that contains all the necessary information of a matrix-object

Returns **any** A new matrix-objet with the information of the JSON-file

[1]: #matrix_class_error_message

[2]: #matrix_class_error_message-1

[3]: #matrix

[4]: #parameters

[5]: #show

[6]: #dim

[7]: #random

[8]: #parameters-1

[9]: #toarray

[10]: #toarray_flat

[11]: #tostring

[12]: #serialize

[13]: #reduce

[14]: #map

[15]: #parameters-2

[16]: #row_map

[17]: #parameters-3

[18]: #col_map

[19]: #parameters-4

[20]: #copy

[21]: #unit

[22]: #diagonal

[23]: #parameters-5

[24]: #fill

[25]: #parameters-6

[26]: #transpose

[27]: #invert

[28]: #add

[29]: #parameters-7

[30]: #sub

[31]: #parameters-8

[32]: #mult

[33]: #parameters-9

[34]: #div

[35]: #parameters-10

[36]: #triangle

[37]: #parameters-11

[38]: #istriangle

[39]: #hasempty

[40]: #determinant

[41]: #parameters-12

[42]: #solvelgs

[43]: #parameters-13

[44]: #error_message

[45]: #randomint

[46]: #parameters-14

[47]: #array_mult

[48]: #parameters-15

[49]: #fromarray

[50]: #parameters-16

[51]: #diagonal-1

[52]: #parameters-17

[53]: #random-1

[54]: #parameters-18

[55]: #map-1

[56]: #parameters-19

[57]: #add-1

[58]: #parameters-20

[59]: #sub-1

[60]: #parameters-21

[61]: #mult-1

[62]: #parameters-22

[63]: #div-1

[64]: #parameters-23

[65]: #prod

[66]: #parameters-24

[67]: #invert-1

[68]: #parameters-25

[69]: #deserialize

[70]: #parameters-26

[71]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[72]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[73]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[74]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[75]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
