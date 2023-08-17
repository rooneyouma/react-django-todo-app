import Button from "./Button"


const Header = ({onNew, showNew}) => {
    return (
        <>
            <div className="header">
                <h2 className="text-header">My ToDo App</h2>      
            </div>
            <Button color={showNew ? 'maroon' : 'teal'} 
            text={showNew ? 'Close' : 'New ToDo'} onClick={onNew}/>
        </>
    )
}

export default Header