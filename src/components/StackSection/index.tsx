import Stack from "./Stack";

export default async function StackSection() {
    const files = [
      { color: "#68a063", title: "NODE", icon: "NODE.svg" },
      { color: "#f34f29", title: "GIT", icon: "GIT.svg" },
      { color: "#3E75C3", title: "GITHUB", icon: "GITHUB.svg" },
      { color: "#701AFF", title: "REDUX", icon: "REDUX.svg" },
      { color: "#00DBFC", title: "REACT", icon: "REACT.svg" },
      { color: "#ffffff", title: "NEXT", icon: "NEXT.svg" },
      { color: "#FF2653", title: "NEST", icon: "NEST.svg" },
      { color: "#ffffff", title: "FASTIFY", icon: "FASTIFY.svg" },
      { color: "#066DA5", title: "DOCKER", icon: "DOCKER.svg" },
      { color: "#FF54A9", title: "SASS", icon: "SASS.svg" },
      { color: "#e44d26", title: "HTML", icon: "HTML.svg" },
      { color: "#00758f", title: "SQL", icon: "SQL.svg" },
      { color: "#BB27F2", title: "ANGULAR", icon: "ANGULAR.svg" },
      { color: "#4DB6AC", title: "PRISMA", icon: "PRISMA.svg" },
      { color: "#C21325", title: "JEST", icon: "JEST.svg" },
    ]
  return (
    <section className="mx-auto grid gap-x-8 gap-y-8 grid-cols-6 ss:grid-cols-2 ss:scale-75 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-fit z-20 ss:-mt-8 mt-8">
      {files.map(({ color, icon, title }) => (
      <Stack key={title} color={color} icon={icon} title={title} />
      ))}
    </section>
  )
}
