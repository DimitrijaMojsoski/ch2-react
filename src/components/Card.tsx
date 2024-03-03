import Image1 from "./../images/1.png";
import Image2 from "./../images/2.png";
import Image3 from "./../images/3.png";
import Image4 from "./../images/4.png";
import Image5 from "./../images/5.png";
import Image6 from "./../images/6.png";
import Image7 from "./../images/7.png";
import Image8 from "./../images/8.png";
import Image9 from "./../images/9.png";
import Image10 from "./../images/10.png";
import Image11 from "./../images/11.png";
import Image12 from "./../images/12.png";
import Image13 from "./../images/13.png";
import Image14 from "./../images/14.png";
import Image15 from "./../images/15.png";
import Image16 from "./../images/16.png";
import Image17 from "./../images/17.png";
import Image18 from "./../images/18.png";
import Image19 from "./../images/19.png";
import Image20 from "./../images/20.png";
import "./card.css";

interface Bike {
  id: number;
  title: string;
  image: string;
  price: number;
  gender: string;
  brand: string;
}

export const Card = ({ card }: any) => {
  const getImageSrc = () => {
    switch (Number(card.image)) {
      case 1:
        return Image1;
      case 2:
        return Image2;
      case 3:
        return Image3;
      case 4:
        return Image4;
      case 5:
        return Image5;
      case 6:
        return Image6;
      case 7:
        return Image7;
      case 8:
        return Image8;
      case 9:
        return Image9;
      case 10:
        return Image10;
      case 11:
        return Image11;
      case 12:
        return Image12;
      case 13:
        return Image13;
      case 14:
        return Image14;
      case 15:
        return Image15;
      case 16:
        return Image16;
      case 17:
        return Image17;
      case 18:
        return Image18;
      case 19:
        return Image19;
      case 20:
        return Image20;
      default:
        return "";
    }
  };

  return (
    <div className="card-box">
      <div>
        <img width={300} height={200} src={getImageSrc()} alt="bike-img" />
      </div>

      <div style={{ backgroundColor: "orange" }}>
        <p style={{ font: "bold" }}>{card.name}</p>
        <p>{card.price}</p>
      </div>
    </div>
  );
};
