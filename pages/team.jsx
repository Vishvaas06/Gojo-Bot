
export default function Team() {

    return (
        <>
            <div className="w-full my-10">
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                   Team Members
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                

                        <div className="flex flex-col justify-center text-white rounded">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="/img/vishvaas.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Vishvaas</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      <a href="https://discord.com/users/523154428576923679"><i className="fal fa-solid fa-code text-amber-400 mr-2" />Developer</a>
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
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      <a href="https://discord.com/users/808572936151105586"><i className="fal fa-solid fa-user-gear text-amber-400 mr-2" />Manager</a>
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </div>


                                            <div className="flex flex-col justify-center text-white rounded">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="/img/insanity.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Alucard</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      <a href="https://discord.com/users/998608551431897170"><i className="fal fa-solid fa-palette text-amber-400 mr-2" />Designer</a>
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </div>


                                            <div className="flex flex-col justify-center text-white rounded">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="/img/atelier.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">△TELIER</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      <a href="https://discord.com/users/679656545654538251"><i className="fal fa-solid fa-palette text-amber-400 mr-2" />Designer</a>
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
