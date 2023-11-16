import ParallaxText from "./ParallaxText";

export default async function Carrosel({velocity}:{velocity:number}) {

  return (
    <section className=" z-20 mt-8">
      <ParallaxText baseVelocity={velocity} />
    </section>
  );
}
