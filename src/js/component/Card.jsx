import React from "react";

const Card = () => {
  return (
    <div className="row mt-2 g-4">
      <div className="col-3">
        <div className="card">
          <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="card-footer">
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="https://picsum.photos/id/238/500/325" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="card-footer">
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="https://picsum.photos/id/239/500/325" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="card-footer">
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card text-center">
          <img src="https://picsum.photos/id/240/500/325" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="card-footer">
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
