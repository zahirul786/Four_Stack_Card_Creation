import BlueCardShow from '../CardShowComponents/BlueCardShow';
function BlueCardList({ blueCards, onDeleteBlue, editBlue }) {
    const renderedCards = blueCards.map((card) => {
        return <BlueCardShow editBlue={editBlue} onDeleteBlue={onDeleteBlue} key={card.id} card={card} />
    });
    return (
        <div>
            {renderedCards}
        </div>
    );
}
export default BlueCardList;