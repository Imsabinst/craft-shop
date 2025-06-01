import "./descriptionBox.css";

const DescriptionBox = ({ description }) => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>{description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          corporis sit similique nam? Magnam rem dolorem quibusdam vero et,
          exercitationem itaque officiis doloribus, necessitatibus est quis
          laboriosam explicabo labore numquam?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
