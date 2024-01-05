import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../helpers";
import DivImage from "../components/DivImage";
import { setPost } from "../store/postAction";
import toast from "react-hot-toast";
import Card from "../components/Card";
import AddComponennt from "../components/AddComponent";

const HomePage = () => {
  const { posts } = useSelector(({ posts }) => posts);
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => auth) || {};
  useEffect(() => {
    makePostCalls();
  }, []);
  const makePostCalls = async () => {
    const result = await axiosInstance({
      url: `${import.meta.env.VITE_APP_BASE_URL}/post`,
      method: "GET",
    });
    if (result?.data?.status == 200) {
      dispatch(setPost(result?.data?.data?.posts));
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const result = await axiosInstance({
        url: `${import.meta.env.VITE_APP_BASE_URL}/post/${id}`,
        method: "DELETE",
      });
      if (result?.data?.status == 200) {
        dispatch(setPost(result?.data?.data?.posts));
        toast.success("Post deleted succesfully");
      }
    } catch (err) {
      toast.error(err?.response?.data?.error || err?.message);
    }
  };

  return (
    <>
      {user ? <AddComponennt /> : ""}
      <DivImage
        // src="https://media.istockphoto.com/id/991987172/photo/silhouette-of-hands-of-lovers.jpg?s=2048x2048&w=is&k=20&c=NhlgxxUN9ehCA_R-3Xe7hSdp6dhxbQmqKd1ZAQYMBIw="
        src="https://homeapppublicassets.s3.us-east-2.amazonaws.com/3d-rendering-large-modern-contemporary-house-wood-concrete-early-evening+1.png"
        className="flex w-full min-h-screen min-w-screen justify-center bg-cover"
      >
        <div className=" h-screen w-screen max-w-screen sm:h-fit sm:w-full sm:max-w-[489px]">
          {posts?.map(({ title, id, owner, desc }: any) => (
            <Card
              key={id}
              id={id}
              owner={`${owner.firstName} ${owner.lastName}`}
              description={desc}
              title={title}
              accessPerm={owner?.id === user?.id}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </DivImage>
    </>
  );
};

export default HomePage;
