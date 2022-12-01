import Link from "next/link";
import Image from "next/image";
const developer = () => {
    return (
        <div class="flex flex-wrap justify-evenly">
            <div class="flex justify-center card mb-10 pb-10 pt-10">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <Image
                        src={"/pepe.png"}
                        width={500} height={500}
                        alt={"Ga Punya Foto"}
                        className="rounded-t-lg"
                    />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Alfat T N</h5>
                        <p class="text-gray-700 text-base mb-4">PHP itu kunoq</p>
                        <Link href={"https://instagram.com/rubbnms"} target={"_blank"}>
                            <button type="button" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-700">Instagram</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="flex justify-center card mb-10 pb-10 pt-10">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <Image
                        src={"/pepe.png"}
                        width={500} height={500}
                        alt={"Ga Punya Foto"}
                        className="rounded-t-lg"
                    />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Gabriel N H</h5>
                        <p class="text-gray-700 text-base mb-4">Gabjes</p>
                        <Link href={"https://instagram.com/rubbnms"} target={"_blank"}>
                            <button type="button" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-700">Instagram</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="flex justify-center card mb-10 pb-10 pt-10">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <Image
                        src={"/pepe.png"}
                        width={500} height={500}
                        alt={"Ga Punya Foto"}
                        className="rounded-t-lg"
                    />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Ikhsandi S</h5>
                        <p class="text-gray-700 text-base mb-4">San</p>
                        <Link href={"https://instagram.com/rubbnms"} target={"_blank"}>
                            <button type="button" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-700">Instagram</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="flex justify-center card mb-10 pb-10">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <Image
                        src={"/pepe.png"}
                        width={500} height={500}
                        alt={"Ga Punya Foto"}
                        className="rounded-t-lg"
                    />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">M Farrel A</h5>
                        <p class="text-gray-700 text-base mb-4">M F A</p>
                        <Link href={"https://instagram.com/rubbnms"} target={"_blank"}>
                            <button type="button" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-700">Instagram</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="flex justify-center card mb-10 pb-10">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <Image
                        src={"/pepe.png"}
                        width={500} height={500}
                        alt={"Ga Punya Foto"}
                        className="rounded-t-lg"
                    />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Rubben M S</h5>
                        <p class="text-gray-700 text-base mb-4">Javascript terbaek</p>
                        <Link href={"https://instagram.com/rubbnms"} target={"_blank"}>
                            <button type="button" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-700">Instagram</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="flex justify-center card mb-10 pb-10">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <Image
                        src={"/pepe.png"}
                        width={500} height={500}
                        alt={"Ga Punya Foto"}
                        className="rounded-t-lg"
                    />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">S. Al Fahruz z.</h5>
                        <p class="text-gray-700 text-base mb-4">Shobib</p>
                        <Link href={"https://instagram.com/rubbnms"} target={"_blank"}>
                            <button type="button" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-700">Instagram</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default developer;
