import { features } from "../constants";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => (
  <div className="col-md-4"> {/* Bootstrap column for each card */}
    <div
      className="card mb-4" // Bootstrap card class with margin-bottom for spacing
      style={{
        backgroundColor: "#f0f0f0",
        height: "230px",
        padding: "20px",
      }}
    >
      <div className="card-body d-flex flex-column justify-content-between">
        {/* Card Content */}
        <div className="d-flex align-items-center mb-2">
          {/* Uncomment if you want to show the icon */}
          {/* <img src={icon} alt={title} className="icon-style" style={{ marginRight: '10px' }} /> */}
          <h5 className="card-title font-weight-bold">{title}</h5>
        </div>
        <p className="card-text">{content}</p>
      </div>
    </div>
  </div>
);

const Business = () => (
  <div className="container mt-5"> {/* Bootstrap container for centering */}
    <section id="features">
      <div className="text-left mb-4">
        <h1 className="display-4">The MHS Difference</h1> {/* Bootstrap heading */}
      </div>
      <div className="row"> {/* Bootstrap row to hold the columns */}
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  </div>
);

export default Business;
