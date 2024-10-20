import Image from "next/image";

import Kv from "@@/public/assets/images/welcome/kv.svg";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

import { Form } from "./components/Form";

export default async function Welcome() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <div className="mx-auto my-0 w-[420px] py-20">
        <div className="mb-10 flex justify-center">
          <Image src={Kv} width={320} height={320} alt="welcome!" />
        </div>
        <h1 className="mb-10 text-center font-Inter text-5xl font-semibold">Welcome!</h1>
        <Form session={session} />
      </div>
    </main>
  );
}
