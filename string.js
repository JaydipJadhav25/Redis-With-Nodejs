import {client} from "./redisClient.js"


async function init(){
    console.log("string");
 
    //user await

    await client.set("data:1" ,  "no 1");
    await client.set("data:2" ,  "no 2");
    await client.set("data:3" ,  "no 5");
    await client.set("data:4" ,  "no 4");

    
    const result = await client.mget( "data:1" , "data:2" , "data:3" , "data:4")
    console.log(result);
    
    //multiple set

  const res =   await client.mset("bike:1" ,"Deimos" ,  "bike:2 ", "Ares" , "bike:3" ,  "Vanth")
  console.log(res)

  //Managing counters

   await client.set("count" , 0);
   console.log(await client.incrby("count" , 20) )//20

   console.log(await client.get("count"));

   //decrement -- pass nigative value

   console.log(await client.incrby("count" , -10));

   console.log(await client.get("count"));
   
   await client.expire("msg:2" , 10);

}


init();