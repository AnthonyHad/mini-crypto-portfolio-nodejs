const fetch = require('node-fetch');
const Coin = require('../../models/coin');


// const getCoinApiId = (coin) => {
//     Coin.findAll
// }


const getLatestOhlc = (coinId) => {
    fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/latest/`)
    .then(response => response.json())
    .then(data => {
        obj = data;
    })
    .catch(err => {
        console.log(err);
    })
};  


    Coin.findAll({
    raw: true
    })
    .then(coins => {
        coins.forEach(coin => {
        //    console.log(coin.apiId) 
        let result;
        setTimeout(function(){
           if (getLatestOhlc(coin.apiId) != undefined) {
                return result = getLatestOhlc(coin.apiId);
             }
           }, 10000);
           console.log(result);
    //    if (result != undefined) {
    //        Coin.update({
    //             open: result[0]["open"],
    //             close: result[0]["close"],
    //             high: result[0]["high"],
    //             low: result[0]["low"],
    //             volume: result[0]["volume"],
    //             market_cap: result[0]["market_cap"] 
    //         }, {
    //             where: { id: coin.id}
    //         })
    //         // console.log(coin);
    //      } 
        })
        }).catch(err => {
            console.log(err);
        });




// Coin.findAll({
//     raw: true
//     })
//     .then(coins => {
//         const apiIdArray = [];
//         coins.forEach( coin => apiIdArray.push(coin.apiId ));
//         // console.log(apiIdArray);
//         return apiIdArray
//         })
//         .then( result => {
//             console.log(result);
//             // result.forEach( result => getLatestOhlc(result))
//         }).catch(err => {
//             console.log(err);
//         });


// Coin.findAll()
//     .then( coins => {
//         coins.forEach( coin => {
//             coin.update({
//                 open: coin[0]["open"],
//                 close: coin[0]["close"],
//                 high: coin[0]["high"],
//                 low: coin[0]["low"],
//                 volume: coin[0]["volume"],
//                 market_cap: coin[0]["market_cap"]        
//             });
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     })


// const btc = Coin.findAll({
//     where: {
//         apiId: 'btc-bitcoin',
//     },
//     raw: true
// }).then( coin => {
//     console.log( typeof coin);
//     console.log(coin[0].coinType);
//     Coin.update({
//         coinType: "coin"

//     }, {
//         where: { id: coin[0].id}
//     }) 
//     console.log(coin[0].coinType);
// });



