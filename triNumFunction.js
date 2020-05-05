//A number x is triangular if and only if ((8 * x) + 1) = square.

const triangleNumber = (num) => {
    //computes LHS of the condition and assigns value to newNum.
    let newNum = (8*num+1);

    //computes RHS of the condition and assigns value to checker.
    let checker = Math.sqrt(newNum);

    /*checker % 1, checks if there is a remainder.
    whole numbers from square numbers will have no remainder,
    but decimals from non-square numbers will have a remainder.
    */
    if(checker % 1 === 0){
        return true;
    } else {
        return false;
    }
}

triangleNumber(3);