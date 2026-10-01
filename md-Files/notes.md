# IN NEXT.JS, authentication (often shortened to "Auth") is the process of verifying exactly who a user is when they visit your website

_It is the digital gatekeeper that answers the question:_
"Is this person who they claim to be?" Once a user is authenticated, Next.js can safely unlock private pages, fetch personal dashboard data, and allow them to make secure changes to your database.

_The Three Core Pillars of Auth in Next.js_ To understand authentication in Next.js, it helps to look at the three distinct steps the framework handles under the hood

_1. IDENTIFICATION (THE CREDENTIALS)_
This is where the user provides proof of their identity. They submit a form containing an email and password, log in with a username, or click a button to log in via a social provider like Google or GitHub.

_2. SESSION MANAGEMENT (THE PASS)_
Next.js is a server-rendered framework, meaning pages are built dynamically on a server before being sent to the browser. Once a user logs in successfully, an authentication library (like Better-Auth) creates a secure Session Token or Cookie.The browser saves this cookie.Every single time the user clicks a link to a new page or requests data, the browser automatically attaches this cookie to the background request.The Next.js server inspects this cookie to confirm the login session is still active and valid.

_3. AUTHORIZATION (THE PERMISSIONS)_
Often confused with authentication, authorization happens after a user's identity is verified. It answers the question: "Now that I know who you are, what are you allowed to see?"
**Authentication:** Logging into your account.
**Authorization:** The Next.js server checking if you are an "Admin" before letting you view the /admin/dashboard page, or showing a 403 Forbidden error if you are a standard user.

**_HOW NEXT.JS HANDLES AUTH DIFFERENTLY_**
Because Next.js splits your code into Client Components (interactive code that runs in the browser) and Server Components (secure code that runs on the backend), authentication is enforced at two distinct levels:

**_LEVEL A: CLIENT-SIDE CHECKS (UX OPTIMIZATION)_**
On the frontend, you use React hooks provided by your auth library to quickly toggle layout designs. This is great for hiding elements visually, but it is not secure on its own because client-side JavaScript can technically be manipulated by a clever user.

```js
// TSX Frontend layout check
if (!session) {
  return <button>Log In to View Profile</button>;
}
```

**_LEVEL B: SERVER-SIDE CHECKS (THE LOCK)_**
This is where real security happens. Inside your Next.js Server Components, API routes, or Server Actions, Next.js reads the session cookie before rendering any data. If the cookie is missing or invalid, the server blocks the request immediately at the database level

```ts
// TSX Backend database barrier
const session = await auth.getSession();
if (!session) {
  throw new Error("Unauthorized Access Attempt");
}
// Securely fetch data from MongoDB below here
```

////////
BetterAuth docs (setup & installation)
<https://better-auth.com/docs/installation>

///////

_OBJECT-RELATIONAL MAPPER_
_Drizzle, Prisma, and Sequelize are all Object-Relational Mappers (ORMs) or database toolkits_
.They act as a translator layer between your backend code (like your Next.js API routes) and your database. Instead of writing raw, complex database query languages (like SQL) by hand in plain text strings, these tools let you interact with your database tables using clean TypeScript or JavaScript objects.
