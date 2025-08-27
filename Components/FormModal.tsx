interface FormModalProps {
  isVisible: boolean;
  errorMessage: any;
}
export default function FormModal({ isVisible, errorMessage }: FormModalProps){
    if(isVisible){
    return(
        <div className="form-modal position-absolute w-100 h-100 d-flex justify-content-center align-items-center" style={{top: "78px"}}>
            <div className="bg-gradient-to-r to-gray-400 from-gray-50 w-50 rounded-2xl shadow-2xl text-center">
                <h2 className= {`p-2 ${errorMessage ? "text-danger" : "blue-text"}`}>
                    {errorMessage != null ? errorMessage : 'Form has been submitted successfuly' }
                </h2>
            </div>
        </div>
    )
}else{
    return(<></>)
}
}