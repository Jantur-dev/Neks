import moment from "moment"
import Link from "next/link"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import { getRecentPost, getSimilarPost } from "../services"
const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([])
  useEffect(() => {
    if(slug){
      getSimilarPost(categories, slug)
          .then((result) => setRelatedPost(result))
    }
    else {
      getRecentPost()
      .then((result) => setRelatedPost(result))
    }
  }, [slug])

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 m-8">
      <h3 className="text-xl border-b pb-4 mb-8 font-bold">
        {slug ? "Related Post" : "Recent Post"}
      </h3>
      {relatedPost.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-13 flex-none">
          <Image
          alt={post.title}
          width={45}
          height={45}
          className="allign-middle rounded-full"
          src={post.featuredImage.url}
          />
          </div>
          <div className="flex-grow ml-4 hp:w-14 ">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("DD MMMM, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md transition duration-500 cursor-pointer hover:text-purple-600" key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
      </div>
  )
}
export default PostWidget