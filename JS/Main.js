// save number Before click on operators
var FirstVal ;
// save number after click on operators
 var SecondVal;
 // save  operators Value
 var oparator;
  // save  result Value
var result;
$(document).ready(function(){
    //Number Button Click
    $('.NumberCell').click(function(){
        Val= $(this).text();
        NumberClick(Val);
    })
 //operators Button Click
    $('#Plus').click(function(){Plus();})
    $('#multiplied').click(function(){multiplied();})
    $('#Mines').click(function(){Mines();})
    $('#Division').click(function(){Division();})


    $('#Equal').click(function(){Equal();})

})

function NumberClick(Val)
{
    var RightNumber=$('#Result').val();
    RightNumber =RightNumber + Val;
    $('#Result').val(RightNumber);
   
}

function Plus() {
     FirstVal =  $('#Result').val();
     oparator = '+';
     $('#Result').val('');
}

function multiplied() {
   FirstVal =  $('#Result').val();
   oparator = '*';
   $('#Result').val('');
}

function Mines() {
    FirstVal =  $('#Result').val();
    oparator = '-';
    $('#Result').val('');
 }

 
function Division() {
    FirstVal =  $('#Result').val();
    oparator = '/';
    $('#Result').val('');
 }
 
function Equal() {
    SecondVal =  $('#Result').val();
    $('#Result').val('');
    switch(oparator) {
        case '+':
            result = Math.floor(FirstVal) + Math.floor(SecondVal);
            break;
        case '-':
            result =Math.floor(FirstVal) - Math.floor(SecondVal);
            break;
        case '*':
            result =Math.floor(FirstVal) * Math.floor(SecondVal);
            break;
        case '/':
            result =Math.floor(FirstVal) / Math.floor(SecondVal);
            break;
        default:
        alert('not valid !!!');
    }
    $('#Result').val(result);
}