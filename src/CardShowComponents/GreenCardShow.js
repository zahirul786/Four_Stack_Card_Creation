import editIconBlack from './editIconBlack.png';
import { useState } from 'react';
import GreenCardEdit from './GreenCardEdit';
import './CardShow.css';
function GreenCardShow({ card, onDeleteGreen, editGreen }) {
    const [editGreenCards, setEditGreenCards] = useState(false);
    const handleDelete = () => {
        onDeleteGreen(card.id);
    };
    const handleEditGreenCards = () => {
        setEditGreenCards(!editGreenCards);
    };
    const handleSubmit = (id, title) => {
        editGreen(id, title);
        setEditGreenCards(false);
    }
    let content = card.title;
    if (editGreenCards) {
        content = < GreenCardEdit onSubmit={handleSubmit} card={card} />
    }
    return (
        <div className="greenCard-show">
            <div className="actions">
                <button onClick={handleEditGreenCards} className="greenEdit"><img alt="Edit" src={editIconBlack} className="editIcon" /></button>
                <button onClick={handleDelete} className="greenDelete">X</button>
            </div>
            <div className="Content">{content}</div>
        </div>
    );
}
export default GreenCardShow;