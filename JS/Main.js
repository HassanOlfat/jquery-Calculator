 var FirstVal ;
 var SecondVal;
 var oparator;
var result;
$(document).ready(function(){
    
    $('.NumberCell').click(function(){
        Val= $(this).text();
        NumberClick(Val);
    })

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