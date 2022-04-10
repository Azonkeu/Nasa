import React, { useState } from 'react';
import { useQuery, gql } from "@apollo/client";

const HomePage = ({search}) => {
  const [pages, setPages] = useState(1);

  const nexPage = () => {
    if(pages < 10) {
      // increment the page count only if the page number is less than 9
      setPages(pages + 1);
    }else {
      return;
    }
  };

  const previousPage = () => {
    // decrement the page count only if the page number is greater than 1
    if(pages > 1) {
      setPages(pages - 1);
    } else {
      return;
    }
  };

  const GET_DATA = gql`
    query GetImages($input:String!) {
      getImages(input: $input) {
        collection {
          items {
            href,
            data {
              title,
              description
            }
          }
        }
      }
    } 
  `;

  const { data, loading, error } = useQuery(GET_DATA, { variables: { "input": search }});
  
  return (
    <div className="home">
      <div className="button">
        <div className="block">
        <button type="button" onClick={previousPage} className="btn">&#11160; Prev</button>
          <button type="button" onClick={nexPage} className="btn">Next &#10146;</button>
        </div>
        <p>Page: {pages}</p>
      </div>
      <div className="homex">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <p>It looks like you haven't searched for images yet</p>
        ) : pages === 1 ? (
          <div className="grid list">
            <div>
              {data.getImages.collection.items.slice(0, 11).map((n, index) => <div key={index}  className="element">
                <h3>{n.href}</h3>
                <div>
                  {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                </div>
              </div>)}
            </div>
          </div>
        ) : pages === 2 ? (
          <div className="grid">
            <div>
              {data.getImages.collection.items.slice(11, 21).map((n, index) => <div key={index}>
                <h3>{n.href}</h3>
                <div>
                  {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                </div>
              </div>)}
            </div>
          </div>
        ) : pages === 3 ? (
          <div className="grid">
            <div>
              {data.getImages.collection.items.slice(21, 31).map((n, index) => <div key={index}>
                <h3>{n.href}</h3>
                <div>
                  {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                </div>
              </div>)}
          </div>
          </div>
          ) : pages === 4 ? (
            <div className="grid">
              <div>
                {data.getImages.collection.items.slice(31, 41).map((n, index) => <div key={index}>
                  <h3>{n.href}</h3>
                  <div>
                    {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                  </div>
                </div>)}
              </div>
            </div>
          ) : pages === 5 ? (
            <div className="grid">
              <div>
                {data.getImages.collection.items.slice(41, 51).map((n, index) => <div key={index}>
                  <h3>{n.href}</h3>
                  <div>
                    {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                  </div>
                </div>)}
              </div>
            </div>
          ) : pages === 6 ? (
            <div className="grid">
              <div>
                {data.getImages.collection.items.slice(51, 61).map((n, index) => <div key={index}>
                  <h3>{n.href}</h3>
                  <div>
                    {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                  </div>
                </div>)}
              </div>
            </div>
          ) : pages === 7 ? (
            <div className="grid">
              <div>
                {data.getImages.collection.items.slice(61, 71).map((n, index) => <div key={index}>
                  <h3>{n.href}</h3>
                  <div>
                    {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                  </div>
                </div>)}
              </div>
            </div>
          ) : pages === 8 ? (
            <div className="grid">
              <div>
                {data.getImages.collection.items.slice(71, 81).map((n, index) => <div key={index}>
                  <h3>{n.href}</h3>
                  <div>
                    {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                  </div>
                </div>)}
              </div>
            </div>
          ) : pages === 9 ? (
            <div className="grid">
              <div>
                {data.getImages.collection.items.slice(81, 91).map((n, index) => <div key={index}>
                  <h3>{n.href}</h3>
                  <div>
                    {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                  </div>
                </div>)}
              </div>
            </div>
          ) : (
            <div className="grid">
              <div>
                {data.getImages.collection.items.slice(91).map((n, index) => <div key={index}>
                  <h3>{n.href}</h3>
                  <div>
                    {n.data.map((n, index) => <div key={index}><span>{n.title}</span><h4>{n.description}</h4></div>)}
                  </div>
                </div>)}
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default HomePage;
