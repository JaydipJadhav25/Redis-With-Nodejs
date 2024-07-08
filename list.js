import {client} from "./redisClient.js"

async function init(){
    // const res1 = await client.lpush('bikes:repairs', 'bike:10');
    // console.log(res1);

    console.log(await client.llen("data:msg"));

    await client.lpush("newdata:msg" , ["msg1" , "msg2" , "msg3"]);

 
            //Blocking commands

    console.log(await client.blpop("data:msg" , 10));

    

 


}

init();