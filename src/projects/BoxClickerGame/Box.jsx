import "../all.css"

export default function Box({isActive, clickFunc}){

    return (
        <div onClick={clickFunc} className="Box" style={{backgroundColor: isActive ? "red" : "blue"}}>
            Boy
        </div>
    )
};