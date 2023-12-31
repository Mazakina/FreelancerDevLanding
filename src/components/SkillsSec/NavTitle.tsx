export function NavTitle({ title }: { title: string }) {
  return (
    <p
      className={`
      ss:[writing-mode:vertical-rl]
      ss:[transform:scale(-1)skew(25deg)rotate(25deg)]
      top-52
      ss:top-52
      text-2xl
      skew
      z-10
      text-white
      w-full
      pl-5
      mdall:h-14
      ss:left-5
      transition-all
      duration-500  
      [line-height:56px]
      mdall:border-t-2
      mdall:border-b-2
      mdall:bg-c-gray900   
      group-hover:mdall:border-c-gray900   
      group-hover:mdall:bg-c-cyan500   
      mdall:group-hover:text-black
      absolute
      font-medium`}
    >
      {title}
    </p>
  )
}
