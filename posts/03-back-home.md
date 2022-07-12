---
title: Back home
date: 2022.02.02
category: home
---

# Welcome everyone!

This is my fist blog post!

Thank you for reading!


## 123
 

```tsx
const cookieOptions = {
    cookieName: "carrotsession",
    password: process.env.COOKIE_PASSWORD!,
};

export function withApiSession(fn: any) {
    return withIronSessionApiRoute(fn, cookieOptions);
}
```