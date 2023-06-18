import { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [blogHeadings, setBlogHeadings] = useState([
    {
      id:0,
      topic:
        "The importance of establishing a strong online presence for small businesses.",
      category: "Mission",
      keywords: [
        "Online Presence",
        "Branding",
        "Digital Marketing",
        "Small Businesses",
      ],
    },
    {
      id:1,
      topic:
        "How fast turnaround times in logo and websitedesign benifit your business.  ",
      category: "Mission",
      keywords: [
        "Fats turnaround",
        "Branding",
        "Logo design",
        "website design",
      ],
    },
    {
      id:2,
      topic: "Affordable branding solution for startups and enterpreneurs.",
      category: "Mission",
      keywords: [
        "startups",
        "Affordable Branding",
        "Digital Marketing",
        "enterpreneurs",
      ],
    },
    {
      id:3,
      topic:
        "The importance of establishing a strong online presence for small businesses.",
      category: "Custom",
      keywords: [
        "Online Presence",
        "Branding",
        "Digital Marketing",
        "Small Businesses",
      ],
    },
    {
      id:4,
      topic:
        "The importance of establishing a strong online presence for small businesses.",
      category: "Mission",
      keywords: [
        "Online Presence",
        "Branding",
        "Digital Marketing",
        "Small Businesses",
      ],
    },
    {
      id:5,
      topic:
        "expert tip for choosing the right digital marketing agency for your business.",
      category: "Custom",
      keywords: [
        "Tips",
        "Branding",
        "Digital Marketing Agency",
        "Website Design",
      ],
    },
    {
      id:6,
      topic:
        "expert tip for choosing the right digital marketing agency for your business.",
      category: "Mission",
      keywords: [
        "Tips",
        "Branding",
        "Digital Marketing Agency",
        "Website Design",
      ],
    },
  ]);

  const [showEditor, setShowEditor] = useState(false);

  return (
    <MyContext.Provider
      value={{ blogHeadings, setBlogHeadings, setShowEditor, showEditor }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
