import { useState } from 'react';
function BlackCardEdit({ onSubmit, card }) {
    const [newTitles, setNewTitles] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(card.id, newTitles);
        setNewTitles('');
    };
    return (
        <form onSubmit={handleSubmit} className="edit-blackCard">
            <label>Add</label>
            <input placeholder="Save" className="edit-primaryBlack" value={newTitles} onChange={c => setNewTitles(c.target.value)} required />
        </form>
    );
}
export default BlackCardEdit;