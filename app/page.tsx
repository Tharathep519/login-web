"use client"
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "./logo.png";

export default function Home() {
  return (
    // Body
    <div className="bg-violet-900 h-[1000px] boxsiz box-border ">
      {/* navbar */}
      <div className="flex space-x-4 align-item-center mr-2 ">
        <img src="logo.png" alt="logo" />

        <div className=" container flex space-x-4 ml-10 justify-end text-right text-white ">
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
      </div>
      {/* box */}

      <div className="justify-center grid  w-[500px]  h-[600px] border-2  bg-white rounded-3xl items-center mx-auto my-auto ">
        <div className="text-center font-black text-2xl mt-6">
          {/* login  */}
          <h1>Login</h1>
        </div>

        {/* allusername  */}
        <div className="mb-2 ml-8 ">
          <h1>Username</h1>
          <input
            className="mb-2 border-b-4 w-80 mb-4"
            type="text"
            placeholder="Type your username"
          />
          {/* password */}
          <h1>Password</h1>
          <input
            className="border-b-4 w-80 mr-8 "
            type="text "
            placeholder="Type your password"
          />

          {/* forgot */}

          <br />
          <a className="flex justify-end text-xs mr-8 texi " href="#">
            Forgot password?
          </a>
          <br />
          <button className="border-2 rounded-3xl w-80 h-10 mb-xl">
            LOGIN
          </button>

          <p className="mt-6 flex justify-center">Or Sign Up Using</p>

          <div className="grid grid-cols-3 space-x-1   ">
            <img
              className="h-[60px] w-[60px] inline-block "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBF73o0P4eNj_YuVFZtaVHAxum9_p4ARUOAg&s"
              alt="facebook"
            />
            <img
              className="h-[60px] w-[60px] inline-block "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9l-ZA3MVIAVXJLausJHrMqiHxLKnt9OcgQ&s"
              alt="twitter"
            />
            <img
              className="h-[60px] w-[100px] inline-block "
              src="https://www.blognone.com/sites/default/files/externals/ed0da44614e0dba8bcceaa30a18fbb40.jpg"
              alt="google"
            />
          </div>

          {/* footer */}
          <br />
          <div className="grid">
            <h1>Or Sign Up Using</h1>

            <h1>SIGN UP</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
