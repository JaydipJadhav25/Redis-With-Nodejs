import {client} from "./redisClient.js"

async function set(){

    await client.sadd("data:score" , "score" , 60 );
    await client.sadd("data:score" , "score" , 6430 );
    await client.sadd("data:score" , "score" , 450 );
    await client.sadd("data:score" , "score" , 40 );

    console.log("size  :" , await client.scard("data:score"))

    // const res22 = await client.sRandMember('bikes:racing:france')

  await client.sadd('bikes:racing:france', ['bike:1', 'bike:12' ,'bike:3'])

  const res19 = await client.srem('bikes:racing:france', 'bike:1')
  console.log(res19)  


}
set();