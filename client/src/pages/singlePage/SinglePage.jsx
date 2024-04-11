import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";
import pinImage from "../../../public/assets/pin.png";
import Map from "../../components/map/Map";
import chatImage from "../../../public/assets/chat.png";
import saveImage from "../../../public/assets/save.png";
import image from "../../../public/assets/utility.png";
import petImage from "../../../public/assets/pet.png";
import feeImage from "../../../public/assets/fee.png";
import sizeImage from "../../../public/assets/size.png";
import bathroomImage from "../../../public/assets/bath.png";
import bedImage from "../../../public/assets/bed.png";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>

                <div className="address">
                  <img src={pinImage} alt="image" />
                  <span>{singlePostData.address}</span>
                </div>

                <div className="price">${singlePostData.price}</div>
              </div>

              <div className="user">
                <img src={userData.img} alt="images" />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={image} alt="image" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={petImage} alt="image" />
              <div className="featureText">
                <span>Pets</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={feeImage} alt="image" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Mush have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="size">
            <img src={sizeImage} alt="image" />
            <span>1000 sqft</span>
          </div>
          <div className="size">
            <img src={bedImage} alt="image" />
            <span>2 beds</span>
          </div>
          <div className="size">
            <img src={bathroomImage} alt="image" />
            <span>1 bathroom</span>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal"></div>
          <p className="title">Location</p>

          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>

          <div className="buttons">
            <button>
              <img src={chatImage} alt="image" />
              Send a Message
            </button>

            <button>
              <img src={saveImage} alt="image" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
