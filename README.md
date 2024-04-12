## But


## Compréhension générale
Le lien à cURL est le suivant : `https://teams.microsoft.com/api/chatsvc/emea/v1/users/ME/conversations/${conversion_id}/messages`.
Où conversion_id est l'identifiant de la conversation normalisé au format URL.
Ex: `19%3A14302edd-afc1-4749-8479-a4904373399a_63bcb120-44a8-433f-b1c4-9f4708877389%40unq.gbl.spaces`.

## Requêtes cURL typique
```zsh
curl 'https://teams.microsoft.com/api/chatsvc/emea/v1/users/ME/conversations/19%3A00c368d3-815a-4a81-807b-ada4254125e8_14302edd-afc1-4749-8479-a4904373399a%40unq.gbl.spaces_63bcb120-44a8-433f-b1c4-9f4708877389%40unq.gbl.spaces/messages' \
  -H 'behavioroverride: redirectAs404' \
  -H 'x-ms-test-user: False' \
  -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkRTWFlUUjRjTkhUZk1DY0JwX1hvYjR1Um8yUWgwYVZuc1JyOThkVWc4QlUiLCJhbGciOiJSUzI1NiIsIng1dCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSIsImtpZCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSJ9.eyJhdWQiOiJodHRwczovL2ljMy50ZWFtcy5vZmZpY2UuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDBhZTYzMzYtNWMzNS00NzM1LTk3MDMtMDNmYjc3N2JiZDJiLyIsImlhdCI6MTcxMjkwNjEyMCwibmJmIjoxNzEyOTA2MTIwLCJleHAiOjE3MTI5OTI4MjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFaclBwUU8xUVRlbTJmVTVEL1pnUklnSlZlVTFqWEZSSWlsNWd3MUI2dGNEeUxMdEdEYkZqeUEyeEFuc1NEdmJBS1AxcGZYdnRrSlJwWktWay84Q2ZGcDJ3VzhMY3JiSmxGUXVRamFseFdXST0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiNWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNQUhFIiwiZ2l2ZW5fbmFtZSI6IlZpY3RvciIsImlwYWRkciI6IjkwLjg1LjEyOS4xMjkiLCJuYW1lIjoiVmljdG9yIE1BSEUiLCJvaWQiOiIxNDMwMmVkZC1hZmMxLTQ3NDktODQ3OS1hNDkwNDM3MzM5OWEiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjU0MDEwNzQ3Ny0yMzA4NDMwOTk3LTM0MDk5NjYxMDAtMTU0MDIiLCJwdWlkIjoiMTAwMzIwMDI4NTFDQjAyRiIsInJoIjoiMC5BVWdBTm1PdTBEVmNOVWVYQXdQN2QzdTlLMVR3cWptbGdjZElwUGdDa3dFZ2xibElBRFkuIiwic2NwIjoiVGVhbXMuQWNjZXNzQXNVc2VyLkFsbCIsInN1YiI6InlScWlOR01vMWZfZXNmT1JUUmxSSFBzdXZGNDZ0ZWRnN3E2a0ZTbDhRNXMiLCJ0aWQiOiJkMGFlNjMzNi01YzM1LTQ3MzUtOTcwMy0wM2ZiNzc3YmJkMmIiLCJ1bmlxdWVfbmFtZSI6Im1haGUudkBvZGFseXMtdmFjYW5jZXMuY29tIiwidXBuIjoibWFoZS52QG9kYWx5cy12YWNhbmNlcy5jb20iLCJ1dGkiOiJpSE9Hdzc3TmlVaVdFazUtbS1VMkFBIiwidmVyIjoiMS4wIiwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfc3NtIjoiMSJ9.kMJp2nY2jEnrOc-aAC5LyMH5YxJK1RDNoElc9Hil-neS25DR_5tCB7ThEbGHQ5TbZ73oBYrRCwVucttKu5VuzYd2k6Uv11KTSANCRVjWWVrEMpVJeblbHVO-lUh0bIPgkZP_dxk3ZbqobosmVOXqVjWdrNLbj-5pZ466nw_UIBQhIulJUbhqzanZ_C2YFJjnLO_4ZwmHUITfRcExGRMGXoHw6CBayO3vogn3nowfBcuEGgRmxCcV9QfkNwdZzh-_fz8V5q0mDYTb_5zoQ0BnDepkDoVVDCNieavYANU01QjarPbeEDrF9dDV75ZYAgPOw8WLSMkiwvq4zjv-Y2E1cw' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' \
  -H 'content-type: application/json' \
  -H 'clientinfo: os=mac; osVer=10.15.7; proc=x86; lcid=en-gb; deviceType=1; country=gb; clientName=skypeteams; clientVer=1415/24031414717; utcOffset=+02:00; timezone=Europe/Paris' \
  -H 'x-ms-migration: True' \
  -H 'Referer: https://teams.microsoft.com/v2/worker/precompiled-web-worker-3cf84525c0e01642.js' \
  --data-raw '{"id":"-1","type":"Message","conversationid":"19:00c368d3-815a-4a81-807b-ada4254125e8_14302edd-afc1-4749-8479-a4904373399a@unq.gbl.space","conversationLink":"blah/19:00c368d3-815a-4a81-807b-ada4254125e8_14302edd-afc1-4749-8479-a4904373399a@unq.gbl.spaces","from":"8:orgid:14302edd-afc1-4749-8479-a4904373399a","composetime":"2024-04-10T08:22:43.748Z","originalarrivaltime":"2024-04-10T08:22:43.748Z","content":"<p>Vous me recevez ?</p>","messagetype":"RichText/Html","contenttype":"Text","imdisplayname":"Victor MAHE","clientmessageid":"3297672565333801288","callId":"","state":0,"version":"0","amsreferences":[],"properties":{"importance":"","subject":"","title":"","cards":"[]","links":"[]","mentions":"[]","onbehalfof":null,"files":"[]","policyViolation":null},"crossPostChannels":[]}'
```

## Explication des data
```json
{
  "id":"-1",
  "type":"Message",
  // conversationId est l'identifiant de la conversion. TODO: comment le récupérer depuis le DOM ?
  "conversationid":"19:14302edd-afc1-4749-8479-a4904373399a_63bcb120-44a8-433f-b1c4-9f4708877389@unq.gbl.spaces",
  // Le lien de la conversation. Composé du conversation_id précédé de blah/.
  "conversationLink":"blah/19:14302edd-afc1-4749-8479-a4904373399a_63bcb120-44a8-433f-b1c4-9f4708877389@unq.gbl.spaces",
  // Donnée inconnue.
  "from":"8:orgid:14302edd-afc1-4749-8479-a4904373399a",
  "composetime":"2024-04-10T08:22:43.748Z",
  "originalarrivaltime":"2024-04-10T08:22:43.748Z",
  "content":"<p>Je suis le message en richtext/html. On peut me rajouter toutes sortes de balises.</p>",
  "messagetype":"RichText/Html",
  "contenttype":"Text",
  "imdisplayname":"Bnktop",
  "clientmessageid":"3297672565333801288",
  "callId":"",
  "state":0,
  "version":"0",
  "amsreferences":[],
  "properties": {
    "importance":"",
    "subject":"",
    "title":"",
    "cards":"[]",
    "links":"[]",
    "mentions":"[]",
    "onbehalfof":null,
    "files":"[]",
    "policyViolation":null
  },
  "crossPostChannels":[]
}
```


## TODO
- [ ] Récupérer l'org:id de l'utilisateur qui cherche à envoyer des messages.