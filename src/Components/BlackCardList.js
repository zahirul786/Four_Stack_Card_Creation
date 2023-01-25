import BlackCardShow from '../CardShowComponents/BlackCardShow';
function BlackCardList({ blackCards, onDeleteBlack, editBlack }) {
    const renderedCards = blackCards.map((card) => {
        return <BlackCardShow editBlack={editBlack} onDeleteBlack={onDeleteBlack} key={card.id} card={card} />
    })
    return (
        <div>
            {renderedCards}
        </div>
    );
}
export default BlackCardList;