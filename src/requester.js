const { exec } = require("child_process");
const readline = require("readline");

// Placez votre JWT et les autres constantes ici.
const TEAMS_JWT =
  "eyJ0eXAiOiJKV1QiLCJub25jZSI6IkRTWFlUUjRjTkhUZk1DY0JwX1hvYjR1Um8yUWgwYVZuc1JyOThkVWc4QlUiLCJhbGciOiJSUzI1NiIsIng1dCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSIsImtpZCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSJ9.eyJhdWQiOiJodHRwczovL2ljMy50ZWFtcy5vZmZpY2UuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDBhZTYzMzYtNWMzNS00NzM1LTk3MDMtMDNmYjc3N2JiZDJiLyIsImlhdCI6MTcxMjkwNjEyMCwibmJmIjoxNzEyOTA2MTIwLCJleHAiOjE3MTI5OTI4MjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFaclBwUU8xUVRlbTJmVTVEL1pnUklnSlZlVTFqWEZSSWlsNWd3MUI2dGNEeUxMdEdEYkZqeUEyeEFuc1NEdmJBS1AxcGZYdnRrSlJwWktWay84Q2ZGcDJ3VzhMY3JiSmxGUXVRamFseFdXST0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiNWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNQUhFIiwiZ2l2ZW5fbmFtZSI6IlZpY3RvciIsImlwYWRkciI6IjkwLjg1LjEyOS4xMjkiLCJuYW1lIjoiVmljdG9yIE1BSEUiLCJvaWQiOiIxNDMwMmVkZC1hZmMxLTQ3NDktODQ3OS1hNDkwNDM3MzM5OWEiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjU0MDEwNzQ3Ny0yMzA4NDMwOTk3LTM0MDk5NjYxMDAtMTU0MDIiLCJwdWlkIjoiMTAwMzIwMDI4NTFDQjAyRiIsInJoIjoiMC5BVWdBTm1PdTBEVmNOVWVYQXdQN2QzdTlLMVR3cWptbGdjZElwUGdDa3dFZ2xibElBRFkuIiwic2NwIjoiVGVhbXMuQWNjZXNzQXNVc2VyLkFsbCIsInN1YiI6InlScWlOR01vMWZfZXNmT1JUUmxSSFBzdXZGNDZ0ZWRnN3E2a0ZTbDhRNXMiLCJ0aWQiOiJkMGFlNjMzNi01YzM1LTQ3MzUtOTcwMy0wM2ZiNzc3YmJkMmIiLCJ1bmlxdWVfbmFtZSI6Im1haGUudkBvZGFseXMtdmFjYW5jZXMuY29tIiwidXBuIjoibWFoZS52QG9kYWx5cy12YWNhbmNlcy5jb20iLCJ1dGkiOiJpSE9Hdzc3TmlVaVdFazUtbS1VMkFBIiwidmVyIjoiMS4wIiwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfc3NtIjoiMSJ9.kMJp2nY2jEnrOc-aAC5LyMH5YxJK1RDNoElc9Hil-neS25DR_5tCB7ThEbGHQ5TbZ73oBYrRCwVucttKu5VuzYd2k6Uv11KTSANCRVjWWVrEMpVJeblbHVO-lUh0bIPgkZP_dxk3ZbqobosmVOXqVjWdrNLbj-5pZ466nw_UIBQhIulJUbhqzanZ_C2YFJjnLO_4ZwmHUITfRcExGRMGXoHw6CBayO3vogn3nowfBcuEGgRmxCcV9QfkNwdZzh-_fz8V5q0mDYTb_5zoQ0BnDepkDoVVDCNieavYANU01QjarPbeEDrF9dDV75ZYAgPOw8WLSMkiwvq4zjv-Y2E1cw";
const CONVERSATION_ID =
  "19:00c368d3-815a-4a81-807b-ada4254125e8_14302edd-afc1-4749-8479-a4904373399a@unq.gbl.spaces";
// let CONTENT = "<p>Depuis Node.js</p>";
const SEND_DATE = new Date().toJSON();

const curlSend = (msg) => {
  const CONTENT = `<p>${msg}</p>`;
  return `curl -v 'https://teams.microsoft.com/api/chatsvc/emea/v1/users/ME/conversations/${encodeURIComponent(
    CONVERSATION_ID
  )}/messages' \
  -H 'behavioroverride: redirectAs404' \
  -H 'x-ms-test-user: False' \
  -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkRTWFlUUjRjTkhUZk1DY0JwX1hvYjR1Um8yUWgwYVZuc1JyOThkVWc4QlUiLCJhbGciOiJSUzI1NiIsIng1dCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSIsImtpZCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSJ9.eyJhdWQiOiJodHRwczovL2ljMy50ZWFtcy5vZmZpY2UuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDBhZTYzMzYtNWMzNS00NzM1LTk3MDMtMDNmYjc3N2JiZDJiLyIsImlhdCI6MTcxMjkwNjEyMCwibmJmIjoxNzEyOTA2MTIwLCJleHAiOjE3MTI5OTI4MjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFaclBwUU8xUVRlbTJmVTVEL1pnUklnSlZlVTFqWEZSSWlsNWd3MUI2dGNEeUxMdEdEYkZqeUEyeEFuc1NEdmJBS1AxcGZYdnRrSlJwWktWay84Q2ZGcDJ3VzhMY3JiSmxGUXVRamFseFdXST0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiNWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNQUhFIiwiZ2l2ZW5fbmFtZSI6IlZpY3RvciIsImlwYWRkciI6IjkwLjg1LjEyOS4xMjkiLCJuYW1lIjoiVmljdG9yIE1BSEUiLCJvaWQiOiIxNDMwMmVkZC1hZmMxLTQ3NDktODQ3OS1hNDkwNDM3MzM5OWEiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjU0MDEwNzQ3Ny0yMzA4NDMwOTk3LTM0MDk5NjYxMDAtMTU0MDIiLCJwdWlkIjoiMTAwMzIwMDI4NTFDQjAyRiIsInJoIjoiMC5BVWdBTm1PdTBEVmNOVWVYQXdQN2QzdTlLMVR3cWptbGdjZElwUGdDa3dFZ2xibElBRFkuIiwic2NwIjoiVGVhbXMuQWNjZXNzQXNVc2VyLkFsbCIsInN1YiI6InlScWlOR01vMWZfZXNmT1JUUmxSSFBzdXZGNDZ0ZWRnN3E2a0ZTbDhRNXMiLCJ0aWQiOiJkMGFlNjMzNi01YzM1LTQ3MzUtOTcwMy0wM2ZiNzc3YmJkMmIiLCJ1bmlxdWVfbmFtZSI6Im1haGUudkBvZGFseXMtdmFjYW5jZXMuY29tIiwidXBuIjoibWFoZS52QG9kYWx5cy12YWNhbmNlcy5jb20iLCJ1dGkiOiJpSE9Hdzc3TmlVaVdFazUtbS1VMkFBIiwidmVyIjoiMS4wIiwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfc3NtIjoiMSJ9.kMJp2nY2jEnrOc-aAC5LyMH5YxJK1RDNoElc9Hil-neS25DR_5tCB7ThEbGHQ5TbZ73oBYrRCwVucttKu5VuzYd2k6Uv11KTSANCRVjWWVrEMpVJeblbHVO-lUh0bIPgkZP_dxk3ZbqobosmVOXqVjWdrNLbj-5pZ466nw_UIBQhIulJUbhqzanZ_C2YFJjnLO_4ZwmHUITfRcExGRMGXoHw6CBayO3vogn3nowfBcuEGgRmxCcV9QfkNwdZzh-_fz8V5q0mDYTb_5zoQ0BnDepkDoVVDCNieavYANU01QjarPbeEDrF9dDV75ZYAgPOw8WLSMkiwvq4zjv-Y2E1cw' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' \
  -H 'content-type: application/json' \
  -H 'clientinfo: os=mac; osVer=10.15.7; proc=x86; lcid=en-gb; deviceType=1; country=gb; clientName=skypeteams; clientVer=1415/24031414717; utcOffset=+02:00; timezone=Europe/Paris' \
  -H 'x-ms-migration: True' \
  -H 'Referer: https://teams.microsoft.com/v2/worker/precompiled-web-worker-3cf84525c0e01642.js' \
  --data-raw '{"id":"-1","type":"Message","conversationid":"${CONVERSATION_ID}","conversationLink":"blah/${CONVERSATION_ID}","from":"8:orgid:14302edd-afc1-4749-8479-a4904373399a","composetime":"${SEND_DATE}","originalarrivaltime":"${SEND_DATE}","content":"${CONTENT}","messagetype":"RichText/Html","contenttype":"Text","imdisplayname":"Victor MAHE","clientmessageid":"${new Date().getTime()}","callId":"","state":0,"version":"0","amsreferences":[],"properties":{"importance":"","subject":"","title":"","cards":"[]","links":"[]","mentions":"[]","onbehalfof":null,"files":"[]","policyViolation":null},"crossPostChannels":[]}'`;
};

// Prompt user for a message to send
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez le message à envoyer: ", (message) => {
  exec(curlSend(message), (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur d'exécution: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`Erreur: ${stderr}`);
      return;
    }
    console.log(`Résultat de la requête:\n${stdout}`);
  });
});
