import { useContext, useRef,useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context";
import "./Category.css";

const Categories = () => {
  const { blogHeadings, setBlogHeadings } = useContext(MyContext);
  const [showForm, setShowForm] = useState(false);
  const [topicName, setTopicName] = useState("");
  const [keywords, setKeywords] = useState("");
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Topic Name:", topicName);
    console.log("Keywords:", keywords);
    topicName.length > 0 && keywords.length > 0
      ? setBlogHeadings([
          ...blogHeadings,
          {
            id:blogHeadings.length+10,
            topic: topicName,
            category: "Custom",
            keywords: keywords.split(","),
          },
        ])
      : "";
    // Reset the form fields
    setTopicName("");
    setKeywords("");
    // Hide the form
    setShowForm(false);
  };



  return (
    <>
      <h2>Categories</h2>
      <div className="categories">
        <Link to="/">
          <h3>All</h3>
        </Link>
        <Link to="/Custom">
          <h3>Custom</h3>
        </Link>
        <Link to="/Mission">
          <h3>Mission</h3>
        </Link>
        <button
          onClick={async() => {
            await setShowForm(true);
            inputRef.current.focus();
          }}
        >
          Add Topic
        </button>
      </div>
      {showForm && (
        <form className="topic-form" onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              placeholder="Topic Name"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              ref={inputRef}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Keywords (comma separated)"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">Save</button>
        </form>
      )}
    </>
  );
};

export default Categories;
