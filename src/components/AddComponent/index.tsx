import { useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../../helpers";
import { setPost } from "../../store/postAction";
import toast from "react-hot-toast";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const validationSchema = {
  title: {
    required: true,
    // email pattern max length of 30 characters
    pattern: /^(.|\s)*[a-zA-Z]+(.|\s)*$/,
    errorMessage: "Please enter words",
  },
  description: {
    required: true,
    /* password pattern should be between 8-16 characters,
    contain lower case letters,
    at least an uppercase letter, a Special Character and at least one number
    */
    pattern: /^(.|\s)*[a-zA-Z]+(.|\s)*$/,
    errorMessage: "Please enter description",
  },
};

type Props = { edit?: boolean; title: string; description: string; id: string };

const AddComponennt = ({ edit, title, description, id }: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formValues, handleChange, errors, handleBlur }: any = useForm(
    {
      title: title ? title : "",
      description: description ? description : "",
    },
    validationSchema
  );
  const handleAddItem = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    let data = {
      title: formValues.title,
      desc: formValues.description,
    };
    data = id ? { ...data, id } : data;
    try {
      const result = await axiosInstance({
        url: `${import.meta.env.VITE_APP_BASE_URL}/post/${
          edit ? "edit" : "create"
        }`,
        method: `${edit ? "PATCH" : "POST"}`,
        data,
      });

      if (result?.data?.status == 201) {
        toast.success(
          edit ? "Post edited succesful" : "Post created succesful"
        );
        dispatch(setPost(result?.data?.data?.posts));
        navigate("/");
      }
    } catch (err) {
      toast.error(err?.response?.data?.error || err?.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div
      // className="m-2"
      onSubmit={handleAddItem}
    >
      <div
        className={`my-10 w-full flex ${
          edit ? "flex-col mx-auto max-w-[400px]" : "justify-center "
        } gap-4`}
      >
        <div className="max-w-[400px] w-full">
          <label htmlFor="">Title</label>
          <input
            name="title"
            value={formValues?.title}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`relative bg-white rounded-xl border w-full  h-[55px] flex  opacity-60 ${
              errors?.title ? "border-required-red" : "border-dark-grey-150"
            }  p-4 `}
          />{" "}
          {errors?.title && (
            <span className="text-required-red text-sm leading-4 mt-2 font-proxima items-end block">
              {errors?.title}
            </span>
          )}
        </div>
        <div className="max-w-[400px] w-full ">
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            className={`relative bg-white rounded-xl border w-full h-[155px] flex  opacity-60 ${
              errors?.description
                ? "border-required-red"
                : "border-dark-grey-150"
            }  p-4`}
            value={formValues?.description}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />{" "}
          {errors?.description && (
            <span className="text-required-red text-sm leading-4 mt-2 font-proxima items-end block">
              {errors?.description}
            </span>
          )}
        </div>
        <button
          onClick={handleAddItem}
          disabled={loading}
          className={`w-full ${
            edit ? "" : "max-w-[100px]"
          } h-[52px] relative rounded-2xl shadow-form-btn flex items-center justify-center bg-[#577c9e] ${
            loading ? "opacity-70" : ""
          }`}
        >
          <span className="font-proxima text-center text-white font-semibold leading-snug">
            {loading ? " Loading..." : edit ? "Save" : "Add"}
          </span>
        </button>
      </div>
    </div>
  );
};
export default AddComponennt;
