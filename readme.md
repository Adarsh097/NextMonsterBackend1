![backend]({773B88B0-F219-4FFA-B6E2-E1904302FD39}.png)
![alt text]({F2292DEF-68D7-46EE-88A2-4D094DB97BD1}.png)
![get]({7A869F8C-F4DB-4873-8AEF-C642E7F90790}.png)

![get in json]({4FF6E691-151F-4392-9EA2-0889A7C844C0}.png)
![post]({6DEEA3B1-58C5-4E6D-84FE-6A255D7B7514}.png)
![eg.]({91436569-5F09-4303-96DA-1D9BDBB2DCA6}.png)
![alt text]({21F44F50-E4E3-4164-ABF2-29B054D76861}.png)
![alt text]({FBCB94D7-8D15-477E-AE1C-D9BE0BDB1BEB}.png)

![alt text]({94272B87-7F19-492B-95C0-E4B666811F5A}.png)
![alt text]({1C53FB67-EA2E-4BA8-99B1-0163CA2FD7E1}.png)


![alt text]({BFA902E3-68AC-42BC-9705-EEF18743DFB4}.png)

![alt text]({0933DFBE-C513-4E2C-86B5-981E11D42DA7}.png)

![alt text]({6F22C9FD-9367-4D4A-A423-B50157C702F2}.png)

![alt text]({9E41427A-9D2F-476C-9CEB-7CD5E759639D}.png)


# 🟦 Request (normal one):
- This is like the default request object that comes from the browser or from fetch().
- It gives you access to things like headers, body, and URL.
- It’s plain and simple.
- You use it in most normal API routes.

🧠 Think of it like a basic envelope with a message inside.

```
export async function POST(req: Request) {
  const data = await req.json(); // Read the body
  // Use headers, method, url, etc.
}

``` 

# 🟪 NextRequest (from Next.js):
- This is a special version of Request made by Next.js.
- It gives you some extra tools
- Easily read cookies
- Get the full URL with helpers
- Get location info (geo)
- Use in middleware or special Next.js logic

🧠 Think of it like a smart envelope that not only has a message but also has tracking info, auto-sorting, and extra features.

```
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const country = req.geo?.country;
}

```

# 💡 When to use which?
Where you're working	Use this
API routes or App Router	Request
Middleware in Next.js	NextRequest


# MIDDLEWARE
![alt]({5D4377C8-D374-498E-9EC9-AB4404CDF08C}.png)
![alt text]({0ABD487A-9007-4508-97A3-CC3756B4253E}.png)


# FONT
![alt text]({A0AB451C-BBF3-486D-87FF-FB794496DB89}.png)

# METADATA

- Static page
![alt text]({669BDBD6-CEE4-4B3D-8A43-F88CD97864E6}.png)

- Dynamic page
![alt text]({478087DB-2B54-4782-9430-CE645F37A55C}.png)
