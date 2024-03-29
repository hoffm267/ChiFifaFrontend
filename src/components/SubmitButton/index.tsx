import React from "react"
interface IProps {
    sendGame: () => void;
}
const SubmitButton = (props: IProps) => {
    const {sendGame} = props;
    
    return (
        <div onClick={sendGame} className="h-1/2 w-full lg:h-1/6 lg:w-1/2 flex items-center justify-center bg-dollarBill rounded-2xl font-mono hover:bg-oliveDrab border-opacity-10 cursor-pointer">
            <p className="text-snow text-4xl lg:text-7xl text-center select-none">SUBMIT</p>
        </div>
    )
}

export default SubmitButton;