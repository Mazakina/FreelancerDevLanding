import ParallaxText from "./ParallaxText";

export default async function Carrosel() {

  return (
    <section className=" z-20 mt-8">
      <ParallaxText baseVelocity={3} />
    </section>
  );
}
