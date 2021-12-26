
# Dalcom 
 Dalcom Shop with React.js, Node.js
 </br></br>

![image](https://user-images.githubusercontent.com/89246392/146865884-cfb322eb-c6d5-4149-bcc1-9e94ce604ede.png)</br>

### Hyperlink 
[Heroku Web배포](https://pacific-crag-89307.herokuapp.com/)</br>
[Github주소](https://github.com/soyikimm/dalcomm/) </br></br>

###개발언어 및 환경
----- 
- 프론트 : Html, CSS, Bootstrap, React.js
- 백엔드 : Node.js, MongoDB, Redux, Express JS</br>
- 개발환경 : VS Code

</br></br>
프로젝트 기능 :
- 회원가입
</br>Bcrypt로 비밀번호를 암호화하여 안전하게 보관합니다.
</br>salt 를 이용하여 hash password(암호화된 비밀번호)를 만들었습니다.
- 로그인, 로그아웃 구현
</br>User 관련 State은 Redux로 관리합니다.
</br>Authenticate는 username filter 기반으로 jwt를 사용합니다.
- 상품 업로드 기능 구현
</br>Multer모듈을 사용하여 사용자가 전송한 이미지파일을 처리하는 작업을 합니다.
</br>Product Model를 만들어 정보를 서버로 보낸 후 보낸정보를 MongoDB에 저장합니다.
</br>MongoDB에 저장된 데이터들을 map() methods를 사용해 상품리스트를 보여줍니다.


- 검색기능
</br>SearchFeature Component를 만들어 검색 값을 이용한 getProduct Function을 작동합니다.

- 체크박스로 카테고리 기능 구현
</br>Route를 이용하여 필터기능을 구현합니다.

- 상품 장바구니 기능 구현
</br>Auth Route로 카트상품의 정보를 업데이트하고
</br>MongoDB에 저장된 데이터를 브라우저에서 보여줍니다.

- 상품 주문 및 Paypal결제
 


</br></br>



    
 
