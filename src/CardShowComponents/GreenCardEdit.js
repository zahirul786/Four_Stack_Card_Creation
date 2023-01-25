import { useState } from 'react';
function GreenCardEdit({ onSubmit, card }) {
    const [newTitles, setNewTitles] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(card.id, newTitles);
        setNewTitles('');
    };
    return (
        <form onSubmit={handleSubmit} className="edit-greenCard">
            <label>Add</label>
            <input placeholder="Save" className="edit-primaryGreen" value={newTitles} onChange={c => setNewTitles(c.target.value)} required />
        </form>
    );
}
export default GreenCardEdit;