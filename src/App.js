import './App.css';
import { useState } from 'react';
import CreateRedCard from './Components/CreateRedCard';
import CreateBlueCard from './Components/CreateBlueCard';
import CreateGreenCard from './Components/CreateGreenCard';
import CreateBlackCard from './Components/CreateBlackCard';
import RedCardList from './Components/RedCardList';
import BlueCardList from './Components/BlueCardList';
import GreenCardList from './Components/GreenCardList';
import BlackCardList from './Components/BlackCardList';


function App() {

    // This is for new Red Card Creation/Modification/Deletion
    const [redCards, setRedCards] = useState([]);
    const addNewRedCards = (newRedCard) => {
        const updatedRedCards = [...redCards,
        { id: Math.round(Math.random() * 1000), title: newRedCard }
        ];
        if (redCards.length < 8) {
            setRedCards(updatedRedCards);
        }
        else {
            setRedCards(redCards);
        }

    };
    //redCard Deletion
    const deleteRedCardById = (id) => {
        const updatedDeleteRedCards = redCards.filter((card) => {
            return card.id !== id;
        });
        setRedCards(updatedDeleteRedCards);
    };
    //redCard Modification
    const editRedCard = (id, newTitle) => {
        const editedRedCards = redCards.map((card) => {
            if (card.id === id) {
                return { ...card, title: newTitle };
            }
            else
                return card;
        });
        setRedCards(editedRedCards);
    };

    //this is for new Blue Card Creation/Modification/Deletion
    const [blueCards, setBlueCards] = useState([]);
    const addNewBlueCards = (newBlueCard) => {
        const updatedBlueCards = [...blueCards,
        { id: Math.round(Math.random() * 1000), title: newBlueCard }
        ];
        if (blueCards.length < 8) {
            setBlueCards(updatedBlueCards);
        }
        else {
            setBlueCards(blueCards);
        }

    };
    //blueCard Deletion
    const deleteBlueCardById = (id) => {
        const updatedDeleteBlueCards = blueCards.filter((card) => {
            return card.id !== id;
        });
        setBlueCards(updatedDeleteBlueCards);
    };

    //blue Card Modification
    const editBlueCard = (id, newTitleBlue) => {
        const editedBlueCards = blueCards.map((card) => {
            if (card.id === id) {
                return { ...card, title: newTitleBlue };
            }
            else
                return card;
        });
        setBlueCards(editedBlueCards);
    };

    // This is for new Green Card Creation/Modification/Deletion
    const [greenCards, setGreenCards] = useState([]);
    const addNewGreenCards = (newGreenCard) => {
        const updatedGreenCards = [...greenCards,
        { id: Math.round(Math.random() * 1000), title: newGreenCard }
        ];
        if (greenCards.length < 8) {
            setGreenCards(updatedGreenCards);
        }
        else {
            setGreenCards(greenCards);
        }

    };
    //greenCard Deletion
    const deleteGreenCardById = (id) => {
        const updatedDeleteGreenCards = greenCards.filter((card) => {
            return card.id !== id;
        });
        setGreenCards(updatedDeleteGreenCards);
    };

    // green Card Modification
    const editGreenCard = (id, newTitleGreen) => {
        const editedGreenCards = greenCards.map((card) => {
            if (card.id === id) {
                return { ...card, title: newTitleGreen };
            }
            else
                return card;
        });
        setGreenCards(editedGreenCards);
    };

    //This is for new Black Card Creation/Modification/Deletion
    const [blackCards, setBlackCards] = useState([]);
    const addNewBlackCards = (newBlackCard) => {
        const updatedBlackCards = [...blackCards,
        { id: Math.round(Math.random() * 1000), title: newBlackCard }
        ];
        if (blackCards.length < 8) {
            setBlackCards(updatedBlackCards);
        }
        else {
            setBlackCards(blackCards);
        }

    };
    //blackCard Deletion
    const deleteBlackCardById = (id) => {
        const updatedDeleteBlackCards = blackCards.filter((card) => {
            return card.id !== id;
        });
        setBlackCards(updatedDeleteBlackCards);
    };
    //black Card Modification
    const editBlackCard = (id, newTitleBlack) => {
        const editedBlackCards = blackCards.map((card) => {
            if (card.id === id) {
                return { ...card, title: newTitleBlack };
            }
            else
                return card;
        });
        setBlackCards(editedBlackCards);
    };

    //That is JSX of App component

    return (
        <div className="app">
            <div className="RedCard">
                <CreateRedCard onCreate={addNewRedCards} />
                <RedCardList editRed={editRedCard} onDeleteRed={deleteRedCardById} redCards={redCards} />
            </div>
            <div className="BlueCard">
                <CreateBlueCard onCreate={addNewBlueCards} />
                <BlueCardList editBlue={editBlueCard} onDeleteBlue={deleteBlueCardById} blueCards={blueCards} />
            </div>
            <div className="GreenCard">
                <CreateGreenCard onCreate={addNewGreenCards} />
                <GreenCardList editGreen={editGreenCard} onDeleteGreen={deleteGreenCardById} greenCards={greenCards} />
            </div>
            <div className="BlackCard">
                <CreateBlackCard onCreate={addNewBlackCards} />
                <BlackCardList editBlack={editBlackCard} onDeleteBlack={deleteBlackCardById} blackCards={blackCards} />
            </div>
        </div>
    );
}
export default App;