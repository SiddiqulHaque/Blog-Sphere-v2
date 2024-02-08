import React, { useContext, useState } from "react";
import "./writepage.css";
import { BiImageAdd } from "react-icons/bi";
import axios from "axios";
import { Context } from "../../Context/Context";
const Writepage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const preset_key = "ppe1wd2s";
  const handleFile = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(`https://api.cloudinary.com/v1_1/daxshafbw/image/upload`, formData)
      .then((res) => {
        setFile(res.data.secure_url);
      })
      .catch((err) => {
        return err;
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      newPost.photo = file;
    }
    try {
      const res = await axios.post("https://blog-sphere-b9vl.onrender.com/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      return err;
    }
  };
  return (
    <div className="writepage">
      {file ? (
        <img src={file} alt="" className="writeimage" />
      ) : (
        <img
          src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
          alt=""
          className="writeimage"
        />
      )}

      <form onSubmit={handleSubmit} className="form">
        <div className="writeform">
          <div className="writeformgroup">
            <label htmlFor="inputfile">
              <BiImageAdd className="icon" />
            </label>
            <input
              type="file"
              id="inputfile"
              style={{ display: "none" }}
              onChange={handleFile}
            />
            <input
              type="text"
              placeholder="Your Title"
              className="input title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeformgroup">
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              placeholder="Share your Story"
              className="input text"
              type="text"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className="submit" type="submit">
          PUBLISH
        </button>
      </form>
    </div>
  );
};

export default Writepage;
