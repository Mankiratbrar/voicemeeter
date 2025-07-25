import { db } from "@/db";
import { postsTable, usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";

export default async function Inbox() {
    
  const post = await db.query.postsTable.findMany();
    return (
        <>
        <form action={
        async () => {
          'use server';
          await db.insert(usersTable).values({
            name: "Mankirat Brar",
            email: "smankirat6u@gmail.com",
            age: 25,
          });
          await db.insert(postsTable).values({
            title: "Hello World",
            content: "This is my first post!",
            userId: 1,
          });
        }
      }>
        <Button>Submit</Button>
      </form>  
        </>
    )
}