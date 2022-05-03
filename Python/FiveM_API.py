import requests as fetch
import asyncio

class API:
    def __init__(self, ip, port):
        self.ip = ip
        self.port = port
        self.url = 'https://servers-frontend.fivem.net/api/servers/single/'
        self.headers = {
            "Content-Type": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Mobile Safari/537.36",
        }
    
    def getToken(self): 
        token = fetch.get(url=f"http://{self.ip}:{self.port}").headers['X-Citizenfx-Join-Token']
        return token
    
    def getInfo(self, token):
        response = fetch.get(url=self.url+token, headers=self.headers)
        return response.json();


        
