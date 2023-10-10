// eslint-disable-next-line react/prop-types
const Post = ({ title, body }) => {
  return (
    <div className="text-center p-4 bh-white border border-[#6066A9]-400/30 w-[250px] bg-[#050814] rounded">
      <h4 className="font-text-2xl mb-2 font-bold">{title}</h4>
      <h4>{body}</h4>
    </div>
  );
};

export default Post;
