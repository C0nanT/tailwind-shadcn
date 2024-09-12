"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


export default function Login() {

  return (
    <div className="absolute top-0 left-0 grid w-full min-h-screen grid-cols-5 bg-gray-200">
        <div className="flex flex-col p-4 shadow-md bg-primary ">
            <div className="flex flex-row items-center w-full h-20 p-4 ">
                <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/c0nant.png" />
                    <AvatarFallback>Conan</AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-auto h-auto ml-4">
                    <p className="text-sm font-semibold text-primary-foreground">Conan Torres</p>
                    <p className="text-xs text-blue-300">Desenvolvedor</p>
                </div>
            </div>
            <div className="w-full h-full p-4 bg-blue-400">
                <Button variant="ghost" className="flex justify-start w-full">
                    <p>oi</p>
                    <p>oi</p>
                </Button>
            </div>
            <div className="w-full h-full bg-pink-400"></div>
        </div>
        <div className="col-start-2 col-end-6 p-4 shadow-md bg-secondary ">

        </div>
    </div>
  );
}
