/* eslint-disable react/prop-types */
// Challenge #1:
function ProfileCard() {
  const AVATAR_URL =
    "https://courselifetime.com/cdn/shop/products/the-complete-javascript-course.jpg?v=1678437925";

  return (
    <section className="font-ibm-mono min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="font-bold font-sans text-2xl md:text-4xl mt-6 text-center">
        Challenge #1: Profile Card
      </h2>
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg border-4 border-black m-6 bg-white rounded-lg overflow-hidden shadow-lg">
        <Avatar imgUrl={AVATAR_URL} />
        <div className="p-6">
          <Intro />
          <SkillList />
        </div>
      </div>
    </section>
  );
}

function Avatar({ imgUrl }) {
  return (
    <img
      className="h-48 w-full object-cover md:h-64"
      src={imgUrl}
      alt="Profile avatar"
    />
  );
}

function Intro() {
  return (
    <>
      <h2 className="tracking-wide text-center text-xl md:text-3xl font-bold my-2">
        Jonas Schmedtmann
      </h2>
      <p className="text-center text-gray-700 mb-4 px-4">
        Full-stack web developer and teacher at Udemy. When not coding and
        preparing a course, I like to play board games, cook (and eat), or enjoy
        the Portuguese sun at the beach.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="flex flex-wrap justify-center">
      <Skill subject="HTML+CSS 💪" bg="purple" />
      <Skill subject="JavaScript 💪" bg="goldenrod" />
      <Skill subject="Web Design 💪" bg="green" />
      <Skill subject="Git and Github 👍" bg="darkred" />
      <Skill subject="React 💪" bg="lightblue" />
      <Skill subject="Svelte 😟" bg="red" />
    </div>
  );
}

function Skill({ subject, bg }) {
  const style = { background: bg };
  return (
    <span
      style={style}
      className="rounded-lg px-3 py-1 text-sm font-semibold m-1 text-white shadow-md"
    >
      {subject}
    </span>
  );
}

export default ProfileCard;
