import React, { useState } from 'react';
import './styles.scss';
import Card from '../components/Card';
import congratulationsArray from '../constants';
import ModalWindow from '../components/ModalWindow';

const Main = () => {
  const [shownCongratulations, setShownCongratulations] = useState([]);
  const [currentCongratulation, setCurrentCongratulation] = useState();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	}

  const generateCongratulation = () => {
    const remainingCongratulations = congratulationsArray.filter(
      (congratulation) => !shownCongratulations.includes(congratulation.id)
    );

    if (remainingCongratulations.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingCongratulations.length);
      const randomCongratulation = remainingCongratulations[randomIndex];

      setShownCongratulations([...shownCongratulations, randomCongratulation.id]);
      setCurrentCongratulation(randomCongratulation);
    } else {
      setShownCongratulations([]);
      setCurrentCongratulation(congratulationsArray[Math.floor(Math.random() * congratulationsArray.length)]);
    }
  };

	const addToRemainingCongratulations = (formData) => {
		const newCongratulation = {
			...formData,
			id: congratulationsArray.length + 1
		};
		congratulationsArray.push(newCongratulation);
	}

	const handleModalClose = (formData) => {
    setIsModalOpen(false);
		if (!formData) return;
		setCurrentCongratulation(formData);
		addToRemainingCongratulations(formData);
  };

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__buttons">
          <button onClick={generateCongratulation} type="button" className="main__button">
            Generate Congratulation
          </button>
          <button onClick={showModal} type="button" className="main__button">
            Create New Congratulation
          </button>
        </div>
        {currentCongratulation && (
          <Card
            title={currentCongratulation.title}
            message={currentCongratulation.message}
            image={currentCongratulation.image}
          />
        )}
				{isModalOpen && <ModalWindow onClose={handleModalClose} />}
      </div>
    </main>
  );
};

export default Main;
