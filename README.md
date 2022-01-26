## Project Description

개발 언어 : Node.js base on Javascript
과정 : [심화 과정] 백엔드 서버 과정
주차 : 2주차  
과제 : PostgreSQL 적용 실습
목표 : pg 패키지를 이용하여 Node.js에서 설계된 PostgreSQL 데이터베이스를 이용하고, Module을 이용하여 중복 코드를 간소화하여 개발하는 과제

## Explain

Frontend에서 GET, POST, PUT, DELETE의 4개 REST 요청이 온다고 가정
위 4개에 응답할 Middleware API를 개발해야 하며, 각각은 모두 데이터베이스에 데이터를 처리해야하는 기능
위 4개 API는 필요한 코드만 남겨 간소화하여, 중복으로 들어가는 데이터베이스 연결 및 요청 코드는 Module로 exports하여 사용하는 전략

## File Description

1. server.js
```
Init express web server and register middleware APIs.
```

2. router/pages.js
```
Middleware APIs of loadding HTML page.
```

3. router/account.js
```
Middlesware APIs of controling account.
Sending request to dbControl.js module with SQL and VALUES.
```

4. module/dbControl.ks
```
Moudle of managing PostgreSQL database.
```

5. index.html
```
For test page.
```
