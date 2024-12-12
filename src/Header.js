export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>
          <span className="m">M</span>usic <span className="g">G</span>enre{" "}
          <span className="c">C</span>lassifier
        </h1>
        <p>Instantly identify the genre of any song</p>
      </div>

      <div className="what-it-does">
        <div className="one">
          <h2>Accurate Genre Identification</h2>
          <p>
            Our AI-powered system analyzes audio features to accurately classify
            songs into various genres.
          </p>
        </div>

        <div className="two">
          <h2>Extensive Genre Database</h2>
          <p>
            Our system recognizes a wide range of genres, from classic rock to
            modern EDM.
          </p>
        </div>
      </div>ś

      <UploadFile />
    </div>
  );
}

function UploadFile() {
  return (
    <div className="uploadFile">
      <p>Upload any music here</p>
      <div className="upload">
        <label htmlFor="upload">Select File</label>
        <input type="file" id="upload" />
      </div>
    </div>
  );
}
