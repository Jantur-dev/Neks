import Image from "next/image";
import moment from "moment";
import React from 'react';
import { RichText } from "@graphcms/rich-text-react-renderer"

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <Image
          alt={post.title}
          src={post.featuredImage.url}
          className="object-top h-80 w-full roundeded-t-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              alt={post.author.name}
              height={30}
              width={30}
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-3 text-lg transition duration-500 cursor-pointer hover:text-purple-600">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format("DD MMMM, YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">
          {post.title}
        </h1>
        <RichText
        content={post.content.raw}
        ></RichText>
      </div>
    </div>
  );
};

export default PostDetail;
