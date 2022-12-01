import moment from "moment"
import Link from "next/link"
import Image from "next/image"
const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-0 lg:p-5 pb-8 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
         <Image
         src={post.featuredImage.url}
         alt={post.title}
         className="object-top absolute h-80 w-full shadow-lg rounded-t-lg lg:rounded-lg"
         height={500}
         width={500}
         />
      </div>
      <h1 className="transition duration-500 text-center mb-8 cursor-pointer hover:text-purple-600 tex-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
          alt={post.author.name}
          height={30}
          width={30}
          className="align-middle rounded-full"
          src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 ml-3 text-lg transition duration-500 cursor-pointer hover:text-purple-600">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{moment(post.createdAt).format('DD MMMM, YYYY')}</span>
        </div>
      </div>
      <p className="text-center font-semibold px-4 lg:px-14 mb-8">
        {post.excerpt}  
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-2 inline-block bg-slate-600 text-white rounded-full px-5 py-3 cursor-pointer">Lanjut Membaca</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard