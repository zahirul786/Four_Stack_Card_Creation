import GreenCardShow from '../CardShowComponents/GreenCardShow';
function GreenCardList({ greenCards, onDeleteGreen, editGreen }) {
    const renderedCards = greenCards.map((card) => {
        return <GreenCardShow editGreen={editGreen} onDeleteGreen={onDeleteGreen} key={card.id} card={card} />
    })
    return (
        <div>
            {renderedCards}
        </div>
    );
}
export default GreenCardList;