import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AddComponennt from "../components/AddComponent";

type Props = {};

const Edit = ({}: Props) => {
  let location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector(({ auth }) => auth) || {};
  const { title, description, id } = location.state || {};
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <AddComponennt
        edit={true}
        title={title}
        description={description}
        id={id}
      />
    </div>
  );
};

export default Edit;
