import Image from "next/image"

const Body = () => {
  return (
    <div className="w-screen h-[90vh] bg-black">
        <div className="flex justify-center items-center pt-20">
            <div className="name text-white text-7xl font-bold duration-1000 hover:text-8xl">mohammadmuneeb</div>
            <div className="pic ml-3"> <Image className="rounded-full" src="/images/my.jpg" alt="Logo" width={100} height={100}/></div>
        </div>
        <div className="description text-white mx-10 text-center text-lg">
        <p className="tracking-wider leading-7"> Assalam O Alaikum!</p>
        <p className="tracking-wider leading-7">Hi, my name is Muhammad Muneeb. 👨‍💻👩‍🍼👦👶🍵</p>
        <p className="tracking-wider leading-7">I&#39;m building stuff for client IOclient IO and MindManagerMindManager</p>
        <p className="tracking-wider leading-7">In last 90 days on GitHub I pushed 148 commits, opened 18 PRs, merged 35 PRs, made 40 comments, created 20 branches, reviewed 7 PRs in public repositories.
        </p>
        </div>
      
    </div>
  )
}

export default Body
