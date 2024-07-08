import {client} from "./redisClient.js"


async function sortedSet(){
    await client.zadd("score" , 4  , "ganesh");
    await client.zadd("score" , 10  , "rohan");

    //duplicat not allowed.......
    console.log(await client.zadd("score" , 4  , "ganesh"));


    //range

    console.log(await client.zrange("score" , 0 , -1)) //in sortedfrom
    console.log(await client.zrange("score" , 0 , 3)) //in sortedfrom

      //resrves return
    console.log(await client.zrevrange("score" , 0 , -1)) //in sortedfrom

        

      

}

sortedSet();