function doChore(chore,time,name,canfail=true){
    return new Promise((resolve,reject)=>
    {
        console.log(`Starting ${chore}...`);

        setTimeout(() => {
      if (canfail && Math.random() < 0.2) { // 20% chance to fail
        const myerror=(`${name} fell asleep before doing ${chore}.`);
        console.log(myerror);
        reject(myerror);
      } else {
        const myresult=(`${name} completed ${chore} after ${time} seconds`);
        console.log(myresult);
        resolve(myresult);
      }
    }, time);
  });
    }

const mowYard=()=>doChore("mowYard",2000,"Brandon",canfail=false)

const weedEat=()=>doChore("weedEat",1500,"Brandon",canfail=true)

const trimHedges=()=>doChore("trimHedges",1000,"Brandon",canfail=true)

const collectWood=()=>doChore("collectWood",2500,"Brandon",canfail=true)

const waterGarden=()=>doChore("waterGarden",500,"Brandon",canfail=true)

async function doChores(name){
    try{
    const most=await mowYard();
    const weed=await weedEat();
    const trim=await trimHedges();
    const collect=await collectWood();
    const water=await waterGarden();
    console.log(`${name} completed all chores!`)
}
    catch(error){
        console.log(`${name} did not complete his summer chores`)
    }
}

doChores("Brandon");