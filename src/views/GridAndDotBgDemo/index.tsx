const GridAndDotBgDemo = () => {
  return (
    <>
      <h3 className="mb-4 scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white">Grid Background</h3>
      <div className="h-[20rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Backgrounds</p>
      </div>
      <h3 className="my-4 scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white">Grid Small Background</h3>
      <div className="h-[20rem] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Backgrounds</p>
      </div>
      <h3 className="my-4 scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white">Dot Background</h3>
      <div className="h-[20rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Backgrounds</p>
      </div>
    </>
  )
}

export default GridAndDotBgDemo;
