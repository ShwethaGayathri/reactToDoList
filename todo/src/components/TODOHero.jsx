function TODOHero({todos_completed, tot_todos}){
return(
    <section>
        <div>
            <p>Task Done</p>
            <p>Keep It Up!</p>
        </div>
        <div>
            {todos_completed} / {tot_todos}
        </div>
    </section>
);
}

export default TODOHero;