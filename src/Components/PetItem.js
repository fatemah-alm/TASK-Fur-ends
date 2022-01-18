import { useState } from "react";

export default function PetItem(props) {
  const pet = props.pet;
  const [img, setImg] = useState(pet.image);

  function change() {
    setImg(pet.image2);
  }

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={img} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" class="btn btn-info" onClick={change}>
            Pet
          </button>
        </div>
      </div>
    </div>
  );
}
