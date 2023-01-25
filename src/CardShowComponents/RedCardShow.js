import editIconBlack from './editIconBlack.png';
import { useState } from 'react';
import RedCardEdit from './RedCardEdit';
import './CardShow.css';
function RedCardShow({ card, onDeleteRed, editRed }) {
    const [editRedCards, setEditRedCards] = useState(false);
    const handleDelete = () => {
        onDeleteRed(card.id);
    };
    const handleEditRedCards = () => {
        setEditRedCards(!editRedCards);
    };
    const handleSubmit = (id, title) => {
        editRed(id, title);
        setEditRedCards(false);
    }
    let content = card.title;
    if (editRedCards) {
        content = < RedCardEdit onSubmit={handleSubmit} card={card} />
    }
    return (
        <div className="redCard-show">
            <div className="actions">
                <button onClick={handleEditRedCards} className="redEdit"><img alt="Edit" src={editIconBlack} className="editIcon" /></button>
                <button onClick={handleDelete} className="redDelete">X</button>
            </div>
            <div className="Content">{content}</div>
        </div>
    );
}
export default RedCardShow;