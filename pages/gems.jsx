
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img className="lg:block rounded-xl shadow-xl shadow-black" width="400" src="https://media1.tenor.com/m/eAUqbnSzTPUAAAAC/suguru-geto-chibi.gif" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    They Trust Us
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                
            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/N7y3SE3prf">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://media.discordapp.net/attachments/1037413396380921921/1226151004370894868/a_55a509d97567e36114d0f79f8c0abf4e.gif?ex=6623b91c&is=6611441c&hm=e540213f37a58471a4c47d2e111f907983b1ab2d7a3e446629f3a6a5f80c5b1c&=" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Vivi's Donation Community</h1>        
                                <div className="fa-user flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      600+ members
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                        <div className="flex flex-col justify-center text-white rounded">
            <a href="">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://images-ext-1.discordapp.net/external/D-gbHRNijnx4nqO6pb8XTHZhUpuoS7h_dopszcDkeeg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1094017858960363660/c99b7c8a0d7765faeb89eeca01e09b0f.webp?format=webp&width=473&height=473" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Want your server here?</h1>        
                                <div className="fa-user flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      <a href="https://discord.gg/vrJA4K68N6">Contact Us</a>
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                
                </div>
                <div className="py-10"></div>
        </>
    );
};
