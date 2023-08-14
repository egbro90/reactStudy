# API 호출

API 호출할 때 보통 axiso(엑시오스) 라이브러리를 사용 함.

GET : 데이터 조회
POST : 데이터 요청
PUT : 데이터 수정
DELETE : 데이터 삭제

샘플 API 주소 : "https://jsonplaceholder.typicode.com/users"

* * *

**데이터 요청에 대한 상태관리 할 때에는 3가지 상태를 관리해주어야 합니다.**
1. 요청의 결과
2. 로딩 상태
3. 에러