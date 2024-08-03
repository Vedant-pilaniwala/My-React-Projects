import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  const data = useLoaderData();

  return (
    <div className="flex justify-center text-3xl text-gray-800 text-center p-4 my-8 mb-5">
      <div className="m-3 grid justify-center">
        <img
          className="relative left-4"
          width="200"
          height="200"
          src={data.avatar_url}
          alt="github Profile"
        />
        <h1 className="m-2 font-bold bg-slate-200 p-2 rounded-md hover:border-white">
          Github-Profile
        </h1>
      </div>
      <ul className="m-4 text-2xl font-sans mt-10">
        <li className="flex p-1">
          <h1 className="font-bold">Name: </h1>
          <p className="ml-3 text-orange-700">{data.name}</p>
        </li>
        <li className="flex p-1">
          <h1 className="font-bold">Bio: </h1>
          <p className="ml-3 text-xl">{data.bio}</p>
        </li>
        <li className="flex p-1">
          <h1 className="font-bold">Github-followers: </h1>
          <p className="ml-3">{data.followers}</p>
        </li>
        <li className="flex p-1">
          <h1 className="font-bold">Created at: </h1>
          <p className="ml-3 text-xl pt-1">{data.created_at}</p>
        </li>
        <li className="flex p-1">
          <h1 className="font-bold">Github-repos: </h1>
          <p className="ml-3">{data.public_repos}</p>
        </li>
        <li className="flex p-1">
          <h1 className="font-bold">Github-link: </h1>
          <p className="ml-3 text-xl pt-1 hover:text-orange-700 hover:underline">
            <a href="https://github.com/Vedant-pilaniwala" target="blank">
              Github-Profile
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Github;


export const loadGithubInfo = async() => {
  const response = await fetch("https://api.github.com/users/Vedant-pilaniwala");
  const data = response.json();

  return data
}