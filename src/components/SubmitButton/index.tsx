import React from "react"
interface IProps {
    sendGame: () => void;
}
const SubmitButton = (props: IProps) => {
    const {sendGame} = props;
    
    return (
        <div onClick={sendGame} className="h-1/6 w-1/2 bg-dollarBill rounded-2xl italic font-mono shadow-xl hover:bg-oliveDrab border-jet border-2 border-opacity-10 cursor-pointer">
            <p className="text-snow text-7xl text-center select-none">SUBMIT</p>
        </div>
    )
}

export default SubmitButton;