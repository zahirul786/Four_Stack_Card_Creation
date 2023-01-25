import './CardShow.css';
import { useState } from 'react';
function RedCardEdit({ onSubmit, card }) {
    const [newTitles, setNewTitles] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(card.id, newTitles);
        setNewTitles('');
    };
    return (
        <form onSubmit={handleSubmit} className="edit-redCard">
            <label>Add</label>
            <input placeholder="Save" value={newTitles} className="edit-primaryRed" onChange={c => setNewTitles(c.target.value)} required />
        </form>
    );
}
export default RedCardEdit;