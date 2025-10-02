function mowYard(name,callback){
 setTimeout(() => {
        // --- This code runs exactly after 2000ms ---
        const mowResultMessage = `${name} mowed the yard`;

        console.log(`\t[Success] ${mowResultMessage}`);
        // console.log("\tMowYard is done. Now starting weedEat (nested call)...");

        // CALL THE NEXT ASYNCHRONOUS STEP (weedEat)
        weedEat(name, callback)
            // Both succeeded
            // const finalMessage = `${mowResultMessage} and ${weedEatResult}—chores complete!`;
            // finalCallback(null, finalMessage);
        , 2000})};

     // MowYard completes after 2000ms


function weedEat(name,callback){
    let randomchance=randnum();
     setTimeout(() => {
            // Check the random failure condition
            if (randomchance >=7) {
                console.log(`${name} fell asleep while weed-eating!`);
                return 
            }
            // Success path
            const resultMessage = `${name} weed-ate the yard`;
            console.log(`\t\t[Success] ${resultMessage}`);
            trimHedges(name, callback)
    }, 1500);
}

function trimHedges(name,callback){
    let randomchance=randnum();
 setTimeout(() => {
                    if (randomchance >=6) {
                console.log(`${name} fell asleep while trimming hedges!`);
                return 
            }
        const trimresult = `${name} trimmed the hedges`;

        console.log(`\t[Success] ${trimresult}`);

        // CALL THE NEXT ASYNCHRONOUS STEP (collectwood)
        collectWood(name, callback)

    }, 1000);
}

function collectWood(name,callback){
    let randomchance=randnum();
     setTimeout(() => {
                    if (randomchance >=5) {
                console.log(`${name} fell asleep while collecting wood!`)
                return 
            }
        const woodresult = `${name} collected the wood!`;
        console.log(`\t[Success] ${woodresult}`);

        // CALL THE NEXT ASYNCHRONOUS STEP (watergarden)
        waterGarden(name, callback)
    }, 2500);
}

function waterGarden(name,callback){
        let randomchance=randnum();
         setTimeout(() => {
                    if (randomchance >=4) {
                console.log(`${name} fell asleep while watering the garden!`);
                return;
            }
        const waterresult = `${name} watered the garden!`;

        console.log(`\t[Success] ${waterresult}`);
        console.log('Chores complete!');
    }, 500);
}

function doSummerChores(name,callback){
console.log(`Starting summer chores for ${name}...`);
mowYard(name,callback);
}

function randnum(choresdone){
let counter=choresdone;
let min=Math.ceil(0);
let max=Math.floor(9);
return Math.floor(Math.random()*(max-min+1))+min;
}


doSummerChores('Johnny',mowYard);