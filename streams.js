import {client} from "./redisClient.js"


async function streams(){

    // const res1 = await client.xadd(
    //     'race:france', '*', {
    //       rider: 'Castilla',
    //       speed: '30.2',
    //       position: '1',
    //       location_id: '1'
    //     }
    //   );
    //   console.log(res1)

    await client.xadd('race:france' , '*' , 'rider' ,'demo1' ,'speed', '30.2',
    'position', '1',
    'location_id', '1'  )

//     const res4 = await client.xrange('race:france', '1691765278160-0', '+', 2);
// console.log(res4);




}

streams();