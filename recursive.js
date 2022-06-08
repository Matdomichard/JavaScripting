function factor(f){
    if (f == 1){
        return 1
    } else {
        return f * factor (f - 1)
    }
}

console.log(factor(5))