"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
export default function LoginBtn() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/gerenciador" })}
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1 px-3 rounded-lg"
    >
      <span className="text-white">Login</span>
    </button>
  );
}
