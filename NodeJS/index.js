const api = require('./FiveM-API.js');
const express = require('express');
//Config

//Server Ip and Port Default: 127.0.0.1:30120 (Home Hosted)
const server = express(); //Express Server
const app = new api('127.0.0.1', '30120'); //FiveM API
var port = 4001;

//Set for reverse proxy
server.set('trust proxy', true);
server.use(express.json());

//fetch data from FiveM-API
server.get('/fetch', async (req, res) => {
    app.getToken().then((token)=> {
        app.getInfo(token).then((data) => {
            console.log("Get Fetch Data")
            return res.status(200).send(data.data);
        })
    })
})

server.listen(port, () => {
    console.log(`Listening on ${port}`);
})


// Example data
// {
//     "EndPoint": "p8oj3y",
//     "Data": {
//         "clients": 0,
//         "gametype": "ESX Legacy",
//         "hostname": "test-server built with ZAP-Hosting ESX Pack by ZAP-Hosting.com & the ESX Team!",
//         "mapname": "San Andreas",
//         "sv_maxclients": 32,
//         "enhancedHostSupport": true,
//         "resources": [
//             "hardcap",
//             "async",
//             "esx_billing",
//             "esx_license",
//             "bob74_ipl",
//             "_cfx_internal",
//             "cron",
//             "monitor",
//             "EasyAdmin",
//             "skinchanger",
//             "esx_accessories",
//             "esx_addonaccount",
//             "esx_property",
//             "esx_status",
//             "esx_barbershop",
//             "sessionmanager",
//             "esx_addoninventory",
//             "esx_ambulancejob",
//             "esx_animations",
//             "esx_atm",
//             "esx_bankerjob",
//             "esx_basicneeds",
//             "esx_boat",
//             "esx_clotheshop",
//             "esx_cruisecontrol",
//             "esx_datastore",
//             "esx_dmvschool",
//             "esx_drugs",
//             "esx_holdup",
//             "esx_voice",
//             "esx_identity",
//             "esx_skin",
//             "esx_mechanicjob",
//             "esx_joblisting",
//             "esx_jobs",
//             "esx_lscustom",
//             "esx_menu_default",
//             "esx_menu_dialog",
//             "esx_weaponshop",
//             "esx_menu_list",
//             "esx_optionalneeds",
//             "esx_sit",
//             "esx_phone",
//             "esx_policejob",
//             "esx_realestateagentjob",
//             "esx_rpchat",
//             "esx_service",
//             "esx_shops",
//             "esx_society",
//             "esx_taxijob",
//             "esx_vehicleshop",
//             "es_extended",
//             "instance",
//             "oxmysql",
//             "chat",
//             "mapmanager",
//             "spawnmanager",
//             "rconlog",
//             "webpack",
//             "yarn"
//         ],
//         "server": "FXServer-master SERVER v1.0.0.5535 win32",
//         "vars": {
//             "gamename": "gta5",
//             "locale": "root-AQ",
//             "onesync_enabled": "false",
//             "sv_enforceGameBuild": "1604",
//             "sv_enhancedHostSupport": "true",
//             "sv_lan": "false",
//             "sv_licenseKeyToken": "2816580xlumyuotv5gi0sbtq_6778354:ace13f5965a161a9cc67a0da0b843fac854c9ac05495b236b14fda3e926fd150",
//             "sv_maxClients": "48",
//             "sv_projectDesc": "An ESX pack with additional bug-fixes, based on esx-legacy.",
//             "sv_projectName": "[ZAP-Hosting ESX Pack] test-server",
//             "sv_scriptHookAllowed": "false",
//             "tags": "default, deployer, esx,esx",
//             "txAdmin-version": "4.14.0"
//         },
//         "selfReportedClients": 0,
//         "players": [],
//         "ownerID": 6778354,
//         "private": false,
//         "fallback": true,
//         "connectEndPoints": [
//             "[CENSOR IP]:30120"
//         ],
//         "upvotePower": 0,
//         "burstPower": 0,
//         "support_status": "supported",
//         "svMaxclients": 32,
//         "ownerName": "TGNAME009",
//         "ownerProfile": "https://forum.cfx.re/u/TGNAME009",
//         "ownerAvatar": "https://forum.cfx.re/user_avatar/forum.cfx.re/tgname009/128/2513490_2.png",
//         "lastSeen": "2022-05-03T04:00:03.8808193Z",
//         "iconVersion": -1699093135
//     }
// }