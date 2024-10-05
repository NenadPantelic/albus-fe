"use client";
import React from "react";

import { useRouter } from "next/navigation";


export default function Home() {
  const loggedIn = localStorage.getItem('token') !== null;
  const email = localStorage.getItem('email')
  const router = useRouter()

  if (loggedIn) {
    router.push('/exams')
  }
  

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Albus FIN grader</div>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={() => router.push('/login')}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}
