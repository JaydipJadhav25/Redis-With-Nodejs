import {client} from "./redisClient.js"

async function hash(){

    // console.log(await client.hmget("newdata:data"));

    // const res1 = await client.hset(
    //     'bike:1',
    //     {
    //       'model': 'Deimos',
    //       'brand': 'Ergonom',
    //       'type': 'Enduro bikes',
    //       'price': 4972,
    //     }
    //   )

    // console.log(res1);


    console.log(await client.hget("newdata:data" , "key1"))


}
hash();