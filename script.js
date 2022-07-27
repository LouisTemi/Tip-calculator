var tip_pct = 0.05;
function tip5(){
    var bill = document.getElementById('bill-number').value;
    var people = document.getElementById('people-number').value;
    if (bill == '' && people == ''){
        document.getElementById('tip-number').innerHTML = '$0.00';
        document.getElementById('total-number').innerHTML = '$0.00';
    }
    else if(people == '' && bill != ''){
        document.getElementById('people-number').style.border = "1px solid red";
        document.getElementById('not-zero').innerHTML = "Can't be zero";
    }
    else{
        document.getElementById('people-number').style.border = '';
        document.getElementById('not-zero').innerHTML = '';
        var tip_person = (bill * tip_pct) / people;
        var total = (bill/people) + tip_person;
        document.getElementById('tip-number').innerHTML = '$' + parseFloat(tip_person).toFixed(2);
        document.getElementById('total-number').innerHTML = '$' + parseFloat(total).toFixed(2);
    }
    tip_pct = 0.05;
    
}

function tip10(){
    tip_pct = 0.1;
    tip5();
}
function tip15(){
    tip_pct = 0.15;
    tip5();
}

function tip20(){
    tip_pct = 0.2;
    tip5();
}

function tip25(){
    tip_pct = 0.25;
    tip5();
}

function tip50(){
    tip_pct = 0.5;
    tip5();
} 

function tipcustom(){
    var custom_pct = document.getElementById('tip_custom').value;
    tip_pct = custom_pct / 100;
    tip5();
}