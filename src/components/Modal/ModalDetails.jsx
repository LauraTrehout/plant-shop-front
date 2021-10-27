import { Zoom } from "react-awesome-reveal";
import Modal from "react-modal";
import PlantList from "../PlantList/PlantList";

import "./ModalDetails.css";

const ModalDetails = ({ closeModal, plant }) => {
  return (
    <Modal className="modal" isOpen={true}>
      <Zoom>
        <button className="close-modal" onClick={closeModal}>
          {" "}
          X{" "}
        </button>
        <div  className="plant-details">
          <img src={plant.image} alt={plant.name} className="modal-image" />
          <div className="plant-care">
            <h2>{plant.name}</h2>
            <p>Entretien</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis corrupti ab nam, optio numquam reiciendis, voluptatum
              soluta pariatur necessitatibus vel odio culpa quidem fugiat ut id
              atque quaerat maxime recusandae mollitia! Unde repudiandae ea,
              soluta veniam culpa inventore tempora quaerat, aut est repellendus
              architecto molestias blanditiis cumque alias? Nobis dolorum
              adipisci non porro officia, ea unde numquam aspernatur magni
              voluptatem commodi omnis eius quis eligendi voluptas sapiente
              temporibus optio repellat quae sequi! Sapiente laudantium quasi,
              commodi cum sed temporibus esse impedit odio a quod error nisi
              aperiam beatae nulla harum eaque perferendis obcaecati fuga? In,
              nisi. Mollitia reiciendis tempora excepturi!
            </p>
          </div>
        </div>
      </Zoom>
    </Modal>
  );
};

export default ModalDetails;
