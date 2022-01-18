import PetItem from "./PetItem";
import { useState } from "react";
import SearchBar from "./Searchbar";
import Selector from "./Selector";

export default function PetsList(props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const pets = props.pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLowerCase()) &&
        pet.type.toLowerCase().includes(type.toLowerCase())
    )
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  return (
    <section id="doctors" class="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar updateQuery={setQuery} />
              <br />
              Type:
              <Selector setSelector={setType} />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{pets}</div>
      </div>
    </section>
  );
}
