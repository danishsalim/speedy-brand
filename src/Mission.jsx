import { useContext, useState } from "react";
import { MyContext } from "../context";
import BlogEditor from "./blogEditor/blogEditor";

const Mission = () => {
  const [writeButtonId, setWriteButtonId] = useState("");
  const { blogHeadings, setBlogHeadings, setShowEditor, showEditor } =
    useContext(MyContext);
  const handleDelete = (e) => {
    const updatedBlogs = blogHeadings.filter(
      (item) => item.id !== parseInt(e.target.id)
    );
    setBlogHeadings(updatedBlogs);
  };
  return (
    <div className="container">
      <div className="section-header">Recommended Topic</div>

      {blogHeadings
        .filter((item) => item.category == "Mission")
        .map((item) => (
          <div key={item.id}>
            <div className="base-container" key={item.id}>
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
                    id={item.id}
                  >
                    Write
                  </button>
                </div>
                <div className="delete-button">
                  <button onClick={handleDelete} id={item.id}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
            {showEditor && writeButtonId == item.id ? (
              <BlogEditor id={writeButtonId} />
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
};

export default Mission;
