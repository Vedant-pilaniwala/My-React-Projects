import ListItem from "./List-Items";

function ToDoLIst({ TodoItems , onDeleteClick }) {
    return (
        <div>
            {TodoItems.map((items) => (
                <ListItem task={items.task} date={items.date} onDeleteClick={onDeleteClick} />
            ))}
        </div>
    );
}

export default ToDoLIst
