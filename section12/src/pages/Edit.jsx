import { useParams } from "react-router-dom"

const Edit = () =>{
    const param = useParams();

    return(<div>{param.id}페이지입니다</div>)
    
}

export default Edit;