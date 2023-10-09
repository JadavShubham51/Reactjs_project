import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetch from "../../../hooks/useFetch";

const Search = ({ setshowsearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-model">
      <div className="form-field">
        <input
          type="text"
          onChange={onChange}
          value={query}
          autoFocus
          placeholder="seach for Products"
        />
        <MdClose onClick={() => setshowsearch(false)} />
      </div>
      <div className="search-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div key={item.id} className="search-result-item" onClick={()=>{
              navigate("/product/" + item.id)
              setshowsearch(false)
            }}>
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.attributes.img.data[0].attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
