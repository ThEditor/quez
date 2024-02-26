import { type NextRequest, NextResponse } from "next/server";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

enum Role {
  INSTRUCTOR = "instructor",
  LEARNER = "learner",
}

export async function GET(request: NextRequest, context: { params: { role: Role } }) {
  const session = await getServerAuthSession();
  if (!session?.user)
    return NextResponse.json({
      status: 500
    })
  
  const role = context.params.role;
  if (role === Role.INSTRUCTOR) {
    session.user.role = Role.INSTRUCTOR;
    // update prisma user
    await db.user.update(
      {
        where: { id: session.user.id },
        data: {
          role: Role.INSTRUCTOR
        }
      }
    );
  } else if (role === Role.LEARNER) {
    session.user.role = Role.LEARNER;
    await db.user.update(
      {
        where: { id: session.user.id },
        data: {
          role: Role.LEARNER
        }
      }
    );
  } else {
    return NextResponse.json({
      status: 400
    });
  }
  
  return NextResponse.json({
    status: 200
  });
}