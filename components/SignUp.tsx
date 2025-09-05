"use client"
import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage(error.message)
    else setMessage("Check your email for confirmation link!")
  }

  return (
    <div className="p-4">
      <input
        className="border p-2 mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp} className="bg-blue-500 text-white p-2">
        Sign Up
      </button>
      <p>{message}</p>
    </div>
  )
}
