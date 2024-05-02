
export default function Team() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img className="lg:block rounded-xl shadow-xl shadow-black" width="400" src="https://media1.tenor.com/m/eAUqbnSzTPUAAAAC/suguru-geto-chibi.gif" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                   Team Members
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                

                        <div className="flex flex-col justify-center text-white rounded">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://images-ext-1.discordapp.net/external/HqdbwqHETaPayjOOMyzO1aqVImGMw3Nd3qZiXZrd_Yo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/523154428576923679/3e4b859d9ea9af9a14718c95050a6943.png?format=webp&quality=lossless&width=428&height=428" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Vishvaas</h1>        
                                <div className="fa-solid fa-code flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      <a href="https://discord.com/users/523154428576923679"> Developer</a>
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </div>

                                            <div className="flex flex-col justify-center text-white rounded">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://images-ext-1.discordapp.net/external/AYYYbzC0PKRCiphq4mr-QUl9tRfXsDjpdWJUTSWdzF0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/808572936151105586/aaea527df52398cc70c354c49d5526a0.png?format=webp&quality=lossless" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">UnclePRO</h1>        
                                <div className="fa-solid fa-user-gear flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      <a href="https://discord.com/users/808572936151105586"> Manager</a>
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </div>


                                            <div className="flex flex-col justify-center text-white rounded">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://images-ext-1.discordapp.net/external/X_Rj3HAzgc9R9i0VI-aK4C5QKY1YtqGa8O-JSC_zMcM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/998608551431897170/a_79d957db0e2dc345f89b815cccf58503.gif?width=428&height=428" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Rishi</h1>        
                                <div className="fa-solid fa-palette flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      <a href="https://discord.com/users/998608551431897170"> Designer</a>
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </div>


                
                </div>
                <div className="py-10"></div>
        </>
    );
};
