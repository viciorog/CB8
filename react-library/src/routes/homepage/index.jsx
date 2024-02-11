import { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${searchTerm}`);
  };

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  return (
    <div className={styles.Homepage}>
      <nav className={styles.Navbar}>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Link to="/copyright" className={styles.Copyright}>
          COPYRIGHT
        </Link>
      </nav>
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
