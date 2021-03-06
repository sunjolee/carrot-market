
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

## 페이지에서 어떤 액션에 의하여 컴포넌트가 호출 되는 경우
## 보통은 로딩시에 이미 컴포넌트를 읽어 온다.
## 하지만 Dynamic Imports 를 사용하면 액션이 일어 났을 때 해당 컴포넌트를 읽어 낸다.
## Lazy Loading

```tsx
import dynamic from "next/dynamic";
// import Bs from "@components/bs";

const Bs = dynamic(() => import("@components/bs"), { ssr: false });

```

# 19.3 Lazy-load Imports (08:44)

## dynamic 으로 컴포넌트를 호출 할 때 화면에서 컴포넌트를 다 불어 올 때까지 로딩 워드를 표시 해 줄 수 있다.
## 이 부분은 개발 후반부에 정의 하는 게 좋다.

```tsx
import { Suspense, useEffect, useState } from "react";

const Bs = dynamic(
        () =>
                new Promise((resolve) =>
                        setTimeout(() => resolve(import("@components/bs")), 10000)
                ),
        { ssr: false, suspense: true, loading: () => <span>loading</span> }
);

Default Changelist
        
  <Suspense fallback={<button>loading!!</button>}>   // ----> 로딩 문구
      <Bs />
  </Suspense>
```


# 19.4 _document and Fonts (12:14)

## 다큐먼트 컴포넌트는 한번만 랜더링 된다.
## 다큐먼트 컴포넌트는 서버에서 실행이 되고  NextJS 앱의 Html 뼈대를 짜주는 역할
## 앱 컴포넌트는 클라이언트에서 실행이 된다

## Next JS 빌드시 ( npm run build)
## 유저가 더 이상 파일을 다 다운로드 받을 필요가 없다.
## 폰트가 어디 있는지 알려주는 파일을 더 이상 다운로드 할 필요 없이 빌드 할때 .next 폴더에 미리 다운로드 해 놓는다.


# 19.5 Script Component (09:16)


## 외부 스크립트나 SDK ( 카카오 SDK, Facebook sdk )를 사용할 때 유용
## 페이지 로딩이 끝난 후 외부 스크립트를 불러와도 된다.
## 그래서 초반 로딩 할 때 불러오는 것이 아닌 페이지 상호 작용이 끝나고
## lazy load 한다.
## 다른 거 다 불러 오고 나서 스크립트를 불러 와도 된다.
## stratety 옵션으로 시점 설정 가능

![img_21.png](img_21.png)

# 19.6 getServerSideProps (09:14)

## 페이지에 접속 하자 마자 바로 조회 되길 원 할 때..
## 서버에서 데이터를 불러오면 새로고침, 캐시 기능을 쓸 수 없다. SWR 기능을 안 쓰기에...

# 19.7 SSR + SWR (11:47)

## SSR 호출 시 에러 발생하면 페이지에 아무것도 표시 안 됨
## SWR 호출 시 에러 발생하면 최소 상단 홈과 하단 네비게이션은 보인다.


# 19.8 SSR + Authentication (09:49)

## 서버사이드 데이터 호출 + 인증 기능

# 19.9 Blog Section (07:54)

## FAQ 같은 정적 페이지 구현1

# 19.10 getStaticProps (15:52)

## getStaticProps 함수는 딱 한 번 실행
## 페이지가 빌드되고 nextjs가 이 페이지를 export 한 후 일반 html로 될 때 실행

npm install --save gray-matter

md 파일 내용을 페이지에 보여 주기

# 19.11 getStaticPaths part One (09:33)

# 19.12 getStaticPaths part Two (07:41)

# 19.13 Dynamic getStaticProps (08:28)

npm i unified remark-parse remark-html


# 19.14 Inner HTML (09:41)


![img_22.png](img_22.png)

# 19.15 Recap (08:21)

# 20 INCREMENTAL SITE REGENERATION


# 20.0 Introduction (14:18)

# 20.1 ISR part One (10:37)

* nextjs 제공하는 기본적인 방법은 유저가 컴포넌트 초기 state들을 html로 볼 수 있지만 Data를 불러오는데 시간이 걸린다.
* ssr 유저가 페이지와 데이터를 한번에 볼 수 있다
* getStaticProps 블로그 페이지에서 사용한 방법,
  장점 : 정적 HTML을 미리 생성해 주기 때문에 JS코드를 다운로드 받을 필요가 없어서 페이지를 빠르게 불러 온다.
  단점 : 빌드 타임 때 한 번만 실행 된다. 이 때문에 페이지 안의 데이터를 변경하려면 페이지 전체를 다시 빌드해야 하는 단점
  이럴 때 ISR 를 사용하면 된다.
* ISR : 페이지 로딩 상태가 전혀 나타나지 않고 서버단에서 페이지를 렌더링 해 주지 않는다. 빌드시 실행이 되고 추후 몇초에 한번 재 생성이 가능하다.


# 20.2 ISR part Two (12:55)

# 20.3 On Demand Revalidation (11:53)
await res.unstable_revalidate("/community");

저장 후 위와 같이 해 주면 즉시 재조회 된다.
--> 실행 해 봤는데 에러 발생

Error: "unstable_revalidate" has been renamed to "revalidate" see more info here: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation
at ServerResponse.apiRes.unstable_revalidate (/Users/sunjo/react/nomad/carrot-market/node_modules/next/dist/server/api-utils/node.js:170:19)
at handler (webpack-internal:///(api)/./pages/api/posts/index.ts:30:19)
at async eval (webpack-internal:///(api)/./libs/server/withHandler.ts:17:13)
at async Object.apiResolver (/Users/sunjo/react/nomad/carrot-market/node_modules/next/dist/server/api-utils/node.js:179:9)
at async DevServer.runApi (/Users/sunjo/react/nomad/carrot-market/node_modules/next/dist/server/next-server.js:381:9)
at async Object.fn (/Users/sunjo/react/nomad/carrot-market/node_modules/next/dist/server/base-server.js:497:37)
at async Router.execute (/Users/sunjo/react/nomad/carrot-market/node_modules/next/dist/server/router.js:213:36)
at async DevServer.run (/Users/sunjo/react/nomad/carrot-market/node_modules/next/dist/server/base-server.js:616:29)
at async DevServer.run (/Users/sunjo/react/nomad/carrot-market/node_modules/next/dist/server/dev/next-dev-server.js:532:20)
at async DevServer.handleRequest (/Users/sunjo/react/nomad/carrot-market/node_modules/next/dist/server/base-server.js:317:20)



# 20.4 Blocking SSG (13:33)

# 20.5 Fallback (14:22)

첫 번째 유저가 페이지 진입시 HTML 페이지를 만들고 그 다음에 들어오는 사람부터는 더 이상 다시 페이지를 만들지 않는다.



# 20.6 Recap (05:33)

미니 복습
## ISR (Incremental Static Regeneration :  증분 정적 재생성) 과 fallback의 내용

---
getStaticProps는 최초 한번만  ( 프로젝트 빌드 할 때 페이지들이 html로 추출되는 때)
revalidate: 120, 사용하면 페이지가 최신인지 아닌지 판단하여
최신이면 만들어진 html를 보여주고
아니라면 유저는 오래된 html를 보지만 백앤드에서는 페이지 재생성 작업이 실행 된다.
 --> 유저들이 페이지 로딩 과정 없이 바로 볼수 있도록 한다.
---
await res.unstable_revalidate("/community");
 --> 다른 페이지의 revalidation을 수동으로 진행할 수도 있다. ( 저장 후 즉 시 재 조회 처리 )
---
동적인 페이지들도 blog/id revalidation 가능
fallback 덕분에 우리가 프로젝트를 빌드할 때 미리 페이지의 html을 
fallback: true, fallback: blocking 을 사용하여 NextJS가 최초 요청시 그 페이지에 대한 html를 만들어 준다. 
```typescript
export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: true,
    };
};
```
---

# 21.0 Suspense (14:05)

# 21.1 Server Components (03:49)

# 21.2 Promise Me Your Love (15:18)

# 21.3 Throwing Our Promise (07:17)

# 21.4 Parallelism (11:00)

# 21.5 Recap (03:36)

기다릴 필요 없이 서버사이드에서 컴포넌트를 렌더링 할 수 있다
ReactJS에서 서버 컴포넌트를 사용하면 다른 컴포넌트 로딩이 끝나기 전에 페이지 렌더링 할 수 있다

서버 컴포넌트를 만들고 싶으로면 파일 이름을 xx.server.tsx --> 이렇게 하면 클라이언트가 작동하는데 리소스가 많이 줄어 든다.
클라이언트에서만 렌더링 되도록 만들고 싶으면 xx.client.tsx
범용적으로 사용하고 싶으면 xx.tsx


# 22 DEPLOYING

# 22.0 Database Branches (08:18)

# 22.1 Indexes and Deploys (12:54)

DB 스키마 변경 방법
1. https://app.planetscale.com/ 에서 신규 브랜치 생성
2. 터미널에서 pscale connect carrot-market indexes - 접속
3. schema.prisma 파일의 스키마 변경
4. 터미널에서 npx prisma db push
5. https://app.planetscale.com/ 에서 하단 create deploy request 버튼 클릭 

6. ![img_23.png](img_23.png)


7. deploy 버튼 클릭 하면 
8. main 브랜치에서 스키마 적용 된 것 확인
9. 
    ![img_24.png](img_24.png)


# 22.2 Vercel Deployment (11:34)

nextjs 사용
1. 풀스택 프레임워크 api route를 사용할 수 있다 , 미들웨어, 서버 컴포넌  
2. 이미지 요청하는 시간을 최적화
3. getStaticProps 사용
4. ssg ( 정적 사이트 생성) - 프리스마를 사용하지 않고 md파일과 getStaticProps사용해 블로그를 만든다.

## Vercel ?  
www.vercel.com

# 22.3 Vercel Deployment part Two (09:48)

# 22.4 Preview Deployments (03:50)

# 22.5 Limits in Vercel (09:30)

# 22.6 Bye Bye! (01:18)
# 23 BONUS: CLOUDFLARE WORKERS