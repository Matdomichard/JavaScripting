function caisse(cash){
    var two =0,five=0,ten =0;
    if(cash==1||cash==3){
    return console.log("impossible")
    }else {
    if(cash>9) {ten=(cash-cash%10)/10;
    cash=cash%10;};
    switch (cash){
    case 1 :ten-=1;five=1;two=3;
    break;
    case 2 : two=1;
    break;
    case 3 : ten-=1;five=1;two=4;
    break;
    case 4 :two=2;
    break;
    case 5: five=1;
    break;
    case 6: two=3;
    break;
    case 7: five=1;two=3;
    break;
    case 8: two=4;
    break;
    case 9: five=1; two=2;
     };
    return{
     two:two,
     five:five,
    ten:ten,
    };
      }
    }
    console.log(caisse(50))