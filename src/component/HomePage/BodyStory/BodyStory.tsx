import React from "react";

const BodyStory = (props: {
  title: string;
  content: string;
  imageSrc: string;
  imagePosition: "left" | "right";
}) => {
  const { title, content, imageSrc, imagePosition } = props;
  const isImageLeft = imagePosition === "left";

  return (
    <div className="py-5 px-3" style={{ backgroundColor: "#111", color: "#fff" }}>
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {isImageLeft && (
          <div style={{ width: "300px" }}>
            <img
              src={imageSrc}
              alt={title}
              className="img-fluid rounded shadow"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
        {!isImageLeft && <div style={{ width: "300px" }} className="d-none d-md-block" />}

        <div className="w-50 px-md-5">
          <h4 className="fw-bold text-uppercase">{title}</h4>
          <p className="mt-3 mb-0" dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {isImageLeft && <div style={{ width: "300px" }} className="d-none d-md-block" />}
        {!isImageLeft && (
          <div style={{ width: "300px" }}>
            <img
              src={imageSrc}
              alt={title}
              className="img-fluid rounded shadow"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyStory;