import Image from "next/image";

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image
                src={"/logo.svg"}
                alt="Loading"
                width={120}
                height={120}
                className="animate-pulse duration-900"
            />
        </div>
    )
}
