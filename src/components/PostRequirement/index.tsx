import React from "react";

export interface IPost {
    onClick?: () => void;
}

const PostRequirement: React.FC = (props: IPost) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full py-3 bg-blue-500 text-white rounded-lg"
    >
      + Post your Requirement
    </button>
  );
};

export default PostRequirement;