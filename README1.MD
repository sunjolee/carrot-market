
# 9.3 Twilo Setup (09:33)

www.twilio.com 사이트에서 문자 보내 보기

# 9.4 Sending SMS (07:11)

### twilio sdk 설치
    * npm install twilio

### env 파일에 관련 정보 입력
TWILIO_SID=
TWILIO_TOKEN=
TWILIO_MSID=
MY_PHONE=
 
# 9.5 Sending Email (06:56)

## sendgrid.com 회원 가입

* sendgrid 회원 가입 후 로그인이 안 되어 일단 패스 나중에 메일 보낼 일이 있음 해 보자

# 9.6 Token UI (16:22)

# 9.7 Serverless Sessions (13:22)

## iron session  : 서명 암호화된 쿠키를 사용하는 Node JS 무상태 세션 도구

* 쿠키 : 유저정보를 암복호화 하여 인증
* 세션 : 세션ID를 쿠키에 보내 인증 ( 서버에서 세선정보를 관리 해야 함)
* jwt : 사용자 토큰 정보를 주고 받으며 서버에서는 토큰 정보가 유효한지만 체크

## irow session 도우미 설치

npm i irow-session

 * 호출 api를 withIronSessionApiRoute 로 감싸 주면 client에 내려주는 쿠키정보를 암호화 하여 내려준다.
 
# 9.8 Profile Handler (05:18)

## user id 로 유저 정보 조회

    * req.session.user?.id --> 이곳에 정상 confirm까지 하면 유저 아이디 정보가 실려 온다.
 
# 9.9 Cleaning Code (11:49)

## password 생성 사이트 
https://passwordsgenerator.net/



# 9.10 NextAuth (05:50)

## NextAuth는 유저가 로그인 돼 있는지 아닌지를 알려주는 hook이랑 function을 제공

# 10 AUTHORIZATION

# 10.0 Introduction (05:20)

# 10.1 Protected Handlers (09:05)

## api 호출 시 유저정보가 쿠키에 있어야 하고 & api가 private 한 경우 로그인 하라고 튕겨 내는 로직 추가

# 10.2 useUser Hook (10:28)

## 유저 정보 가져오는 라이브러리 추가

## router push replace 차이
  * router.push("/");    // 브라우저에게 홈 화면 히스토리를 기록하며 간다.
  * router.replace("/"); // 브라우저에게 홈 화면 히스토리를 기록하지 말라고 한다,

# 10.3 SWR (12:39)

## swr ( stale while revalidate ) : http 캐시 무효화 전략
: 페이지에 접근하 swr이 로그인 정보를 불러오 api 응답이 되면 로그인 정보를 캐시에 저장 
  --> 다른 페이지 이동 후 다시 돌아 오면 swr 이 전에 받은 데이터를 보여 줄거고
  아무도 모르게 api에 새로운 데이터가 있는지 확인 한다. 
  swr이 api에 요청을 보내고 새로운 데이터가 있으면 업데이트 해준다. 
  그래서 항상 최신 데이터를 확인 할 수 있고, 페이지를 이동할 때 마다 로딩 표시를 볼 필요가 없다

npm i swr 설치

 * swr은 url(key)를 기준으로 기억했다가 해당 url를 호출하면 캐시에서 데이터를 가져 온다.


# 10.4 useUser Refactor (08:23)

## swr 코드 정리 및 마무리

# 11 PRODUCTS

# 11.0 Product Model (07:30)

# 11.1 Upload Form (06:37)

# 11.2 Upload API (07:51)

# 11.3 See Products (06:03)

# 11.4 Product Detail (11:01)

# 11.5 Related Products (09:55)

# 11.6 Favorite Products (12:43)

# 11.7 Favorite Products part Two (09:19)

# 11.8 Bound Mutations (11:18)

Optimistic UI Update

: backend 처리를 기다리지 않고, 잘 처리가 될것을 기대하고 UI를 업데이트 시켜주는 것

```tsx
const onFavClick = () => {
// Optimistic UI Update
if (!data) return;
/**
* mutation의 첫번째 arg는 업데이트 될 캐쉬 데이터
* 두번쨰 인자는 캐쉬 업데이트 후 백엔드에 요청을 통해 검증하는 용도로 default: true
*/
mutate({ ...data, isLiked: !data?.isLiked }, false);
// Backend process
toggleFav({});
};
```

# 11.9 Unbound Mutations (06:37)

# 11.10 Counting Relationships (05:00)

# 12 동네생활

# 12.0 Models (07:26)

# 12.1 Forms and Handlers (08:56)

# 12.2 Post Detail (12:25)

# 12.3 궁금해요 (15:46)

# 12.4 Answer (13:06)

# 12.5 All Posts (12:45)

# 12.6 useCoords (07:21)

# 12.7 Geo Search (12:52)

# 12.8 Geo Bug (02:55)
# 13 PROFILE

# 13.0 Models (16:39)

# 13.1 Reviews (08:42)

# 13.2 Handlers (08:17)

# 13.3 Profile Page (06:07)

# 13.4 Sales, Purchases, Favorites (12:08)

# 13.5 Edit Profile part One (10:52)

# 13.6 Edit Profile part Two (17:22)
# 14 STREAMS

# 14.0 Upload Form (12:41)

# 14.1 Detail Page (13:02)

# 14.2 Send Message (06:49)

# 14.3 See Messages (08:56)

# 14.4 Mutations and Refresh (08:21)

# 14.5 Seeding (06:20)
  ## seeding 은 기본적으로 데이터베이스에 가짜 데이터를 엄청 빨리 생성해
  ## 명령어 :  npx prisma db seed

# 14.6 Pagination (11:14)
# 15 CLOUDFLARE IMAGES

# 15.0 Introduction (03:29)

## Cloudflare Images 활용


# 15.1 Image Preview (11:13)

# 15.2 Direct Creator Uploads (10:57)

# 15.3 Cloudflare Setup (04:28)

# 15.4 Direct Upload URL (08:36)

# 15.5 Cloudflare Upload (06:03)

# 15.6 Serving Images (08:45)

# 15.7 Resizing Images (06:22)

# 15.8 Product Images (11:23)
# 16 NEXTJS IMAGES

# 16.0 Introduction (05:52)

# 16.1 Local Images (11:36)

# 16.2 Remote Images (08:06)

# 16.3 Layout Fill (08:38)

# 16.4 Conclusions (01:52)
# 17 LIVE STREAMING

# 17.0 Introduction (07:47)

# 17.1 Streaming From Dashboard (06:06)

# 17.2 Streaming API (10:36)

# 17.3 Securing Stream (11:53)

# 17.4 Video and Thumbnails (08:12)

# 17.5 Conclusions (03:15)
# 18 CHALLENGE

# 18.0 Code Challenge (04:08)
# 19 NEXTJS DEEP DIVE

# 19.0 Middlewares (12:11)

# 19.1 Responses and Redirections (13:42)

# 19.2 Dynamic Imports (11:04)

# 19.3 Lazy-load Imports (08:44)

# 19.4 _document and Fonts (12:14)

# 19.5 Script Component (09:16)

# 19.6 getServerSideProps (09:14)

# 19.7 SSR + SWR (11:47)

# 19.8 SSR + Authentication (09:49)

# 19.9 Blog Section (07:54)

# 19.10 getStaticProps (15:52)

# 19.11 getStaticPaths part One (09:33)

# 19.12 getStaticPaths part Two (07:41)

# 19.13 Dynamic getStaticProps (08:28)

# 19.14 Inner HTML (09:41)

# 19.15 Recap (08:21)
# 20 INCREMENTAL SITE REGENERATION

# 20.0 Introduction (14:18)

# 20.1 ISR part One (10:37)

# 20.2 ISR part Two (12:55)

# 20.3 On Demand Revalidation (11:53)

# 20.4 Blocking SSG (13:33)

# 20.5 Fallback (14:22)

# 20.6 Recap (05:33)

# 20.7 Code Challenge (01:09)
# 21 FUTURE: REACT 18

# 21.0 Suspense (14:05)

# 21.1 Server Components (03:49)

# 21.2 Promise Me Your Love (15:18)

# 21.3 Throwing Our Promise (07:17)

# 21.4 Parallelism (11:00)

# 21.5 Recap (03:36)
# 22 DEPLOYING

# 22.0 Database Branches (08:18)

# 22.1 Indexes and Deploys (12:54)

# 22.2 Vercel Deployment (11:34)

# 22.3 Vercel Deployment part Two (09:48)

# 22.4 Preview Deployments (03:50)

# 22.5 Limits in Vercel (09:30)

# 22.6 Bye Bye! (01:18)
# 23 BONUS: CLOUDFLARE WORKERS