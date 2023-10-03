function Fibongenerator (count) {
var result = [];
var incre = 0, incre1 = 0; incre2 = 0;
    if (count === 1)
    {
        result.push(0);
        return result;
    }
    else if (count === 2)
    {
        result.push(0);
        result.push(1);
        return result;
    }
    else if (count > 2)
    {
        incre = 0;
        result.push(0);
        incre1 = 1;
        result.push(1);
        while (result.length < count)
        {
            incre2 = incre + incre1;
            result.push(incre2);
            incre = incre1;
            incre1 = incre2;
        }   
        return result; 
    }
    else return 0;
}
console.log(Fibongenerator (5));