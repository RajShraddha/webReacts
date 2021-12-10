const { useParams } = require("react-router");

const ParamHandle = () => {
  const { id } = useParams();
  return <h1> Id is ={id}</h1>;
};

export default ParamHandle;
