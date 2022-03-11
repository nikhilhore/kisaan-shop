const headerStyle = {
    text: {
        color: "yellow",
        fontWeight: "bold"
    },
    background: {
        backgroundColor: "green",
        position: "sticky",
        top: "0",
        zIndex: "10"
    }
}

function Header() {
    return <>
        <div className="container-fluid" style={headerStyle.background}>
            <h1 style={headerStyle.text}>Kisaan Shop</h1>
        </div>
    </>
}

export default Header;