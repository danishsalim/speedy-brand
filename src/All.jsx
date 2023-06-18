import { useContext, useState } from "react";
import { MyContext } from "../context";
import "./All.css";
import BlogEditor from "./blogEditor/blogEditor";

const All = () => {
  const { blogHeadings, setBlogHeadings, setShowEditor, showEditor } =
    useContext(MyContext);
  const handleDelete = (e) => {
    const updatedBlogs = blogHeadings.filter(
      (item, idx) => idx !== parseInt(e.target.id)
    );

    setBlogHeadings(updatedBlogs);
  };
  const [writeButtonId, setWriteButtonId] = useState("");

  return (
    <div className="container">
      <div className="section-header">Recommended Topic</div>

      {blogHeadings.map((item, index) => (
        <div key={index}>
          <div className="base-container" key={index}>
            <div className="list-container">
              <div className="topic-name">
                <p>{item?.topic}</p>
              </div>
              <div className="keywords">
                <ul>
                  {item?.keywords.map((keyword, idx) => (
                    <li key={idx}>{keyword}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="buttons">
              <div className="write-button">
                <button
                  onClick={(e) => {
                    setWriteButtonId(e.target.id);
                    setShowEditor(true);
                  }}
                  id={index}
                >
                  Write
                </button>
              </div>
              <div className="delete-button">
                <button onClick={handleDelete} id={index}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          {showEditor && writeButtonId == index ? (
            <BlogEditor id={writeButtonId} />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default All;
