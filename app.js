const { useState, useEffect } = React;

// 4. Create a useDocumentTitle Hook which allows users to set the title of the document.
const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

const App = () => {
    // 5. Create a state variable name it title and set to document title using useDocumentTitle hook which you just created.
    const [title, setTitle] = useState('React App');

    useDocumentTitle(title);

    return (
        <div>
            <h1>Set Document Title</h1>
            {/* 6. Use input to set the title state variable which in turn sets the title */}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter new title"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
