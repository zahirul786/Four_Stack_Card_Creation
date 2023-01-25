import RedCardShow from '../CardShowComponents/RedCardShow';
function RedCardList({ redCards, onDeleteRed, editRed }) {
    const renderedCards = redCards.map((card) => {
        return <RedCardShow editRed={editRed} onDeleteRed={onDeleteRed} key={card.id} card={card} />
    });
    return (
        <div>
            {renderedCards}
        </div>
    );
}
export default RedCardList;