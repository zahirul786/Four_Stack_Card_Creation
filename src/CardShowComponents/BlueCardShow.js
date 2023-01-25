import editIconBlack from './editIconBlack.png';
import { useState } from 'react';
import BlueCardEdit from './BlueCardEdit';
import './CardShow.css';
function BlueCardShow({ card, onDeleteBlue, editBlue }) {
    const [editBlueCards, seteditBlueCards] = useState(false);
    const handleDelete = () => {
        onDeleteBlue(card.id);
    };
    const handleEditBlueCards = () => {
        seteditBlueCards(!editBlueCards);
    };
    const handleSubmit = (id, title) => {
        editBlue(id, title);
        seteditBlueCards(false);
    }
    let content = card.title
    if (editBlueCards) {
        content = < BlueCardEdit onSubmit={handleSubmit} card={card} />
    }
    return (
        <div className="blueCard-show">
            <div className="actions">
                <button onClick={handleEditBlueCards} className="blueEdit"><img alt="Edit" src={editIconBlack} className="editIcon" /></button>
                <button onClick={handleDelete} className="blueDelete">X</button>
            </div>
            <div className="Content">{content}</div>
        </div>
    );
}
export default BlueCardShow;