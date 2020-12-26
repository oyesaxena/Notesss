import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Aos from "aos";
import "aos/dist/aos.css";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-up" className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
