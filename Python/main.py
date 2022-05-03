from FiveM_API import API
from fastapi import FastAPI

server = FastAPI()

@server.get('/fetch')
async def getData():
    app = API("127.0.0.1","30120");

    token = app.getToken()
    data = app.getInfo(token)

    return (data["Data"])