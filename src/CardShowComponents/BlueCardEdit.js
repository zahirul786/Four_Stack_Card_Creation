import { useState } from 'react';
function BlueCardEdit({ onSubmit, card }) {
    const [newTitles, setNewTitles] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(card.id, newTitles);
        setNewTitles('');
    };
    return (
        <form onSubmit={handleSubmit} className="edit-blueCard">
            <label>Add</label>
            <input placeholder="Save" className="edit-primaryBlue" value={newTitles} onChange={c => setNewTitles(c.target.value)} required />
        </form>
    );
}
export default BlueCardEdit;