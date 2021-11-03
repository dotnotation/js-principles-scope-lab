var customerName = 'bob';

const leastFavoriteCustomer = 'lucy';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    // .toUpperCase() is a function built into JS
    // we are overwriting the variable as we are trying to redefine the variable
    // notice that there is no return statement
    // if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    // declaring without var, let, or const makes it a global variable
    // this is a big no no but required for this lab
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    // actually overwrites
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'actually it is bob'
    // can't reassign this variable because it is a const
}