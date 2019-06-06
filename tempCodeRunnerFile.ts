const sum= (a,b)=> {
    return a+b
}

try {
    console.log(sum(1))
} catch( error) {
    console.log(` msmy błąd, o taki ${error}`)
}