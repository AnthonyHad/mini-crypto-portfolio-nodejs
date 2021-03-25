const fetch = require('node-fetch');
const Coin = require('../../models/coin');


fetch('https://api.coinpaprika.com/v1/coins')
    .then(response => response.json())
    .then(data => {
        activeCoins = [];
        // console.log(data);
        data.forEach( coin => {
            if(coin["is_active"]) {
                activeCoins.push(coin)
            }
            return activeCoins;
        })
        activeCoins.forEach(coin => {
            Coin.create({
                name: coin["name"],
                apiId: coin["id"],
                symbol: coin["symbol"],
                coinType: coin["type"],
                rank: coin["rank"]
            });
        });
    });

    

