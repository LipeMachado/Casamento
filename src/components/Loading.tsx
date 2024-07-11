import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function Loading() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
                <div className="w-52 h-52">
                    <DotLottieReact
                        src="/loading.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>
        </>
    )
}