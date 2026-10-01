# Auth Integration Steps

1. Install authenticated provider.

   Install better-auth to handle all the authentication for project. Better-auth creates the infostructer to handle and serv our auth.

   ```ts
       npm install better auth
   ```

2. Create a .env.local file to validate our environment vatiables. In this file, create the following two variables

   ```ts
   BETTER_AUTH_SECRET = (Create an account at better-autn and generate this secret)
   BETTER_AUTH_URL = (When developing the project, Use development URL but swithc to deployed URL after deployment)

   ```

3. (Initilize Server-Side Better Auth) Create Server Config File - main authentication file for the project in the 'lib' folder - auth.ts

    ```js (Example file)
    import { betterAuth } from "better-auth";
    import { prismaAdapter } from "better-auth/adapters/prisma";
    import { PrismaClient } from "../lib/generated/prisma/client";
    import { nextCookies } from "better-auth/next-js";

    const prisma = new PrismaClient();

    export const auth = betterAuth({
      database: prismaAdapter(prisma, { provider: "postgresql" }), // Tell better-auth where to store user data. Prisma is our ORM and postgressSQL is our database type.
      emailAndPassword: { //Allow email and password authentication
        enabled: true,
      },
      socialProviders: {
        github: {
          clientId: "",
          clientSecret: "",
        },
        google: {
          clientId: "",
          clientSecret: "",
        },
      },
      plugins: [nextCookies()], //This plugin is specific for nextJs development and Must be the last plugin to pass in the plugin list.
    });
    ```

    Prisma is an open-source Next-Generation ORM (Object-Relational Mapper) for Node.js and TypeScript. It provides a modern, type-safe way for developers to interact with and query databases.
    Instead of writing raw SQL or managing complex database mappings manually, Prisma allows you to define your database schema in a readable format and handles database access, migrations, and type definitions automatically.
    Need to install and initilize Prisma:

    ```ts
    npx install prisma
    npx prisma init
    ```

    This install will create a prisma folder with a schema.prisma file. The contennts of this file is the definition of our database table.

    ```js (Example file)
    generator client {
      provider = "prisma-client"
      output   = "../lib/generated/prisma"
    }

    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
    ```

    BetterAuth saves the data about the user in the database in a specific way. Using the prisma generate function will generate some types:

    ```ts
    npx prisma generate
    ```

    Running this command will detect our schema.prisma file, what type of database is being used and generate the the schema it require. This will overite the present schema.prisma file.

    ```ts
    npx @better-auth/cli generate

        //example newly generated schema.prisma file
    generator client {
      provider = "prisma-client"
      output   = "../lib/generated/prisma"
    }

    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

    model User {
      id            String    @id
      name          String
      email         String
      emailVerified Boolean   @default(false)
      image         String?
      createdAt     DateTime  @default(now())
      updatedAt     DateTime  @updatedAt
      sessions      Session[]
      accounts      Account[]

      @@unique([email])
      @@map("user")
    }

    model Session {
      id        String   @id
      expiresAt DateTime
      token     String
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
      ipAddress String?
      userAgent String?
      userId    String
      user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

      @@unique([token])
      @@index([userId])
      @@map("session")
    }

    model Account {
      id                    String    @id
      accountId             String
      providerId            String
      userId                String
      user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
      accessToken           String?
      refreshToken          String?
      idToken               String?
      accessTokenExpiresAt  DateTime?
      refreshTokenExpiresAt DateTime?
      scope                 String?
      password              String?
      createdAt             DateTime  @default(now())
      updatedAt             DateTime  @updatedAt

      @@index([userId])
      @@map("account")
    }

    model Verification {
      id         String   @id
      identifier String
      value      String
      expiresAt  DateTime
      createdAt  DateTime @default(now())
      updatedAt  DateTime @updatedAt

      @@index([identifier])
      @@map("verification")
    }

    ```

4. Create free PostGerssSQL data base with Neon using the following steps:
      a. Create an account with neon at console.neon.
      b. Select the connect button.
      c. copy the generated connection string and paste it into our .env file's DATABASE_URL value (replacing the string that was generated when "prisma init" was ran).
      d. Run the following command to send our locally generated schema to our newely created neon database.

    ```ts
    npx prisma migrate dev --name init // initial migration
    ```

5. In the API folder, create the following folder and file "api/auth/[...all]/route.ts".
    This is a configuration file that BetterAuth require in a project. Copy and paste the contents from BetterAuth documentation  
  
  ```ts (contents coppied from BetterAuth docs)
    import { auth } from "@/lib/auth"; // path to your auth file - Change if different
    import { toNextJsHandler } from "better-auth/next-js";

    export const { POST, GET } = toNextJsHandler(auth);
    ```
6.  Finally, start building auth function utilising Better-Auth support for server functions through Server Actions.
    to do this, create the following auth-action.ts file in the lib/actions folder and add the server actions for authentication.

    ```ts  (sample file)
    "use server"

    import { headers } from "next/headers";
    import {auth} from "../auth"

    // signUp function
    export const signUp = async (email: string, password: string, name: string) => {
      const result = await auth.api.signUpEmail({
        body: {
          email,
          password,
          name,
          callbackURL: "/dashboard", // redirect user to dashboard if signIn is successfull.
          //img? - optional user image
        }
      })
      return result
    };

    // signIn function
    export const signIn = async (email: string, password: string) => {
      const result = await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: "/dashboard",
        }
      })
      return result
    };

    //signOut function
    export const signOut = async () => {
      const result = await auth.api.signOut({
        headers: await headers() // must pass headers from 'next/headers'
      })
      return result
    };

7. Implement auth actions in auth client.
      See:
       "app/auth/auth-client.tsx" for example code.

  ```ts    
      handleSocialAuth()
      handleEmailAuth()



