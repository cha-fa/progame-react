import React from "react";

const Stores = ({ stores }) => (
  <div data-aos="fade-up" className="row">
    {stores && (
      <div className="col">
        <h2>BUY</h2>
        {stores.map((store) => (
          <div id="stores" key={store.store.id}>
            <a
              target="_blank"
              rel="noreferrer"
              className="no-style"
              href={store.url}
            >
              <p className="hover-red">{store.store.name}</p>
            </a>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Stores;
