import ListItem from "./List-Items";

function ToDoLIst({ TodoItems }) {
    return (
        <div>
            {TodoItems.map((items) => (
                <ListItem task={items.task} date={items.date} />
            ))}
        </div>
    );
}

export default ToDoLIst
