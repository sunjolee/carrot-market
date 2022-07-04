# carrot-market

# https://nomadcoders.co/carrot-market 강의에서 발췌 및 참고 하였습니다.

#3 SETUP

#3.0 NextJS Setup (06:23)
દ
### 설치
npx create-next-app@latest --typescript

### Git 추가
git remote add origin https:/github.com/sunjolee/carrot-market

### 실행
npm run dev


#3.1 TailwindCSS Setup (08:50)

### tailwind 설치
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

![img.png](./img/img.png)
  
```typescript
// globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};


// index.tsx
import type { NextPage } from "next";


const Home: NextPage = () => {
  return (
      <div className="bg-red-500">
        <h1 className="text-black">it works</h1>
      </div>
  );
};

export default Home;

```
#4 TOUR OF TAILWIND

#4.0 Introduction (11:40)

### www.tailwindcss.com

### Intellij 에서 tailwind css IntelliSense 적용
* https://plugins.jetbrains.com/plugin/15321-tailwind-css
* 나 같은 경우는 Intellij IDEA Ultimate 2022.1.3 버젼 업데이트 후
* plug in [Tailwind CSS] 설치 후 Intellij 재시작하였음
* 그럼 아래와 같이 IntelliSense 적용이 된다.

 ![img.png](img1.png)

#4.1 Test Drive part One (15:01)

![img.png](img.png)

```typescript
// index.tsx
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="bg-slate-400 py-20 px-10 grid gap-10">
            <div className="bg-white p-6 rounded-3xl shadow-xl">
                <span className="font-semibold text-3xl">Select Item</span>
                <div className="flex justify-between my-2">
                    <span className="text-gray-500">Grey Chair</span>
                    <span className="font-semibold">$19</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Grey Chair</span>
                    <span className="font-semibold">$19</span>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                    <span>Total</span>
                    <span className="font-semibold">$10</span>
                </div>
                <div
                    className="mt-5 bg-blue-500 text-white p-3
          text-center rounded-xl w-2/4 mx-auto
         "
                >
                    Checkout
                </div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
            <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
        </div>
    );
};

export default Home;

```

#4.2 Test Drive part Two (08:52)

* padding
  * p-10 : 사방으로 padding 10px 
  * pr-10 : padding-right
  * pl-10 : padding-left
  * pt-10 : padding-top
  * pb-10 : padding-bottom
  * px-10 : padding-left, right
  * py-10 : padding-top, bottom
  * 단위 ( 반응형은 rem 많이 사용 )
    * px : 픽셀값
    * % : 비율
    * em : ( 요즘 잘 사용 하지 않음 예전에 font 때문에 사용 ) - 자기와 가장 가까운 상위 기준 size에 배수로 계산
      * ´ font-size : 20px 
        * 1em : 20px
        * 1.5em : 30px
        * 2em : 40px
        * 0.3em : 6px
        * 0.75em : 15px -> 15px로 하고 싶을 때 0.75em을 구하는 방법은 15/20 = 0.75가 나온다.
    * rem :  ( 반응형 웹, 모바일 : root 기준 html 기준으로 em )
      @media all and (max-width:1000px){
        html { font-size: 10px }
      }
      * 사용처 : 100% rem만 사용하지는 않고 font size, padding 에서 주로 사용 
     
 
#4.3 Test Drive part Three (13:06)

#4.4 Modifiers (07:20)

#4.5 Transitions (09:59)

#4.6 Modifiers for Lists (07:00)

#4.7 Modifiers for Forms (18:38)

#4.8 More Modifiers (12:48)

#4.9 Responsive Modifiers (09:05)

#4.10 Responsive Modifiers part Two (09:10)

#4.11 Dark Mode (10:10)

#4.12 Just In Time Compiler (11:18)

#4.13 Conclusions (01:09)
#5 TAILWIND PRACTICE

#5.0 Introduction (03:08)

#5.1 Auth part One (11:49)

#5.2 Auth part Two (13:29)

#5.3 Home Screen (10:20)

#5.4 Item Detail (12:02)

#5.5 Upload Item (11:27)

#5.6 Community (06:42)

#5.7 Community Detail (08:53)

#5.7 Write (02:35)

#5.8 Chats (05:02)

#5.9 Chat Detail (11:49)

#5.10 Profile (05:52)

#5.11 Bought, Loved and Sold (02:34)

#5.12 Edit Profile (06:55)

#5.13 Streams (05:42)

#5.14 Stream (04:31)

#5.15 Add Stream (03:59)

#5.16 Layout part One (10:34)

#5.17 Layout part Two (10:23)

#5.18 Conclusions (03:02)
#6 DATABASE SETUP

#6.0 Before We Start (06:29)

#6.1 What is Prisma (04:16)

#6.2 Prisma Setup (08:53)

#6.3 What is PlanetScale (06:55)

#6.4 Connecting to PlanetScale (09:19)

#6.5 Push To PlanetScale (12:19)

#6.6 Prisma Client (11:28)

#6.7 API Routes (07:59)

#6.8 Recap (05:30)
#7 REACT HOOK FORM

#7.0 Introduction (02:50)

#7.1 Making Forms Alone (14:07)

#7.2 The Register Function (09:39)

#7.3 Validation (08:23)

#7.4 Validation part Two (09:16)

#7.5 Errors (11:01)

#7.6 Extras (07:27)
#8 REFACTORING

#8.0 Enter Form (08:40)

#8.1 Form Submission (08:24)

#8.2 Clean Code part One (08:49)

#8.3 Clean Code part Two (07:31)

#8.4 withHandler (12:58)

#8.5 Paths (05:06)
#9 AUTHENTICATION

#9.0 Introduction (04:40)

#9.1 Accounts Logic (14:35)

#9.2 Token Logic (15:01)

#9.3 Twilo Setup (09:33)

#9.4 Sending SMS (07:11)

#9.5 Sending Email (06:56)

#9.6 Token UI (16:22)

#9.7 Serverless Sessions (13:22)

#9.8 Profile Handler (05:18)

#9.9 Cleaning Code (11:49)

#9.10 NextAuth (05:50)
#10 AUTHORIZATION

#10.0 Introduction (05:20)

#10.1 Protected Handlers (09:05)

#10.2 useUser Hook (10:28)

#10.3 SWR (12:39)

#10.4 useUser Refactor (08:23)
#11 PRODUCTS

#11.0 Product Model (07:30)

#11.1 Upload Form (06:37)

#11.2 Upload API (07:51)

#11.3 See Products (06:03)

#11.4 Product Detail (11:01)

#11.5 Related Products (09:55)

#11.6 Favorite Products (12:43)

#11.7 Favorite Products part Two (09:19)

#11.8 Bound Mutations (11:18)

#11.9 Unbound Mutations (06:37)

#11.10 Counting Relationships (05:00)
#12 동네생활

#12.0 Models (07:26)

#12.1 Forms and Handlers (08:56)

#12.2 Post Detail (12:25)

#12.3 궁금해요 (15:46)

#12.4 Answer (13:06)

#12.5 All Posts (12:45)

#12.6 useCoords (07:21)

#12.7 Geo Search (12:52)

#12.8 Geo Bug (02:55)
#13 PROFILE

#13.0 Models (16:39)

#13.1 Reviews (08:42)

#13.2 Handlers (08:17)

#13.3 Profile Page (06:07)

#13.4 Sales, Purchases, Favorites (12:08)

#13.5 Edit Profile part One (10:52)

#13.6 Edit Profile part Two (17:22)
#14 STREAMS

#14.0 Upload Form (12:41)

#14.1 Detail Page (13:02)

#14.2 Send Message (06:49)

#14.3 See Messages (08:56)

#14.4 Mutations and Refresh (08:21)

#14.5 Seeding (06:20)

#14.6 Pagination (11:14)
#15 CLOUDFLARE IMAGES

#15.0 Introduction (03:29)

#15.1 Image Preview (11:13)

#15.2 Direct Creator Uploads (10:57)

#15.3 Cloudflare Setup (04:28)

#15.4 Direct Upload URL (08:36)

#15.5 Cloudflare Upload (06:03)

#15.6 Serving Images (08:45)

#15.7 Resizing Images (06:22)

#15.8 Product Images (11:23)
#16 NEXTJS IMAGES

#16.0 Introduction (05:52)

#16.1 Local Images (11:36)

#16.2 Remote Images (08:06)

#16.3 Layout Fill (08:38)

#16.4 Conclusions (01:52)
#17 LIVE STREAMING

#17.0 Introduction (07:47)

#17.1 Streaming From Dashboard (06:06)

#17.2 Streaming API (10:36)

#17.3 Securing Stream (11:53)

#17.4 Video and Thumbnails (08:12)

#17.5 Conclusions (03:15)
#18 CHALLENGE

#18.0 Code Challenge (04:08)
#19 NEXTJS DEEP DIVE

#19.0 Middlewares (12:11)

#19.1 Responses and Redirections (13:42)

#19.2 Dynamic Imports (11:04)

#19.3 Lazy-load Imports (08:44)

#19.4 _document and Fonts (12:14)

#19.5 Script Component (09:16)

#19.6 getServerSideProps (09:14)

#19.7 SSR + SWR (11:47)

#19.8 SSR + Authentication (09:49)

#19.9 Blog Section (07:54)

#19.10 getStaticProps (15:52)

#19.11 getStaticPaths part One (09:33)

#19.12 getStaticPaths part Two (07:41)

#19.13 Dynamic getStaticProps (08:28)

#19.14 Inner HTML (09:41)

#19.15 Recap (08:21)
#20 INCREMENTAL SITE REGENERATION

#20.0 Introduction (14:18)

#20.1 ISR part One (10:37)

#20.2 ISR part Two (12:55)

#20.3 On Demand Revalidation (11:53)

#20.4 Blocking SSG (13:33)

#20.5 Fallback (14:22)

#20.6 Recap (05:33)

#20.7 Code Challenge (01:09)
#21 FUTURE: REACT 18

#21.0 Suspense (14:05)

#21.1 Server Components (03:49)

#21.2 Promise Me Your Love (15:18)

#21.3 Throwing Our Promise (07:17)

#21.4 Parallelism (11:00)

#21.5 Recap (03:36)
#22 DEPLOYING

#22.0 Database Branches (08:18)

#22.1 Indexes and Deploys (12:54)

#22.2 Vercel Deployment (11:34)

#22.3 Vercel Deployment part Two (09:48)

#22.4 Preview Deployments (03:50)

#22.5 Limits in Vercel (09:30)

#22.6 Bye Bye! (01:18)
#23 BONUS: CLOUDFLARE WORKERS