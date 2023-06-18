import { useContext, useState, useEffect } from "react";
import "./BlogEditor.css";
import { MyContext } from "../../context";
const BlogEditor = (id) => {
  const [tone, setTone] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState();
  const { setShowEditor, blogHeadings } = useContext(MyContext);
  const [showBlog, setShowBlog] = useState(false);

  useEffect(() => {
    const idx = id.id;
    setData(blogHeadings[parseInt(idx)]);
  }, []);

  const handleToneSelect = (selectedTone) => {
    setTone(selectedTone);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(uploadedImage);
    setImage(imageUrl);
  };

  const handleGenerate = () => {
    setShowBlog(content.length>0 ? true : false);
    // Clear the editor state
    setTone("");
    //setContent("");
    //setImage(null);
  };

  return (
    <>
      {showBlog && content && data?.topic ? (
        <div className="blog blog-editor">
          <button
            onClick={() => {
              setShowBlog(false);
              setShowEditor(false);
            }}
          >
            Close Your Blog
          </button>
          <h2 className="header">{data?.topic}</h2>
          {image ? <img src={image} alt="" /> : ""}
          <p>{content}</p>
        </div>
      ) : (
        <div className="blog-editor">
          <div className="header">
            <h2>Blog Editor</h2>
            <button onClick={() => setShowEditor(false)}>close</button>
          </div>

          <div className="editor-section">
            <div className="tone">
              <h3>Select Tone:</h3>
              <select onChange={(e) => handleToneSelect(e.target.value)}>
                <option></option>
                <option>Informative</option>
                <option>Inspirational</option>
                <option>Persuasive</option>
                <option>Personal</option>
                <option>Opinionated</option>
                <option>Storytelling</option>
                <option>Analytical</option>
                <option>Educational</option>
                <option>Marketing</option>
                <option>Branding</option>
              </select>
            </div>
          </div>

          <div className="editor-section">
            <h3>Add Image:</h3>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

          <div className="editor-section">
            <h3>Content:</h3>
            <textarea
              value={content}
              onChange={handleContentChange}
              placeholder="Enter your blog content..."
            />
          </div>
          <div className="editor-section">
            <button onClick={handleGenerate}>Generate Blog</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogEditor;
