<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Calculator</title>

    <!-- Added link to the jQuery Library -->
    <script src="https://code.jquery.com/jquery-2.2.3.js" integrity="sha256-laXWtGydpwqJ8JA+X9x2miwmaiKhn8tVmOVEigRNtP4=" crossorigin="anonymous"></script>

    <!-- Added a link to Bootstrap-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

</head>
<body>

<!-- Jumbotron for Title -->
<div class="jumbotron">
    <h1 class="text-center">jQuery Calculator</h1>
    <h3 class="text-center">Perform basic mathematic operations using the power of jQuery!</h3>
</div>

<div class="container">

    <div class="row">

        <!-- Calculator Panel -->
        <div class="col-lg-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Calculator</h3>
                </div>

                <div class="panel-body">
                            <button id="button1" class="btn btn-primary number" value=1><h1>1</h1></button>
                            <button id="button2" class="btn btn-primary number" value=2><h1>2</h1></button>
                            <button id="button3" class="btn btn-primary number" value=3><h1>3</h1></button>
                            <button id="buttonPlus" class="btn btn-danger operator" value=plus><h1>+</h1></button>
                            <br><br>
                            <button id="button4" class="btn btn-primary number" value=4><h1>4</h1></button>
                            <button id="button5" class="btn btn-primary number" value=5><h1>5</h1></button>
                            <button id="button6" class="btn btn-primary number" value=6><h1>6</h1></button>
                            <button id="buttonMinus" class="btn btn-danger operator" value=minus><h1>&minus;</h1></button>
                            <br><br>
                            <button id="button7" class="btn btn-primary number" value=7><h1>7</h1></button>
                            <button id="button8" class="btn btn-primary number" value=8><h1>8</h1></button>
                            <button id="button9" class="btn btn-primary number" value=9><h1>9</h1></button>
                            <button id="buttonMultiply" class="btn btn-danger operator" value=times><h1>&times;</h1></button>
                            <br><br>
                            <button id="button0" class="btn btn-primary number" value=0 value=0><h1>0</h1></button>
                            <button id="buttonDivide" class="btn btn-danger operator" value=divide><h1>&divide;</h1></button>
                            <button id="buttonPower" class="btn btn-danger operator" value=power><h1>^</h1></button>
                            <button id="buttonEqual" class="btn btn-success equal" value=equals><h1>=</h1></button>
                            <br><br>
                            <button id="button0" class="btn btn-default clear" value=clear value=clear><h1>clear</h1></button>
                </div>

            </div>
        </div>

        <!-- Result Panel -->
        <div class="col-lg-6">
        <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Result</h3>
                </div>
                <div class="panel-body">
                    <h1 id="firstNumber"></h1>
                    <h1 id="operator"></h1>
                    <h1 id="secondNumber"></h1>
                    <hr>
                    <h1 id="result"></h1>
                </div>
            </div>    
        </div>
    </div>
</div>

<script type="text/javascript">

$(document).ready(function(){
var firstNumber = "";
var secondNumber = "";
var operator;
var result = "";

    $('.number').on('click', function(){
        if(operator == undefined){
             firstNumber += this.value;
            $('#firstNumber').html('<p>'+firstNumber+'</p>');
        }
        else{
            if(result == ""){
                secondNumber += this.value; 
                $('#secondNumber').html('<p>'+secondNumber+'</p>');
            }
            
        }
       
    });

    $('.operator').on('click', function(){
      operator = this.value
       if (result == ""){    
           $('#operator').html('<p>' + operator + '</p>');
       }
       else{
           firstNumber = result;
            result = "";
           $('#firstNumber').html('<p>' + firstNumber + '</p>');
           $('#operator').html('<p>' + operator + '</p>');
           $('#secondNumber').empty();
           secondNumber = "";
           $('#result').empty();
       }
   });

    $('.equal').on('click', function(){
        if(operator == 'times'){
            result = firstNumber*secondNumber;
        }
        else if (operator == 'divide'){
            result = firstNumber/secondNumber;
        }
        else if (operator == 'plus'){
            result = parseInt(firstNumber)+parseInt(secondNumber); 
        }
        else if (operator == 'minus'){
            result = firstNumber - secondNumber; 
        }
        else if (operator == 'power'){
            result = firstNumber**secondNumber; 
        }

        $('#result').html("<p>"+result+'</p>');
    });
    $('.clear').on('click', function(){
        $('#firstNumber').empty();
        $('#secondNumber').empty();
        $('#operator').empty();
        $('#result').empty();
        firstNumber = "";
        secondNumber = "";
        operator = undefined;
        result = "";
    });
});

</script>
    
</body>
</html>