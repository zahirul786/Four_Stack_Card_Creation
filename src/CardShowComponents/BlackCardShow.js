import editIconBlack from './editIconBlack.png';
import { useState } from 'react';
import BlackCardEdit from './BlackCardEdit';
import './CardShow.css';
function BlackCardShow({ card, onDeleteBlack, editBlack }) {
    const [editBlackCards, seteditBlackCards] = useState(false);
    const handleDelete = () => {
        onDeleteBlack(card.id);
    };
    const handleEditBlackCards = () => {
        seteditBlackCards(!editBlackCards);
    };
    const handleSubmit = (id, title) => {
        editBlack(id, title);
        seteditBlackCards(false);
    }
    let content = card.title
    if (editBlackCards) {
        content = < BlackCardEdit onSubmit={handleSubmit} card={card} />
    }
    return (
        <div className="blackCard-show">
            <div className="actions">
                <button onClick={handleEditBlackCards} className="blackEdit"><img alt="Edit" src={editIconBlack} className="editIcon" /></button>
                <button onClick={handleDelete} className="blackDelete">X</button>
            </div>
            <div className="Content">{content}</div>
        </div>
    );
}
export default BlackCardShow;