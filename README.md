# FiveM-API Server Details

A NodeJs and Python API for get server details 

** Start API Server **

```
./Python/
REQ: virtualenv 
REQ: [env] pip install fastapi uvicorn[standard] requests
Recommend - virtualenv to run uvicorn server
cd into directory folder

1: .\env\Scripts\activate
2: uvicorn main:server --port 4001 --reload

./NodeJS/

REQ: npm install axios
1: node index.js
```

** Config Api Server **

Python without fastapi
```python
from FiveM_API import API

app = API("127.0.0.1","30120"); #Set your server ip default 127.0.0.1:30120(Home Hosted)
	
token = app.getToken() #get server join token
		
data = app.getInfo(token) #get server detail

return (data["Data"])
```
Nodejs without express
```js
const api = require('./FiveM-API.js');
const app = new api('127.0.0.1', '30120'); //Set your server ip default 127.0.0.1:30120(Home Hosted)
    
app.getToken().then((token)=> { //get server join token (async func)
	app.getInfo(token).then((data) => {
		console.log(data.data);
	})
})

```


** Example Data **
Postman Method GET localhost:4001/fetch
```json
{
    "clients": 1,
    "gametype": "ESX Legacy",
    "hostname": "test-server built with ZAP-Hosting ESX Pack by ZAP-Hosting.com & the ESX Team!",
    "mapname": "San Andreas",
    "sv_maxclients": 32,
    "enhancedHostSupport": true,
    "resources": [
        "hardcap",
        "async",
        "esx_billing",
        "esx_license",
        "bob74_ipl",
        "_cfx_internal",
        "cron",
        "monitor",
        "EasyAdmin",
        "skinchanger",
        "esx_accessories",
        "esx_addonaccount",
        "esx_property",
        "esx_status",
        "esx_barbershop",
        "sessionmanager",
        "esx_addoninventory",
        "esx_ambulancejob",
        "esx_animations",
        "esx_atm",
        "esx_bankerjob",
        "esx_basicneeds",
        "esx_boat",
        "esx_clotheshop",
        "esx_cruisecontrol",
        "esx_datastore",
        "esx_dmvschool",
        "esx_drugs",
        "esx_holdup",
        "esx_voice",
        "esx_identity",
        "esx_skin",
        "esx_mechanicjob",
        "esx_joblisting",
        "esx_jobs",
        "esx_lscustom",
        "esx_menu_default",
        "esx_menu_dialog",
        "esx_weaponshop",
        "esx_menu_list",
        "esx_optionalneeds",
        "esx_sit",
        "esx_phone",
        "esx_policejob",
        "esx_realestateagentjob",
        "esx_rpchat",
        "esx_service",
        "esx_shops",
        "esx_society",
        "esx_taxijob",
        "esx_vehicleshop",
        "es_extended",
        "instance",
        "oxmysql",
        "chat",
        "mapmanager",
        "spawnmanager",
        "rconlog",
        "webpack",
        "yarn"
    ],
    "server": "FXServer-master SERVER v1.0.0.5535 win32",
    "vars": {
        "gamename": "gta5",
        "locale": "root-AQ",
        "onesync_enabled": "false",
        "sv_enforceGameBuild": "1604",
        "sv_enhancedHostSupport": "true",
        "sv_lan": "false",
        "sv_licenseKeyToken": "2816580xzhmiyy230jipzrt9_6778354:9c446ef6c87732f0e0a063aff1b8fc075e5362ae688722fc17bbc590ba79e3d8",
        "sv_maxClients": "48",
        "sv_projectDesc": "An ESX pack with additional bug-fixes, based on esx-legacy.",
        "sv_projectName": "[ZAP-Hosting ESX Pack] test-server",
        "sv_scriptHookAllowed": "false",
        "tags": "default, deployer, esx,esx",
        "txAdmin-version": "4.14.0"
    },
    "selfReportedClients": 1,
    "players": [
        {
            "endpoint": "127.0.0.1:1234",
            "id": 1,
            "identifiers": [
                "license:d7370adc1575f137dfdd1262c1a234be1b9d055e",
                "xbl:2535472009062574",
                "live:844425055626608",
                "discord:877121992724205598",
                "fivem:6778354",
                "license2:d7370adc1575f137dfdd1262c1a234be1b9d055e"
            ],
            "name": "BallChopHee",
            "ping": 49
        }
    ],
    "ownerID": 6778354,
    "private": false,
    "fallback": true,
    "connectEndPoints": [
        "[ CENSOR IP ]:30120"
    ],
    "upvotePower": 0,
    "burstPower": 0,
    "support_status": "supported",
    "svMaxclients": 32,
    "ownerName": "TGNAME009",
    "ownerProfile": "https://forum.cfx.re/u/TGNAME009",
    "ownerAvatar": "https://forum.cfx.re/user_avatar/forum.cfx.re/tgname009/128/2513490_2.png",
    "lastSeen": "2022-05-03T05:44:04.6072986Z",
    "iconVersion": -1699093135
}
```

Support by Garvel Studio 


