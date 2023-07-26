//argument valued array argv
//bin node path
//script.js path
let result=0;
for(let i=2;i<process.argv.length;i++){
    result+=Number(process.argv[i]);
}
console.log(result);