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

# <a name="doc"></a>Documentation

### <a name="table_of_contents"></a>Table of contents
* [Initializing a Matrix-object](#init)
* [Addition, Subtraction, Multiplication and Division](#standard_operations)
* [Standard Matrix multiplication](#matrix_product)
* [Diagonal Matrix](#diag)
* [Randomized Matrix](#rand)
* [Mapping](#map)
* [Copying](#copy)
* [Transpose a Matrix](#transpose)
* [Logging a Matrix to the console](#logging)
* [Converting a Matrix-object](#convert)

### <a name="init"></a>Initializing a Matrix-object

Everything is 0-indexed! <br>
An uninitialized matrix will have <br>
<code>3 rows</code> and <code>3 columns</code> and will <br>
contain just zeroes

<pre>
<span>//new Matrix(<code>rows</code>,<code>columns</code>,<code>fill</code>)
<span>let mat = new Matrix(3,3,0);</span>
</pre>

The numbers that the matrix holds are saved in the
<br><code>.data</code> array of the <code>Matrix</code> object.

There are other ways of initializing a Matrix like: <br>
<code>fromArray(array)</code> and <code>deserialize(data)</code>

#### fromArray(array)
<pre>
<span>let array = [[1,0,0]
             [0,1,0]
             [0,0,1]];</span>
            
<span>let mat = Matrix.fromArray(array);</span>
</pre>

#### deserialize(data) and serialize()

The deserialize function creates a Matrix-object <br>
from a JSON file that contains all necessary <br>
information of the Matrix. To Obtain such a JSON file <br>
you can <code>.serialize()</code> an existing Matrix-object <br>
or write it yourself. <br>
**The syntax is: "{"cols":,"rows":,"data":[  ]"}"**

<pre>
<span>let mat = new Matrix();</span>
<span>let ser_mat = mat.serialize();</span>

<span>//ser_mat = "{"cols":3,"rows":3,"data":[[0,0,0],[0,0,0],[0,0,0]]}"</span>

<span>let mat2 = Matrix.deserialize(ser_mat);</span>
<span>//mat2 is identical to mat</span>
</pre>

### <a name="standard_operations"></a>Addition, Subtraction, Multiplication and Division

Operations like subtraction, addition, multiplication <br>
and division can be performed with : <br>
<code>.sub()</code> 
<code>.add()</code> 
<code>.mult()</code> 
<code>.div()</code> <br>

**<code>.mult()</code> does not mean standard matrix multiplication
<br>
It multiplies every element of MatrixA with the <br>
corresponding element of MatrixB or a Number.**
<br>

### <a name="matrix_product"></a>Standard Matrix multiplication

To use standard matrix multiplication you have to use
<code>Matrix.prod(MatrixA,MatrixB)</code><br>
<pre>
<span>let mat1 = new Matrix(3,2);</span>
<span>let mat2 = new Matrix(2,3);</span>

<span>//Matrix.prod(<code>MatrixA</code>,<code>MatrixB</code>)
<span>let mat3 = Matrix.prod(mat1,mat2);</span>
</pre>

### <a name="diag"></a>Diagonal Matrix

The function <code>.diag(diagonal,fill)</code> transforms a <br>
Matrix to a diagonal Matrix with a custom diagonal line <br>
and a custom fill for the rest of the Matrix.

<pre>
<span>let m1 = new Matrix();</span>
<span>         m1.diag(1,0);</span>
<span>
//m1 = 
//[[1,0,0]
// [0,1,0]
// [0,0,1]];</span>
</pre>

### <a name="rand"></a>Randomized Matrix

The function <code>.random(min,max)</code> randomizes <br>
the numbers of the Matrix ranging from <code>min</code> to <code>max</code>.

<pre>
<span>let m1 = new Matrix();</span>
<span>         m1.random(0,3);</span>
<span>
//!!Just one of many possibilities!!
//m1 = 
//[[1,3,2]
// [2,1,2]
// [1,3,1]];</span>
</pre>

### <a name="map"></a>Mapping

The function <code>.map(function)</code> maps a <br>
<code>function</code> to all elements of the Matrix.

<pre>
<span>let m1    = new Matrix(3,3,1);</span>
<span>let func  = (input) => input*2;</span>
<span>            m1.map(func);
<span>
//m1 = 
//[[2,2,2]
// [2,2,2]
// [2,2,2]];</span>
</pre>

### <a name="copy"></a>Copying

The function <code>.copy()</code> copies <br>
a Matrix and returns a "clone".<br>
This may be necessary if you want to work<br>
with your Matrix but do not want to change it<br>
or if you do not want to use <code>static</code> functions.

### <a name="transpose"></a>Transpose a Matrix

The function <code>.transpose()</code> transposes <br>
a Matrix and returns it. <br>
**This non-static function will not alter your <br>
Input-matrix**

<pre>
<span>let m1 = new Matrix(2,3);</span>
<span>         m1.random(0,3);</span>
<span>let m2 = m1.transpose();
//m1 = 
//[[1,3,3]
// [2,1,2]];</span>
<span>
//m2 = 
//[[1,2]
// [3,1]
// [3,2]];</span>
</pre>

### <a name="logging"></a>Logging a Matrix to the console
Matrices can be logged to the console with <code>.show()<code>