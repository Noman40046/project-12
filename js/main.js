
$(document).ready(function(){

/* plus calculation--------------------- */
$('.all-oparators1') .click(function(){

    //get data
    const val1 = ($('.num1').val());
    const val2 = ($('.num2').val());

    //convert to int

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    //set data
    
    $('.count').text(num1 + num2);
})


/* minus calculation--------------------- */
$('.all-oparators2') .click(function(){

    //get data
    const val1 = ($('.num1').val());
    const val2 = ($('.num2').val());

    //convert to int

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    //set data
    
    $('.count').text(num1 - num2);
})


/* devide calculation--------------------- */
$('.all-oparators3') .click(function(){

    //get data
    const val1 = ($('.num1').val());
    const val2 = ($('.num2').val());

    //convert to int

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    //set data
    
    $('.count').text(num1 / num2);
})


/* multiplication calculation--------------------- */
$('.all-oparators4') .click(function(){

    //get data
    const val1 = ($('.num1').val());
    const val2 = ($('.num2').val());

    //convert to int

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    //set data
    
    $('.count').text(num1 * num2);
})


/* modulas calculation--------------------- */
$('.all-oparators5') .click(function(){

    //get data
    const val1 = ($('.num1').val());
    const val2 = ($('.num2').val());

    //convert to int

    const num1 = parseInt(val1);
    const num2 = parseInt(val2);

    //set data
    
    $('.count').text(num1 % num2);
})

/* reset calculation--------------------- */
$('.all-oparators6') .click(function(){

    //set data
    
    $('.count').text(0);
   
})


});