import { useState } from "react";

/* eslint-disable react/prop-types */
function TextExpander() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center font-poppins p-4 bg-purple-50">
      <h2 className="my-5 text-3xl font-semibold">Text Expander</h2>
      <TextContent>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It&apos;s the stuff of dreams and science
        fiction, but believe it or not, space travel is a real thing. Humans and
        robots are constantly venturing out into the cosmos to uncover its
        secrets and push the boundaries of what&apos;s possible.
      </TextContent>

      <TextContent
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it&apos;s not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextContent>

      <TextContent expanded={true}>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we&apos;ll
        discover next!
      </TextContent>
    </section>
  );
}

function TextContent({
  children,
  collapsedNumWords = 10,
  expandButtonText = " Show more",
  collapseButtonText = "Show less",
  buttonColor = "#2563eb",
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "... ";

  return (
    <div className="p-4 my-4 rounded-lg shadow-lg w-full">
      <span>{displayText}</span>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        style={{ color: buttonColor }}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
