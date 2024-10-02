
const parseArgs = () => {
    let array = []
    for (let i = 2; i < process.argv.length; i+=1) {
        array.push(process.argv[i])

    }
    let string = ''
    for (let i = 0; i <array.length; i+=2){
        if (!array[i].includes('2')){
            string +='propName is value, \n'
        }
        else{
            string +='prop2Name is value2'
        }
    }
    console.log(string)
};

parseArgs();